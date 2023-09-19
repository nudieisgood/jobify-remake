const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  required = true,
}) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        onChange={onChange}
        className="form-input"
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue || ""}
        required={required}
      />
    </div>
  );
};
export default FormRow;
