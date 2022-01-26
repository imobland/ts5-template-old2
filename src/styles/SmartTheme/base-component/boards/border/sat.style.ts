const gerarClasses = function (pre, pos) {
  let str = "";

  for (let i = 0; i <= 100; i = i + 10 ) {
    str = str + `
      .${pre}bd-sat-${i}${pos} { 
        --bds: ${i / 100};
      } 
    `;
  }

  return str;
};

const css = function (props) {

  const x =  `
    ${gerarClasses("", "")}
    ${gerarClasses("h\\:", ":hover")}
    ${gerarClasses("a\\:", ":active")} 
  `;

  return x;
};

export default css;