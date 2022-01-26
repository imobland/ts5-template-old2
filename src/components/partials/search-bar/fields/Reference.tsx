import { useData } from "../../../contexts/DataContext";
import bindClass from "../../../lib/ReactHelpers/bindClass";

const Component = (props) => {
  const { data, setData } = useData();
  const onChange = ({ target }) => {
    setData({ ...data, reference: target.value });
  };
  return (
    <input
      className={bindClass(props, "")}
      placeholder="Referência"
      onChange={onChange}
      p="input"
    />
  );
};
const Partial = { Component };

export default Partial;
