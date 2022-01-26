import _css from "./main.styles";
import Link from "next/link";
import * as Icons from "../../../../../public/icons/default";
import { Light } from "../../../../../framework/styles/SmartTheme/blocos-tipograficos/elements";

import Image from "next/image";

function getAttr(rows, key) {
  for (const i in rows) {
    if (rows[i].key == key) return rows[i];
  }
}

function classes(...arr) {
  return arr.join(" ");
}

function getFullAddress(rows) {
  const attr = getAttr(rows, "full-address");
  return attr?.value;
}

const Comp = ({ property }) => {
  const attributes = property.attributes;
  return (
    <div
      className={
        _css +
        " Card grow | A4 box pad-0 group shadow sh-op-5 h:sh-lvl-1 h:sh-op-10 | bg-C0 | flex dir-col align-stretch gap-0"
      }
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <Link href={`imovel/${property.id}`}>
          <a
            p="struct"
            className="PictureContainer | box group aspect-16x9 pad-0 min-w-40p grow  | bevel bv-over-content bv-mix-color bv-C2 bevel-backdrop-filter contrast-140 brightness-120 bv-op-0 h:bv-op-30 bv-end-100 bv-start-0 |  flex dir-row layers main-first "
          >
            <div b="true"></div>
            <div c="true">
              <div
                p="struct"
                className="PictureLayer | box overflow-hidden  pad-0 |  | flex dir-row grow    "
              >
                <div b="true"></div>
                <div c="true">
                  <Image
                    src={property.thumbnails}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div
                p="struct"
                className="LabelLayer | pointer-events-none pos-full box pad-4 | bg-none | flex dir-col align-start justify-end gap-2 grow"
              >
                <div b="true"></div>
                <div c="true">
                  <div
                    className="bel pad-y-sm order-last | bg-C0 h:bg-l1 bg-l2 shadow sh-op-20 sh-lvl-1  | flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <div
                        className={
                          " font-display lh2 max-w-4b overflow-ellipsis nowrap"
                        }
                        p="text"
                      >
                        <div c="true">{property.price}</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bel S-2  pad-y-xs | bg-C2 shadow sh-op-20 sh-lvl-1  | flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <div className="font-default" p="text">
                        <div c="true">{property.operation}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>

        <div
          p="struct"
          className="InfoContainer SA A4 theme-white block-area | box  | grow col-span-2 border bd-side-t bd-C2 bd-w-5rem bd-expand | | flex dir-col gap-1b | stretch          "
        >
          <div b="true"></div>
          <div c="true">
            <Link href={`imovel/${property.id}`}>
              <a
                // className={classes(
                //   active ? "C3 " : "",
                //   hover ? "C1 " : "C2 ",
                //   "font-display lh2 transition-none"
                // )}
                className={
                  Light.SubTitle + " lh2 transition-none | h:C1 a:c-tom-d3  "
                }
                p="text"
              >
                <div c="">{property.title} </div>
              </a>
            </Link>

            <div className={Light.Caption + " lh3"} p="text">
              <div c="">
                <svg
                  className="sm S-1 inline fill-current "
                  {...{ p: "icon" }}
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272z"
                  ></path>
                </svg>
                &nbsp;
                {property.city}
                {property.state ? " - " + property.state : ""}
              </div>
            </div>

            <div
              className="Atributos grow break | flex dir-row gap-2 gap-br-2 "
              p="struct"
            >
              <div b="true"></div>
              <div c="true">
                {attributes.area && (
                  <div
                    className="bel  | bg-C2 bg-tom-95 h:bg-tom-l1 h:C0 h:tom-100 C2  flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <Icons.Area
                        className="lg lock-height fill-current"
                        p="icon"
                      />
                      <div className="font-default transition-none" p="text">
                        <div c="true">{attributes.area} m²</div>
                      </div>
                    </div>
                  </div>
                )}

                {attributes.bed && (
                  <div
                    className="bel  | bg-C2 bg-tom-95 h:bg-tom-l1 h:C0 h:tom-100 C2  flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <Icons.Bedroom
                        className="lg lock-height fill-current"
                        p="icon"
                      />
                      <div className="font-default transition-none" p="text">
                        <div c="true">{attributes.bed}</div>
                      </div>
                    </div>
                  </div>
                )}

                {attributes.bath && (
                  <div
                    className="bel | bg-C2 bg-tom-95 h:bg-tom-l1 h:C0 h:tom-100 C2  flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <Icons.Bathroom
                        className="lg lock-height fill-current"
                        p="icon"
                      />
                      <div className="font-default transition-none" p="text">
                        <div c="true">{attributes.bath}</div>
                      </div>
                    </div>
                  </div>
                )}

                {attributes.garage && (
                  <div
                    className="bel  | bg-C2 bg-tom-95 h:bg-tom-l1 h:C0 h:tom-100 C2  flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <Icons.Garage
                        className="lg lock-height fill-current"
                        p="icon"
                      />
                      <div className="font-default transition-none" p="text">
                        <div c="true">{attributes.garage}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comp;
