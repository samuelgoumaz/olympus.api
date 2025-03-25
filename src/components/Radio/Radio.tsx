/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Radio.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface RadioProps {
  debug?: true | false;
  position: number;
  fx?: JSX.Element | false;
  children?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Radio: React.FC<RadioProps> = ({
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
const Radio = ({
  debug,
  position,
  fx,
  children
}: RadioProps) => {
  return <section
    className={`
      radio-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`radio-inner`}>
      {children ? children : <div className={`radio-inner-content`}>
      </div>}
    </div>
    
  </section>
};

/*
# Export
*/
export default Radio;
