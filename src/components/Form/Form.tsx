/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Form.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FormProps {
  position?: number;
  title?: string;
  subtitle?: string;
  body?: string;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Form: React.FC<FormProps> = ({
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
const Form = ({
  position,
  title,
  subtitle,
  body,
  children
}: FormProps) => (
  <section
    className={`
      form-component
      panel
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    <div className={`form-inner`}>
      <div className={`form-inner-content`}>
        {title && <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} />}
        {subtitle && <h3 className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} />}
        {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
      </div>
      <div className={`form-inner-formular`}>
        {children}
      </div>
    </div>
  </section>
);

/*
# Export
*/
export default Form;
