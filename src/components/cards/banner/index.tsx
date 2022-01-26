import _css from "./main.styles";
import Link from "next/link";

import Image from "next/image";

const Comp = ({ props }) => {
  return (
    <Link href={props.url}>
      <a
        p="struct"
        className={
          _css +
          " Card | aspect-3x1 grow  A4 box pad-0 overflow-hidden group shadow h:sh-op-15 h:sh-lvl-3 | bg-C0 | flex dir-row lg:dir-col align-start lg:align-stretch gap-0 "
        }
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
      </a>
    </Link>
  );
};
export default Comp;
