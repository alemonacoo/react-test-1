import PropTypes from "prop-types";

const Button = ({ text, color, clickFunc }) => {
  return (
    <button
      onClick={clickFunc}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  clickFunc: PropTypes.func,
};

export default Button;
