import { VFC } from "react";
import { CategoryProps } from "../../interfaces";
import { Category } from "../Category";
import { Header } from "../Header";
import { Footer } from "../Footer";

type Props = {
  categories: CategoryProps[];
  children: React.ReactNode;
};

/**
 * 共通レイアウト用コンポーネント
 */
export const Layout: VFC<Props> = ({ categories, children }) => {
  return (
    <>
      <div className="sticky top-0 flex flex-col z-50">
        <Header categories={categories} />
      </div>
      <div className="min-h-screen lg:flex">
        <div className="lg:w-2/12" />
        <div className="lg:flex lg:w-8/12">
          <section className="hidden lg:block text-gray-600 lg:pb-8 lg:p-8">
            <ul className="sticky top-1/4 flex flex-col">
              {categories.map((category: CategoryProps, index) => (
                <Category key={index} {...category} />
              ))}
            </ul>
          </section>
          <section className="sm:p-12 w-full">{children}</section>
        </div>
        <div className="lg:w-2/12" />
      </div>
      <Footer />
    </>
  );
};
