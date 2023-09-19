/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputPromocode.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputPromocodeProps {
  label?: string | null;
  name: string | null;
  promocode: string | null;
  total: number | null;
  discount: any;
  required?: boolean | false;
  placeholder?: string | null;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputPromocode: React.FC<InputPromocodeProps> = ({
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
const InputPromocode = ({
  label,
  name,
  promocode,
  total,
  discount,
  required,
  placeholder,
  onChange,
  onLoad,
  onClick
}: InputPromocodeProps) => {

  function getTotal () {
    let discountTotal = 0;
    
    if (discount && Number(discount.percent)) {
      discountTotal -= (total/100) * discount.percent
    }

    if (discount && Number(discount.amount)) {
      discountTotal -= discount.amount
    }
    return Number(discountTotal)
  }

  function priceFormatter (number) {
    return Number(Math.trunc(Math.floor(Number(number).toFixed(2)*100))/100).toFixed(2)
  }

  return (
    <p className={"form-item form-item-promocode"}>
      
      {label && label !== null ? <label className={"form-item-label"}>
        {label}{required == true ? <span className={`required`}>*</span> : ``}
      </label> : ``}

      {discount && discount.percent ? <span className={`form-item-container`}>
        {discount.percent && <span className={`form-item-col discount`}>{priceFormatter(Number(discount.percent))}%</span>}
        {discount.percent && total ? <span className={`form-item-col subtotal`}>-{priceFormatter(Number(total/100*discount.percent))}</span> : ``}
      </span> : ``}

      {discount && discount.amount ? <span className={`form-item-container`}>
        <span className={`form-item-col type`}>discount</span>
        {discount.amount && total ? <span className={`form-item-col subtotal`}>-{priceFormatter(Number(discount.amount))}</span> : ``}
      </span> : ``}

      {<span className={`form-item-container`}>
        <span className={`form-item-col type`}>Total</span>
        {total && <span className={`form-item-col price`}>{priceFormatter(getTotal()) ?? `Error`}</span>}
      </span>}

      <input
        className={"form-item-input form-item-input-promocode"}
        type="hidden"
        name={String(`promocode`)}
        alt={label ? String(label) : placeholder ? String(placeholder) : `Promocode`}
        required={required == true ? `required` : ``}
        value={promocode ?? null}
      />

      <input
        className={"form-item-input form-item-input-promocode"}
        type="hidden"
        name={String(`input-amount-promocode`)}
        alt={label ? String(label) : placeholder ? String(placeholder) : ``}
        required={required == true ? `required` : ``}
        value={priceFormatter(getTotal()) ?? null}
      />
    </p>
  )
}

/*
# Export
*/
export default InputPromocode;
