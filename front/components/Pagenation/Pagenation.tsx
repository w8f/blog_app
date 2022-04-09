import Link from "next/link";
import { VFC } from "react";
import { perpage } from "../../constants";

type PagenationProps = {
  totalCount: number;
};

const Pagenation: VFC<PagenationProps> = ({ totalCount }) => {
  return (
    <>
      {[...Array(Math.ceil(totalCount / perpage))].map((_, idx) => {
        return (
          <Link key={idx} href={`/${idx + 1}`} passHref>
            <a>
              <button
                className="bg-white m-2 w-12 h-12 hover:shadow-xl hover:ease-in duration-300 hover:text-blue-800 border-2 rounded-md"
                key={idx + 1}
              >
                {idx + 1}
              </button>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default Pagenation;
