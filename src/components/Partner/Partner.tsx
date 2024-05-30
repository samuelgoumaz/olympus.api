/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./Partner.scss";
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
      {image ? <div
        className={`image`}
        style={{
          background: `url(${image})`,
          backgroundSize: `contain`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
        }}
      /> : <div className={`label`}>
        {title && <span className="name">{title}</span>}
      </div>}
    </div>
  </article>
);

/*
# Export
*/
export default Partner;
