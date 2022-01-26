/* eslint-disable @next/next/no-page-custom-font */

const fontLink = function (props) {
  const FontFamily = props.fontFamily + "&family=Dancing+Script:wght@400;500;600;700";

  return <link href={`https://fonts.googleapis.com/css2?family=${FontFamily}&display=swap`} rel="stylesheet" />;
};

export default fontLink;
