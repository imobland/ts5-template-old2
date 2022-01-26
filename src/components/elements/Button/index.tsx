import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../contexts/themeContext";
import styles from "./styles.module.scss";
import { css } from "@emotion/css";
import { GoRepoPull } from "react-icons/go";
import { BiCaretDown } from "react-icons/bi";

function GetTheme(props) {
  const contextTheme = useTheme();
  return props.hasOwnProperty("theme") ? props.theme : contextTheme;
}

interface Props {
  children?: any;
  theme?: any;
  className?;
  slotLeft?;
  slotRight?;
}

const Structure = (props: Props) => {
  const { className, children, ...rest } = props;
  const $css = css`
    padding: 10px;
    display: grid;
    grid-template-columns: minmax(auto, 33.33%) minmax(auto, 66.66%);
    grid-template-areas: "A B C";
  `;
  return (
    <div className={$css + " " + className} c="true" {...rest}>
      {children}
    </div>
  );
};

type Button = Props &
  React.HTMLProps<HTMLButtonElement> &
  React.HTMLAttributes<HTMLButtonElement>;

function Button(props) {
  //
  const theme = GetTheme(props);

  const $css = css`
    cursor: pointer;
    & > [b] {
      /* background: #eee; */
    }
    &:hover {
      & > [b] {
        background: #f22;
      }
    }
    &:active {
      & > [b] {
        background: #a00;
      }
    }
    & > [c] {
      position: relative;
    }
  `;

  return (
    <div
      className={`${$css} ${theme.btn}`}
      onMouseOver={(x) => console.log("OVER")}
      onMouseLeave={(x) => console.log("LEAVE")}
      p="true"
    >
      <div b="true"></div>
      <Structure>
        <GoRepoPull />
        <div p="true"> {props.children} </div>
        <BiCaretDown />
      </Structure>
    </div>
  );
}

export default Button;
