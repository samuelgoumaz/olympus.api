/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./PartnerGrid.scss";
/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface PartnerProps {
  position?: number | null;
  title: string | null;
  image: string | null;
  display: string | null;
}



/*
# Class Components
*/
const Partner = ({
  position,
  title,
  image,
  display,
}: PartnerProps) => (
  <article
    className={`
      partner-component
    `}
    style={{
      position: `relative`,
    }}
  >

    <div className={`
      partner-inner
    `}>
      {image && <div className={`image`}>
        <img src={image} />
      </div>}

      <div className={`content`}>
        <div className={`action`}>
        </div>
      </div>

    </div>
  </article>
);

/*
# Export
*/
export default Partner;
