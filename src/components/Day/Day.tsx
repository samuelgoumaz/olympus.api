/*
# Imports
*/
import React from "react";
import moment from "moment";
import "moment/locale/fr";

import "./DayGrid.scss";
import "./DayList.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface DayProps {
  display?: string; // <= grid or list
  id: string;
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
  display,
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
  moment.locale("fr");
  return (
    <div 
      className={`
        ${display === `grid` ? `day-component-grid` : ``}
        ${display === `list` ? `day-component-list` : ``}
      `}
      style={{
        height: height ? height : `auto`
      }}
    >

      {title && <div className={`day-component-header`}>
        <h4>{moment(title).format("dddd DD MMM")}</h4>
      </div>}

      {fullday && <div className={`day-component-fullday`}>
        {fullday}
      </div>}

      {content && <div className={`day-component-content`}>
        {content}
        {afterday}
      </div>}

    </div>
  );
};

/*
# Export
*/
export default Day;
