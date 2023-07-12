import React from "react";
import classnames from "classnames";
import "./button.css";

interface Props {
  children: React.ReactNode;
  link?: boolean;
  type?: "submit" | "button";
  onClick?(): void;
}

function Button({ children, link, type, onClick }: Props) {
  const btnStyles = classnames({
    form__button: !link,
    "btn-link": link,
  });

  return (
    <button className={btnStyles} type={type ?? "submit"} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
