/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Hour from "../Hour"
import "./Calendar.scss";
import "./CalendarGrid.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CalendarProps {
  position?: number;
  display?: string;
  elements?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  align?: string | null;
}



/*
# Class Components
*/
/*const Calendar: React.FC<CalendarProps> = ({
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
const Calendar = ({
  position,
  display,
  children,
  elements,
}: CalendarProps) => {

  function render (display) {
    switch (display) {

      /*
      Grid Display*/
      case "grid":
        break;

      /*
      Default Display*/
      default:
        break;
    }
  }

  return (
    <section
      className={`
        ${display === `grid` ? `calendar-component-grid` : `calendar-component`}
        panel
      `}
      style={{
        zIndex: position ?? 3
      }}
    >
      {display ? <h1>hello</h1> : <h1>null</h1>}
      <div className={`calendar-component-inner`}>


      {elements != null ? Object.keys(elements).map((key) => (
        <Hour
          id={elements[key].key}
          name={elements[key].name}
        />
      )) : ``}

      {children && children}
      </div>
    </section>
  );
};

/*
# Export
*/
export default Calendar;
