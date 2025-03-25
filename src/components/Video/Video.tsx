/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Video.absolute.scss";
import "./Video.relative.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface VideoProps {
  debug?: true | false;
  position: number;
  absolute?: true | false;
  fullscreen?: true | false;
  controls: JSX.Element | false;
  header: JSX.Element | false;
  children: JSX.Element | false;
  scene?: JSX.Element | false;
  content?: JSX.Element | false;
  onHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const Video: React.FC<VideoProps> = ({
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
const Video = ({
  debug,
  position,
  absolute,
  fullscreen,
  children,
  controls,
  header,
  scene,
  content,
  onHover,
  onLeave
}: VideoProps) => (
  <div 
    className={`
      video-component
      ${fullscreen === true ? `fullscreen` : `default`}
      ${absolute === true  ? `absolute` : `relative`}
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
    /*onMouseOver={
      (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        onHover && onHover(event);
      }
    }
    onMouseLeave={
      (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        onLeave && onLeave(event);
      }
    }*/
  >
    {!scene ? <div className={`video-inner`}>
      {children && <div className={`video`}>{children}</div>}
      {controls && <div className={`controls`}>{controls}</div>}
      {header && <div className={`header`}>{header}</div>}
      {content && <div className={`content`}>{content}</div>}
    </div> 
    : <div className={`video-inner`}>{scene}</div>}
  </div>
);

/*
# Export
*/
export default Video;
