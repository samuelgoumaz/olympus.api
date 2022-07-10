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
  api?: string | false;
  variants?: {
    id: number;
    sku: string | null;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    price_default: number;
    price_promotion: number;
    stock_disponibility: boolean | null;
    stock_limited: number;
    parent_id: number;
    parent_title: number;
    clone: string | null;
    quantity: number;
    selected: boolean | false;
  };
  selectItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  addItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  removeItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  checkQuantityFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: JSX.Element | JSX.Element[];
}

/** function createCurrent(config: VariantProps): {
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
} **/

/*
# Class Components
*/
const Variant: React.FC<VariantProps> = ({
  api,
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
    })

    myElement.classList.add(`dsp-active`);
  }

  /**
  # Add Item function **/
  function addItem (parentId, elementId) {

    let myVariant = variants.find(variantItem => variantItem.id === elementId);
    let myClone =
      myVariant.clone ?
        myVariant.clone :
          myVariant.attributes.product.data.attributes.default.data ?
            `${api != false ? api : ``}${myVariant.attributes.product.data.attributes.default.data.attributes.url}`
             : null;

    if (addItemFunc) {
      addItemFunc(myVariant)
      readQuantity(elementId)
    }

    /**
    # Manage clone **/
    if (myClone) {
      let aClone = document.createElement("img");
      aClone.src = myClone.toString();
      aClone.style.left = event.clientX+"px";
      aClone.style.top = event.clientY-60+"px";
      aClone.style.height = "100px";
      aClone.style.width = "auto";
      aClone.style.zIndex = "9999";

      aClone.setAttribute("class", "cart-clone-add");
      aClone.setAttribute("status", "true");

      document.body.appendChild(aClone);
      setTimeout(() => {
        aClone.setAttribute("status", "false");
        document.body.removeChild(aClone);
      }, 1000);
    }
  }

  /**
  # Remove Item function **/
  function removeItem (parentId, elementId) {
    let myVariant = variants.find(variantItem => variantItem.id === elementId);
    let myClone =
      myVariant.clone ?
        myVariant.clone :
          myVariant.attributes.product.data.attributes.default.data ?
            `${api != false ? api : ``}${myVariant.attributes.product.data.attributes.default.data.attributes.url}`
             : null;

    if (removeItemFunc) {
      removeItemFunc(myVariant)
      readQuantity(elementId)
    }

    /**
    # Manage clone **/
    if (myClone) {
      let aClone = document.createElement("img");
      aClone.src = myClone.toString();
      aClone.style.left = event.clientX+"px";
      aClone.style.top = event.clientY-60+"px";
      aClone.style.height = "100px";
      aClone.style.width = "auto";
      aClone.style.zIndex = "9999";

      aClone.setAttribute("class", "cart-clone-remove");
      aClone.setAttribute("status", "true");

      document.body.appendChild(aClone);
      setTimeout(() => {
        aClone.setAttribute("status", "false");
        document.body.removeChild(aClone);
      }, 1000);
    }
  }

  function readQuantity (elementId) {
    if (checkQuantityFunc) {
      if (checkQuantityFunc(elementId)) {
        return checkQuantityFunc(elementId)
      } else {
        return 0
      }
    } else {
      return 0;
    }
  }

  return variants ? (
    <div
      className={`variant-component`}
    >
      {Object.keys(variants).length > 1 ? <div className={`variant-component-selector`}>
        <Dropdown>
          {Object.keys(variants).map((key) => (
            <div onClick={(event: React.MouseEvent<HTMLElement>) => {
              if (selectItemFunc)
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
        :
      <div className={`variant-component-title`}>
        {variants[0].title != null ? variants[0].title : ""}
        {variants[0].subtitle != null ? variants[0].subtitle : ""}
        {variants[0].price_default != null ? " for " : " for "}
        {variants[0].price_default != null ? variants[0].price_default : ""}
      </div>
      }

      <div className={`variant-component-list`}>
        {Object.keys(variants).map((key) => (
          <div
            className={`variant-component-row ref-variant-${variants[key].parent_id}-${variants[key].id} ${key == 0 ? `dsp-active` : ``}`}
            key={`variant-component-key-${key}`}
          >
            <div className={`variant-component-col col-remove`}>
              {variants[key].quantity > 0 ? <Button
                icon={`remove`}
                mode={`default`}
                onClick={
                  (event: React.MouseEvent<HTMLElement>) => {
                    removeItem(variants[key].parent_id, variants[key].id)
                  }
                }
              /> : ``}
            </div>
            <div className={`variant-component-col col-indicator`}>
              {variants[key].quantity > 0 ? <Button
                label={`${variants[key].quantity}`}
                mode={`indicator`}
              /> : ``}
            </div>
            <div className={`variant-component-col col-add`}>
              <Button
                icon={`add`}
                mode={`default`}
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
