import MainStyle from "./main.style";
import { css } from "@emotion/css";

// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import {HeaderMobile as data} from "../../../../src/config/components/HeaderMobile";

import LogoBox from "./components/logobox";
import SocialButtons from "./components/SocialButtons";
import MenuButtons from "./components/MenuButtons";

export interface HeaderProps {
  logoSize?: string;
}

export default function Header(props: HeaderProps) {
  const { logoSize } = props;
  return (
    <>
      <div
        p="struct"
        className={
          css(MainStyle) +
          ` HeaderMobile A4 sect pad-0 group z-4 | ${data.boxClasses} | flex dir-col gap-0 `
        }
      >
        <div b="true"></div>
        <div c="true">
          <LogoBox />
          <div className="box | content-w-guideline pad-v-4 flex dir-row align-center justify-between " p="struct">
            <div b="true"></div>
            <div c="true">
            <SocialButtons />
            <MenuButtons />
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
