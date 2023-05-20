import React, { useEffect, useState } from "react";
import Hour from "../Hour";
import Day from "../Day";
import Event from "../Event";
import {
  convertNumberToMinute,
  convertStringToMinute,
  convertMinuteToString,
} from "./CalendarLib";
import "./Calendar.scss";
import "./CalendarGrid.scss";

export interface CalendarProps {
  position?: number;
  dateStart?: Date;
  dateEnd?: Date;
  timeStart?: number;
  timeEnd?: number;
  display?: string;
  elements?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  refSlider?: React.RefObject<HTMLDivElement>;
}

export interface CalendarData {
  title: string;
  date: string;
  elements: any[];
  elements_allday: any[];
}

const Calendar: React.FC<CalendarProps> = ({
  position,
  dateStart,
  dateEnd,
  timeStart,
  timeEnd,
  display,
  elements,
  children,
  refSlider,
}) => {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([]);
  let dateTraceDay = false;
  let dateCompareDay = false;
  let dateTraceHour = false;
  let dateCompareHour = false;

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

  /**
  Apply Range Calendar
    timeStart = 6
    timeEnd = 2
  **/
  function applyRangeCalendar(timeStart, timeEnd, myData) {
    let calendarKeys = Object.keys(myData);
    let nextDay = null;
    let editCalendar = [...myData];

    if (myData && Object.keys(myData).length > 0) {
      // if calendar useState

      let currentRange = [];
      let nextRange = [];

      if (timeStart) {
        // set current Range
        currentRange = timeStart;
      }

      if (timeEnd) {
        // set current Range
        nextRange = timeEnd;
      }

      Object.keys(myData).map(
        // apply for each day
        (incDay) => {
          let elements = [];
          let startDate = new Date(myData[incDay].title);
          let nextDate = new Date(myData[incDay].title);
          nextDate.setDate(nextDate.getDate() + 1);

          Object.keys(myData[incDay].elements).map(
            // apply range for current day.
            (incCurrentDayHour, i) =>
              incCurrentDayHour >= timeStart &&
              (elements[incCurrentDayHour] =
                myData[incDay].elements[incCurrentDayHour])
          );

          nextDay = getNextId(myData, incDay);
          if (nextDay != null) {
            if (
              nextDate.toLocaleDateString("en-US") ==
              new Date(myData[nextDay].title).toLocaleDateString("en-US")
            ) {
              Object.keys(myData[nextDay].elements).map(
                // apply range for current day.
                (incNextDayHour, i) =>
                  incNextDayHour <= timeEnd &&
                  (elements[incNextDayHour] =
                    myData[nextDay].elements[incNextDayHour])
              );
            } else {
              for (let incHour = 0; incHour <= timeEnd; incHour++) {
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

  function pushCalendar(eventData: any, incDay: number) {
    splitByDay(eventData.attributes.date_start);

    if (dateCompareDay === true) {
      // compare day

      const newCalendarData: CalendarData = {
        // push date group into class array.
        title: eventData.attributes.date_start,
        date: new Date(eventData.attributes.date_start).toLocaleDateString(
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
            itemFilter.attributes.date_start ===
              eventData.attributes.date_start &&
            convertStringToMinute(
              itemFilter.attributes.time_start.split(":")[0]
            ) === convertNumberToMinute(incHour) &&
            itemFilter.attributes.is_all_day !== true
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
          itemFilter.attributes.date_start ===
            eventData.attributes.date_start &&
          itemFilter.attributes.is_all_day === true
      );

      newCalendarData.elements_allday = queryAllDayLong;
      return newCalendarData;
    }
  }

  /*
  Push events into calendarData useState */
  const initCalendar = () => {
    let result = [];
    elements.forEach((el, i) => {
      result[i] = pushCalendar(el, el.id, calendarData);
    });
    return result;
  };

  /*
  Push initCalendar result into calendarData useState */
  useEffect(() => {
    const fetchData = async () => {
      const myCalendar = await initCalendar();
      setCalendarData(myCalendar);

      /*if (timeStart > 0 && timeEnd > 0) {
        const myCalendar = await initCalendar();
        const range = await applyRangeCalendar(timeStart, timeEnd, myCalendar)
        setCalendarData(range);
      } else {
        const myCalendar = await initCalendar();
        setCalendarData(myCalendar);
      }*/
    };
    fetchData();
  }, [elements]);

  /*
  For use slider */
  function render(display: string) {
    switch (display) {
      case "grid":
        <Slider ref={refSlider} {...settings}></Slider>;
        break;
      default:
        break;
    }
  }

  /*
  View return */
  return (
    <section
      className={`
        ${display === `grid` ? `calendar-component-grid` : `calendar-component`}
        panel
      `}
      style={{
        zIndex: position ?? 3,
      }}
    >
      {display ? <h1>hello</h1> : <h1>null</h1>}
      <div className={`calendar-component-inner`}>
        {console.log("calendarData > return ", calendarData)}

        {Object.keys(calendarData)
          .sort(function (a, b) {
            return (
              new Date(calendarData[a].date) - new Date(calendarData[b].date)
            );
          })
          .map((key, index) => (
            <Day
              key={`calendar-${index}`}
              title={calendarData[key].title}
              fullday={
                <>
                  {Object.keys(calendarData[key].elements_allday).map(
                    (itemAllDay, i) => (
                      <>
                        <Event
                          key={itemAllDay}
                          width={`100%`}
                          height={`auto`}
                          left={`0%`}
                          top={`auto`}
                          isAllDay={true}
                          timeStart={convertMinuteToString(
                            convertStringToMinute(
                              calendarData[key].elements_allday[itemAllDay]
                                .attributes.time_start
                            )
                          )}
                          title={
                            calendarData[key].elements_allday[itemAllDay]
                              .attributes.title
                          }
                        />
                      </>
                    )
                  )}
                </>
              }
              content={
                <>
                  {Object.keys(calendarData[key].elements).map(
                    (itemHour, i) =>
                      Number(itemHour) >= Number(timeStart) && (
                        <>
                          <Hour
                            key={itemHour}
                            height={
                              100 /
                                Object.keys(calendarData[key].elements).length +
                              `%`
                            }
                            name={calendarData[key].elements[itemHour].title}
                          />
                          {Object.keys(
                            calendarData[key].elements[itemHour].elements
                          ).map((itemEvent, i) => (
                            <>
                              <Event
                                key={itemEvent}
                                isAllDay={false}
                                width={
                                  calendarData[key].elements[itemHour].elements
                                    .length > 1
                                    ? 100 /
                                        Number(
                                          calendarData[key].elements[itemHour]
                                            .elements.length
                                        ) +
                                      `%`
                                    : `100%`
                                }
                                height={
                                  convertStringToMinute(
                                    calendarData[key].elements[itemHour]
                                      .elements[itemEvent].attributes.time_start
                                  ) -
                                    convertStringToMinute(
                                      calendarData[key].elements[itemHour]
                                        .elements[itemEvent].attributes.time_end
                                    ) +
                                    convertStringToMinute(
                                      calendarData[key].elements[itemHour]
                                        .elements[itemEvent].attributes
                                        .time_start
                                    ) >
                                  Object.keys(calendarData[key].elements)
                                    .length *
                                    60
                                    ? Math.abs(
                                        (convertStringToMinute(
                                          calendarData[key].elements[itemHour]
                                            .elements[itemEvent].attributes
                                            .time_start
                                        ) -
                                          24 * 60) *
                                          (100 /
                                            (Object.keys(
                                              calendarData[key].elements
                                            ).length *
                                              60))
                                      ).toFixed(2) + `%`
                                    : Math.abs(
                                        (convertStringToMinute(
                                          calendarData[key].elements[itemHour]
                                            .elements[itemEvent].attributes
                                            .time_start
                                        ) -
                                          convertStringToMinute(
                                            calendarData[key].elements[itemHour]
                                              .elements[itemEvent].attributes
                                              .time_end
                                          )) *
                                          (100 /
                                            (Object.keys(
                                              calendarData[key].elements
                                            ).length *
                                              60))
                                      ).toFixed(2) + `%`
                                }
                                left={
                                  calendarData[key].elements[itemHour].elements
                                    .length > 1
                                    ? i > 0
                                      ? Math.abs(
                                          100 /
                                            calendarData[key].elements[itemHour]
                                              .elements.length
                                        ) *
                                          i +
                                        `%`
                                      : `0%`
                                    : `0%`
                                }
                                top={
                                  Number(
                                    convertStringToMinute(
                                      calendarData[key].elements[itemHour]
                                        .elements[itemEvent].attributes
                                        .time_start
                                    )
                                  ) != 0
                                    ? Math.abs(
                                        (100 /
                                          (Object.keys(
                                            calendarData[key].elements
                                          ).length *
                                            60)) *
                                          (convertStringToMinute(
                                            calendarData[key].elements[itemHour]
                                              .elements[itemEvent].attributes
                                              .time_start
                                          ) -
                                            timeStart * 60)
                                      ) + `%`
                                    : `0%`
                                }
                                timeStart={convertMinuteToString(
                                  convertStringToMinute(
                                    calendarData[key].elements[itemHour]
                                      .elements[itemEvent].attributes.time_start
                                  )
                                )}
                                title={
                                  calendarData[key].elements[itemHour].elements[
                                    itemEvent
                                  ].attributes.title
                                }
                              />
                            </>
                          ))}
                        </>
                      )
                  )}
                </>
              }
              afterday={
                <>
                  {timeEnd > 0 &&
                    Object.keys(calendarData[key].elements).map(
                      (itemHour, i) =>
                        Number(itemHour) <= Number(timeEnd) && (
                          <>
                            <Hour
                              key={itemHour}
                              height={
                                100 /
                                  Object.keys(calendarData[key].elements)
                                    .length +
                                `%`
                              }
                              name={calendarData[key].elements[itemHour].title}
                            />

                            {Number(timeEnd) > 0
                              ? Object.keys(
                                  calendarData[key].elements[itemHour].elements
                                ).map(
                                  (itemEvent, i) =>
                                    Number(timeEnd) > 0 && (
                                      <>
                                        <Item
                                          key={itemEvent}
                                          width={
                                            calendarData[key].elements[itemHour]
                                              .elements.length > 1
                                              ? 100 /
                                                  Number(
                                                    calendarData[key].elements[
                                                      itemHour
                                                    ].elements.length
                                                  ) +
                                                `%`
                                              : `100%`
                                          }
                                          height={
                                            Math.abs(
                                              (convertStringToMinute(
                                                calendarData[key].elements[
                                                  itemHour
                                                ].elements[itemEvent].attributes
                                                  .time_start
                                              ) -
                                                convertStringToMinute(
                                                  calendarData[key].elements[
                                                    itemHour
                                                  ].elements[itemEvent]
                                                    .attributes.time_end
                                                )) *
                                                (100 /
                                                  (Object.keys(
                                                    calendarData[key].elements
                                                  ).length *
                                                    60))
                                            ).toFixed(2) + `%`
                                          }
                                          left={
                                            calendarData[key].elements[itemHour]
                                              .elements.length > 1
                                              ? i > 0
                                                ? Math.abs(
                                                    100 /
                                                      calendarData[key]
                                                        .elements[itemHour]
                                                        .elements.length
                                                  ) + `%`
                                                : `0%`
                                              : `0%`
                                          }
                                          top={
                                            Number(
                                              convertStringToMinute(
                                                calendarData[key].elements[
                                                  itemHour
                                                ].elements[itemEvent].attributes
                                                  .time_start
                                              )
                                            ) >= 0
                                              ? (100 /
                                                  Object.keys(
                                                    calendarData[key].elements
                                                  ).length) *
                                                  (Object.keys(
                                                    calendarData[key].elements
                                                  ).length -
                                                    (timeEnd + 1)) +
                                                `%`
                                              : Math.abs(
                                                  (100 /
                                                    (Object.keys(
                                                      calendarData[key].elements
                                                    ).length *
                                                      60)) *
                                                    (convertStringToMinute(
                                                      calendarData[key]
                                                        .elements[itemHour]
                                                        .elements[itemEvent]
                                                        .attributes.time_start
                                                    ) -
                                                      timeStart * 60)
                                                ) + `%`
                                          }
                                          timeStart={convertMinuteToString(
                                            convertStringToMinute(
                                              calendarData[key].elements[
                                                itemHour
                                              ].elements[itemEvent].attributes
                                                .time_start
                                            )
                                          )}
                                          title={
                                            calendarData[key].elements[itemHour]
                                              .elements[itemEvent].attributes
                                              .title
                                          }
                                        />
                                      </>
                                    )
                                )
                              : false}
                          </>
                        )
                    )}
                </>
              }
            />
          ))}
        {children && children}
      </div>
    </section>
  );
};

/*
# Export
*/
export default Calendar;
/*

content={<>
                {day.elements.map(
                  (hour, i) => (
                    <>
                      {console.log("hour > ", new Date(hour))}
                      <Hour 
                        key={`hour-${i}`} 
                        name={hour.title} 
                        height={
                          100 /
                          Number(day.elements.length) +
                          `%`
                        }
                      />
                    </>
                  )
                )}
              </>}

              */
