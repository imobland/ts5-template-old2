import _css from "./main.styles";
import Link from "next/link";
import * as Icons from "../../../../../public/icons/default";

import {
  Light,
  Dark,
  C2,
} from "../../../../../framework/styles/SmartTheme/blocos-tipograficos/elements";

import Image from "next/image";

const Comp = ({ props }) => {
  return (
    <div
      className={
        _css +
        " Card grow | A4 box pad-0 group shadow sh-op-5 h:sh-lvl-1 h:sh-op-10 | bg-C4 bg-tom-l1 bevel bv-C2 bv-op-20 bv-dir-r | flex dir-row align-stretch gap-0"
      }
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <Link href={props.url}>
          <a
            p="struct"
            className="PictureContainer | box group aspect-4x3 pad-0 min-w-40p grow  | bevel bv-over-content bv-mix-color bv-C2 bevel-backdrop-filter contrast-140 brightness-120 bv-op-0 h:bv-op-30 bv-end-100 bv-start-0 |  flex dir-row layers main-first "
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
                    src={props.thumbnail}
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
                className="LabelLayer hidden | pointer-events-none pos-full box pad-4 | bg-none | flex dir-col align-start justify-end gap-2 grow"
              >
                <div b="true"></div>
                <div c="true">
                  <div
                    className="bel compact order-last | bg-C0 h:bg-l1 bg-l2 shadow sh-op-20 sh-lvl-1  | flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <div className={Dark.Desc + "  "} p="text">
                        <div c="true">123</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bel S-2 y-tiny | bg-C2 shadow sh-op-20 sh-lvl-1  | flex dir-row align-center  "
                    p="struct"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <div  className={Dark.Desc + "  "} p="text">
                        <div c="true">123</div>
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
          className="InfoContainer theme-white block-area | box bg-op-0 | grow col-span-2 border bd-side-t bd-C2 bd-w-5rem bd-expand | | flex dir-col gap-1b | stretch "
        >
          <div b="true"></div>
          <div c="true">
            <Link href={props.url}>
              <a
                className={Dark.SubTitle + "  "} 
                p="text"
              >
                <div c="">{props.title} </div>
              </a>
            </Link>

            <div className={Dark.Desc + "  lh3"}  p="text">
              <div c="">{props.desc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comp;
