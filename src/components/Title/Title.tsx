/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Title.scss";
import "./TitleDate.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TitleProps {
  position: number;
  title: string | null;
  subtitle: string | null;
  date: string | false;
  time: string | false;
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
  date,
  time,
  display,
  children
}: TitleProps) => {
  switch (display) {
    case "component":
      break;
    
    default:
      return (
        <section
          className={display != null ? `title-component-${display}` : `title-component`}
          style={{
            position: `relative`,
            zIndex: position ?? 2
          }}
        >
      
          <div className={`fx-content`}>
            {children}
          </div>
      
          {title || subtitle ? <div className={`title-content header`}>
            <div className={`title-inner-content`}>
              {title != null ? <h3 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : ``}
              {subtitle != null ? <h5 className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
            </div>
          </div> : ``}

          {date !== null || time !== null ? <div className={`title-content datetime`}>
            <div className={`title-inner-content`}>
              {date != null ? <div className={`date`} dangerouslySetInnerHTML={{ __html: date }} /> : ``}
              {time != null ? <div className={`time`} dangerouslySetInnerHTML={{ __html: time }} /> : ``}
            </div>
          </div> : ``}
      
        </section>
      );
      break;
  }
}

/*
# Export
*/
export default Title;
