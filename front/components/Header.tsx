import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-blue-50 h-16 flex items-center fixed w-full">
      <Link href="/">
        <a className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-8 z-10">
          Hayakawa&apos;s blog
        </a>
      </Link>
    </div>
  );
};

export default Header;
