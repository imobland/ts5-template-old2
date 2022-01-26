const _css = `

    position: absolute;
    height: 100vh;
    width: 100%;
    opacity:0;
    pointer-events:none;
    transition: all .25s ease;
    .box{
      transition: all .25s ease;
      transform: translateY(-20rem);
    }
    &.show{
      opacity:1;
      pointer-events:all;
      .box{
        transition: all .25s ease;
        transform: translateY(0rem);
      }
    }

`;

export default _css;
