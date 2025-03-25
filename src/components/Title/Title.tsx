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
            width: "100%",
            position: `relative`,
            zIndex: position ?? 2,
            display: "block"
          }}
        >
          {children && <div className={`fx-content`} style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1
          }}>
            {children}
          </div>}
          {title || subtitle ? <div className={`title-content header`} style={{
            width: "100%",
            padding: "0 1em",
            display: "block",
            position: "relative",
            zIndex: 3
          }}>
            <div className={`title-inner-content`}>
              {title != null ? <h1 className={`title`} dangerouslySetInnerHTML={{ __html: title }} style={{
                width: "50%",
                display: "inline-block",
                verticalAlign: "middle",
                marginBottom: 0,
                margin: 0
              }} /> : ``}
              {subtitle != null ? <h4 className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} style={{
                width: "50%",
                display: "inline-block",
                verticalAlign: "middle",
                marginBottom: 0,
                margin: 0
              }} /> : ``}
            </div>
          </div> : ``}
          {date?.length > 0 || time?.length > 0 ? <div className={`title-content datetime`}>
            <div className={`title-inner-content`}>
              {date?.length > 0 ? <div className={`date`} dangerouslySetInnerHTML={{ __html: date }} /> : ``}
              {time?.length > 0 ? <div className={`time`} dangerouslySetInnerHTML={{ __html: time }} /> : ``}
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
