import Link from "next/link";
import Image from "next/image";
import { VFC } from "react";
import { CategoryProps } from "../../interfaces";

const Category: VFC<CategoryProps> = ({ id, name, image }: CategoryProps) => {
  return (
    <Link href={`/category/${id}`} passHref>
      <a className="flex items-center pb-1 pt-1 pl-4">
        <Image
          src={image ? image.url : "/noimage.jpeg"}
          alt="category image"
          width="50"
          height="50"
        />
        <p className="ml-4 font-serif">#{name}</p>
      </a>
    </Link>
  );
};

export default Category;
