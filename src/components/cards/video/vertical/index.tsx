import _css from "./main.styles";
import Link from "next/link";
import * as Icons from "../../../../../public/icons/default";

import Image from "next/image";

const Comp = ({ props }) => {
  return (
    <Link href={props.url}>
      <a
        target="_blank"
        className={
          _css +
          " Card grow overflow-hidden | A4 box pad-0 aspect-16x9 grow | bg-C4 shadow sh-op-0 h:sh-lvl-1 h:sh-op-5 bg-C0 | flex dir-row layers main-first gap-0"
        }
        p="struct"
      >
        <div b="true"></div>
        <div c="true">
          <div
            p="struct"
            className="PictureLayer grow pos-full | box overflow-hidden  pad-0 |  bevel bv-over-content  bv-C4  bv-op-0 h:bv-op-50 bv-end-90 bv-start-30 bv-dir-b  | flex dir-col     "
          >
            <div b="true"></div>
            <div c="true">
              <img
                src={props.img}
                p="img"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            p="struct"
            className="InfoContainer pointer-events-none pos-bottom theme-dark block-area grow box compact col-span-2 | bg-C4 bg-op-0 bevel bv-op-30 bv-dir-b bv-C4 bv-start-20 radius br-0 | flex dir-row gap-1b align-center text-align-left  "
          >
            <div b="true"></div>
            <div c="true">
              <svg
                viewBox="0 0 512 512"
                className=""
                style={{
                  width: "36rem",
                  flexShrink: 0,
                }}
              >
                <g>
                  <path
                    d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z"
                    style={{fill:"#ed1f24", fillRule: "nonzero"}}
                  ></path>
                  <path
                    d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z"
                    style={{fill:"#fff", fillRule: "nonzero"}}
                  ></path>
                </g>
              </svg>

              <div
                className="text lh2 C0 "
                style={{
                  textShadow: "0 0 2rem #00000047",
                }}
                p="text"
              >
                <div c="">{props.desc}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default Comp;
