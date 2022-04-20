import Link from "next/link";
import { VFC } from "react";
import { CategoryProps } from "../../interfaces";

export const Category: VFC<CategoryProps> = ({ id, name }: CategoryProps) => {
  return (
    <Link href={`/category/${id}`} passHref>
      <a className="flex items-center pb-1 pt-1 pl-4 hover:text-blue-800 font-semibold">
        <p className="ml-4 font-serif">#{name}</p>
      </a>
    </Link>
  );
};
