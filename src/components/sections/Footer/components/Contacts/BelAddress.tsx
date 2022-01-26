import Link from "next/link";
import * as Icons from "../../../../../../public/icons/default/";

const BelMail = function (Address) {

  return (
    <div
      className={`bel | bg-C2 bg-op-0 h:bg-op-30 bg-tom-d4 | C0 c-op-70 h:c-op-100 h:C2 a:c-tom-d5 | flex dir-row align-start gap-3/4b  user-select-all`}
      p="true"
    >
      <div b="true"></div>
      <div c="true">
        <Icons.MapMarker className="fill-current" p="icon" />
        <div className="break-word" p="text">
          <div c="true">{Address.fullAddress}</div>
        </div>
      </div>
    </div>
  );
};

export default BelMail;
