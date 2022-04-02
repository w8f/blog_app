import { VFC } from "react";
import Link from "next/link";
import { Blog } from "../../interfaces/index";
import Tag from "../../components/Tag/Tag";

const ArticleCard: VFC<Blog> = ({ id, title, updatedAt, categories }: Blog) => {
  return (
    <article className="text-gray-800 m-3 max-w-md">
      <Link href={`/blog/${id}`} passHref>
        <a className="rounded-2xl overflow-hidden bg-white items-center m-4 flex h-full hover:shadow-xl hover:ease-in duration-300 hover:text-blue-800 border-2">
          <div className="w-full">
            <div className="mt-2 ml-4 mr-4">
              <p className="text-sm text-right m-2 text-gray-800">
                {updatedAt.match(/\d+-\d+-\d+/)}
              </p>
              <p className="font-semibold text-md m-3 overflow-ellipsis">
                {title}
              </p>
              <div className="mt-10 ml-2">
                {categories.map((category, idx) => (
                  <Tag key={idx} bgColor="bg-gray-200" {...category} />
                ))}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default ArticleCard;
