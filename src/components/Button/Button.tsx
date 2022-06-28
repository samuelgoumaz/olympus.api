import React from "react";
import 'material-icons/iconfont/material-icons.css';
import "./ButtonDefault.scss";
import "./ButtonHeader.scss";

export interface ButtonProps {
  header?: string | false;
  label?: string | null;
  icon?: string | null;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Button = ({
  header,
  label,
  icon,
  onClick
}: button) => {
  return (
    <button className={`
      ${header == true ? `button-header-component` : `button-component`}
      ${icon != null ? `hv-icon` : ``}
      ${label ? `hv-label` : ``}
    `} onClick={onClick}>
      {label ? <span className={`label`}>{label}</span> : ``}
      {icon? <span className={`icon material-icons`}>{icon}</span> : ``}
    </button>
  );
};

export default Button;
