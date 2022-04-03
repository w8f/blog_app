import { VFC } from "react";
import Category from "../Category/Category";
import { CategoryProps } from "../../interfaces/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

type MenuBarProps = { categories: CategoryProps[] };

/**
 * Menu Bar Component \
 * Displayed when the menu button is pressed.
 *
 * @param categories カテゴリリスト
 */
const MenuBar: VFC<MenuBarProps> = ({ categories }) => {
  return (
    <div className="bg-white border-t-2 inline-block w-full">
      <div className="m-4 flex items-center">
        <FontAwesomeIcon icon={faHashtag} size="lg" />
        <h1 className="font-bold ml-2 text-3xl text-blue-800">category</h1>
      </div>
      <ul className="border-t-2">
        {categories.map((category: CategoryProps, index) => (
          <div key={index} className="hover:bg-slate-300 border-b-2">
            <Category {...category} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
