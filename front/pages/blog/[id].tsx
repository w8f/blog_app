import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { client } from "../../libs/client";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag/Tag";
import { Blog } from "../../interfaces/index";

type tableOfContent = {
  title: string;
  size: "h1" | "h2" | "h3";
};

type Props = {
  blog: Blog;
  highlightedBody: string;
  tableOfContents: tableOfContent[];
};

const BlogId: NextPage<Props> = ({
  blog,
  highlightedBody,
  tableOfContents,
}) => {
  return (
    <div className="box-border overflow-clip">
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-stone-100 mx-auto min-h-screen flex-1 h-full">
        <Header />
        <div className="mx-auto pb-8 font-Body">
          <div className="text-center mt-8 sm:mt-20 mb-8">
            <h1 className="text-3xl font-bold m-4">{blog.title}</h1>
            <div className="sm:flex justify-center items-center">
              <p className="text-sm sm:mr-2">
                <span className="mr-1">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                投稿日 : {blog.publishedAt.match(/\d+-\d+-\d+/)}
              </p>
              <p className="text-sm">
                <span className="mr-1">
                  <FontAwesomeIcon icon={faArrowCircleUp} />
                </span>
                更新日 : {blog.updatedAt.match(/\d+-\d+-\d+/)}
              </p>
            </div>
            <div className="mt-4">
              {blog.categories.map((category, idx) => (
                <Tag key={idx} bgColor="bg-white" {...category} />
              ))}
            </div>
          </div>
          <div className="sm:flex h-full justify-center ">
            <div className="lg:w-3/12" />
            <section
              className="bg-white block rounded-xl mr-2 ml-2 p-4 sm:pt-12 sm:pb-12 shadow sm:w-3/5"
              dangerouslySetInnerHTML={{
                __html: `${highlightedBody}`,
              }}
            ></section>
            <aside className="hidden sm:block sm:visible m-8 w-96 box-border">
              <div className="h-full">
                <div className="sticky top-10 flex flex-col">
                  <div className=" bg-white border-2 rounded-lg invisible sm:visible">
                    <p className="text-center font-bold p-4 bg-blue-100">
                      <span className="mr-1">
                        <FontAwesomeIcon icon={faBook} />
                      </span>
                      table of contents
                    </p>
                    {tableOfContents.map((content, i) => {
                      return (
                        <div key={i} className="p-2">
                          ・{content.title}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
            <div className="lg:w-3/12" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const data = await client.get({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(data.body);
  const tableOfContents: tableOfContent[] = [];

  $("pre code").each((_, el) => {
    const result = hljs.highlightAuto($(el).text());
    $(el).html(result.value);
    $(el).addClass("hljs m-2 mb-6");
  });

  $("h1").each((_, el) => {
    $(el).addClass("text-4xl m-1");
  });

  $("h2").each((_, el) => {
    // 目次用
    tableOfContents.push({ title: $(el).contents().text(), size: "h2" });

    $(el).addClass(
      "text-2xl sm:text-3xl border-solid border-b-4 border-gray-200 pl-2 ml-2 mr-2 mt-8 sm:mt-8 mb-8"
    );
  });

  $("h3").each((_, el) => {
    $(el).addClass("text-lg sm:text-xl mt-6 ml-3 mr-3 mb-3");
  });

  $("a").each((_, el) => {
    $(el).addClass("ml-4 mr-4 mb-4 text-blue-800 break-all");
  });

  $("p").each((_, el) => {
    $(el).addClass("ml-4 mr-4 mt-2 mb-4 text-gray-800");
  });

  $("ul").each((_, el) => {
    $(el).addClass("ml-12 mt-4 mb-2 pd-1 list-disc text-gray-800");
  });

  $("ol").each((_, el) => {
    $(el).addClass("ml-12 mt-4 mb-2 pd-1 list-decimal text-gray-800");
  });

  $("blockquote").each((_, el) => {
    $(el).addClass("border-l-4 mr-4 bg-gray-50 pl-8 text-gray-600");
  });

  $("br").each((_, el) => {
    $(el).addClass("mb-4 block");
  });

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
      tableOfContents,
    },
  };
};

export default BlogId;
