import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

import classes from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  to?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ to, href, onClick, children }: ButtonProps) => {
  const commonProps = {
    className: classes.button,
  };

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
};

export default Button;
