import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useData } from "../../../contexts/DataContext";
import bindClass from "../../../lib/ReactHelpers/bindClass";
import { initCities } from "../../../store/actions/property";

const Component = (props) => {
  const dispatch: any = useDispatch();
  const { data, setData } = useData();

  useEffect(() => dispatch(initCities()), [dispatch]);

  const cities = useSelector(({ property }: any) => property.cities);

  const onChange = ({ target }) => {
    const newData = { ...data, city: target.value };
    newData.district = "";
    setData(newData);
  };

  return (
    <select className={bindClass(props, "")} p="input" onChange={onChange}>
      <option value="">Cidade {cities.length == 0 ? "loading..." : ""}</option>
      {cities &&
        cities.map((row, i) => (
          <option key={i} value={row.name}>
            {row.name}
          </option>
        ))}
    </select>
  );
};

const Partial = { Component };

export default Partial;
