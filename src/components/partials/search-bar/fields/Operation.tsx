import { useData } from "../../../contexts/DataContext";
import bindClass from "../../../lib/ReactHelpers/bindClass";

const options = [
  { key: "sale", label: "Venda" },
  { key: "rent", label: "Locação" },
  { key: "season", label: "Temporada" },
];

const Component = (props) => {
  const { data, setData } = useData();
  const onChange = ({ target }) => {
    setData({ ...data, operation: target.value });
  };

  return (
    <select className={bindClass(props, "")} onChange={onChange} p="input">
      <option value="123">Operação</option>
      {options.map((row, i) => {
        return (
          <option value={row.key} key={i}>
            {row.label}
          </option>
        );
      })}
    </select>
  );
};

const Partial = {
  Component,
};

export default Partial;
