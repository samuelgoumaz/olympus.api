/*
# Imports
*/
import React from "react";
import {
  convertNumberToMinute,
  convertStringToMinute,
  convertMinuteToString,
} from "../Calendar/CalendarLib";
import Tags from "../Tags";
import Button from "../Button";
import Buttons from "../Buttons";
import Partners from "../Partners";
import Gallery from "../Gallery";
import Popup, {createPopup} from "../Popup";
import "./Event.scss";
import "./EventGrid.scss";
import "./EventGridAllday.scss";
import "./EventList.scss";
import "./EventListAllday.scss";
import "./EventPopup.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface EventProps {
  id?: string;
  slug?: string;
  position?: number;
  count?: number;
  hourGroup?: any;
  display?: string | null;
  mode?: string | null;
  timeStart?: string | null;
  timeEnd?: string | null;
  dateStart?: string | null;
  dateEnd?: string | null;
  width?: string | null;
  title?: string | null;
  subtitle?: string | null;
  body?: string | null;
  height?: string | false;
  top?: number | false;
  left?: number | false;
  tags?: {
    id: number;
    slug: string | null;
    name: string | null;
    parent: {
      id: number;
      slug: string | null;
      name: string | null;
    };
    children?: {
      id: number;
      slug: string | null;
      name: string | null;
    };
  };
  images?: JSX.Element | JSX.Element[];
  buttons?: JSX.Element | JSX.Element[];
  partners?: JSX.Element | JSX.Element[];
  content?: any[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
const Event: React.FC<EventProps> = ({
  id,
  slug,
  position,
  count,
  hourGroup,
  display,
  mode,
  timeStart,
  timeEnd,
  dateStart,
  dateEnd,
  width,
  title,
  subtitle,
  body,
  height,
  top,
  left,
  tags,
  partners,
  buttons,
  images,
  content,
  onClick
}) => {


  /*
  # eventHeight() */
  const eventHeight = (name: string, start: any, end: any) => {
    let myH = 100;
    if (convertStringToMinute(start) !== 0) {
      const myCurrent = convertStringToMinute(name);
      const myStart = convertStringToMinute(start);
      const myEnd = convertStringToMinute(end);
      myH = ((myEnd - myStart)/60)*100;

      if (myH < 0) {
        myH = Math.abs((myStart - (24 * 60) - myEnd).toFixed(2) * (100 / (count * 60)));
      }

    } else {
      const myEnd = convertStringToMinute(end);
      myH = myEnd/60*100
    }

    return myH+`%`;
  };

  /*
  # eventWidth() */
  const eventWidth = () => {
    if (count > 1) {
      return `${100/count}%`
    } else {
      return `100%`
    }
  };

  /*
  # eventLeft() */
  const eventLeft = (inc: number) => {
    const decalage = 100/count;
    return inc*decalage+"%";
  };

  /*
  # eventTop() */
  const eventTop = (name: string, start: any, end: any) => {
    if (convertStringToMinute(name) && convertStringToMinute(start) && convertStringToMinute(end)) {
      const myCurrent = convertStringToMinute(name)
      const myStart = convertStringToMinute(start);
      return (myStart - myCurrent)/60*100+`%`
    } else {
      return `auto`
    }
  };

  const handleClick = () => {
  };

  switch (display) {
    case 'grid':
      return (
        <div 
        className={`
          ${mode === `allday` ? `event-component-${display}-allday` : `event-component-${display}`}
        `}
        style={{
          width: timeEnd && timeStart ? eventWidth() : `100%`,
          top: hourGroup && timeEnd && timeStart ? eventTop(hourGroup, timeStart, timeEnd) : `auto`,
          height: hourGroup && timeEnd && timeStart ? eventHeight(hourGroup, timeStart, timeEnd) : `auto`,
          left: position && timeEnd && timeStart ? eventLeft(position) : `auto`,
          zIndex: position ? position : 1
        }}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          onClick()       
        }}
        >
          <div className={`
            event-component-inner
          `}>
    
            <div className="event-component-handle">

              {/* time */ timeStart && timeEnd ? <div className="time">{timeStart}{display === `grid` ? `-` : <br />}{timeEnd}</div> : ``}
              {/* tags */ tags && <div className={`tags`}>
                {display === `list` ? <Tags elements={tags} align={`left`} /> : ``}
              </div>}

              <div className="header">
                <h5 className="title">{title}</h5>
                {display === `list` ? <h6 className="subtitle">{subtitle}</h6> : ``}
              </div>

              <div className="actions"></div>
            </div>
  
            <div className="event-component-content">
            </div>
                 
          </div>
        </div>
      );
      
      break;
    case 'list':
      /*
      # selectToggle(event) */
      function selectToggle (event) {
        const parent = event.parentElement.parentElement;
        const handle = parent.getElementsByClassName("event-component-handle")[0];
        const container = parent.getElementsByClassName("event-component-container")[0];

        if (container.classList.contains("dsp-open")) {
          container.classList.add("dsp-close");
          container.classList.remove("dsp-open");
        } else {
          container.classList.add("dsp-open");
          container.classList.remove("dsp-close");
        }
      }
      return (
        <div 
        className={`
          ${mode === `allday` ? `event-component-${display}-allday` : `event-component-${display}`}
        `}
        id={`event-${slug}`}
        style={{
          width: width ? width : `100%`,
          height: height ? height : `auto`,
          top: top ? top : `auto`,
          left: left ? left : `auto`,
          zIndex: position ? position : 1
        }}
        >
          <div className={`
            event-component-inner
          `}>

            <div className="event-component-handle" onClick={
                    (event: React.MouseEvent<HTMLElement>) => {
                      selectToggle(event.currentTarget)
                    }
                  }>
              {timeStart && timeEnd ? <div className="time">{timeStart}{display === `grid` ? `-` : <br />}{timeEnd}</div> : ``}
              {tags && <div className={`tags`}>
              {display === `list` ? <Tags elements={tags} align={`left`} /> : ``}
              </div>}
              <div className="header">
                <h5 className="title">{title}</h5>
                {display === `list` ? <h6 className="subtitle">{subtitle}</h6> : ``}
              </div>
              <div className="action">
                <Button
                  icon={`expand_more`}
                />
              </div>
            </div>

            <div className="event-component-container dsp-close">
              <div className="event-component-container-inner">
                {images && <div className="event-component-content-col image">{images}</div>}
                {body && <div className="event-component-content-col content">
                  <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
                </div>}
                {buttons && <div className="event-component-content-col buttons">
                  {buttons && buttons}
                </div>}
                {partners && <div className="event-component-content-col partners">
                  {partners && partners}
                </div>}
              </div>
            </div>

          </div>
          
        </div>
      );
    case 'popup':
      /*
      # selectToggle(event) */
      return (
        <div 
        className={`event-component-popup`}
        style={{
          width: width ? width : `100%`,
          height: height ? height : `auto`,
          top: top ? top : `auto`,
          left: left ? left : `auto`,
          zIndex: position ? position : 1
        }}
        >
          <div className={`
            event-component-inner
          `}>

            {subtitle ? <div className="subtitle">{subtitle}</div> : ``}
            {dateStart ? <div className="date">{dateStart}{dateEnd && dateEnd !== dateStart ? ` - ${dateEnd}` : ``}</div> : ``}
            {timeStart && timeEnd ? <div className="time">{timeStart}{timeEnd && timeEnd !== timeStart ? `-${timeEnd}` : ``}</div> : ``}
            {tags && <div className={`tags`}>
            {display === `list` ? <Tags elements={tags} align={`left`} /> : ``}
            </div>}

            {images && <div className="event-component-content-col image">{images}</div>}
            {body && <div className="event-component-content-col content">
              <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
            </div>}

            {buttons && <div className="event-component-content-col buttons">
              {buttons && buttons}
            </div>}

            {partners && <div className="event-component-content-col partners">
              {partners && partners}
            </div>}

          </div>
          
        </div>
      );
      break;
    default:
  }
};

/*
# Export
*/
export default Event;
