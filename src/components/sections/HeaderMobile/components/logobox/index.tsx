import MainStyle from "./main.style";
import { css } from "@emotion/css";
import Link from "next/link";

import { LogoBox as data } from "../../../../../../src/config/components/HeaderMobile";

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
          css(MainStyle) +
          ` CompLogoBox box A4 | flex dir-col justify-center align-center ` + data.boxClasses
        }
        style={{
          width: "100%",
          height: data.containerHeight,
        }}
        p="struct"
      >
        <div b="true"></div>
        <div c="true">
          <img
            src={data.url}
            style={{
              width: data.logoWidth,
            }}
          />
        </div>
      </a>
    </Link>
  );
}
