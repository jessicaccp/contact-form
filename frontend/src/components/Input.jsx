const Input = ({
  label = "Label",
  type = "text",
  name = "input",
  required = false,
  minLength = 3,
  placeholder = "",
  handle = defaultHandle,
}) => {
  if (type === "text")
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          minLength={minLength}
          placeholder={placeholder}
          onChange={handle}
        />
      </>
    );
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={handle}
      />
    </>
  );
};

const defaultHandle = () => {};

export default Input;
