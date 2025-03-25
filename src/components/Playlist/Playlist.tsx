/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import "./Playlist.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface PlaylistProps {
  debug?: true | false;
  position: number;
  title?: string;
  description?: string;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | false;
  close?: (event: React.MouseEvent<HTMLDivElement>) => void | false;
  playprev?: (event: React.MouseEvent<HTMLDivElement>) => void | false;
  play?: JSX.Element | false;
  playnext?: (event: React.MouseEvent<HTMLDivElement>) => void | false;
  time?: JSX.Element | false;
  image?: JSX.Element | false;
  timeline?: JSX.Element | false;
  replay?: (event: React.MouseEvent<HTMLDivElement>) => void | false;
  volume?: JSX.Element | false;
  graph?: JSX.Element | false;
  speed?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Playlist: React.FC<PlaylistProps> = ({
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
const Playlist = ({
  debug,
  position,
  fx,
  close,
  playprev,
  play,
  playnext,
  time,
  image,
  timeline,
  volume,
  replay,
  graph,
  title,
  description,
  speed
}: PlaylistProps) => {
  return <section
    className={`
      playlist-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      width: `100%`,
      position: `fixed`,
      zIndex: position ?? 2,
      bottom: 0,
      left: 0
    }}
  >
    {fx ? <div className={`fx`}>{fx}</div> : ``}
    <div className={`playlist-inner`}>
      <div 
        className={`playlist-inner-content`}
        style={{
          display: `table`,
        }}
      >

        {/* image */}
        {image ? <div 
          className="image"
          style={{
            display: `table-cell`,
            verticalAlign: `top`
          }}
        >
          {image}
        </div> : ``}

        {/* header */}
        {<div 
          className="header"
          style={{
            display: `table-cell`,
            verticalAlign: `top`
          }}
        >
          {/* header */}
          {<div 
            className="header-inner"
            style={{
              width: `100%`,
              display: `table`,
              paddingLeft: `1em`,
              verticalAlign: `top`
            }}
          >

            {/* title col */}
            {title ? <div 
              className="header-col col-title"
              style={{
                width: `100%`,
                display: `table-cell`,
                verticalAlign: `middle`
              }}
            >
              <h6 className={`title`} style={{ margin: 0 }}>{title}</h6>
            </div> : ``}

            {/* description col */}
            {description ? <div 
              className="header-col col-description"
              style={{
                width: `100%`,
                display: `table-cell`,
                verticalAlign: `middle`
              }}
            >
              {description}
            </div> : ``}
          </div>}

          {/* timeline */}
          {<div 
            className="header-inner"
            style={{
              width: `100%`,
              display: `table`,
              paddingLeft: `1em`,
              verticalAlign: `top`
            }}
          >

            {/* timeline col */}
            {timeline ? <div 
              className="header-col col-timeline"
              style={{
                width: `100%`,
                display: `table-cell`,
                verticalAlign: `middle`
              }}
            >
              {timeline}
            </div> : ``}

            {/* timeline col */}
            {time ? <div 
              className="header-col col-time"
              style={{
                width: `100%`,
                display: `table-cell`,
                verticalAlign: `middle`
              }}
            >
              {time ? <span 
                className="time"
                style={{
                  background: `green`,
                  lineHeight: `1.2`,
                  padding: `0 5px`,
                  borderRadius: `10px`,
                  marginRight: `0.2em`
                }}
              >
                {time}
              </span> : ``}
            </div> : ``}
          </div>}
        </div>}

        {/* controls */}
        {<div 
          className="controls"
          style={{
            display: `table-cell`,
          }}
        >
          {<div 
          className="reset"
          style={{
            width: `auto`,
            display: `inline-grid`,
            float: `left`,
          }}
        >
          <Button 
            icon={`replay`}
            mode={`header`}
            onClick={
              (event: React.MouseEvent<HTMLElement>) => {
                if (replay) {
                  replay();
                }
              }
            }
          />
        </div>}

        {<div 
          className="play"
          style={{
            width: `auto`,
            display: `inline-grid`,
            float: `left`,
          }}
        >
          {play ? play : ``}
        </div>}

        {<div 
          className="playprev"
          style={{
            width: `auto`,
            display: `inline-grid`,
            float: `left`,
          }}
        >
          <Button 
            icon={`fast_rewind`}
            mode={`header`}
            onClick={
              (event: React.MouseEvent<HTMLElement>) => {
                if (playprev) {
                  playprev();
                }
              }
            }
          />
        </div>}

        {<div 
          className="speed"
          style={{
            width: `auto`,
            display: `inline-grid`,
            float: `left`,
          }}
        >
          {speed ? speed : ``}
        </div>}

        {<div 
          className="playnext"
          style={{
            width: `auto`,
            display: `inline-grid`,
            float: `left`,
          }}
        >
          <Button 
            icon={`fast_forward`}
            mode={`header`}
            onClick={
              (event: React.MouseEvent<HTMLElement>) => {
                if (playnext) {
                  playnext();
                }
              }
            }
          />
        </div>}

        {<div 
          className="volume"
          style={{
            width: `auto`,
            display: `inline-grid`,
            float: `left`,
          }}
        >
          {volume}
        </div>}

        {<div 
          className="close"
          style={{
            width: `auto`,
            display: `inline-grid`,
            float: `right`,
          }}
        >
          <Button 
            icon={`close`}
            mode={`header`}
            onClick={
              (event: React.MouseEvent<HTMLElement>) => {
                if (close) {
                  close();
                }
              }
            }
          />
        </div>}

        </div>}

      </div>
    </div>
  </section>
};

/*
# Export
*/
export default Playlist;
