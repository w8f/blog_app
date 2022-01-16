import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Blog = {
  id: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  body: string;
  category: Category;
};

type Category = {
  name: string;
};

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
    <div className="bg-gray-200 box-border overflow-clip">
      <Header />
      <main className="sm:container mx-auto min-h-screen flex-1 h-full">
        <div className="text-center mt-8 sm:mt-20 mb-8">
          <h1 className="text-3xl font-bold m-4">{blog.title}</h1>
          <p className="text-sm">
            {blog.publishedAt &&
              blog.updatedAt &&
              blog.updatedAt.match(/\d+-\d+-\d+/) + "に更新"}
            {blog.publishedAt &&
              !blog.updatedAt &&
              blog.publishedAt.match(/\d+-\d+-\d+/) + "に公開"}
          </p>
          <span className="inline-block bg-white rounded-full mt-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {blog.category && `#${blog.category.name}`}
          </span>
        </div>
        <div className="sm:flex h-full justify-center">
          <section
            className="bg-white block rounded-xl p-4 sm:pt-12 sm:pb-12 shadow sm:w-3/5"
            dangerouslySetInnerHTML={{
              __html: `${highlightedBody}`,
            }}
          ></section>
          <aside className="hidden sm:block sm:visible m-8 w-96 box-border">
            <div className="h-full">
              <div className="sticky top-10 flex flex-col">
                <div className=" bg-white mr-8 rounded-lg invisible sm:visible m-8">
                  <p className="text-center font-bold p-4 bg-blue-50">
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
    $(el).addClass("hljs");
  });

  $("h1").each((_, el) => {
    $(el).addClass("text-4xl m-1");
  });

  $("h2").each((_, el) => {
    // 目次用
    tableOfContents.push({ title: $(el).contents().text(), size: "h2" });

    $(el).addClass(
      "text-3xl border-solid border-4 border-gray-300 bg-gray-200 m-2"
    );
  });

  $("h3").each((_, el) => {
    $(el).addClass("text-2xl m-3 underline");
  });

  $("a").each((_, el) => {
    $(el).addClass("ml-4 mr-4 mb-4 text-blue-800");
  });

  $("p").each((_, el) => {
    $(el).addClass("ml-4 mr-4 mb-4");
  });

  $("ul").each((_, el) => {
    $(el).addClass("ml-12 pd-1 list-disc");
  });

  $("ol").each((_, el) => {
    $(el).addClass("ml-12 pd-1 list-decimal");
  });

  $("blockquote").each((_, el) => {
    $(el).addClass("border-l-8 ml-4 mr-4 bg-gray-50");
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
