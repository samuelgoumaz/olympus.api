/*
# Imports */
import React from "react";
import {
  convertNumberToMinute,
  convertStringToMinute,
  convertMinuteToString,
} from "../Calendar/CalendarLib";
import Event from "../Event";
import Error from "../Error";
import "./HourGrid.scss";
import "./HourList.scss";
import "./HourRow.scss";
import "./HourCols.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/ */
export interface HourProps {
  display?: string; // <= grid or list
  name?: string | null;
  height?: string;
  content?: JSX.Element | JSX.Element[];
  render?: (data: any) => any;
}

/*
# Export functions */
const Hour: React.FC<HourProps> = ({
  display,
  name,
  height,
  content,
  render,
}) => {

  /*
  # render */
  return (
    <div
      className={`
        ${display === `grid` ? `hour-component-grid` : ``}
        ${display === `list` ? `hour-component-list` : ``}
        ${display === `cols` ? `hour-component-cols` : ``}
        ${display === `row` ? `hour-component-row` : ``}
      `}
    >
      <div
        className={`
        hour-component-inner
      `}
      >
        {display === `cols` ? <div className={`hour`}>{name}</div> : ``}
        {content && content.length !== 0 ? (
          <div className={`content`}>
            {content.map((event, inc) => {
              return render ? (
                render(event, name, content.length, inc)
              ) : (
                <Error key={`error-content-${event.id}`} display={`message`}><strong>no event render</strong></Error>
              )
            })}
          </div>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

/*
# Export
*/
export default Hour;
