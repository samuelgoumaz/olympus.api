/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxVideo.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxVideoProps {
  position: number;
  cover: string | null;
  video: string | null;
  opacity?: string | null;
  mixBlendMode?: string | null;
}



/*
# Class Components
*/
/*const FxVideo: React.FC<FxVideoProps> = ({
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
const FxVideo = ({
  position,
  cover,
  video,
  opacity,
  mixBlendMode,
}: FxVideoProps) => (
  <div
    className={`
      fx-item fx-video
    `}
    style={{
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      background: `black`,
      opacity: opacity ?? 1,
      mixBlendMode: mixBlendMode ?? `normal`,
      position: `absolute`,
      zIndex: position ?? 1
    }}
  >
    <video
      className={`fx-video-content`}
      loop
      playInline
      autoPlay
      muted
      preload={`true`}
      width="100%"
      height="100%"
      poster={cover ?? null}
    >
      <source src={video} type="video/mp4" />
    </video>

    <div className={`version`}>FxVideo — Version 0.0.1</div>
  </div>
);

/*
# Export
*/
export default FxVideo;
