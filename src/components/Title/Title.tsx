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
  display: string | null;
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
  display,
  children
}: TitleProps) => {
  switch (display) {
    case "component":
      break;
    
    default:
      return (
        <section
          className={`
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
              {title != null ? <h3 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : ``}
              {subtitle != null ? <h5 className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
            </div>
          </div>
      
        </section>
      );
      break;
  }
}

/*
# Export
*/
export default Title;
