import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useData } from "../../../contexts/DataContext";
import bindClass from "../../../lib/ReactHelpers/bindClass";
import { initDistricts } from "../../../store/actions/property";

const Component = (props) => {
  const dispatch: any = useDispatch();
  const { data, setData } = useData();

  useEffect(() => dispatch(initDistricts()), [dispatch]);

  let districts = useSelector(({ property }: any) => property.districts);

  if (data.city) districts = districts.filter((row) => row.city == data.city);

  const onChange = ({ target }) => {
    setData({ ...data, district: target.value });
  };

  return (
    <select
      className={bindClass(props, "")}
      disabled={!data.city}
      onChange={onChange}
      p="input"
    >
      <option value="" selected={!data.district}>
        Bairro
      </option>
      {districts.map((row, i) => (
        <option key={i} value={row.name}>
          {row.name}
        </option>
      ))}
    </select>
  );
};

const Partial = { Component };

export default Partial;
