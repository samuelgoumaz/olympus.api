/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./FxGradient.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FxGradientProps {
  position: number;
  cover?: string | null;
  video?: string | null;
  videos?: array | null;
  opacity?: string | null;
  mixBlendMode?: string | null;
}



/*
# Class Components
*/
/*const FxGradient: React.FC<FxGradientProps> = ({
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
const FxGradient = ({
  position,
  cover,
  video,
  videos,
  opacity,
  mixBlendMode,
}: FxGradientProps) => (
  <div
    className={`
      fx-item fx-gradient
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
    {console.log("my video", videos)}
    {cover && video ? <video
      className={`fx-gradient-content`}
      loop
      playinline={`true`}
      autoPlay
      muted
      preload={`true`}
      width="100%"
      height="100%"
      poster={cover ?? null}
    >
      {video && <source src={video} type="video/mp4" />}
    </video> : ``}
  </div>
);

/*
# Export
*/
export default FxGradient;
