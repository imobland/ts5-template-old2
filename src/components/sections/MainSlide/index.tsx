import { css } from "@emotion/css";

export default function MainSlide(props) {
  return (
    <div className="A1 box | board bg-C2" p="struct">
      <div b="true"></div>
      <div c="true">
        <div p="text">{JSON.stringify(props, null, 2)}</div>
      </div>
    </div>
  );
}
