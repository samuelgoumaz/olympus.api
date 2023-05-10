/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputAmount.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputAmountProps {
  label?: string | null;
  name: string | null;
  min?: number;
  currency?: string | null;
  required?: string | null;
  custom: bool;
  placeholder?: string | null;
  quantity?: {
    min: number,
    max: number,
    default: number
  },
  elements?: {
    id: number;
    value: number | null;
    name: string | null;
  };
  //onChange?: (event: React.MouseEvent<HTMLspanElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLspanElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLspanElement>) => void;
}


/*
# Class Components
*/
/*const InputAmount: React.FC<InputAmountProps> = ({
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
const InputAmount = ({
  label,
  name,
  currency,
  custom,
  min,
  required,
  placeholder,
  elements,
  quantity,
  //onChange,
  onLoad,
  onClick
}: InputAmountProps) => {

  /**
  # priceFormatter (number) **/
  function priceFormatter (number) {
    return Number(Math.trunc(Math.floor(Number(number).toFixed(2)*100))/100).toFixed(2)
  }

  /**
  # onChangeAmount (e) **/
  function onChangeAmount (e) {
    const inputQuantity = document.querySelector(`#input-quantity-${String(name)}`);
    const inputAmount = e.currentTarget;
    inputAmount.value = priceFormatter(e.currentTarget.value);
  }

  /**
  # onChangeAmount (e) **/
  function onChangeQuantity (e) {
    const inputQuantity = e.currentTarget;
    const inputPrices = document.querySelector(`input[name="${name}"]:checked`);
    const inputAmount = document.querySelector(`#input-amount-${String(name)}`);
    inputAmount.value = priceFormatter(Number(inputPrices.value) * Number(inputQuantity.value));
    console.log("inputAmount >", inputQuantity.value);
  }

  function quantityOptions (min, max, initial) {
    let options = [];
    for (let index = max; index > 0; index--) {
      if (index === 1) {
        options.push(<option key={`input-quantity-options-${Number(index)}`} value={index} selected>{index}x</option>)
      } else {
        options.push(<option key={`input-quantity-options-${Number(index)}`} value={index}>{index}x</option>)
      }
    }
    return options
  }

  /**
  # onChange (e) **/
  function onChange (e) {
    const inputAmount = document.querySelector(`#input-amount-${String(name)}`);
    const inputQuantity = document.querySelector(`#input-quantity-${String(name)}`);

    switch (e.currentTarget.value) {
      case "custom":
        inputAmount.removeAttribute("disabled");
        inputAmount.value = min ? priceFormatter(min) : priceFormatter(20);
        break;

      default:
        inputAmount.setAttribute("disabled", "");
        try {
          inputAmount.value = priceFormatter(e.currentTarget.value * inputQuantity.value);
        }
        catch {
          inputAmount.value = priceFormatter(e.currentTarget.value);
        }

        break;
    }
  }

  /**
  # return **/
  return (
    <>
      <p className={"form-item form-item-prices"}>
        {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}

        <span className={`form-item-inner`}>

          {/**
          display variants **/}
          {elements && elements.map(
            (item, index) => (
              <span key={`form-item-radio-${String(name)}-${index}`} className={"form-item-line"}>
                <span className={"form-item-input-container"}>
                  <input
                    className={"form-item-input form-item-input-prices"}
                    type="radio"
                    id={`form-item-radio-${String(name)}-${index}`}
                    name={String(name) ?? `errorName`}
                    alt={item.name ?? ``}
                    required={required == true ? `required` : ``}
                    value={Number(priceFormatter(item.price))}
                    onLoad={onLoad}
                    onClick={onClick}
                    onChange={onChange}
                  />
                </span>
                <label
                  id={`form-item-radio-${String(name)}-${index}`}
                  className={"form-item-label"}
                >{`${priceFormatter(item.price)} ${currency ? currency.toUpperCase() : ``} ${item.name.replaceAll(/<\/?[^>]+(>|$)/gi, "")}`}</label>
              </span>
            )
          )}

          {/**
          display custom **/}
          {custom && <span className={"form-item-line"}>
            <span className={"form-item-input-container"}>
              <input
                className={"form-item-input form-item-input-prices"}
                type="radio"
                id={`form-item-radio-custom-${String(Math.round(elements.length+1))}`}
                name={String(name) ?? `errorName`}
                required={required == true ? `required` : ``}
                value={`custom`}
                onLoad={onLoad}
                onClick={onClick}
                onChange={onChange}
              />
            </span>
            <label
              id={`form-item-radio-custom-${String(Math.round(elements.length+1))}`}
              className={"form-item-label"}
            >Personnalisé</label>
          </span>}

        </span>
      </p>

      {/**
      display quantity **/}
      {quantity.min === 1 && quantity.max === 1 && quantity.default === 1 ? `` : <p className={"form-item form-item-select"}>
        <select
          className={"form-item-input form-item-input-select form-item-quantity"}
          id={`input-quantity-${String(name)}`}
          name={`input-quantity-${String(name)}`}
          alt={`Quantity ${String(name)}`}
          required={required == true ? `required` : ``}
          onChange={
            (event: React.MouseEvent<HTMLElement>) => {
              onChangeQuantity(event);
            }
          }
        >
          {quantityOptions(quantity.min, quantity.max, quantity.default)}
        </select>
        <label htmlFor={`form-item-${String(name)}`} className={`form-item-input-select-handle material-icons`}>
          menu
        </label>
      </p>}

      {/**
      display amount **/}
      <p className={"form-item form-item-amount"} >
        <input
          min={min ? min : 10}
          className={"input input-number input-amount"}
          id={`input-amount-${String(name)}`}
          name={`input-amount-${String(name)}`}
          alt={`Amount ${String(name)}`}
          required={required == true ? `required` : ``}
          type="number"
          placeholder={`0.00`}
          disabled
          onKeyUp={
            (event: React.MouseEvent<HTMLElement>) => {
              onChangeAmount(event);
            }
          }
        />
        {currency ? <span className={`currency`}>{currency}</span> : ``}
      </p>
    </>
  )
};

/*
# Export */
export default InputAmount;
