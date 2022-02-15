import { VFC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Blog } from "../../interfaces/index";
import Tag from "../../components/Tag/Tag";

const ArticleCard: VFC<Blog> = (blog) => {
  return (
    <article className="text-center sm:w-1/2" key={blog.id}>
      <Link href={`/blog/${blog.id}`} passHref>
        <a className="block sm:justify-center rounded-2xl overflow-hidden shadow-lg sm:flex bg-white items-center m-4">
          <div className="justify-center mt-4 ml-2 mr-2 text-center min-w-max">
            {blog.categories[0].image.url && (
              <Image
                src={blog.categories[0].image.url}
                alt=""
                width="100"
                height="100"
              />
            )}
            {/* 多分ないと思うけど・・ */}
            {blog.categories[0].image.url == "" && (
              <Image src="/noimage.jpeg" alt="" width="100" height="100" />
            )}
          </div>
          <div className="mt-4 sm:w-2/3">
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
              {blog.categories.map((category, idx) => (
                <Tag key={idx} bgColor="bg-gray-200" {...category} />
              ))}
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default ArticleCard;
