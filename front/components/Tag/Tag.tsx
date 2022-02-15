import Link from "next/link";
import { VFC } from "react";
import { TagProps } from "../../interfaces/index";

const Tag: VFC<TagProps> = ({ bgColor, name, id }) => {
  const className =
    "inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 " +
    bgColor;
  return (
    <Link href={`/category/${id}`} passHref>
      <a className={className}>#{name}</a>
    </Link>
  );
};

export default Tag;
