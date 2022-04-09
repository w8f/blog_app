import { VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { Blog } from "../../interfaces/index";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Pagenation from "../../components/Pagenation/Pagenation";

type PostsProps = {
  blogs: Blog[];
  totalCount: number;
};

const Posts: VFC<PostsProps> = ({ blogs, totalCount }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-6 md:mt-12 mb-10">
        <FontAwesomeIcon icon={faBlog} size={"3x"} />
        <h1 className="font-bold text-3xl text-blue-800 ml-2">Tech</h1>
      </div>
      <ul className="sm:grid sm:grid-cols-2">
        {blogs.map((blog: Blog, index) => (
          <ArticleCard key={index} {...blog} />
        ))}
      </ul>
      <div className="mt-10 text-center">
        <Pagenation totalCount={totalCount} />
      </div>
      <p className="text-center mt-6 text-lg">全:{totalCount}件</p>
    </>
  );
};

export default Posts;
