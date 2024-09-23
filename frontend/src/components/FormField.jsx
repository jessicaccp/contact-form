const FormField = ({
  label = "Label",
  type = "text",
  name = "input",
  required = false,
  autofocus = false,
  minLength = 3,
  rows = 10,
  placeholder = "",
  handle = defaultHandle,
}) => {
  const divClasses = "flex flex-col gap-1";
  const inputClasses = "p-2 drop-shadow-sm text-black rounded";
  const textareaClasses = inputClasses + " resize-none";
  const labelClasses = "";

  if (name === "message")
    return (
      <div className={divClasses}>
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          minLength={minLength}
          rows={rows}
          required={required}
          autoFocus={autofocus}
          placeholder={placeholder}
          onChange={handle}
          className={textareaClasses}
        />
      </div>
    );

  if (type === "text")
    return (
      <div className={divClasses}>
        <label htmlFor={name} className={labelClasses}>
          {label} {!required && <span className="text-xs">(optional)</span>}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          autoFocus={autofocus}
          minLength={minLength}
          placeholder={placeholder}
          onChange={handle}
          className={inputClasses}
        />
      </div>
    );

  return (
    <div className={divClasses}>
      <label htmlFor={name} className={labelClasses}>
        {label} {!required && <span className="text-xs">(optional)</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        autoFocus={autofocus}
        placeholder={placeholder}
        onChange={handle}
        className={inputClasses}
      />
    </div>
  );
};

const defaultHandle = () => {};

export default FormField;
