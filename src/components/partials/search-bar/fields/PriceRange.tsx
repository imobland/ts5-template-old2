import { useData } from "../../../contexts/DataContext";
import bindClass from "../../../lib/ReactHelpers/bindClass";

const Component = (props) => {
  const { data, setData } = useData();
  const onChange = ({ target }) => {
    setData({ ...data, priceRange: target.value });
  };
  return (
    <select className={bindClass(props, "")} onChange={onChange} p="input">
      <option value="123">Valores</option>
      <option value="123">1.000 à 5.000 R$</option>
      <option value="123">5.000 à 10.000 R$</option>
      <option value="123">10.000 à 20.000 R$</option>
    </select>
  );
};
const Partial = {
  Component,
  // getServerSideProps,
};
export default Partial;
