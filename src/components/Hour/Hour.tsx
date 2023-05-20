/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Hour.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface HourProps {
  name?: string | null;
  height?: string;
}



/*
# Class Components
*/
const Hour: React.FC<HourProps> = ({
  name,
  height
}) => {
  return (
    <div 
      className={`hour-component`}
      style={{
        height: height ? height : `auto`
      }}
    >
      <div className={`
        hour-component-inner
      `}>
        <div className={`hour`}>
          {name}
        </div>
      </div>
    </div>
  );
};

/*
# Export
*/
export default Hour;
