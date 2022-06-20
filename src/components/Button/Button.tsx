import React from "react";
import 'material-icons/iconfont/material-icons.css';
import "./Button.scss";

export interface ButtonProps {
  label?: string | null;
  icon?: string | null;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Button = ({
  label,
  icon,
  onClick
}: button) => {
  return (
    <button className={`button-component ${icon != null ? `hv-icon` : ``} ${label ? `hv-label` : ``} `} onClick={onClick}>
      {label ? <span className={`label`}>{label}</span> : ``}
      {icon? <span className={`icon material-icons`}>{icon}</span> : ``}
    </button>
  );
};

export default Button;
