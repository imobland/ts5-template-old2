import * as Navigations from "../../../../../../src/data/navigations";

import Link from "next/link";

// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import { Links as data } from "../../../../../../src/config/components/Footer";

const Component = () => {

  const NavList = Navigations[ data.navigation ];


  return (
    <div
      p="struct"
      className={`Navigation box pad-0 | ${data.class} | flex dir-col gap-0 `}
    >
      <div b="true"></div>
      <div c="true">
        {NavList.map(function (item, i) {

          return (
            <div className="" key={i} p="struct">
              <div b="true"></div>
              <div c="true">
                <Link href={item.link}>
                  <a
                    className={`bel | bg-C2 bg-op-0 h:bg-op-30 bg-tom-d4 | C0 c-op-70 h:c-op-100 h:C2 a:c-tom-d5 | flex dir-row align-center gap-3/4b `}
                    p="true"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <svg
                        className="S-1 xs fill-current"
                        {...{p:"icon"}}
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                        ></path>
                      </svg>

                      <div className=" " p="text">
                        <div c="true">{item.text}</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Component;
