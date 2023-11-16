/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import InputTotal from "../InputTotal";
import "./InputAmount.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputAmountProps {
  mediaAPI : string | false;
  label?: string | null;
  name: string | null;
  min?: number | false;
  autoselect?: true | false;
  display?: string | null;
  currency?: string | null;
  required?: boolean | false;
  custom?: boolean | false;
  placeholder?: string | null;
  quantity?: any,
  elements?: any;
  //onChange?: (event: React.MouseEvent<HTMLspanElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLspanElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLspanElement>) => void;
  onChangeFunc?: (event: React.MouseEvent<HTMLspanElement>) => void;
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
  mediaAPI,
  label,
  name,
  autoselect,
  display,
  currency,
  custom,
  min,
  required,
  placeholder,
  elements,
  quantity,
  //onChange,
  onLoad,
  onClick,
  onChangeFunc
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
    try {
      inputAmount.value = priceFormatter(e.currentTarget.value);
      onChangeFunc()
    } catch {
    }
  }

  /**
  # onChangeAmount (e) **/
  function onChangeQuantity (e) {
    const inputQuantity = e.currentTarget;
    const inputPrices = document.querySelector(`input[name="${name}"]:checked`);
    const inputAmount = document.querySelector(`#input-amount-${String(name)}`);
    
    try {
      inputAmount.value = priceFormatter(Number(inputPrices.value) * Number(inputQuantity.value));
      onChangeFunc()
    } catch {
    }
  }

  function quantityOptions (min, max, initial) {
    let options = [];
    for (let index = max; index > 0; index--) {
      if (index === initial) {
        options.push(<option key={`input-quantity-options-${Number(index)}`} value={Number(index)} selected={true}>{Number(index)}</option>)
      } else {
        options.push(<option key={`input-quantity-options-${Number(index)}`} value={Number(index)}>{Number(index)}</option>)
      }
    }
    return options
  }

  /**
  # onChange (e) **/
  function onChange (e) {

    /*
    const prices = document.getElementsByClassName("form-item-prices");
    console.log("selectPrice > ", prices.length);
    for (let i = 0; i < prices.length; i++) {
      console.log("selectPrice > ", prices[i].id);
      document.getElementById(prices[i].id)?.removeAttribute("checked")
    }
    e.target.setAttribute("checked", true) 
    */

    const formular = document.getElementById(`ref_${String(name)}`);
    const inputAmount = formular?.querySelector(`#input-amount-${String(name)}`);
    const inputQuantity = formular?.querySelector(`#input-quantity-${String(name)}`);

    switch (e.currentTarget.value) {
      case "custom":

        /* 
        # manage quantity */
        try {
          inputQuantity.defaultValue = inputQuantity.getElementsByTagName("option").length - 1 ?? 0;
          inputQuantity.setAttribute("disabled", "");
        } catch { 
        }

        /* 
        # manage amount */
        try {
          inputAmount.removeAttribute("disabled");
          inputAmount.value = min ? priceFormatter(min) : priceFormatter(1);
        } catch { 
        }
        
        break;

      default:

        if (inputQuantity) {
          inputQuantity.removeAttribute("disabled");
          inputAmount.setAttribute("value", priceFormatter(e.currentTarget.value * inputQuantity.value));
          inputAmount.value = priceFormatter(e.currentTarget.value * inputQuantity.value);
          inputAmount.setAttribute("disabled", "");
        } else {
          inputAmount.setAttribute("value", priceFormatter(priceFormatter(e.currentTarget.value)));
          inputAmount.value = priceFormatter(priceFormatter(e.currentTarget.value));
          inputAmount.setAttribute("disabled", "");
        }

        break;
    }

    try {
      onChangeFunc()
    } catch {
    }
  }

  function getTotal () {
    try {
      const formular = document?.querySelector(`#ref_${String(name)}`);
      const inputPrices = formular?.querySelector(`input[name="${name}"]:checked`);
      const inputQuantity = formular?.querySelector(`#input-quantity-${String(name)}`);
      
      if (inputPrices && Number(inputPrices.value)) {
        if (inputQuantity && Number(inputQuantity.value) > 1) {
          return priceFormatter(Number(inputPrices.value) * Number(inputQuantity.value));
        } else {
          return priceFormatter(Number(inputPrices.value))
        }
      } else if (required === true || autoselect === true) {
        if (elements && elements.length > 0) {
          if (quantity && quantity.default) {
            return priceFormatter(elements[0].price * Number(quantity.default));
          } else {
            return priceFormatter(elements[0].price);
          }
        } else {
          return priceFormatter(0);
        }
      }
    } catch {
      return priceFormatter(0)
    }
    
  }


  function selectPrice (e) {


    const formular = document.getElementById(`ref_${String(name)}`);
    const inputAmount = formular?.querySelector(`#input-amount-${String(name)}`);

    //document.getElementsByClassName("form-item-prices").removeAttribute("checked")
    /*
    if (e.target.getAttribute("checked") != null) {
      console.log("selectPrice > is not null")
      e.target.setAttribute("checked", "")
    } else {
      console.log("selectPrice > is null")
      e.target.setAttribute("checked", "")
    }*/
  }

  /**
  # return **/
  return (
    <div className={`form-input-amount`} id={`ref_${String(name)}`}>
      
      {/**
      # Prices component **/}
      <p className={"form-item form-item-radio"}>

        {label && label !== null ? <label className={"form-item-label"}>
          {label}{required == true ? <span className={`required`}>*</span> : ``}
        </label> : ``}

        <span className={`form-item-inner`}>

          {/**
          display variants **/}
          {elements && elements.map(
            (item, index) => (
              <span key={`form-item-radio-${String(name)}-${index}`} className={"form-item-line"}>
                <span className={"form-item-input-container"}>
                  <input
                    className={"form-item-input form-item-prices"}
                    type="radio"
                    id={`form-item-radio-${String(name)}-${index}`}
                    name={String(name) ?? `errorName`}
                    alt={item.name ?? ``}
                    required={required === true ? `required` : ``}
                    value={Number(priceFormatter(item.price))}
                    onLoad={onLoad}
                    defaultChecked={autoselect === true && index === 0 || required === true && index === 0 ? true : false}
                    onClick={function (e) {
                      onClick,
                      selectPrice
                    }}
                    onChange={onChange}
                  />
                </span>

                {/**
                # Title **/}
                <label
                  id={`form-item-radio-${String(name)}-${index}`}
                  className={"form-item-label"}
                >{`${item.name.replaceAll(/<\/?[^>]+(>|$)/gi, "")}`}</label>

                {/**
                # Price **/}
                {item.price > 0 ? <label
                  id={`form-item-radio-${String(name)}-${index}`}
                  className={`form-item-price ${item.image ? `hv-image` : ``}`}
                >{`${priceFormatter(item.price)} ${currency ? currency.toUpperCase() : ``}`}</label> : ``}

                {/**
                # Image **/}
                {item.image ? <label 
                  className={`form-item-image`}
                  htmlFor={`form-item-radio-${String(name)}-${index}`}
                >
                  <img src={mediaAPI ? mediaAPI+item.image.url : item.image.url} />
                </label> : ``}

              </span>
            )
          )}

        </span>
      </p>

      {/**
      # Custom component **/}
      {custom && <p className={"form-item form-item-checkbox"}>
        <span className={`form-item-inner`}>
          {custom && <span className={"form-item-line"}>
            <span className={"form-item-input-container"}>
              <input
                className={"form-item-input"}
                type="radio"
                id={`form-item-radio-custom-${String(Math.round(elements.length+1))}`}
                name={String(name) ?? `errorName`}
                required={required == true ? `required` : ``}
                alt={`Custom`}
                value={`custom`}
                onLoad={onLoad}
                onClick={onClick}
                onChange={onChange}
              />
            </span>
            <label
              id={`form-item-radio-custom-${String(Math.round(elements.length+1))}`}
              className={"form-item-label"}
            >Custom</label>
          </span>}
          
        </span>
      </p>}

      {/**
      # Quantity component **/}
      {!quantity || quantity.min === 1 && quantity.max === 1 && quantity.default === 1 ? `` : <p className={"form-item form-item-quantity form-item-select"}>

        {/**<label className={"form-item-label"}>
          Quantity
        </label>**/}

        <span className={`form-item-container`}>
          <select
            className={"form-item-input form-item-input-select"}
            id={`input-quantity-${String(name)}`}
            name={`input-quantity-${String(name)}`}
            alt={`Quantity`}
            //defaultValue={quantity.default}
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
        </span>
      </p>}

      {/**
      # Amount component **/}
      {/**<InputTotal 
        label={String(label) ?? `Error`}
        name={String(name) ?? `Error`}
        placeholder={String(placeholder) ?? `Error`}
        currency={String(currency) ?? false}
      />**/}
      

      {<p className={`form-item form-item-total ${!quantity || quantity.min === 1 && quantity.max === 1 && quantity.default === 1 ? `` : `hv_quantity`}`}>

        {/**<label className={"form-item-label"}>
          Total
        </label>**/}

        <span className={`form-item-container`}>
          {currency && <span className={`form-item-col currency`}>{currency}</span>}
          <span className={`form-item-col price`}>
            <input
              min={min ? min : 1}
              className={"form-item-input form-item-input-total"}
              id={`input-amount-${String(name)}`}
              name={`input-amount-${String(name)}`}
              alt={label ? String(label) : String(name)}
              required={required == true ? `required` : ``}
              type={`number`}
              placeholder={`0.00`}
              value={getTotal()}
              disabled
              onKeyUp={
                (event: React.MouseEvent<HTMLElement>) => {
                  onChangeAmount(event);
                }
              }
            />
          </span>
        </span>
      </p>}

    </div>
  )
};

/*
# Export */
export default InputAmount;
