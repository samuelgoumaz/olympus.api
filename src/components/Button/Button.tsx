import React from "react";
import 'material-icons/iconfont/material-icons.css';
import "./ButtonDefault.scss";
import "./ButtonHeader.scss";
import "./ButtonIndicator.scss";
import "./ButtonBorder.scss";

export interface ButtonProps {
  label?: string | null;
  icon?: string | null;
  mode?: string | false;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Button = ({
  label,
  icon,
  mode,
  onClick
}: button) => {
  return (
    <button className={`
      ${mode == `header` ? `button-header-component` : ``}
      ${mode == `indicator` ? `button-indicator-component` : ``}
      ${mode == `border` ? `button-border-component` : ``}
      ${mode == `default` || !mode ? `button-component` : ``}
      ${icon != null ? `hv-icon` : ``}
      ${label ? `hv-label` : ``}
    `} onClick={onClick}>
      {label ? <span className={`label`}>{label}</span> : ``}
      {icon? <span className={`icon material-icons`}>{icon}</span> : ``}
    </button>
  );
};

export default Button;
