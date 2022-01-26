import MainStyle from "./main.style";
import { css } from "@emotion/css";

import LogoBox from "./components/logobox";
import MainMenu from "./components/mainmenu";
import SocialButtons from "./components/SocialButtons";
import Contacts from "./components/ContactBox";
import MenuButtons from "./components/MenuButtons";

const Header = function (props) {

  return (
    <>
      <div
        p="struct"
        className={
          css(MainStyle) +
          ` A4 sect pad-0 content-w-guideline group  | bg-C4 bg-tom-l1 | bevel bv-C2 bv-sat-100 bv-tom-d3 bv-over-content bv-op-10 | flex dir-row gap-4 `
        }
        style={{ zIndex: 5, top: "0", height: "85rem" }}
      >
        <div b="true"></div>
        <div c="true">
          <LogoBox />
          <MainMenu />
          <SocialButtons />
          <Contacts />
          <MenuButtons />
        </div>
      </div>
    </>
  );
};
export default Header;
