/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Title.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TitleProps {
  position: number;
  title: string | null;
  subtitle: string | null;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Title: React.FC<TitleProps> = ({
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
const Title = ({
  position,
  title,
  subtitle,
  children
}: TitleProps) => (
  <section
    className={`
      section section-title
      title-component
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    <div className={`fx-content`}>
      {children}
    </div>

    <div className={`title-content`}>
      <div className={`title-inner-content`}>
        {title != null ? <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : ``}
        {subtitle != null ? <h3 className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
      </div>
    </div>

  </section>
);

/*
# Export
*/
export default Title;
