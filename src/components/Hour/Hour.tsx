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
  id?: string;
}



/*
# Class Components
*/
const Hour: React.FC<HourProps> = ({
  name,
  id
}) => {
  return (
    <div className={`hour-component`}>
      <div className={`
        hour-component-inner
      `}>
        <h2>hour</h2>
      </div>
    </div>
  );
};

/*
# Export
*/
export default Hour;
