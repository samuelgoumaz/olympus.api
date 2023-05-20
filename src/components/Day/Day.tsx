/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Day.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface DayProps {
  mode?: string; // <= grid or list
  dateStart?: Date;
  dateEnd?: Date;
  timeStart?: Time;
  timeEnd?: Time;
  fullday?: JSX.Element | JSX.Element[];
  content?: JSX.Element | JSX.Element[];
  afterday?: JSX.Element | JSX.Element[];
  title?: string | null;
  height?: string;
}



/*
# Class Components
*/
const Day: React.FC<DayProps> = ({
  mode,
  dateStart,
  dateEnd,
  timeStart,
  timeEnd,
  fullday,
  content,
  afterday,
  title,
  height
}) => {
  return (
    <div 
      className={`day-component`}
      style={{
        height: height ? height : `auto`
      }}
    >

      {title && <div className={`day-component-header`}>
        <h5>{title}</h5>
      </div>}

      {fullday && <div className={`day-component-fullday`}>
        {fullday}
      </div>}

      {content && <div className={`day-component-content`}>
        {content}
      </div>}

      {afterday && <div className={`day-component-afterday`}>
        {afterday}
      </div>}

    </div>
  );
};

/*
# Export
*/
export default Day;
