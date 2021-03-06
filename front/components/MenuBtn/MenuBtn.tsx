import { VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Menu Button Component
 * @param setOpenMenuBar メニューバーの表示可否
 */
export const MenuBtn: VFC<Props> = ({ setOpenMenuBar }) => {
  return (
    <>
      <button
        className="border-r-2 lg:hidden w-14 h-full"
        onClick={() => setOpenMenuBar((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
};
