import { VFC } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import HeaderBtn from "../HeaderBtn/HeaderBtn";

const Header: VFC = () => {
  return (
    <div className="bg-white border-b-2 h-14 flex">
      <div className="lg:w-2/12" />
      <div className="lg:w-6/12 flex items-center">
        <HeaderBtn />
        <Link href="/">
          <a className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 sm:ml-8 z-10">
            Hayakawa&apos;s Tech Blog
          </a>
        </Link>
        <a href="https://github.com/w8f/blog_app">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="lg:w-2/12" />
    </div>
  );
};

export default Header;
