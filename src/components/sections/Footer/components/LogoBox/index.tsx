// CONFIGS DO CLIENTE SOBRE O COMPONENTE
import { LogoBox as data } from "../../../../../../src/config/components/Footer";

const Component = () => {
  return (
    <div
      p="struct"
      className={`LogoBox | ${data.class} | flex dir-col gap-1.5b `}
    >
      <div b="true"></div>
      <div c="true">
        <div
          className={`Logo box | ${data.logo.class} | flex dir-row justify-center`}
          p="struct"
        >
          <div b="true"></div>
          <div c="true">
            <img src={data.logo.url} className="max-w-100p" />
          </div>
        </div>

        <div className={`Slogan S-1 | ${data.slogan.class}| `} p="true">
          <div b="true"></div>
          <div c="true">
            <div className="" p="text">
              <div c="true">{data.slogan.text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
