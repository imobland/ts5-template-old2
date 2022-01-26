import Link from "next/link";
import * as Icons from "../../../../../../public/icons/default/";

const BelContact = function (Contact) {
  let Icon;
  let Href;
  if (Contact.tags[0] + "" == `mobile`) {
    Icon = <Icons.Mobile className="fill-current" p="icon" />;
    Href = "tel:" + Contact.number;
  } else if (Contact.tags[0] + "" == `land`) {
    Icon = <Icons.Mobile className="fill-current" p="icon" />;
    Href = "tel:" + Contact.number;
  } else if (Contact.tags[0] + "" == `whatsapp`) {
    Icon = <Icons.Whatsapp className="fill-current" p="icon" />;
    Href = "https://wa.me/+55" + Contact.number;
  }

  return (
    <Link href={Href}>
      <a
        target="_blank"
        rel="noreferrer"
        className={`bel | bg-C2 bg-op-0 h:bg-op-30 bg-tom-d4 | C0 c-op-70 h:c-op-100 h:C2 a:c-tom-d5 | flex dir-row align-center gap-3/4b `}
        p="true"
      >
        <div b="true"></div>
        <div c="true">
          {Icon}
          <div className=" " p="text">
            <div c="true">{Contact.number}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BelContact;
