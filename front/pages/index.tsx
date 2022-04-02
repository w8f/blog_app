import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Blog, CategoryProps } from "../interfaces/index";
import { client } from "../libs/client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import Category from "../components/Category/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

type Props = { blogs: Blog[]; categories: CategoryProps[] };

const Home: NextPage<Props> = ({ blogs, categories }: Props) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Hayakawa&apos;s Tech Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 overflow-x-hidden bg-stone-100 block justify-center items-center font-Body">
        <Header />
        <div className="min-h-screen lg:flex">
          <div className="xl:w-2/12" />
          <div className="pt-4 lg:flex lg:pt-20 xl:w-8/12">
            <section className="text-gray-600 sm:mt-20 pb-8 sm:p-8">
              <ul className="hidden sm:block">
                {categories.map((category: CategoryProps, index) => (
                  <Category key={index} {...category} />
                ))}
              </ul>
            </section>
            <section className="sm:p-4">
              <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon icon={faBlog} size={"3x"} />
                <h1 className="font-bold text-3xl text-blue-800 ml-2">Tech</h1>
              </div>
              <ul className="sm:grid sm:grid-cols-2">
                {blogs.map((blog: Blog, index) => (
                  <ArticleCard key={index} {...blog} />
                ))}
              </ul>
            </section>
          </div>
          <div className="xl:w-2/12" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  const category = await client.get({ endpoint: "category" });

  return {
    props: {
      blogs: blog.contents as Blog[],
      categories: category.contents as CategoryProps[],
    },
  };
};

export default Home;
