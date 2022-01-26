/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// import Image from "../../../../../framework/components/elements/image/index";
// import React from "react";

import Image from "next/image";

function imgComp(props) {

  return <div className="comp-react" p="img">
      <div b="true" ></div>
      
      <Image {...props} />
  </div>;

}

export default imgComp;
