const Button = ({
  type = "button",
  value = "Button",
  handle = defaultHandle,
}) => {
  const classes =
    "mt-2 p-2 bg-pink-600 hover:bg-pink-800 active:bg-pink-400 text-white rounded cursor-pointer";

  if (type === "button")
    return (
      <input type={type} value={value} className={classes} onClick={handle} />
    );

  return <input type={type} value={value} className={classes} />;
};

const defaultHandle = () => {};

export default Button;
