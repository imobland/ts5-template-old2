import MainStyle from "./main.style";
import { css } from "@emotion/css";
import Link from "next/link";
import * as Icons from "../../../../../../public/icons/default/";

export interface HeaderProps {
  logoSize?: string;
}

export default function Header(props: HeaderProps) {
  //
  const { logoSize } = props;

  return (
    <div
      className={css(MainStyle) + " | flex dir-row align-center gap-1/4b "}
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <Link href="/contato">
          <a
            className="bel x-loose max-h-1.5b pad-x-lg | C0 bg-op-0 br-circle radius | border bd-C2 bd-op-100 h:bd-C0 a:c-tom-d4 a:bd-tom-d5 h:bd-op-100 bd-side-all | flex dir-row gap-3/4b "
            p="struct"
          >
            <div b="true"></div>
            <div c="true">
              <Icons.Phone className="fill-current" p="icon" />

              <div className="flex dir-col gap-2rem " p="struct">
                <div b="true"></div>
                <div c="true">
                  <div className="S-3 c-op-60 transition-none " p="text">
                    <div c="true">Central de</div>
                  </div>

                  <div className="S-1 transition-none" p="text">
                    <div c="true">Atendimento</div>
                  </div>
                </div>
              </div>

              <Icons.ChevronDown
                className="sm hidden fill-current c-op-50"
                p="icon"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
