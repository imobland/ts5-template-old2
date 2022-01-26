import _css from "./main.styles";
import Link from "next/link";

import Image from "next/image";

const Comp = ({ props }) => {
  return (
    <>
      <Link href={props.url}>
        <a
          p="struct"
          className={
            _css +
            " Card | A5 box grow aspect-4x3 pad-0 | bg-C0 bg-tom-d1 h:bg-tom-default shadow h:sh-op-10 h:sh-lvl-1  | flex dir-col "
          }
        >
          <div b="true"></div>
          <div c="true">
            <div
              className="box pad-1  grow overflow-hidden | bg-op-0 op-80 h:op-100 bevel bv-over-content bevel-backdrop-filter saturate-90 h:saturate-100 bv-op-100 bv-end-0 | flex dir-row lg:dir-col align-start lg:align-stretch gap-0 "
              p="struct"
              title={props.title}
            >
              <div b="true"></div>
              <div c="true">
                <Image
                  src={props.img}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="contain"
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
export default Comp;
