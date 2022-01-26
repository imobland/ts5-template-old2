import { css } from "@emotion/css";
import { useState } from "react";

import * as Icons from "../../../../public/icons/default";
import DataContext, { useData } from "../../../contexts/DataContext";

import City from "./fields/City";
import District from "./fields/District";
import Operation from "./fields/Operation";
import PriceRange from "./fields/PriceRange";
import Reference from "./fields/Reference";
import Types from "./fields/Types";
import Link from "next/link";

const fields = [Types, Operation, PriceRange, City, District, Reference];

const BtnSubmit = () => {
  const { data } = useData();

  return (
    <Link href={"/imoveis?" + new URLSearchParams(data).toString()}>
      <a
        p="struct"
        className="BtSearch bel pad-l-2b pad-r-2b | bg-C2 h:bg-tom-l2 | flex dir-row align-center "
      >
        <div b="true"></div>
        <div c="true">
          <Icons.Search className="" p="icon" />
        </div>
      </a>
    </Link>
  );
};

const Component = function (props) {
  return (
    <DataContext>
      <div
        className={
          "A4 search-bar md:hidden box | bg-C0 | flex dir-row align-stretch pad-4 gap-3 " +
          css(`
        max-width: var(--screen-max-size-content);
      `)
        }
        p="struct"
      >
        <div b="true"></div>
        <div c="true">
          <div
            className="Inputs | flex dir-row align-stretch gap-2rem"
            p="struct"
          >
            <div b="true"></div>
            <div c="true">
              {fields.map(({ Component }: any, i) => {
                return (
                  <Component
                    key={i}
                    className="bel pad-y-lg pad-x-sm | bg-C0 bg-tom-d1 "
                  />
                );
              })}
            </div>
          </div>
          <BtnSubmit />
        </div>
      </div>
    </DataContext>
  );
};

export { Component };
