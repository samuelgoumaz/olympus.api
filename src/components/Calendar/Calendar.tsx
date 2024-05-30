/*
# Importation */
import React from "react";
import Slider from "react-slick";
import Hour from "../Hour";
import Day from "../Day";
import Event from "../Event";
import moment from "moment";
import Title from "../Title";
import {
  convertNumberToMinute,
  convertStringToMinute,
  convertMinuteToString,
} from "./CalendarLib";
import "./CalendarGrid.scss";
import "./CalendarRow.scss";
import "./CalendarList.scss";
import "./CalendarCols.scss";
import "./CalendarSlide.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";

/*
# Interface */
export interface CalendarProps {
  position?: number;
  title: string | null;
  subtitle: string | null;
  slug?: string;
  dateStart?: Date;
  dateEnd?: Date;
  timeStart?: number;
  timeEnd?: number;
  display?: string;
  group?: {
    day: true | false;
    month: true | false;
    year: true | false;
  };
  elements?: JSX.Element | JSX.Element[];
  filter?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  render?: (data: any) => any;
}

/*
# Export functions */
const Calendar: React.FC<CalendarProps> = ({
  position,
  title,
  subtitle,
  slug,
  dateStart,
  dateEnd,
  timeStart,
  timeEnd,
  group,
  display,
  elements,
  filter,
  children,
  render,
}) => {

  /*
  # General */
  let calendarData = [];
  let nextId = [];
  let dateTraceDay = false;
  let dateCompareDay = false;
  let dateTraceHour = false;
  let dateCompareHour = false;

  /*
  # splitByDay */
  const splitByDay = (dataSortByEvent: boolean) => {
    if (dateTraceDay === false) {
      dateTraceDay = dataSortByEvent;
      dateCompareDay = true;
    } else if (dateTraceDay === dataSortByEvent) {
      dateCompareDay = false;
    } else {
      dateTraceDay = dataSortByEvent;
      dateCompareDay = true;
    }
  };

  /*
  # getNextId */
  const getNextId = (myData: any[], current: number) => {
    let myNextId = null;
    let dataKeys = Object.keys(myData);
    let currentDate = new Date(myData[current].date);
    let nextDate = new Date(myData[current].date);
    nextDate.setDate(nextDate.getDate() + 1);

    myData.find((item) => {
      if (item && item.date) {
        if (
          nextDate.toLocaleDateString("en-US") ===
          new Date(item.date).toLocaleDateString("en-US")
        ) {
          myNextId = item;
        }
      }
    });

    nextId = myNextId;
    return myNextId;
  };

  /*
  # applyRangeCalendar */
  function applyRangeCalendar(timeStart, timeEnd, myData) {
    let calendarKeys = Object.keys(myData);
    let nextDay = null;
    let editCalendar = [...myData];

    if (myData && Object.keys(myData).length > 0) {
      // if calendar useState

      let currentRange = [];
      let nextRange = [];

      if (Number(timeStart)) {
        // set current Range
        currentRange = Number(timeStart);
      }

      if (Number(timeEnd)) {
        // set current Range
        nextRange = Number(timeEnd);
      }

      Object.keys(myData).map(
        // apply for each day
        (incDay) => {
          let elements = [];
          let startDate = new Date(myData[incDay].title);
          let nextDate = new Date(myData[incDay].title);
          nextDate.setDate(nextDate.getDate() + 1);

          // apply range for current day.
          Object.keys(myData[incDay].elements).map(
            (incCurrentDayHour, i) =>
              incCurrentDayHour >= Number(timeStart/60) &&
              (elements[incCurrentDayHour] =
                myData[incDay].elements[incCurrentDayHour])
          );

          nextDay = getNextId(myData, incDay);
          if (nextDay != null) {
            if (
              nextDate.toLocaleDateString("en-US") ==
              new Date(nextDay.title).toLocaleDateString("en-US")
            ) {
              Object.keys(nextDay.elements).map(
                // apply range for current day.
                (incNextDayHour, i) =>
                  incNextDayHour <= Number(timeEnd/60) &&
                  (elements[incNextDayHour] = nextDay.elements[incNextDayHour])
              );
            } else {
              for (let incHour = 0; incHour <= Number(timeEnd/60); incHour++) {
                // for each hours
                elements[incHour] = {
                  title: convertMinuteToString(convertNumberToMinute(incHour)),
                  elements: [],
                };
              } // end for
            }

            //updateCalendar();

            //setCalendar([...calendar, elements]);
            editCalendar[incDay] = {
              ...editCalendar[incDay],
              elements: elements,
            };
          }
        }
      );
    }
    let myNewCalendar = [...editCalendar];
    return myNewCalendar.filter((element) => {
      return element !== undefined;
    });
  }

  /*
  # pushCalendar */
  function pushCalendar(eventData: any, incDay: number) {
    splitByDay(eventData.date_start);

    if (dateCompareDay === true) {
      // compare day

      let newCalendarData = {
        // push date group into class array.
        title: eventData.date_start,
        date: new Date(eventData.date_start).toLocaleDateString(
          "en-US"
        ),
        elements: [],
        elements_allday: [],
      };

      // for all events without all day long duration.
      for (let incHour = 0; incHour < 24; incHour++) {
        // for each hour
        const query = elements.filter(
          // querying events related to the hour and day.
          (itemFilter) =>
            itemFilter.date_start === eventData.date_start &&
            convertStringToMinute(itemFilter.time_start) === convertNumberToMinute(incHour) &&
            itemFilter.is_all_day !== true ? true : false
        );
        newCalendarData.elements[incHour] = {
          // push event to the hours array.
          title: convertMinuteToString(convertNumberToMinute(incHour)),
          elements: query,
        };
      } // end for

      // for all events with all day long duration.
      const queryAllDayLong = elements.filter(
        // querying events related to the day.
        (itemFilter) =>
          itemFilter.date_start ===
            eventData.date_start &&
          itemFilter.is_all_day === true
      );

      newCalendarData.elements_allday = queryAllDayLong;
      return newCalendarData;
    }
  }

  /*
  # initCalendar */
  const initCalendar = () => {
    let result = [];
    elements.forEach((el, i) => {
      const dataDay = pushCalendar(el, el.id, calendarData) ?? false;
      if (dataDay) {
        result[i] = dataDay;
      }
    });
    return result;
  };

  /*
  # fetchData */
  const fetchData = () => {
    let myCalendar = initCalendar();
    if (convertNumberToMinute(timeStart) > 0 || convertNumberToMinute(timeEnd) > 0) {
      myCalendar = applyRangeCalendar(convertNumberToMinute(timeStart), convertNumberToMinute(timeEnd), myCalendar);
    }
    return myCalendar;
  };

  /*
  # myDisplay */
  function colsDisplay() {
    calendarData = fetchData();
    
    if (calendarData) {
      return Object.keys(calendarData)
        .sort(function (a, b) {
          return (
            new Date(calendarData[a].date) - new Date(calendarData[b].date)
          );
        })
        .map((key, index) => {
          let countAllDay = calendarData[key].elements_allday.length ?? 0;
          let countElements = 0;

          Object.keys(calendarData[key].elements).map(
            (itemHour, i) => {
              if (Number(itemHour) >= Number(timeStart)) {
                countElements += calendarData[key]?.elements[itemHour]?.elements?.length ?? 0;
              }
            }
          )

          if (Number(timeEnd) > 0) {
            Object.keys(calendarData[key].elements).map(
              (itemHour, i) => {
                if (Number(itemHour) <= Number(timeEnd)) {
                  let countNextEls = getNextId(calendarData, key) ? calendarData[key].elements[itemHour].elements : []
                  countElements += countNextEls.length ?? 0;
                }
              }
            )
          }

          if (countAllDay > 0 || countElements > 0) {
            return <Day
              key={`calendar-${index}`}
              title={calendarData[key].title}
              display={display}
              fullday={
                <>
                  {Object.keys(calendarData[key].elements_allday).map(
                    (itemAllDay, i) => {
                      return render(calendarData[key].elements_allday[itemAllDay], false, calendarData[key].elements_allday.length, i)
                    }
                  )}
                </>
              }
              content={
                <>
                  {Object.keys(calendarData[key].elements).map(
                    (itemHour, i) =>
                      Number(itemHour) >= Number(timeStart) && (
                        <Hour
                          key={`calendar-${slug}-${itemHour}`}
                          display={display}
                          height={
                            100 / Object.keys(calendarData[key].elements).length +
                            `%`
                          }
                          content={calendarData[key].elements[itemHour].elements}
                          name={calendarData[key].elements[itemHour].title}
                          render={render}
                        />
                      )
                  )}
                  {Number(timeEnd) > 0 ?
                    Object.keys(calendarData[key].elements).map(
                      (itemHour, i) =>
                        Number(itemHour) <= Number(timeEnd) && (
                          <Hour
                            key={`calendar-${slug}-${itemHour}`}
                            display={display}
                            height={
                              100 /
                                Object.keys(calendarData[key].elements).length +
                              `%`
                            }
                            content={
                              getNextId(calendarData, key) ? calendarData[key].elements[itemHour].elements : []
                            }
                            name={calendarData[key].elements[itemHour].title}
                            render={render}
                          />
                        )
                    ) : ``}
                </>
              }
            />
          }
        });
    }
  }

  /*
  # Slider settings */
  let colsSettings = {
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  /*
  # Slider settings */
  let sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    adaptiveHeight: true
  };

  /*
  # Manage Date */
  let prevDay = false;

  function dspDay (current) {
    let myDate = new Date(current);
    let dspDate = false;
    if (prevDay === moment(myDate).format("dddd")) {
      dspDate = false;
    } else {
      dspDate = moment(myDate).format("dddd");
      prevDay = moment(myDate).format("dddd");
    }
    if (dspDate && group && group.day) return <Title title={dspDate} display={`day`} />;
  };

  let prevMonth = false;
  function dspMonth (current) {
    let myDate = new Date(current);
    let dspDate = false;
    if (prevMonth === moment(myDate).format("MMMM")) {
      dspDate = false;
    } else {
      dspDate = moment(myDate).format("MMMM");
      prevMonth = moment(myDate).format("MMMM");
    }
    if (dspDate && group && group.month) return <Title title={dspDate} display={`month`} />;
  };

  let prevYear = false;
  function dspYear (current) {
    let myDate = new Date(current);
    let dspDate = false;
    if (prevYear === moment(myDate).format("YYYY")) {
      dspDate = false;
    } else {
      dspDate = moment(myDate).format("YYYY");
      prevYear = moment(myDate).format("YYYY");
    }
    if (dspDate && group && group.year) return <Title title={dspDate} display={`year`} />;
  };

  /*
  # Calendar Display */
  function calendarDisplayRender (type) {

    switch (type) {
      case `cols`:
        return colsDisplay() ?? false;
        break;
      default:
        return elements.sort(function (a, b) {
          const dateA = new Date(a.date?.date_start || a.date_start);
          const dateB = new Date(b.date?.date_start || b.date_start);
        
          if (dateA - dateB !== 0) {
            return dateA - dateB;
          }
        
          // If the dates are the same, compare the time_start
          const timeA = a.date?.time_start || a.time_start || "00:00";
          const timeB = b.date?.time_start || b.time_start || "00:00";
          const [hoursA, minutesA] = timeA.split(':').map(Number);
          const [hoursB, minutesB] = timeB.split(':').map(Number);
        
          const dateWithTimeA = new Date(dateA);
          dateWithTimeA.setHours(hoursA, minutesA);
        
          const dateWithTimeB = new Date(dateB);
          dateWithTimeB.setHours(hoursB, minutesB);
        
          return dateWithTimeA - dateWithTimeB;
        }).map(
          (item, inc) => {
            return (<>
              {dspYear(item.date?.date_start ? item.date?.date_start : item.date_start ?? false)}
              {dspMonth(item.date?.date_start ? item.date?.date_start : item.date_start ?? false)}
              {dspDay(item.date?.date_start ? item.date?.date_start : item.date_start ?? false)}
              {render(item, inc)}
            </>);
          }
        )
        break;
    }
  };

  /*
  Render */
  return (<>
    {title || subtitle ? <Title
      position={position}
      title={title ?? null}
      subtitle={subtitle ?? null}
    /> : ``}
    <section
      className={`
      ${display === `grid` ? `calendar-component-grid` : ``}
      ${display === `list` ? `calendar-component-list` : ``}
      ${display === `row` ? `calendar-component-row` : ``}
      ${display === `cols` ? `calendar-component-cols` : ``}
      ${display === `slide` ? `calendar-component-slide` : ``}
    `}
      id={`${slug}`}
      style={{
        zIndex: position ?? 3,
      }}
    >
      {filter && filter}
      <div className={`calendar-component-inner`}>
        
        {display === `cols` && (
          <Slider {...colsSettings}>{colsDisplay()}</Slider>
        )}
        
        {display === `slide` && (
          <Slider {...sliderSettings}>{calendarDisplayRender(display)}</Slider>
        )}
        {display === `list` && calendarDisplayRender(display)}
        {display === `row` || display === `grid` ? calendarDisplayRender(display) : ``}
      </div>
    </section>
  </>);
};

/*
# Export
*/
export default Calendar;
