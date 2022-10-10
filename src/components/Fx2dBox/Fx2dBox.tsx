/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./Fx2dBox.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface Fx2dBoxProps {
  position: number;
  up: string | null;
  outer: string | null;
  inner: string | null;
  content: string | null;
}



/*
# Class Components
*/
/*const Fx2dBox: React.FC<Fx2dBoxProps> = ({
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
const Fx2dBox = ({
  position,
  up,
  outer,
  inner,
  content
}: Fx2dBoxProps) => {

  function onEnter (event) {
    let indicator = event.getElementsByClassName(`fxIcon-header`)[0];
    event.classList.add("dsp-open");
    event.classList.remove("dsp-close");
    indicator.setAttribute("data-state", "cancel")
  }

  function onLeave (event) {
    let indicator = event.getElementsByClassName(`fxIcon-header`)[0];
    event.classList.add("dsp-close");
    event.classList.remove("dsp-open");
    indicator.setAttribute("data-state", "default")
  }

  return (
    <div
      className={`
        fx-2dBox
        dsp-close
      `}
      style={{
        position: `absolute`,
        zIndex: position ?? 1
      }}
      onMouseEnter={
        (event: React.MouseEvent<HTMLElement>) => {
          onEnter(event.currentTarget)
        }
      }
      onMouseLeave={
        (event: React.MouseEvent<HTMLElement>) => {
          onLeave(event.currentTarget)
        }
      }
    >

      <div className={`fx-2dBox-inner`}>

        {/*
        # fx-element */}
        {up != null ? <div
          className={`fx-element up`}
          style={{
            backgroundImage: `url(${up})`,
            backgroundSize: `contain`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`
          }}
        /> : ``}

        {/*
        # fx-element */}
        {outer != null ? <div
          className={`fx-element outer`}
          style={{
            backgroundImage: `url(${outer})`,
            backgroundSize: `contain`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`
          }}
        /> : ``}

        {/*
        # fx-element */}
        {inner != null ? <div
          className={`fx-element inner`}
          style={{
            backgroundImage: `url(${inner})`,
            backgroundSize: `contain`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`
          }}
        /> : ``}

        {/*
        # fx-element */}
        {content != null ? <div
          className={`fx-element content`}
          style={{
            backgroundImage: `url(${content})`,
            backgroundSize: `contain`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`
          }}
        /> : ``}

      </div>

      <div className={`fx-2dBox-action`}>
        <Button
          mode={`header`}
          icon={`open_in_full`}
        />
      </div>

    </div>
  )
};

/*
# Export
*/
export default Fx2dBox;
