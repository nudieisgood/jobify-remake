const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = "",
  onChange,
}) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="form-select"
        onChange={onChange}
      >
        {list.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
