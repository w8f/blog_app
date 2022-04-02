import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { client } from "../../libs/client";
import "highlight.js/styles/vs2015.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { CategoryProps, Blog } from "../../interfaces/index";

type Props = { blogs: Blog[]; category: CategoryProps };

const CategoryId: NextPage<Props> = ({ blogs, category }: Props) => {
  return (
    <div className="box-border overflow-clip">
      <Head>
        <title>#{category.name}の記事</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-stone-100 mx-auto min-h-screen flex-1 h-full font-Body">
        <Header />
        <div className="mt-6 sm:mt-20 p-6 max-w-6xl container mx-auto">
          <div className="text-center pb-10">
            <Image
              src={category.image ? category.image.url : "/noimage.jpeg"}
              alt="category image"
              width="150"
              height="150"
            />
          </div>
          <h1 className="font-bold text-3xl text-center mb-10">
            {category.name} の記事一覧
          </h1>
          <ul className="sm:grid sm:grid-cols-2">
            {blogs.map((blog: Blog, index) => (
              <ArticleCard key={index} {...blog} />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "category" });
  const paths = data.contents.map(
    (content: CategoryProps) => `/category/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const blog = await client.get({
    endpoint: "blog",
    queries: {
      filters: `categories[contains]${id}`,
    },
  });
  const category = await client.get({
    endpoint: `category/${id}`,
  });

  return {
    props: {
      blogs: blog.contents as Blog[],
      category: category as CategoryProps,
    },
  };
};

export default CategoryId;
