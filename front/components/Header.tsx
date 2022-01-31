import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white border-b-2 h-14 flex items-center">
      <Link href="/">
        <a className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-4 sm:ml-8 z-10">
          Hayakawa&apos;s Tech Blog
        </a>
      </Link>
      <a href="https://github.com/w8f/blog_app">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
};

export default Header;
