/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Introduction.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface IntroductionProps {
  position: number;
  body: string | null;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Introduction: React.FC<IntroductionProps> = ({
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
const Introduction = ({
  position,
  body,
  children
}: IntroductionProps) => (
  <section
    className={`
      introduction-component
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    <div className={`introduction-content`}>
      {children}
    </div>

    <div className={`introduction-inner`}>
      <div className={`introduction-inner-content`}>
        <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  </section>
);

/*
# Export
*/
export default Introduction;
