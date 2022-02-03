import { VFC } from "react";
import { TagProps } from "../../interfaces/index";

const Tag: VFC<TagProps> = (props) => {
  const className =
    "inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 " +
    props.bgColor;
  return <span className={className}>#{props.title}</span>;
};

export default Tag;
