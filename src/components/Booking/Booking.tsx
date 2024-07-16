/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Booking.scss";
import "./BookingWidget.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface BookingProps {
  debug?: true | false;
  position: number;
  display?: string | false; // widget, aside
  source: string;
  body?: string;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Booking: React.FC<BookingProps> = ({
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
const Booking = ({
  debug,
  source,
  display,
  position,
  body,
  fx,
  scene,
  children,
  buttons
}: BookingProps) => {
  return <section
    className={`
      ${display === "default" ? `booking-component` : ``}
      ${display === "widget" ? `booking-component-widget` : ``}
      ${display === "aside" ? `booking-component-aside` : ``}
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    {fx ? <div className={`fx`}>{fx}</div> : ``}
    <div className={`booking-inner`}>
      <div className={`booking-inner-content`}>
        {children ? children : <h6>No content</h6>}
      </div>
    </div>
  </section>
};

/*
# Export
*/
export default Booking;
