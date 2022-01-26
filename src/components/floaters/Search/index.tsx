import MainStyle from "./main.style";
import { css } from "@emotion/css";
import * as Icons from "../../../../public/icons/default";

// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import { style } from "../../../../src/config/components/FloaterSearch";

import { useDispatch, useSelector } from "react-redux";

import City from "../../../partials/search-bar/fields/City";
import District from "../../../partials/search-bar/fields/District";
import Operation from "../../../partials/search-bar/fields/Operation";
import PriceRange from "../../../partials/search-bar/fields/PriceRange";
import Reference from "../../../partials/search-bar/fields/Reference";
import Types from "../../../partials/search-bar/fields/Types";
import DataContext, { useData } from "../../../contexts/DataContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const fields = [Types, Operation, PriceRange, City, District, Reference];

const Search = function (props) {
  const { logoSize } = props;

  const dispatch = useDispatch();
  const { events } = useRouter();

  const hideSearch = useCallback(() => {
    dispatch({ type: "HIDE_SEARCH" });
  }, [dispatch]);

  useEffect(() => {
    events.on("routeChangeComplete", () => hideSearch());
    return () => events.off("routeChangeComplete", hideSearch);
  }, [events, hideSearch]);

  const showSearch = useSelector((state: any) => state.main.showSearch);

  const BtnSubmit = () => {
    const { data } = useData();
    return (
      <Link href={"/imoveis?" + new URLSearchParams(data).toString()}>
        <a
          className={
            "BtSearch bel pad-lg | flex dir-row align-center justify-center " +
            style.buttons
          }
          p="struct"
        >
          <div b="true"></div>
          <div c="true">
            <Icons.Search className="" p="icon" />
          </div>
        </a>
      </Link>
    );
  };

  return (
    <DataContext>
      <div
        p="struct"
        className={
          css(MainStyle) +
          (showSearch ? " open in " : "") +
          ` Search A4 sect pad-0 group |  | flex dir-col gap-0 `
        }
      >
        <div b="true"></div>
        <div c="true">
          <div
            className={"Bglayer box " + style.bgLayer}
            onClick={hideSearch}
            p="struct"
          >
            <div b="true"></div>
            <div c="true"></div>
          </div>

          <div className="Painel box pad-0 | bg-C0 | flex dir-col" p="struct">
            <div b="true"></div>
            <div c="true">
              <div
                className={
                  "BtnClose bel S2 pad-t-1.5b pad-b-1.5b pad-l-1/2b pad-r-1/2b | radius br-tr-0 br-tl-0 br-br-0 | " +
                  style.btnClose
                }
                onClick={hideSearch}
                p="struct"
              >
                <div b="true"></div>
                <div c="true">
                  <Icons.Close
                    className="lg fill-current stroke-current"
                    p="icon"
                  />
                </div>
              </div>

              <div
                className={
                  "Content box pad-0 grow | br-0 | flex dir-col align-stretch | " +
                  style.bgContent
                }
                p="struct"
              >
                <div b="true"></div>
                <div c="true">
                  <div
                    className={
                      "ScrollerArea S4 box grow pad-in-content pad-2b pad-t-7 dir-col | | flex dir-col align-stretch gap-7 |  "
                    }
                    style={{
                      overflow: "auto",
                      maxHeight: "100vh",
                      display: "block",
                    }}
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <div
                        className="box pad-0 dir-col flex dir-col align-stretch gap-2/3b  "
                        p="struct"
                      >
                        <div b="true"></div>
                        <div c="true">
                          <div
                            className={"Title text | " + style.titles}
                            p="text"
                          >
                            <div c="true">Buscar Imóveis</div>
                          </div>
                          <div
                            className="Inputs | flex dir-col  align-stretch gap-1/2b  "
                            p="struct"
                          >
                            <div b="true"></div>
                            <div c="true">
                              <input
                                className="bel pad-lg | bg-C0 border bd-side-b bd-C0 bd-tom-0 bd-op-10 bd-w-2rem"
                                placeholder="Digite..."
                                p="input"
                              />
                            </div>
                          </div>

                          <a
                            href="#"
                            className={
                              "BtSearch bel pad-lg | flex dir-row align-center justify-center " +
                              style.buttons
                            }
                            p="struct"
                          >
                            <div b="true"></div>
                            <div c="true">
                              <Icons.Search className="" p="icon" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="box pad-0 dir-col flex dir-col align-stretch gap-2/3b  "
                        p="struct"
                      >
                        <div b="true"></div>
                        <div c="true">
                          <div
                            className={"Title text | " + style.titles}
                            p="text"
                          >
                            <div c="true">Busca avançada</div>
                          </div>
                          <div
                            className="Inputs | flex dir-col  align-stretch gap-1/2b  "
                            p="struct"
                          >
                            <div b="true"></div>
                            <div c="true">
                              {fields.map(({ Component }: any, i) => {
                                return (
                                  <Component
                                    key={i}
                                    className="bel pad-lg | bg-C0 border bd-side-b bd-C0 bd-tom-0 bd-op-10 bd-w-2rem"
                                  />
                                );
                              })}
                            </div>
                          </div>
                          <BtnSubmit />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DataContext>
  );
};

export default Search;
