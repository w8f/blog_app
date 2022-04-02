import { VFC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Blog } from "../../interfaces/index";
import Tag from "../../components/Tag/Tag";

const ArticleCard: VFC<Blog> = ({ id, title, updatedAt, categories }: Blog) => {
  return (
    <article className="text-gray-800">
      <Link href={`/blog/${id}`} passHref>
        <a className="rounded-2xl overflow-hidden bg-white items-center m-4 flex">
          <div className="hidden justify-center mt-4 ml-4 mr-2 text-center min-w-max">
            {/* 画像の主張が強いので、一旦hiddenに */}
            <Image
              src={categories[0] ? categories[0].image.url : "/noimage.jpeg"}
              alt="category image"
              width="100"
              height="100"
            />
          </div>
          <div className="mt-4 w-full">
            <div className="mt-2 mb-2 text-center">
              <p className="font-semibold text-md overflow-ellipsis ml-4 mr-4">
                {title}
              </p>
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
