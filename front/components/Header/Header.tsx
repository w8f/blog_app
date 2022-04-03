import { VFC, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import HeaderBtn from "../MenuBtn/MenuBtn";
import MenuBar from "../../components/MenuBar/MenuBar";
import { CategoryProps } from "../../interfaces";

type Props = {
  categories: CategoryProps[];
};

/**
 * Header Component
 * @param categories カテゴリリスト
 */
const Header: VFC<Props> = ({ categories }) => {
  const [openMenuBar, setOpenMenuBar] = useState(false);

  return (
    <div className="bg-white border-b-2 h-14 flex">
      <div className="lg:w-2/12" />
      <div className="w-full lg:w-6/12">
        <div className="flex items-center h-full">
          <HeaderBtn setOpenMenuBar={setOpenMenuBar} />
          <Link href="/">
            <a className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 sm:ml-8 z-10">
              Hayakawa&apos;s Tech Blog
            </a>
          </Link>
          <a href="https://github.com/w8f/blog_app">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="z-10 absolute w-full opacity-90">
          {openMenuBar && <MenuBar categories={categories} />}
        </div>
      </div>
      <div className="lg:w-2/12" />
    </div>
  );
};

export default Header;
