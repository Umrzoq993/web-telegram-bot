import "./button.css";

const Button = (props) => {
  const { type, title, onClick, disabled } = props;
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      } ${disabled ? "disabled" : ""}`}
      onClick={!disabled ? onClick : null}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
