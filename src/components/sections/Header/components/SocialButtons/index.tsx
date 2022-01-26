import MainStyle from "./main.style";
import { css } from "@emotion/css";
import Link from "next/link";
import * as Icons from "../../../../../../public/icons/default/";
import ReactTooltip from "react-tooltip";

// DADOS DO CLIENTE SOBRE REDES SOCIAIS
import { socialNetworks } from "../../../../../../src/data/contacts";
// DADOS DO SISTEMA SOBRE REDES SOCIAIS
import { informationData } from "ts5-template";
const socialNetworksData = informationData.socialNetworks;

// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import { SocialButtons as configComponent } from "../../../../../../src/config/components/Header";
export interface HeaderProps {
  logoSize?: string;
}

const styleName = configComponent.Styles.Name;
const C = configComponent.Styles.colorMain;

const styles = {
  "dark-1": ` x-compact | ${C} h:C4 a:c-tom-d4 | h:bg-${C} bevel h:bv-op-30 | `,
  "dark-border": ` ${C} h:C0 a:c-tom-d4 |  | border bd-C0 bd-op-20 a:bd-tom-d5 h:bd-op-100 bd-side-all`,
  "dark-border-circle": ` ${C} h:C0 a:c-tom-d4 | br-circle radius | border bd-C0 bd-op-20 a:bd-tom-d5 h:bd-op-100 bd-side-all`,
  "dark-pastel": ` ${C} h:C0 a:c-tom-d4 | bg-${C} bg-op-10 | `,
  "dark-pastel-circle": ` ${C} h:C0 a:c-tom-d4 | br-circle radius | bg-${C} bg-op-5 h:bg-op-20 | `,
  "dark-pastel-2": ` ${C} h:C0 a:c-tom-d4 | bg-${C} bg-op-10 h:bg-op-20 | `,
};

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
        {configComponent.SocialIcons.map(function (id, i) {
          let Network = {
            id: socialNetworks[id],
            Icon: Icons[socialNetworksData[id].icon],
            displayName: socialNetworksData[id].displayName,
            url: socialNetworksData[id].urlbase + socialNetworks[id].id,
          };

          return (
            <div className="" key={i} p="struct">
              <div b="true"></div>
              <div c="true">
                <Link href={Network.url}>
                  <a
                    className={`bel pad-1b | ` + styles[styleName]}
                    p="struct"
                    data-for="header-bt-social"
                    data-tip={Network.displayName}
                    target="_blank"
                  >
                    <div b="true"></div>
                    <div c="true">
                      <Network.Icon className=" fill-current" p="icon" />
                    </div>
                  </a>
                </Link>

                <ReactTooltip
                  id="header-bt-social"
                  place="bottom"
                  effect="solid"
                  backgroundColor="black"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
