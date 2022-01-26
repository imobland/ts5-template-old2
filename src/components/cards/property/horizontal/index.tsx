import _css from "./main.styles";
import Link from "next/link";
import * as Icons from "../../../../../public/icons/default";
import { Light } from "../../../../../framework/styles/SmartTheme/blocos-tipograficos/elements";

import Image from "next/image";
import PropertyModel from "../../../../models/PropertyModel";

const img = "/institucional/trabalhe-conosco.jpg";

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

const Comp = (props) => {
  const property = PropertyModel(props.property);
  return (
    <div
      className={
        _css +
        " Card | A4 box pad-0 group shadow h:sh-op-15 h:sh-lvl-3 | bg-C0 | flex dir-row lg:dir-col align-start lg:align-stretch gap-0"
      }
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <Link href={"/imovel/" + property.id}>
          <a
            p="struct"
            className="PictureContainer | box group | bevel bv-over-content bv-mix-color bv-C2 bevel-backdrop-filter contrast-140 brightness-120 bv-op-0 h:bv-op-30 bv-end-100 bv-start-0 |  aspect-4x3 min-w-40p grow flex dir-row layers main-first "
          >
            <div b="true"></div>
            <div c="true">
              <div
                p="struct"
                className="PictureLayer | box overflow-hidden  pad-0 |  bevel bv-over-content bv-mix-color bv-C2  bv-op-100 bv-tom-l3 bv-sat-100  bv-end-40 bv-start-5 bv-dir-tr lg:bv-dir-bl         | flex dir-row grow    "
              >
                <div b="true"></div>
                <div c="true">
                  <Image
                    src={property.thumbnails}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
              </div>

              <div
                p="struct"
                className="LabelLayer | pointer-events-none pos-full box compact | bg-none | flex dir-col align-end justify-start lg:align-start lg:justify-end gap-2 grow"
              >
                <div b="true"></div>
                <div c="true">
                  <div
                    className="bel compact lg:order-last | bg-C0 h:bg-l1 bg-l2 shadow sh-op-20 sh-lvl-1  | flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <div className={Light.SubTitle} p="text">
                        <div c="true">{property.type}</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bel S-2 y-tiny | bg-C2 shadow sh-op-20 sh-lvl-1  | flex dir-row align-center  "
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
          className="InfoContainer  box A4 S4 theme-light block-area | grow col-span-2 border bd-side-l lg:bd-side-t bd-C2 bd-w-5rem bd-expand | | flex dir-col gap-6 | stretch          "
        >
          <div b="true"></div>
          <div c="true">
            <div
              p="struct"
              className="  | flex dir-row gap-6 lg:dir-col lg:gap-6 justify-between"
            >
              <div b="true"></div>
              <div c="true">
                <div
                  p="struct"
                  className=" grow | flex dir-col align-start justify-between text-align-start    "
                >
                  <div b="true"></div>
                  <div c="true">
                    <Link href={"/imovel/" + property.id}>
                      <a
                        // className={classes(
                        //   active ? "C3 " : "",
                        //   hover ? "C1 " : "C2 ",
                        //   "font-display lh2 transition-none"
                        // )}
                        className={
                          Light.SubTitle +
                          " lh3 transition-none | h:C1 a:c-tom-d3  "
                        }
                        p="text"
                      >
                        <div c="">{property.title} </div>
                      </a>
                    </Link>

                    <div
                      className="bel pad-0 caption lh3 flex dir-row align-start gap-1/3b "
                      p="struct"
                    >
                      <div b="true"></div>
                      <div c="true">
                        <div className={Light.Caption + " "} p="text">
                          <div c="">
                            <svg
                              className="sm inline fill-current "
                              {...{ p: "icon" }}
                              viewBox="0 0 384 512"
                            >
                              <path
                                fill="currentColor"
                                d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272z"
                              ></path>
                            </svg>
                            &nbsp;
                            {property.fullAddressString}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  p="struct"
                  className="  flex dir-row align-start justify-between gap-4  "
                >
                  <div b="true"></div>
                  <div c="true">
                    <div
                      p="struct"
                      className="  pad-0 group flex dir-row gap-2   "
                    >
                      <div b="true"></div>
                      <div c="true">
                        <div
                          className={
                            " font-display S+1 lh2 max-w-4b overflow-ellipsis nowrap"
                          }
                          p="text"
                        >
                          <div c="">{property.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="main-attrs  col-span-2 pad-v-5  | board bg-C0 flex dir-row gap-7 justify-between"
              p="struct"
            >
              <div b="true"></div>
              <div c="true">
                <div
                  className="  grow | flex dir-row lg:dir-col lg:align-start align-center gap-4  "
                  p="struct"
                >
                  <div b="true"></div>
                  <div c="true">
                    <div className=" grow | flex dir-row gap-2   " p="struct">
                      <div b="true"></div>
                      <div c="true">
                        {property.attributes?.bed && (
                          <div
                            className="bel x-compact | bg-C2 bg-tom-95 h:bg-tom-l1 h:C0 h:tom-100 C2  flex dir-row align-center  "
                            p="struct"
                          >
                            <div b="true"></div>
                            <div c="true">
                              <Icons.Bedroom
                                className="lg lock-height fill-current"
                                p="icon"
                              />
                              <div
                                className="font-default transition-none"
                                p="text"
                              >
                                <div c="true">{property.attributes.bed}</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {property.attributes?.bath && (
                          <div
                            className="bel x-compact | bg-C2 bg-tom-95 h:bg-tom-l1 h:C0 h:tom-100 C2  flex dir-row align-center  "
                            p="struct"
                          >
                            <div b="true"></div>
                            <div c="true">
                              <Icons.Bathroom
                                className="lg lock-height fill-current"
                                p="icon"
                              />
                              <div
                                className="font-default transition-none"
                                p="text"
                              >
                                <div c="true">{property.attributes.bath}</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {property.attributes?.garage && (
                          <div
                            className="bel x-compact | bg-C2 bg-tom-95 h:bg-tom-l1 h:C0 h:tom-100 C2  flex dir-row align-center  "
                            p="struct"
                          >
                            <div b="true"></div>
                            <div c="true">
                              <Icons.Garage
                                className="lg lock-height fill-current"
                                p="icon"
                              />
                              <div
                                className="font-default transition-none"
                                p="text"
                              >
                                <div c="true">{property.attributes.garage}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className="bel compact | bg-C0 bg-tom-d1 | flex dir-row align-center    "
                      p="struct"
                    >
                      <div b="true"></div>
                      <div c="true">
                        <div className="label" p="text">
                          <div c="true">{property.reference}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={Light.Desc + " lg:hidden lh3"} p="text">
              <div c="">{property.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comp;
