import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <Button
        text={!showAdd ? "add" : "close"}
        color={!showAdd ? "green" : "red"}
        clickFunc={onAdd}
      />
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
