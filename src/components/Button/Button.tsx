import React from "react";
import 'material-icons/iconfont/material-icons.css';
import "./ButtonDefault.scss";
import "./ButtonHeader.scss";
import "./ButtonIndicator.scss";
import "./ButtonBorder.scss";
import "./ButtonSubmit.scss";

export interface ButtonProps {
  label?: string | null;
  icon?: string | null;
  mode?: string | null;
  radius?: string | null;
  color?: string | null;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Button = ({
  label,
  icon,
  mode,
  color,
  radius,
  onClick
}: button) => {
  return (
    <button
      type={mode == `submit` ? `submit` : ``}
      className={`
        ${mode == `header` ? `button-header-component` : ``}
        ${mode == `indicator` ? `button-indicator-component` : ``}
        ${mode == `border` ? `button-border-component` : ``}
        ${mode == `default` || mode == null ? `button-component` : ``}
        ${mode == `submit` || mode == null ? `button-submit-component` : ``}
        ${icon != null ? `hv-icon` : ``}
        ${label ? `hv-label` : ``}
      `}
      style={{
        color: color ? color : `inherit`,
        border: mode == `border` ? `2px solid ${color ? color : `black`}` : `none`,
        borderRadius: radius != null ? `${radius}` : ``
      }}
      onClick={onClick}
    >
      {label ? <span className={`label`}>{`${label}`}</span> : ``}
      {icon ? <span className={`icon material-icons`}>{`${icon}`}</span> : ``}
    </button>
  );
};

export default Button;
