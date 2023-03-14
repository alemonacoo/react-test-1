import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h2>{title}</h2>
      {location.pathname === "/" && (
        <Button
          text={!showAdd ? "add" : "close"}
          color={!showAdd ? "green" : "red"}
          clickFunc={onAdd}
        />
      )}
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
