/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputTotal.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputTotalProps {
  label?: string | null;
  name: string | null;
  total?: number | false;
  currency?: string | false;
  required?: boolean | false;
  placeholder?: string | null;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputTotal: React.FC<InputTotalProps> = ({
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
const InputTotal = ({
  label,
  name,
  total,
  currency,
  required,
  placeholder,
  onChange,
  onLoad,
  onClick
}: InputTotalProps) => {
  
  function priceFormatter (number) {
    return Number(Math.trunc(Math.floor(Number(number).toFixed(2)*100))/100).toFixed(2)
  }

  return (
    <p
      className={"form-item form-item-total"}
    >
      {label && label !== null ? <label className={"form-item-label"}>
        {label}{required == true ? <span className={`required`}>*</span> : ``}
      </label> : ``}
  
      <div className={`form-item-container`}>
        {currency && <div className={`form-item-col currency`}>{currency}</div>}
        {total && <div className={`form-item-col price`}>{priceFormatter(total) ?? `Error`}</div>}
      </div>
  
      <input
        className={"form-item-input form-item-input-hidden"}
        type="hidden"
        name={`input-amount-${String(name) ?? `error`}`}
        id={`input-amount-${String(name) ?? `error`}`}
        alt={`Total ${label ? String(label) : placeholder ? String(placeholder) : ``}`}
        required={required == true ? `required` : ``}
        placeholder={
          `${placeholder+`${required === true && label === false ? `*` : ``}` ?? ``}`
        }
        value={priceFormatter(total)}
        onLoad={onLoad}
        onClick={onClick}
        onChange={onChange}
      />
  
    </p>
  );
}

/*
# Export
*/
export default InputTotal;
