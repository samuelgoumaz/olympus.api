/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Partner from "../Partner"
import "./Partners.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface PartnersProps {
  elements?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  align?: string | null;
}



/*
# Class Components
*/
/*const Partners: React.FC<PartnersProps> = ({
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
const Partners = ({
  children,
  elements,
}: PartnersProps) => {
  return (
    <section
      className={`
        partners-component
        panel
      `}
    >
      <div className={`
        partners-component-inner
      `}>

        {elements != null ? Object.keys(elements).map((key) => (
          <Partner
            title={elements[key].title}
            image={elements[key].image}
          />
        )) : ``}

        {children && children}

      </div>
    </section>
  );
};

/*
# Export
*/
export default Partners;
