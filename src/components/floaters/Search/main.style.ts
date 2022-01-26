const _css = `

    position: absolute;
    height: 100vh;
    width: 100%;
    display: none;
    pointer-events: all;
    &.open {
      display: flex;
    }

    >[c] {
      position: unset;
    }

    .Bglayer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .Painel {
      position: absolute;
      right: 0;
      top: 0;
      width: 340px;
      height: 100vh;
      transform: translateX(380px);
      transition: all .25s ease;
      @media (max-width: 400px) {
        width: 310px;
      }
    }
    &.in .Painel {
        transform: translateX(0px);
    }

    .BtnClose{
      position: absolute;
      top: 0px;
      cursor: pointer;
      right: calc(100% + 0px);
    }
    .Content{

    }
  
    .Bglayer {
      opacity: 0;
      transition: all .3s ease;
    }
    &.in .Bglayer {
        opacity: 1;
    }

`;

export default _css;
