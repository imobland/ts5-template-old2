import MainStyle from "./main.style";
import { css } from "@emotion/css";
import Link from "next/link";

import * as Icons from "../../../../../../public/icons/default/";

// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import {MainMenu as configComponent} from "../../../../../../src/config/components/Header";

import * as Navigations from "../../../../../../src/data/navigations";

const navigation = Navigations[configComponent.navigation];

const styles = configComponent.Styles; 


const Item = function (props, first = false) {
  return (
    <div
      className={
        first
          ? `Item | bel dropdown dd-l-0 dd-t-100 pad-in-content | ${styles.item}`
          : `Item | bel dropdown dd-l-100 dd-t-0 x-loose pad-in-content | ${styles.subitem} | flex dir-col align-stretch `
      }
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <Link href={props.link}>
          <a
            className={
              first
                ? "  | flex dir-row gap-1/3p align-center"
                : "  | flex dir-row gap-1/3p align-center justify-between"
            }
            p="struct"
          >
            <div b="true"></div>
            <div c="true">
              <div p="text" className="transition-none">
                <div c="true">{props.text}</div>
              </div>
              {props.childs && (
                <Icons.ChevronDown
                  className="xs fill-current c-op-50"
                  style={first ? {} : { transform: "rotateZ(-90deg)"}}
                  p="icon"
                />
              )}
            </div>
          </a>
        </Link>

        {props.childs && (
          <div
            className={
              first
                ? `Body list | box dd-content offset-pads opad-t-1b group ${styles.dropdown} | flex dir-col gap-2rem  `
                : `Body list | box dd-content offset-pads opad-l-1/2b group ${styles.dropdown} | flex dir-col gap-2rem    `
            }
            p="struct"
          >
            <div b="true"></div>
            <div c="true">
              {props.childs.map(function (item) {
                return Item(item);
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export interface HeaderProps {
  logoSize?: string;
}

export default function Header(props: HeaderProps) {
  //
  const { logoSize } = props;

  return (
    <div
      p="struct"
      className={
        css(MainStyle) +
        " A4 MainMenu grow | flex dir-row css-mrj3vf align-center gap-0 "
      }
    >
      <div b="true"></div>
      <div c="true">
        {navigation.map(function (item) {
          return Item(item, true);
        })}
      </div>
    </div>
  );
}
