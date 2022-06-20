/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Dropdown from "../Dropdown"
import Button from "../Button"
import "./Variant.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface VariantProps {
  current?: {
    id?: number;
    sku?: number;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
    price_default?: number;
    price_promotion?: number;
    stock_disponibility?: boolean | null;
    stock_limited?: number;
    parent_id?: number;
    parent_title?: number;
    selected?: boolean | false;
  };
  variants: {
    id: number;
    sku: number;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    price_default: number;
    price_promotion: number;
    stock_disponibility: boolean | null;
    stock_limited: number;
    parent_id: number;
    parent_title: number;
    selected: boolean | false;
  };
  selectItemFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  addItemFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  removeItemFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  checkQuantityFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  children: JSX.Element | JSX.Element[];
}

function createCurrent(config: VariantProps): {
  id: number,
  sku: number,
  title: string | null,
  subtitle: string | null,
  description: string | null,
  price_default: number,
  price_promotion: number,
  stock_disponibility: boolean | null,
  stock_limited: number,
  parent_id: number,
  parent_title: number,
  selected: boolean | false
} {
  let newCurrent = {
    id: 1,
    sku: "number",
    title: config.title,
    subtitle: "",
    description: "",
    price_default: "",
    price_promotion: "",
    stock_disponibility: "",
    stock_limited: "",
    parent_id: "",
    parent_title: "",
    selected: ""
  };

  newCurrent = config.current;

  return newCurrent;
}


/*
# Class Components
*/
const Variant: React.FC<MenuProps> = ({
  variants,
  selectItemFunc,
  addItemFunc,
  removeItemFunc,
  checkQuantityFunc,
  children
}: VariantProps) => {
  let selectedData = [];

  function selectItem (container, parentId, elementId) {
    let myElement = container.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(`ref-variant-${parentId}-${elementId}`)[0];

    let otherElement = container.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(`variant-component-row`);

    Object.keys(otherElement).map((key) => {
      otherElement[key].classList.remove(`dsp-active`)
      console.log("key", otherElement[key])
    })

    myElement.classList.add(`dsp-active`)
    console.log("selectItem", myElement)
  }

  function addItem (parentId, elementId) {
    let myVariant = variants.find(variantItem => variantItem.id === elementId);
    console.log("addItem myVariant", myVariant)
    if (addItemFunc) {
      addItemFunc(myVariant)
      readQuantity(parentId, elementId)
    }
  }


  function removeItem (parentId, elementId) {
    let myVariant = variants.find(variantItem => variantItem.id === elementId);
    console.log("removeItem myVariant", myVariant)
    if (removeItemFunc) {
      removeItemFunc(myVariant)
      readQuantity(parentId, elementId)
    }
  }

  function readQuantity (parentId, elementId) {
    if (checkQuantityFunc) {
      console.log("checkQuantityFunc(elementId)", checkQuantityFunc(elementId))
      return checkQuantityFunc(elementId)
    } else {
      return 0;
    }
  }

  return variants ? (
    <div
      className={`
        variant-component
      `}
    >
      <div className={`variant-component-selector`}>
        <Dropdown>
          {Object.keys(variants).map((key) => (
            <div onClick={(event: React.MouseEvent<HTMLElement>) => {
              selectItem(event.currentTarget, variants[key].parent_id, variants[key].id)
            }}>
              {variants[key].title != null ? variants[key].title : ""}
              {variants[key].subtitle != null ? variants[key].subtitle : ""}
              {variants[key].price_default != null ? " for " : " for "}
              {variants[key].price_default != null ? variants[key].price_default : ""}
            </div>
          ))}
        </Dropdown>
      </div>

      <div className={`variant-component-list`}>
        {Object.keys(variants).map((key) => (
          <div className={`variant-component-row ref-variant-${variants[key].parent_id}-${variants[key].id} ${key == 0 ? `dsp-active` : ``}`}>
            <div className={`variant-component-col col-remove`}>
              {checkQuantityFunc && readQuantity(variants[key].parent_id, variants[key].id) != 0 ? <Button icon={`remove`}
                onClick={
                  (event: React.MouseEvent<HTMLElement>) => {
                    removeItem(variants[key].parent_id, variants[key].id)
                  }
                }
              /> : ``}
            </div>
            <div className={`variant-component-col col-indicator`}>
              <span className={`indicator`}>
                {checkQuantityFunc && readQuantity(variants[key].parent_id, variants[key].id) != 0 ? <Button
                  label={checkQuantityFunc ? readQuantity(variants[key].parent_id, variants[key].id) : 0}
                /> : ``}
              </span>
            </div>
            <div className={`variant-component-col col-add`}>
              <Button icon={`add`}
                onClick={
                  (event: React.MouseEvent<HTMLElement>) => {
                    addItem(variants[key].parent_id, variants[key].id)
                  }
                }
              />
            </div>
            {/**<div className={`variant-component-col col-price`}>
              {variants[key].price_default != null ? variants[key].price_default : ""}
              {variants[key].price_promotion != null ? variants[key].price_promotion : ""}
            </div>**/}
          </div>
        ))}
      </div>
    </div>
  ) : null
};

/*
# Export
*/
export default Variant;
