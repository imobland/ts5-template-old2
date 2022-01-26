import Link from "next/link";
import BelMail from "./BelMail";
import BelContact from "./BelContact";
import BelAddress from "./BelAddress";

// DADOS DO CLIENTE
import * as Contacts from "../../../../../../src/data/contacts";
// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import { Contacts as CompData } from "../../../../../../src/config/components/Footer";


const Component = () => {
  
  return (
    <div
      p="struct"
      className={`Navigation box pad-0 | ${CompData.class} | flex dir-col gap-0 `}
    >
      <div b="true"></div>
      <div c="true">

        {CompData.contacts.map(function (label, i) {
          let Contact = Contacts.contacts[label];

          let Bel = {};
          if( Contact.type == "phone") {
            Bel = BelContact(Contact);
          }else if( Contact.type == "mail" ){
            Bel = BelMail(Contact);
          }

          return (
            <div className="" key={i} p="struct">
              <div b="true"></div>
              <div c="true">
                {Bel}
              </div>
            </div>
          );
        })}
        

        {Object.keys(CompData.locations).map(function (label, i) {

          let Address = CompData.locations[label];
          
          let Bel = BelAddress(Address);

          return (
            <div className="" key={i} p="struct">
              <div b="true"></div>
              <div c="true">
                {Bel}
              </div>
            </div>
          );
          
        })}
      </div>
    </div>
  );
};

export default Component;
