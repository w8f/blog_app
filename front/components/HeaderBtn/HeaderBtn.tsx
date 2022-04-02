import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { VFC, useState } from "react";

/**
 * Header Hamburger Menu Button Component
 */
const HeaderBtn: VFC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="border-r-2 sm:hidden w-14 h-full"
        onClick={handleOnClickBtn}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
};

const handleOnClickBtn = () => {
  console.log("hogehoge");
};

export default HeaderBtn;
