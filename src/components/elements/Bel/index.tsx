import React from "react";
import { css } from "@emotion/css";
import style from "./main.styles";

function Bel(props) {
  //
  const _css = css`
    ${style()}
  `;

  return (
    <div className={`bel ` + _css} p="true">
      <div b="true"></div>
      <div c="true">

        
        <div p="true"> {props.children} </div>

      </div>
    </div>
  );
}

export default Bel;
