/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputCart.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputCartProps {
  label?: string | null;
  name: string | null;
  required?: boolean | false;
  placeholder?: string | null;
  value?: string | null;
  total?: number | null;
  currency?: string | false;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputCart: React.FC<InputCartProps> = ({
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
const InputCart = ({
  label,
  name,
  required,
  placeholder,
  value,
  total,
  currency,
  onChange,
  onLoad,
  onClick
}: InputCartProps) => {
  function priceFormatter (number) {
    return Number(Math.trunc(Math.floor(Number(number).toFixed(2)*100))/100).toFixed(2)
  }
  return (
    <p
      className={"form-item form-item-cart"}
    >
      {label && label !== null ? <label className={"form-item-label"}>
        {label}{required == true ? <span className={`required`}>*</span> : ``}
      </label> : ``}
  
      <span className={`form-item-container`}>
        {currency && <span className={`form-item-col currency`}>{currency}</span>}
        {<span className={`form-item-col price`}>{priceFormatter(total) ?? `Error`}</span>}
      </span>
    
      {/**
      # Send Cart Hidden **/}
      <input
        className={"form-item-input form-item-input-hidden"}
        type="hidden"
        name={String(`cart`)}
        alt={label ? String(label) : placeholder ? String(placeholder) : ``}
        required={required == true ? `required` : ``}
        value={String(value) ?? null}
      />

      {/**
      # Send Amount Hidden **/}
      <input
        className={"form-item-input form-item-input-hidden"}
        type="hidden"
        name={String(`input-amount-cart`)}
        alt={label ? String(label) : placeholder ? String(placeholder) : ``}
        required={required == true ? `required` : ``}
        value={Number(total) ?? null}
      />

    </p>
  );
}

/*
# Export
*/
export default InputCart;
