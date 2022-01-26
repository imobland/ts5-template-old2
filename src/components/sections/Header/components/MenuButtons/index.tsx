import MainStyle from "./main.style";
import { css } from "@emotion/css";
import Link from "next/link";
import * as Icons from "../../../../../../public/icons/default/";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
export interface HeaderProps {
  logoSize?: string;
}

export default function Header(props: HeaderProps) {
  //
  const { logoSize } = props;

  const dispatch = useDispatch();

  const showSearch = function () {
    dispatch({ type: "SHOW_SEARCH" });
  };

  const showMenu = function () {
    dispatch({ type: "SHOW_MENU" });
  };

  return (
    <div
      className={css(MainStyle) + " | flex dir-row align-center gap-1/4b "}
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <a
          href="#"
          onClick={showSearch}
          className="bel pad-1b |  br-circle  radius  bg-op-0 | border bd-C0 bd-op-20 h:C0 a:c-tom-d4 a:bd-tom-d5 C2 h:bd-op-100 bd-side-all"
          p="struct"
          data-for="header-bt-search"
          data-tip="Buscar imóveis"
        >
          <div b="true"></div>
          <div c="true">
            <Icons.Search className="fill-current" p="icon" />
          </div>
        </a>
        <ReactTooltip id="header-bt-search" place="bottom" effect="solid" backgroundColor="black" />
        <a
          href="#"
          onClick={showMenu}
          className="bel pad-1b |  br-circle radius   bg-op-0 | border bd-C0 bd-op-20 h:C0 a:c-tom-d4 a:bd-tom-d5 C2 h:bd-op-100 bd-side-all"
          data-tip="Menu"
          data-for="header-bt-menu"
          p="struct"
        >
          <div b="true"></div>
          <div c="true">
            <Icons.Menu className="fill-current " p="icon" />
          </div>
        </a>
        <ReactTooltip id="header-bt-menu" place="bottom" effect="solid" backgroundColor="black" />

      </div>
    </div>
  );
}
