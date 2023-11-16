/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputContent.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputContentProps {
  title?: string | null;
  subtitle: string | null;
  body?: string | null;
}



/*
# Class Components
*/
/*const InputContent: React.FC<InputContentProps> = ({
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
const InputContent = ({
  title,
  subtitle,
  body
}: InputContentProps) => (
  <div className={"form-item form-item-content"}>
    {subtitle && <label className={`subtitle`}>{subtitle}</label>}
    {title && <h6 className={`title`}>{title}</h6>}
    {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
  </div>
);

/*
# Export
*/
export default InputContent;
