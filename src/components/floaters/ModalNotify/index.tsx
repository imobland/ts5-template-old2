import MainStyle from "./main.style";
import { css } from "@emotion/css";
import * as Icons from "../../../../public/icons/default";

// CONFIGS DO CLIENTE SOBRE O COMPONENTE
// import data from "../../../../src/config/components/ModalNotify";
// import { useDispatch, useSelector } from "react-redux";

// import LogoBox from "./components/logobox";
// import SocialButtons from "./components/SocialButtons";
// import MenuButtons from "./components/MenuButtons";

const Comp = function (props) {
  const { logoSize } = props;

  // const dispatch = useDispatch();

  // const hideSearch = function () {
  //   dispatch({ type: "HIDE_SEARCH" });
  // };
  // const showSearch = useSelector((state: any) => state.main.showSearch);

  return (
    <>
      <div
        p="struct"
        id="ModalNotify"
        className={
          css(MainStyle) +
          // (showSearch ? " open in " : "") +
          ` Notify show-xxx box pad-6 z-2 pos-full | bg-C2 bg-tom-10 bg-op-50 br-0 | flex dir-row align-center justify-center  `
        }
      >
        <div b="true"></div>
        <div c="true">
          <div
            className="A4 S2 box max-w-12b expand grow | bg-C0 sh-C4 br-2 sh-3 shadow sh-op-5 | flex dir-col align-center justify-center text-align-center    "
            p="struct"
          >
            <div b="true"></div>
            <div c="true">
              <Icons.Paperplane className="S+8 C2 fill-current" p="icon" />

              <div className="" p="text">
                <div c="true">
                  Enviando, aguarde...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp;
