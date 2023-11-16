/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputTotals.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputTotalsProps {
  label?: string | null;
  total?: number | false;
  subTotal?: number | false;
  delivery?: number | false;
  discount?: number | false;
  currency?: string | false;
  required?: boolean | false;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputTotals: React.FC<InputTotalsProps> = ({
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
const InputTotals = ({
  label,
  total,
  subTotal,
  discount,
  delivery,
  currency,
  required,
  onChange,
  onLoad,
  onClick
}: InputTotalsProps) => {
  
  function priceFormatter (number) {
    return Number(Math.trunc(Math.floor(Number(number).toFixed(2)*100))/100).toFixed(2)
  }

  return (
    <p
      className={"form-item form-item-totals"}
    >
      {label && label !== null ? <label className={"form-item-label"}>
        {label}{required == true ? <span className={`required`}>*</span> : ``}
      </label> : ``}
  
      {Number(subTotal) !== 0 ? <span className={`form-item-container`}>
        {<span className={`form-item-col label`}>
          <span className={`icon material-icons`}>{`receipt_long`}</span>
        </span>}
        {<span className={`form-item-col price`}>{priceFormatter(subTotal) ?? 0} {currency && <sup>{String(currency).toUpperCase()}</sup>}</span>}
      </span> : ``}

      {Number(discount) !== 0 ? <span className={`form-item-container`}>
        {<span className={`form-item-col label`}>
          <span className={`icon material-icons`}>{`sell`}</span>
        </span>}
        {<span className={`form-item-col price`}>-{priceFormatter(discount) ?? `Error`} {currency && <sup>{String(currency).toUpperCase()}</sup>}</span>}
      </span> : ``}
      
      {Number(delivery) !== 0 ? <span className={`form-item-container`}>
        {<span className={`form-item-col label`}>
          <span className={`icon material-icons`}>{`local_shipping`}</span>
        </span>}
        {<span className={`form-item-col price`}>{priceFormatter(delivery) ?? `Error`} {currency && <sup>{String(currency).toUpperCase()}</sup>}</span>}
      </span> : ``}

      {<span className={`form-item-container`}>
        {<span className={`form-item-col label`}>total</span>}
        {<span className={`form-item-col price`}>{priceFormatter(total) ?? `Error`} {currency && <sup>{String(currency).toUpperCase()}</sup>}</span>}
      </span>}
  
    </p>
  );
}

/*
# Export
*/
export default InputTotals;
