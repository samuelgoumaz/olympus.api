/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Event.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface EventProps {
  name?: string | null;
  id?: string;
}



/*
# Class Components
*/
const Event: React.FC<EventProps> = ({
  name,
  id
}) => {
  return (
    <div className={`event-component`}>
      <div className={`
        event-component-inner
      `}>
      hello
      </div>
    </div>
  );
};

/*
# Export
*/
export default Event;
