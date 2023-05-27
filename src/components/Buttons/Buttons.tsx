/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./Buttons.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ButtonsProps {
  elements?: JSX.Element | JSX.Element[];
  align?: string | null;
}



/*
# Class Components
*/
/*const Buttons: React.FC<ButtonsProps> = ({
  left_positive,
  left_negative,
  middle_positive,
  middle_negative,
  fx_aside,
  fx_negative,
  fx_top,
  fx_pinned,
  title,
  subtitle,
  children
}) => (
*/
const Buttons = ({
  elements,
  align
}: ButtonsProps) => {
  return (
    <div
      className={`
        buttons-component
      `}
    >
      <div className={`
        buttons-component-inner
        ${align === `center` ? `align-center` : ``}
        ${align === `left` ? `align-left` : ``}
        ${align === `right` ? `align-right` : ``}
      `}>
        {elements != null ? Object.keys(elements).map((key) => (
          <Button
            key={elements[key].attributes ? elements[key].attributes.slug : elements[key].slug}
            label={elements[key].attributes ? elements[key].attributes.name : elements[key].name}
            icon={elements[key].attributes ? elements[key].attributes.icon : elements[key].icon}
            mode={`default`}
            color={`black`}
            state={`default`}
          />
        )) : ``}
      </div>
    </div>
  );
};

/*
# Export
*/
export default Buttons;
