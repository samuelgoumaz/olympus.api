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
  title?: string | null;
  placeholder?: string | null;
  cards?: string | null;
  //onValidate?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
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
  title,
  placeholder,
  cards,
  onChange,
  children
}: InputSubmitPaymentProps) => {

  /*
  # selectToggle(event) */
  function selectToggle (event) {
    const inputs = document.querySelectorAll("input[name=payment_method]");
    inputs.forEach(item => {
      const el = document.getElementById(`submit-content-${item.id}`);
      if (item.checked === true) {
        el.classList.add("dsp-open");
        el.classList.remove("dsp-close");
        onChange(name);
      } else {
        el.classList.add("dsp-close");
        el.classList.remove("dsp-open");
      }
    });

  }

  return (
    <div
      className={"form-item form-item-submit-payment"}
    >
      {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
      <span className={`form-item-handler`}>
        <ul>
          <li className={`checkbox`}>
            <input
              className={"form-item-input form-item-input-radio"}
              type={`radio`}
              name={`payment_method`}
              required={`required`}
              alt={label ? label : placeholder ? placeholder : name}
              id={name}
              value={name}
              onClick={
                (event: React.MouseEvent<HTMLElement>) => {
                  selectToggle(event.currentTarget)
                }
              }
            />
          </li>
          {title ? <li className={`title`} onClick={
            (event: React.MouseEvent<HTMLElement>) => {
              selectToggle(event.currentTarget)
            }
          }>
            {title}
          </li> : ``}
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
      {children && <span id={`submit-content-${name}`} className={`form-item-container dsp-close`}>
        {children}
      </span>}
    </div>
  )
};

/*
# Export
*/
export default InputSubmitPayment;
