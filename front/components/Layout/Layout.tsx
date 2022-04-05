import { VFC } from "react";
import { CategoryProps } from "../../interfaces/index";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type Props = {
  categories: CategoryProps[];
  children: React.ReactNode;
};

/**
 * 共通レイアウト用コンポーネント
 */
const Layout: VFC<Props> = ({ categories, children }) => {
  return (
    <>
      <Header categories={categories} />
      <div className="min-h-screen lg:flex">
        <div className="lg:w-2/12" />
        <div className="pt-4 lg:flex lg:pt-20 lg:w-8/12">
          <section className="hidden lg:block text-gray-600 lg:mt-20 lg:pb-8 lg:p-8">
            <ul className="">
              {categories.map((category: CategoryProps, index) => (
                <Category key={index} {...category} />
              ))}
            </ul>
          </section>
          <section className="sm:p-4 w-full mb-8">{children}</section>
        </div>
        <div className="lg:w-2/12" />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
