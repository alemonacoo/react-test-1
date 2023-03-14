import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" clickFunc={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "questo è il default prop",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
