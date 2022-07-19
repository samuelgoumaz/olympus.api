/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Text.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TextProps {
  position?: number;
  body?: string;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Text: React.FC<TextProps> = ({
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
const Text = ({
  position,
  body,
  children
}: TextProps) => (
  <section
    className={`
      section section-text
      text-component
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    <div className={`text-content`}>
      {children}
    </div>

    <div className={`text-inner`}>
      <div className={`text-inner-content`}>
        {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${body}` }} />}
      </div>
    </div>

  </section>
);

/*
# Export
*/
export default Text;
