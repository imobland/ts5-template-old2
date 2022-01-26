import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useData } from "../../../contexts/DataContext";
import bindClass from "../../../lib/ReactHelpers/bindClass";
import { initTypes } from "../../../store/actions/property";

const Component = (props) => {
  const { data, setData } = useData();
  const onChange = ({ target }) => {
    setData({ ...data, type: target.value });
  };

  const types = useSelector(({ property }: any) => property.types);

  const dispatch: any = useDispatch();

  useEffect(() => dispatch(initTypes()), [dispatch]);

  return (
    <select className={bindClass(props, "")} onChange={onChange} p="input">
      <option value="123">Tipo</option>
      {types.map((row, i) => (
        <option value={row.key} key={i}>
          {row.name}
        </option>
      ))}
    </select>
  );
};

const Partial = { Component };

export default Partial;
