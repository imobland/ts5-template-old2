
const _css =  `

  .dropdown:hover > [c] > .dd-content {
    pointer-events: all;
    opacity: 1;
  }
  .dropdown > [c] > .dd-content {
    pointer-events: none;
    opacity: 0;
    transition: all .25s ease;
  }
  .dd-content {
    position: absolute;
  }
  .dd-t-100 > [c] > .dd-content {
    top: 100%;
  }
  .dd-l-0 > [c] > .dd-content {
    left: 0%;
  }
  .dd-t-0 > [c] > .dd-content {
    top: 0%;
  }
  .dd-l-100 > [c] > .dd-content {
    left: 100%;
  }
`;

export default _css;