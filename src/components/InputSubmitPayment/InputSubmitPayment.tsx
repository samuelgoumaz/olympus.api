/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Icon from "../Icon";
import Button from "../Button";
import "./InputSubmitPayment.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputSubmitPaymentProps {
  label?: string | null;
  name: string | null;
  placeholder?: string | null;
  cards?: string | null;
  //onValidate?: (event: React.MouseEvent<HTMLDivElement>) => void;
  //onSubmit?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const InputSubmitPayment: React.FC<InputSubmitPaymentProps> = ({
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
const InputSubmitPayment = ({
  label,
  name,
  placeholder,
  cards,
  children
}: InputSubmitPaymentProps) => {

  return (
    <div
      className={"form-item form-item-submit-payment"}
    >
      {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
      <span className={`form-item-handler`}>
        <ul>
          <li className={`checkbox`}>
            <input
              className={"form-item-input form-item-input-checkbox"}
              type={`radio`}
              name={`payment_method`}
              required={`required`}
              id={name}
              value={name}
            />
          </li>
          {cards && cards.split(",").map(
            (key, index) => (
              <li
                className={`card`}
                key={`input-submit-payment-cards-${index}`}
                >
                <label
                  htmlFor={name}
                >
                  <Icon
                    name={String(key)}
                  />
                </label>
              </li>
            )
          )}
        </ul>
      </span>
      {children && <span className={`form-item-container`}>
        {children}
      </span>}
    </div>
  )
};

/*
# Export
*/
export default InputSubmitPayment;
