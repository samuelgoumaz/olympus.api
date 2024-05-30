// Import
import React from "react";

// Lib
import moment from "moment";
import {
  convertNumberToMinute,
  convertStringToMinute,
  convertMinuteToString,
} from "../Calendar/CalendarLib";

// Components
import Tags from "../Tags";
import Button from "../Button";
import Buttons from "../Buttons";
import Partners from "../Partners";
import Gallery from "../Gallery";
import Popup, {createPopup} from "../Popup";

// Styles
import "./Debug.scss";
import "./Event.scss";
import "./EventSlide.scss";
import "./EventPage.scss";
import "./EventPopup.scss";
import "./EventCols.scss";
import "./EventList.scss";
import "./EventRow.scss";
import "./EventGrid.scss";

// Locale
import "moment/locale/fr";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/

export interface EventProps {
  debug?: true | false;
  position: number;
  slug?: string;
  display?: string | null; // cols, grid, list, page, popup and row
  mode?: string | null; // If is allday
  href?: boolean | false; // If is allday
  accordeon?: boolean | false; // If is allday

  timeStart?: string | null;
  timeEnd?: string | null;
  dateStart?: string | null;
  dateEnd?: string | null;
  title?: string | null;
  subtitle?: string | null;
  image?: string | null;
  body?: string | null;
  color?: string;
  primary?: string;
  secondary?: string;
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
  buttons?: JSX.Element | JSX.Element[];
  partners?: JSX.Element | JSX.Element[];

  count?: number; // Number of Event on same hour.
  hourGroup?: any; // Require by func eventTop().

  width?: string | null; // Require by func eventTop().  
  height?: string | false;
  top?: number | false;
  left?: number | false;

  fx?: JSX.Element | JSX.Element[];
  scene?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  variants?: JSX.Element | JSX.Element[];
  onClickFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/*
# Class Components
*/
const Event: React.FC<EventProps> = ({
  debug,
  position,
  slug,
  count,
  hourGroup,
  color,
  primary,
  secondary,
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
  fx,
  children,
  variants,
  scene,
  href,
  accordeon,
  onClick
}) => {
  moment.locale("fr");

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
    //console.log("eventHeight > ", myH+`%`)
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
    if (convertStringToMinute(moment(name).hour()) && convertStringToMinute(moment(start).hour())) {
      const myCurrent = convertStringToMinute(moment(name).hour())
      const myStart = convertStringToMinute(moment(start).hour());
      //console.log("eventTop1> ", myCurrent, myStart, (myStart - myCurrent)/60*100+`%`);
      return (myStart - myCurrent)/60*100+`%`
    } else {
      //console.log("eventTop2 > ", convertStringToMinute(name), convertStringToMinute(start))
      return `auto`
    }
  };

  const handleClick = () => {
  };

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

  switch (display) {

    /* 
    # Component COLS */
    case 'cols': // Cols
      return (
        <div 
          className={`
            event-component-cols
            ${mode === `allday` ? `allday` : ``}
            ${debug === true ? `debug` : ``}
          `}
          style={{
            width: timeEnd && timeStart ? eventWidth() : `100%`,
            top: hourGroup && timeEnd && timeStart ? eventTop(hourGroup, timeStart, timeEnd) : `auto`,
            height: hourGroup && timeEnd && timeStart ? eventHeight(hourGroup, timeStart, timeEnd) : `auto`,
            left: position && timeEnd && timeStart ? eventLeft(position) : `auto`,
            zIndex: position ? position : 1
          }}
          onClick={(event: React.MouseEvent<HTMLElement>) => { if (onClick !== false) { onClick() } }}
        >
          {fx ? <div className={`fx`}>{fx}</div> : ``}
          <div className={`event-component-inner`}>
            {children ? children : <div className="event-component-handle">
              {/* time */ timeStart && timeEnd ? <div className="time">{timeStart}{display === `grid` ? ` - ` : ` - `}{timeEnd}</div> : ``}
              <div className="header">
                <h5 className="title">{title}</h5>
                {subtitle ? <h6 className="subtitle">{subtitle}</h6> : ``}
              </div>
              {/* tags tags && <div className={`tags`}>
                {tags ? <Tags elements={tags} align={`left`} /> : ``}
              </div> */}
            </div>}

          </div>
        </div>
      );
      break;
    
    /* 
    # Component LIST */
    case 'list':
      return (
        <div 
          className={`
            event-component-list
            ${mode === `allday` ? `allday` : ``}
            ${debug === true ? `debug` : ``}
          `}
          id={`event-${slug}`}
          style={{
            width: width ? width : `100%`,
            height: height ? height : `auto`,
            top: top ? top : `auto`,
            left: left ? left : `auto`,
            zIndex: position ? position : 1
        }}>

          {fx ? <div className={`fx`}>{fx}</div> : ``}

          <div className={`event-component-inner`}>
              <table className="event-component-handle" onClick={(event: React.MouseEvent<HTMLElement>) => {
                if (accordeon === true && href === false) { 
                  selectToggle(event.currentTarget) 
                } else {
                  if (href === false && onClick && onClick !== false) { 
                    onClick()
                  }
                }
              }}>
                <tbody>
                  <tr>
                    {dateStart ? <td className="date" style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }}>
                      {moment(dateStart).format("ll")} {display === `grid` ? `-` : <br />}
                      {dateEnd && dateEnd !== dateStart ? moment(dateEnd).format("ll") : ``}
                    </td> : ``}
                    {timeStart ? <td className="time" style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }}>{timeStart}{display === `grid` ? `-` : <br />}{timeEnd ? timeEnd : ``}</td> : ``}
                    {tags && <td className={`tags`}><Tags elements={tags} align={`left`} /></td>}
                    <td className="header">
                      <h5 className="title" style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }}>{title}</h5>
                      <h6 className="subtitle" style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }}>{subtitle}</h6>
                    </td>
                    <td className="action">
                      {accordeon === false ? buttons && buttons : ``}
                      {href === false && (body || buttons || partners) ? <Button
                        icon={`expand_more`}
                        primary={primary ?? "black"}
                        secondary={secondary ?? "white"}
                      /> : href ? <Button
                        icon={`chevron_right`}
                        primary={primary ?? "black"}
                        secondary={secondary ?? "white"}
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                          if (onClick && onClick !== false) { 
                            onClick()
                          }
                        }}
                      /> : ``}
                    </td>
                  </tr>
                </tbody>
              </table>

              {href === false && (body || buttons || partners) ? <div className="event-component-container dsp-close">
                {children ? children : <div className="event-component-container-inner">
                  {scene && <div className="event-component-content-col scene">{scene}</div>}
                  {body || variants || buttons || partners ? <div className="event-component-content-col content">
                    {body && <div className="body" dangerouslySetInnerHTML={{ __html: body }} />}
                    {variants ? <div className={`variants`}>{variants}</div> : ``}
                    {buttons && <div className="buttons">
                      {buttons && buttons}
                      {href && <Button
                        icon={`visibility`}
                        primary={primary ?? "black"}
                        secondary={secondary ?? "white"}
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                          if (onClick && onClick !== false) { 
                            onClick()
                          }
                        }}
                      />}
                    </div>}
                    {partners && <div className="partners">
                      {partners && partners}
                    </div>}
                  </div> : ``}
                </div>}
              </div> : ``}
          </div>
        </div>
      );
      break;

    /* 
    # Component POPUP */
    case 'popup':
      /*
      # selectToggle(event) */
      return (
        <div 
        className={`event-component-popup 
        ${debug === true ? `debug` : ``}`}
        style={{
          width: width ? width : `100%`,
          height: height ? height : `auto`,
          top: top ? top : `auto`,
          left: left ? left : `auto`,
          zIndex: position ? position : 1
        }}>
          {fx ? <div className={`fx`}>{fx}</div> : ``}
          <div className={`
            event-component-inner
          `}>
            {children ? children : <>
              {subtitle ? <div className="subtitle">{subtitle}</div> : ``}
              {dateStart ? <div className="date">{moment(dateStart).format("ddd DD MMM YY")}{dateEnd && dateEnd !== dateStart ? ` - ${moment(dateEnd).format("ddd DD MMM YY")}` : ``}</div> : ``}
              {timeStart && timeEnd ? <div className="time">{timeStart}{timeEnd && timeEnd !== timeStart ? `-${timeEnd}` : ``}</div> : ``}

              {scene && <div className="event-component-content-col scene">{scene}</div>}
              {body && <div className="event-component-content-col content">
                <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
              </div>}

              {tags && <div className={`tags`}>
                {<Tags elements={tags} align={`left`} />}
              </div>}
              
              {variants ? <div className={`variants`}>{variants}</div> : ``}

              {buttons && <div className="event-component-content-col buttons">
                {buttons && buttons}
              </div>}

              {partners && <div className="event-component-content-col partners">
                {partners && partners}
              </div>}
            </>}
          </div>
        </div>
      );
      break;
    
    /* 
    # Component PAGE */
    case 'page': // Page
      return (
        <div 
        className={`
          event-component-${display}
          ${mode === `allday` ? `allday` : ``}
          ${debug === true ? `debug` : ``}
        `}
        id={`event-${slug}`}
        >
          {fx ? <div className={`fx`}>{fx}</div> : ``}
          <div className={`
            event-component-inner
          `}>

            {children ? children : <>
              {scene && <div className="event-component-content-col image">{scene}</div>}
              {timeStart && timeEnd ? <div className="time">{timeStart}{display === `grid` ? `-` : <br />}{timeEnd}</div> : ``}
              {tags && <div className={`tags`}>
              {display === `list` ? <Tags elements={tags} align={`left`} /> : ``}
              </div>}
              <div className="header">
                <h5 className="title">{title}</h5>
                {display === `list` ? <h6 className="subtitle">{subtitle}</h6> : ``}
              </div>
              {body && <div className="event-component-content-col content">
                <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
              </div>}
              {variants ? <div className={`variants`}>{variants}</div> : ``}
              {buttons && <div className="event-component-content-col buttons">
                {buttons && buttons}
              </div>}
              {partners && <div className="event-component-content-col partners">
                {partners && partners}
              </div>}

              <div className="action">
                <Button
                  icon={`expand_more`}
                  primary={primary ?? "black"}
                  secondary={secondary ?? "white"}
                />
              </div>
            </>}
          </div>
          
        </div>
      );
      break;

    /* 
    # Component DEFAULT */
    default:
      return (
        <div 
        className={`
          event-component-${display}
          ${mode === `allday` ? `allday` : ``}
          ${debug === true ? `debug` : ``}
        `}
        id={`event-${slug}`}
        >
          
          {fx ? <div className={`fx`}>{fx}</div> : ``}
          <div className={`
            event-component-inner
          `}>

            {scene && <div className={`scene`} onClick={(event: React.MouseEvent<HTMLElement>) => { onClick() }}>
              {scene}
            </div>}

            <div className={`content`} onClick={(event: React.MouseEvent<HTMLElement>) => { onClick() }}>
              {children ? children : <>
                
                {title && <h3 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="title">{title}</h3>}
                {subtitle ? <h6 style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="subtitle">{subtitle}</h6> : ``}

                <div className="date" style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }}>{moment(dateStart).format("ddd DD MMM YY")}{new Date(dateEnd).getTime() !== new Date(dateStart).getTime() ? `${dateEnd ? ` — `+moment(dateEnd).format("ddd DD MMM YY") : ``}` : ``}</div>
                {timeStart && timeEnd && timeStart !== timeEnd ? <div style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} className="time">{timeStart}{display === `grid` ? ` - ` : ` - `}{timeEnd ? timeEnd : ``}</div> : ``}
                
                {tags && <div className={`tags`}>
                  {tags ? <Tags elements={tags} align={display === "grid" ? "center" : "left"} /> : ``}
                </div>}

                {body && <div className="body" style={{ color: `${color && color !== false && color !== `false` ? color : `inherit`}` }} dangerouslySetInnerHTML={{ __html: body }} />}
                
                {/*buttons && <div className="buttons">
                  {buttons && buttons}
                 </div>*/}

                {variants && <div className={`variants`}>{variants}</div>}

                {display !== "grid" ? <div className="partners">
                  {partners && partners}
                </div> : ``}

                <div className="action">
                  {buttons && buttons}
                  {onClick ? <Button
                    icon={`arrow_forward`}
                    primary={primary ?? "black"}
                    secondary={secondary ?? "white"}
                    onClick={(event: React.MouseEvent<HTMLElement>) => { onClick() }}
                  /> : ``}
                </div>
                
              </>}
            </div>

          </div>
          
        </div>
      );
  }
};

/*
# Export
*/
export default Event;
