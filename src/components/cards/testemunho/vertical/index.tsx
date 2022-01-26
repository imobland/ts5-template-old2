import _css from "./main.styles";
import Link from "next/link";
import * as Icons from "../../../../../public/icons/default";

import Image from "next/image";

const Comp = ({ props }) => {
  return (
    <div
      className={
        _css + " Card grow | A4 box pad-0  | flex dir-col align-stretch gap-0"
      }
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <div
          p="struct"
          className="Body expand | A2 box grow | bg-C2 bg-tom-95 C4 border bd-side-all bd-C2 bd-op-10 |  flex dir-row layers main-first  "
        >
          <div b="true"></div>
          <div c="true">
            <div className="font-default lh4" p="text">
              <div c="true">{props.testemunho}</div>
            </div>
          </div>
        </div>

        <div
          p="struct"
          className="Head box A4 SA | bg-op-0 | flex dir-row align-start gap-2b  "
        >
          <div b="true"></div>
          <div c="true">
            <div
              className="Picture pic flow max-w-4b pad-10p crop bg-C0 shadow sh-lvl-2 sh-op-10 radius br-circle"
              p="struct"
              style={{
                marginTop: "-57rem",
              }}
            >
              <div b="true"></div>
              <div c="true">
                <Image
                  src={props.img}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </div>

            <div className="Desc grow | flex dir-col " p="struct">
              <div b="true"></div>
              <div c="true">
                <div className="Nome S+2 font-highlight" p="text">
                  <div c="true">{props.nome}</div>
                </div>

                <div className="Cargo font-default c-op-50" p="text">
                  <div c="true">{props.cargo}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comp;
