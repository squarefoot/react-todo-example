import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./index.style";

const Button = ({ children, type, isLoading, disabled, onClick }) => {
  const typeClass = isLoading ? "loading" : type;
  const isDisabled = isLoading ? true : false;
  const className = classNames(typeClass);
  return (
    <ButtonWrapper
      className={className}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "default",
};

export default Button;
