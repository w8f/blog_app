import { VFC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Blog } from "../../interfaces/index";
import Tag from "../../components/Tag/Tag";

const ArticleCard: VFC<Blog> = ({ id, title, updatedAt, categories }: Blog) => {
  return (
    <article className="text-center text-gray-800">
      <Link href={`/blog/${id}`} passHref>
        <a className="block rounded-2xl overflow-hidden shadow-lg bg-white items-center m-4 sm:justify-center xl:flex">
          <div className="justify-center mt-4 ml-2 mr-2 text-center min-w-max">
            <Image
              src={categories[0] ? categories[0].image.url : "/noimage.jpeg"}
              alt="category image"
              width="100"
              height="100"
            />
          </div>
          <div className="mt-4 xl:w-2/3">
            <div className="mt-2 mb-2 text-center">
              <p className="font-semibold text-md overflow-ellipsis">{title}</p>
              <div className="flex justify-center items-center">
                <span className="mr-1">
                  <FontAwesomeIcon icon={faArrowCircleUp} />
                </span>
                <p className="text-sm">
                  {updatedAt.match(/\d+-\d+-\d+/) + "に更新"}
                </p>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              {categories.map((category, idx) => (
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
