/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Variants.scss";
import Variant from "../Variant";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface VariantsProps {
  debug?: true | false;
  position: number;
  display?: string | false;
  elements?: {
    id?: number;
    title?: string;
    subtitle?: string;
    sku?: string;
    locale?: string;
    action?: {
      url?: string;
      in_cart?: true | false;
    } | false;
    date?: {
      date_start?: string;
      date_end?: string;
      hour_start?: string;
      hour_end?: string;
    } | false;
    price?: {
      price?: number;
      price_strike?: number;
    } | false;
    stock?: {
      limit?: number;
    } | false;
    formular?: any | false;
    event?: any | false;
    product?: any | false;
  };
  fx?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | false;
  selectItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  addItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  removeItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  checkQuantityFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const Variants: React.FC<VariantsProps> = ({
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
const Variants = ({
  debug,
  position,
  display,
  elements,
  fx,
  children,
  buttons
}: VariantsProps) => {
  return <section
    className={`
      variants-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    {fx ? <div className={`fx`}>{fx}</div> : ``}

    <div className={`variants-inner`}>
      {children ? children : <div className={`content`}>
        <Variant
          variants={elements ?? null}
        />
      </div>}
    </div>
    
  </section>
};

/*
# Export
*/
export default Variants;
