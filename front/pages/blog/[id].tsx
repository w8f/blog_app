import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../libs/client";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

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

type Props = {
  blog: Blog;
  highlightedBody: string;
};

const BlogId: NextPage<Props> = ({ blog, highlightedBody }) => {
  return (
    <div className="bg-gray-200">
      <main className="sm:container sm:mx-auto mx-auto min-h-screen flex-1 overflow-x-hidden">
        <div className="text-center m-8">
          <h1 className="text-4xl font-bold m-4">{blog.title}</h1>
          {blog.publishedAt && blog.updatedAt && (
            <p>{blog.updatedAt.match(/\d+-\d+-\d+/) + "に更新"}</p>
          )}
          {blog.publishedAt && !blog.updatedAt && (
            <p>{blog.publishedAt.match(/\d+-\d+-\d+/) + "に公開"}</p>
          )}
          <p>{blog.category && `${blog.category.name}`}</p>
        </div>
        <div
          className="bg-white sm:p-12 md:p-16 lg:p-20 xl:p-24 shadow"
          dangerouslySetInnerHTML={{
            __html: `${highlightedBody}`,
          }}
        />
      </main>
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

  $("pre code").each((_, el) => {
    const result = hljs.highlightAuto($(el).text());
    $(el).html(result.value);
    $(el).addClass("hljs");
  });

  $("h1").each((_, el) => {
    $(el).addClass("text-4xl m-1");
  });

  $("h2").each((_, el) => {
    $(el).addClass(
      "text-3xl border-solid border-4 border-blue-300 bg-blue-200 m-2 "
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
    },
  };
};

export default BlogId;
