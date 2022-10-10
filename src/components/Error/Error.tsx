/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Error.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ErrorProps {
  position: number;
  state: number | null;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
const Error: React.FC<ErrorProps> = ({
  position,
  state,
  children
}) => {

  return (
    <div
      className={`
        error-component
      `}
      style={{
        position: `relative`,
        zIndex: position ?? 2
      }}
    >
      <div className={`error-content`}>
        <div className={`error-inner-content`}>
          <canvas
            id={`static`}
            width={750}
            height={500}
          />
          {state}
          {/** title != null ? <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : `` **/}
          {/** subtitle != null ? <h3 className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} /> : `` **/}
        </div>
      </div>
    </div>

  )
}

/*
# Export
*/
export default Error;
