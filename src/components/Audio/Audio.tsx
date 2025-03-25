/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";
import "./Audio.scss";
import Dropdown from "../Dropdown";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface AudioProps {
  debug?: true | false;
  position: number;
  title?: string;
  description?: string;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | false;
  social?: JSX.Element | false;
  play?: (event: React.MouseEvent<HTMLDivElement>) => void | false;
  time?: JSX.Element | false;
  image?: JSX.Element | false;
  timeline?: JSX.Element | false;
  graph?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Audio: React.FC<AudioProps> = ({
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
const Audio = ({
  debug,
  position,
  fx,
  social,
  play,
  time,
  image,
  timeline,
  graph,
  title,
  description
}: AudioProps) => {
  return <section
    className={`
      audio-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      width: `100%`,
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    {fx ? <div className={`fx`}>{fx}</div> : ``}
    <div className={`audio-inner`} style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}>

      <div 
        className={`audio-inner-content`}
        style={{
          display: `block`,
          width: "100%",
          position: "relative",
          zIndex: 2
        }}
      >
        {image ? <div 
          className="image"
          style={{
            display: `block`,
            float: `left`
          }}
        >
          {image}
        </div> : ``}

        {<div 
          className="header"
          style={{
            display: `inline-block`
          }}
        >
          <div className="header-inner" style={{
            display: `table`,
            width: `100%`,
            height: `40px`,
            paddingLeft: `1em`
          }}>
            
            {/* play */}
            <div className="header-inner-col col-play" style={{
              display: `table-cell`,
              verticalAlign: `middle`,
              height: `100%`
            }}>
              <div className="play material-icons" 
                style={{
                width: `40px`,
                height: `40px`,
                display: `block`,
                lineHeight: `40px`,
                textAlign: `center`,
                borderRadius: `20px`
              }}
              onClick={
                (event: React.MouseEvent<HTMLElement>) => {
                  if (play) {
                    play();
                  }
                }
              }
              >play_arrow</div>
            </div>
            
            {/* title */}
            <div className="header-inner-col col-title" style={{
              display: `table-cell`,
              verticalAlign: `middle`,
              height: `100%`,
              paddingLeft: `1em`
            }}>
              {title ? <h6 
                className={`title`} 
                style={{
                  margin: 0
                }}
              >{title}</h6> : ``}
            </div>

            {/* description */}
            <div className="header-inner-col col-description" style={{
              display: `table-cell`,
              verticalAlign: `middle`,
              height: `100%`,
              paddingLeft: `1em`
            }}>
              {description ? <span className="description">
                {description}
              </span> : ``}
            </div>

          </div>

          {/* slider */}
          <div className="header-inner" style={{
            display: `table`,
            width: `100%`,
            height: `40px`,
            paddingLeft: `1em`
          }}>

              {/* timeline */}
              {timeline ? <div className="header-inner-col col-timeline" style={{
                display: `table-cell`,
                verticalAlign: `middle`,
                height: `100%`
              }}>
                {<div
                  className={`timeline`}
                  style={{
                    width: `100%`,
                    display: `block`,
                    paddingRight: `1em`

                  }}
                >
                {timeline}
                </div>}
              </div> : ``}

              {/* time */}
              {time ? <div className="header-inner-col col-time" style={{
                display: `table-cell`,
                verticalAlign: `middle`,
                height: `100%`
              }}>
                {<div
                  className={`time`}
                  style={{
                    width: `100%`,
                    display: `block`,

                  }}
                >
                  {time}
                </div>}
              </div> : ``}
              
          </div>

          {/* social */}
          <div className="header-inner" style={{
            display: `table`,
            width: `100%`,
            paddingLeft: `1em`
          }}>
              {/* time */}
              <div className="header-inner-col col-social" style={{
                display: `table-cell`
              }}>
                {social ? <div
                  className={`social`}
                  style={{
                    width: `100%`,
                    display: `block`,

                  }}
                >
                  {social}
                </div> : ``}
              </div>
          </div>
          
        </div>}

      </div>
    </div>
    
  </section>
};

/*
# Export
*/
export default Audio;
