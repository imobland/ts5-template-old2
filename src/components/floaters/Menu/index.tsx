import MainStyle from "./main.style";
import { css } from "@emotion/css";
import * as Icons from "../../../../public/icons/default";

import * as Navigations from "../../../../src/data/navigations";

import Link from "next/link";

// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import data from "../../../../src/config/components/FloaterMenu";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

// import LogoBox from "./components/logobox";
// import SocialButtons from "./components/SocialButtons";
// import MenuButtons from "./components/MenuButtons";

const Menu = function (props) {
  const { logoSize } = props;
  const { events } = useRouter();
  const dispatch = useDispatch();

  const hideMenu = useCallback(() => {
    dispatch({ type: "HIDE_MENU" });
  }, [dispatch]);

  useEffect(() => {
    events.on("routeChangeStart", () => hideMenu());
    return () => events.off("routeChangeStart", hideMenu);
  }, [events, hideMenu]);

  const showMenu = useSelector((state: any) => state.main.showMenu);

  return (
    <div
      p="struct"
      className={
        css(MainStyle) +
        (showMenu ? " open in " : "") +
        ` Menu A4 sect pad-0 group |  | flex dir-col gap-0 `
      }
    >
      <div b="true"></div>
      <div c="true">
        <div
          className={"Bglayer box " + data.style.bgLayer}
          onClick={hideMenu}
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
                data.style.btnClose
              }
              onClick={hideMenu}
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
                data.style.bgContent
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
                    {data.navigations.map(function (menu, i) {
                      const nav = Navigations[menu.navigation];

                      return (
                        <div
                          key={i}
                          className="box pad-0 dir-col flex dir-col align-stretch gap-2/3b  "
                          p="struct"
                        >
                          <div b="true"></div>
                          <div c="true">
                            <div
                              className={"Title text | " + data.style.titles}
                              p="text"
                            >
                              <div c="true">{menu.title}</div>
                            </div>

                            <div
                              className="Menu | flex dir-col  align-stretch gap-0  "
                              p="struct"
                            >
                              <div b="true"></div>
                              <div c="true">
                                {nav.map(function (item, i) {
                                  return (
                                    <div className="" key={i} p="struct">
                                      <div b="true"></div>
                                      <div c="true">
                                        <div
                                          className="Head | flex dir-row align-stretch gap-0"
                                          p="struct"
                                        >
                                          <div b="true"></div>
                                          <div c="true">
                                            <Link href={item.link}>
                                              <a
                                                className={
                                                  `bel grow | flex dir-row align-center gap-3/4b | ` +
                                                  data.style.menuItems
                                                }
                                                p="struct"
                                              >
                                                <div b="true"></div>
                                                <div c="true">
                                                  <div className=" " p="text">
                                                    <div c="true">
                                                      {item.text}
                                                    </div>
                                                  </div>
                                                </div>
                                              </a>
                                            </Link>

                                            {item.childs ? (
                                              <div
                                                className="bel hidden | bg-C0 bg-op-0 h:bg-C2 | c-op-70 h:c-op-100 a:c-tom-d5 | flex dir-row align-center gap-3/4b"
                                                p="struct"
                                              >
                                                <div b="true"></div>
                                                <div c="true">
                                                  <div className="" p="text">
                                                    <div c="true">x</div>
                                                  </div>
                                                </div>
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>

                                        {item.childs
                                          ? item.childs.map(function (
                                              subitem,
                                              i
                                            ) {
                                              return (
                                                <div
                                                  className=""
                                                  key={i}
                                                  p="struct"
                                                >
                                                  <div b="true"></div>
                                                  <div c="true">
                                                    <Link href={subitem.link}>
                                                      <a
                                                        className={
                                                          `bel | flex dir-row align-center gap-3/4b ` +
                                                          data.style
                                                            .menuSubItems
                                                        }
                                                        p="struct"
                                                        style={{
                                                          marginLeft: "13rem",
                                                        }}
                                                      >
                                                        <div b="true"></div>
                                                        <div c="true">
                                                          <div
                                                            className=" "
                                                            p="text"
                                                          >
                                                            <div c="true">
                                                              {subitem.text}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </a>
                                                    </Link>
                                                  </div>
                                                </div>
                                              );
                                            })
                                          : ""}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
