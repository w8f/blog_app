import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../libs/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

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
  image: CategoryImage;
};

type CategoryImage = {
  url: string;
  height: string;
  width: string;
};

type Props = { blogs: Blog[] };

const Home: NextPage<Props> = ({ blogs }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Hayakawa&apos;s Tech Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 overflow-x-hidden bg-gray-100 block items-center">
        <Header />
        <div className="mt-6 sm:mt-20 p-6 max-w-4xl container mx-auto">
          <h1 className="font-bold text-3xl sm:text-center mb-10">記事一覧</h1>
          <ul className="sm:flex sm:flex-wrap w-full sm:justify-between sm:items-start">
            {blogs.map((blog: Blog) => (
              <article className="text-center sm:w-1/2" key={blog.id}>
                <Link href={`/blog/${blog.id}`} passHref>
                  <a className="block sm:justify-center rounded-2xl overflow-hidden shadow-lg sm:flex bg-white m-4">
                    <div className="justify-center m-4 text-center min-w-max">
                      <Image
                        src={blog.category.image.url}
                        alt=""
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="mt-4 sm:w-1/2">
                      <div className="mt-2 mb-2 text-center">
                        <p className="font-semibold text-md overflow-ellipsis">
                          {blog.title}
                        </p>
                        <div className="flex justify-center items-center">
                          <span className="mr-1">
                            <FontAwesomeIcon icon={faArrowCircleUp} />
                          </span>
                          <p className="text-sm">
                            {blog.publishedAt &&
                              blog.updatedAt &&
                              blog.updatedAt.match(/\d+-\d+-\d+/) + "に更新"}
                            {blog.publishedAt &&
                              !blog.updatedAt &&
                              blog.publishedAt.match(/\d+-\d+-\d+/) + "に公開"}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 pt-4 pb-2 text-center">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{blog.category.name}
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </article>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blogs: data.contents as Blog[],
    },
  };
};

export default Home;
