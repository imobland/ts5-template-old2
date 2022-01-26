
import MainStyle from "./main.style";
import { css } from "@emotion/css";
import Link from "next/link";

import {LogoBox as data} from "../../../../../../src/config/components/Header";

import Logo from "../../../../../../public/logo.svg";

export interface HeaderProps {
  logoSize?: string;
}

export default function Header(props: HeaderProps) {
  //
  const { logoSize } = props;

  return (
    <Link href="/">
      <a
        className={
          css(MainStyle) + ` CompLogoBox A4 | flex dir-col justify-${data.align} `  
        }
        style={{
          maxWidth: data.width,
          minWidth: data.width,
          width: "100%",
        }}
        p="struct"
      >
        <div b="true"></div>
        <div c="true">
          <div
            className={ ` box | | flex dir-col justify-center ` + data.boxClasses  }
            p="struct"
          >
            <div b="true" ></div>
            <div c="true">
              <img src={data.url} className="" />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
