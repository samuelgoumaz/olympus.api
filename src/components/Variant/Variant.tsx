/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Dropdown from "../Dropdown"
import Button from "../Button"
import FxBackground from "../FxBackground";
import "./VariantTable.scss";
import "./VariantSmart.scss";
import "./VariantSelector.scss";
import "./VariantInput.scss";

import moment from "moment";
import "moment/locale/fr";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface VariantProps {
  api?: string | false;
  currency?: string | false;
  currencyRate?: number | false;
  display?: string | false;
  mode?: string | false;
  image?: string | false;
  primary?: string | false;
  secondary?: string | false;
  variants?: {
    id?: number;
    title?: string;
    subtitle?: string;
    in_cart?: boolean;
    sku?: string;
    locale?: string;
    action?: {
      title?: string;
      url?: string;
      in_cart?: true | false;
    } | false;
    date?: {
      date_start?: string;
      date_end?: string;
      hour_start?: string;
      hour_end?: string;
    } | false;
    price?: {
      price?: number;
      price_strike?: number;
    } | false;
    stock?: {
      limit?: number;
    } | false;
    formular?: any | false;
    event?: any | false;
    parent?: any | false;
  };
  selectItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  addItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  removeItemFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  checkQuantityFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: JSX.Element | JSX.Element[];
}

/*
# Class Components
*/
const Variant: React.FC<VariantProps> = ({
  api,
  display,
  image,
  primary,
  secondary,
  variants,
  currency,
  currencyRate,
  selectItemFunc,
  addItemFunc,
  removeItemFunc,
  checkQuantityFunc,
  children
}: VariantProps) => {
  moment.locale("fr");
  let selectedData = [];

  function selectItem (container, parentId, elementId) {
    let myElement = container.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(`ref-variant-${parentId}-${elementId}`)[0];
    let otherElement = container.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(`variant-component-row`);
    container.classList.add(`dsp-active`);

    Object.keys(otherElement).map((key) => {
      otherElement[key].classList.remove(`dsp-active`)
    })

    myElement.classList.add(`dsp-active`);
  }

  /**
  # Add Item function **/
  function addItem (parentId, elementId, fxButton) {

    /*
    # set state : loading */
    if (fxButton) {
      fxButton.setAttribute("data-state", "loading")
    }

    let myVariant = variants.length > 0 ? variants.find(variantItem => variantItem.id === elementId) : variants;
    let myClone =
      myVariant.clone ?
        myVariant.clone :
          myVariant.attributes && myVariant.attributes.product.data.attributes.default.data ?
            `${api != false ? api : ``}${myVariant.attributes.product.data.attributes.default.data.attributes.url}`
             : image?.length > 0 ? image : null;

    if (addItemFunc) {
      addItemFunc(myVariant)
      readQuantity(elementId)
      if (fxButton) {
        fxButton.setAttribute("data-state", "complete")
        setTimeout(() => {
          fxButton.setAttribute("data-state", "null")
        }, 1000);
      }
    } else {
      if (fxButton) {
        fxButton.setAttribute("data-state", "error")
      }
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
  function removeItem (parentId, elementId, fxButton) {

    /*
    # set state : loading */
    if (fxButton) {
      fxButton.setAttribute("data-state", "loading")
    }

    let myVariant = variants.length > 0 ? variants.find(variantItem => variantItem.id === elementId) : variants;
    let myClone =
      myVariant.clone ?
        myVariant.clone :
          myVariant.attributes && myVariant.attributes.product.data.attributes.default.data ?
            `${api != false ? api : ``}${myVariant.attributes.product.data.attributes.default.data.attributes.url}`
             : image?.length > 0 ? image : null;

    if (removeItemFunc) {
      removeItemFunc(myVariant)
      readQuantity(elementId)
      if (fxButton) {
        fxButton.setAttribute("data-state", "complete")
        setTimeout(() => {
          fxButton.setAttribute("data-state", "null")
        }, 1000);
      }
    } else {
      if (fxButton) {
        fxButton.setAttribute("data-state", "error")
      }
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

  function priceFormatter (value) {
    if (currencyRate) {
      return Math.trunc(Math.floor(Number(value*currencyRate).toFixed(2)*100))/100
    } else {
      return Math.trunc(Math.floor(Number(value).toFixed(2)*100))/100
    }
  }

  try {
    switch (display) {
      case "smart":
        return (
          <div
          className={`variant-component-smart`}
        >
          {<div className={`variant-inner`}>

            {/** 
            # Content **/}
            <div className={`content`}>
              
              {variants.title ? <div className={`title`} style={{ color: secondary ? secondary : `black`}}>
                {variants.title}
              </div> : ``}

              {variants.subtitle ? <div className={`subtitle`} style={{ color: secondary ? secondary : `grey`}}>
                {variants.subtitle}
              </div> : ``}

              {variants.date ? <div className={`date`} style={{ color: secondary ? secondary : `grey`}}>
                {moment(variants.date.date_start).format("dd DD MMM")}
                {moment(variants.date.date_end).format("YYYY") !== moment(variants.date.date_start).format("YYYY") ? ` ${moment(variants.date.date_start).format("YY")}` : ``}&nbsp;
                {variants.date.date_end && variants.date.date_end !== variants.date.date_start ? moment(variants.date.date_end).format("dd DD MMM YY") : ``}
              </div> : ``}

              {variants.date && moment(variants.date.hour_start) || variants.date && moment(variants.date.hour_end) ? <div className={`time`} style={{ color: secondary ? secondary : `grey`}}>
                {variants.date.hour_start ? moment(variants.date.hour_start, "HH:mm:ss").format("HH:mm") : ``}&nbsp;
                {variants.date.hour_end && variants.date.hour_end !== variants.date.hour_start ? moment(variants.date.hour_end, "HH:mm:ss").format("HH:mm") : ``}
              </div> : ``}

              {variants.price && variants.price.price ? <div className={`price`} style={{ color: secondary ? secondary : `black`}}>
                {Number(variants.price.price) && priceFormatter(variants.price.price) !== null ? priceFormatter(variants.price.price) : "Free"}&nbsp;
                {Number(variants.price.price) && currency !== "null" ? <span className={`currency`}>{currency}</span> : ``}
              </div> : ``}

            </div>

            {/** 
            # Action **/}
            <div className={`action`}>
              {variants.in_cart === true ? <div
                className={`variant-component-row table-col variants ref-variant-${variants.event ? variants.event.id : variants.product ? variants.product.id : `0`}-${variants.id} ${`dsp-active`}`}
                key={`variant-component-key-${variants.id}`}
                style={{ borderColor: secondary ? secondary : `transparent`}}>
                {variants.in_cart === true && (variants?.stock === false || variants?.stock?.limit > 0) ? <div className={`variant-component-col col-remove`}>
                    {variants.quantity > 0 ? <Button
                      icon={`remove`}
                      mode={`default`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      onClick={
                        (event: React.MouseEvent<HTMLElement>) => {
                          event.preventDefault();
                          let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                          if (
                            myEl.getAttribute("data-state") != "loading" &&
                            myEl.getAttribute("data-state") != "error" &&
                            myEl.getAttribute("data-state") != "complete"
                          ) removeItem(variants.parent.id, variants.id, myEl);
                        }
                      }
                    /> : ``}
                  </div> : ``}

                  {variants.in_cart === true && (variants?.stock === false || variants?.stock?.limit > 0) ? <div className={`variant-component-col col-indicator`}>
                    {variants.quantity > 0 ? <Button
                      label={`${variants.quantity}`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      mode={`indicator`}
                    /> : ``}
                  </div> : ``}

                  {variants.in_cart === true && (variants?.stock === false || variants?.stock?.limit > 0) ? <div className={`variant-component-col col-add`}>
                    <Button
                      icon={`add`}
                      mode={`default`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      onClick={
                        (event: React.MouseEvent<HTMLElement>) => {
                          event.preventDefault();
                          let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                          if (
                            myEl.getAttribute("data-state") != "loading" &&
                            myEl.getAttribute("data-state") != "error" &&
                            myEl.getAttribute("data-state") != "complete"
                          ) addItem(variants.parent.id, variants.id, myEl)
                        }
                      }
                    />
                  </div> : ``}

                  {variants.in_cart === true && variants?.stock?.limit <= 0 ? <div className={`variant-component-col col-indicator`}>
                    {<Button
                      label={`Sold out`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      mode={`indicator`}
                    />}
                  </div> : ``}
                  
                </div> : ``}
            </div>
          </div>}
        </div>  
        );
        break;
      
      case "input":
        return (
          <div
          className={`variant-component-input`}
        >
          {<div className={`variant-inner`}>

            {/** 
            # Content **/}
            <table className={`content`}>
              
              <td>
                {variants.title ? <div className={`title`} style={{ color: secondary ? secondary : `black`}}>
                  {variants.title}
                </div> : ``}

                {variants.subtitle ? <div className={`subtitle`} style={{ color: secondary ? secondary : `grey`}}>
                  {variants.subtitle}
                </div> : ``}
              </td>

              <td>
                {variants.date ? <div className={`date`} style={{ color: secondary ? secondary : `grey`}}>
                  {moment(variants.date.date_start).format("dd DD MMM")}
                  {moment(variants.date.date_end).format("YYYY") !== moment(variants.date.date_start).format("YYYY") ? ` ${moment(variants.date.date_start).format("YY")}` : ``}&nbsp;
                  {variants.date.date_end && variants.date.date_end !== variants.date.date_start ? moment(variants.date.date_end).format("dd DD MMM YY") : ``}
                </div> : ``}

                {variants.date && moment(variants.date.hour_start) || variants.date && moment(variants.date.hour_end) ? <div className={`time`} style={{ color: secondary ? secondary : `grey`}}>
                  {variants.date.hour_start ? moment(variants.date.hour_start, "HH:mm:ss").format("HH:mm") : ``}&nbsp;
                  {variants.date.hour_end && variants.date.hour_end !== variants.date.hour_start ? moment(variants.date.hour_end, "HH:mm:ss").format("HH:mm") : ``}
                </div> : ``}
              </td>

              <td>
                {variants.price && variants.price.price ? <div className={`price`} style={{ color: secondary ? secondary : `black`}}>
                  {Number(variants.price.price) && priceFormatter(variants.price.price) !== null ? priceFormatter(variants.price.price) : "Free"}&nbsp;
                  {Number(variants.price.price) && currency !== "null" ? <span className={`currency`}>{currency}</span> : ``}
                </div> : ``}
              </td>

            </table>

            {/** 
            # Action **/}
            <div className={`action`}>
              {variants.in_cart === true ? <div
                className={`variant-component-row table-col variants ref-variant-${variants.event ? variants.event.id : variants.product ? variants.product.id : `0`}-${variants.id} ${`dsp-active`}`}
                key={`variant-component-key-${variants.id}`}
                style={{ borderColor: secondary ? secondary : `transparent`}}>
                {variants.in_cart === true && (variants?.stock === false || variants?.stock?.limit > 0) ? <div className={`variant-component-col col-remove`}>
                    {variants.quantity > 0 ? <Button
                      icon={`remove`}
                      mode={`default`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      onClick={
                        (event: React.MouseEvent<HTMLElement>) => {
                          event.preventDefault();
                          let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                          if (
                            myEl.getAttribute("data-state") != "loading" &&
                            myEl.getAttribute("data-state") != "error" &&
                            myEl.getAttribute("data-state") != "complete"
                          ) removeItem(variants.parent.id, variants.id, myEl);
                        }
                      }
                    /> : ``}
                  </div> : ``}

                  {variants.in_cart === true && (variants?.stock === false || variants?.stock?.limit > 0) ? <div className={`variant-component-col col-indicator`}>
                    {variants.quantity > 0 ? <Button
                      label={`${variants.quantity}`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      mode={`indicator`}
                    /> : ``}
                  </div> : ``}

                  {variants.in_cart === true && (variants?.stock === false || variants?.stock?.limit > 0) ? <div className={`variant-component-col col-add`}>
                    <Button
                      icon={`add`}
                      mode={`default`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      onClick={
                        (event: React.MouseEvent<HTMLElement>) => {
                          event.preventDefault();
                          let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                          if (
                            myEl.getAttribute("data-state") != "loading" &&
                            myEl.getAttribute("data-state") != "error" &&
                            myEl.getAttribute("data-state") != "complete"
                          ) addItem(variants.parent.id, variants.id, myEl)
                        }
                      }
                    />
                  </div> : ``}
                  
                  {variants?.stock?.limit <= 0 ? <div className={`variant-component-col col-indicator`}>
                    {<Button
                      label={`Sold out`}
                      primary={primary ?? "black"}
                      secondary={secondary ?? "white"}
                      mode={`indicator`}
                    />}
                  </div> : ``}

                </div> : ``}
            </div>
          </div>}
        </div>  
        );
        break;
      
      /*
      # Table Display */
      case "table":
        return (
          <div className={`variant-component-table`}>
            <div className={`variant-inner`}>
              <div className={`table`}>
                {Object.keys(variants).map((key) => (
                  <div className={`table-row`}>
                    
                    {image ? <span className={`table-col scene`} style={{ borderColor: secondary ? secondary : `transparent`}}><img src={image} width={80} height={80} style={{ objectFit: `cover` }} /></span> : ``}
                    
                    {variants[key].title ? <span className={`table-col title`} style={{ borderColor: secondary ? secondary : `transparent`}} dangerouslySetInnerHTML={{__html: variants[key].title }} /> : ``}
  
                    {/* <span style={{ borderColor: secondary ? secondary : `transparent`}} className={`table-col void`}></span> */}
                  
                    {variants[key].date ? <span className={`table-col date`} style={{ borderColor: secondary ? secondary : `transparent`}}>
                      {moment(variants[key].date.date_start).format("dd DD MMM")}
                      {moment(variants[key].date.date_end).format("YYYY") !== moment(variants[key].date.date_start).format("YYYY") ? ` ${moment(variants[key].date.date_start).format("YY")}` : ``}<br />
                      {variants[key].date.date_end && variants[key].date.date_end !== variants[key].date.date_start ? moment(variants[key].date.date_end).format("dd DD MMM YY") : ``}
                    </span> : ``}
  
                    {variants[key].date && variants[key].date.hour_start || variants[key].date && variants[key].date.hour_end ? <span className={`table-col hour`} style={{ borderColor: secondary ? secondary : `transparent`}}>
                      {variants[key].date.hour_start ? moment(variants[key].date.hour_start, "HH:mm:ss").format("HH:mm") : ``}<br />
                      {variants[key].date.hour_end && variants[key].date.hour_end !== variants[key].date.hour_start ? moment(variants[key].date.hour_end, "HH:mm:ss").format("HH:mm") : ``}
                    </span> : ``}
  
                    {variants[key].subtitle ? <span className={`table-col subtitle`} style={{ borderColor: secondary ? secondary : `transparent`}} dangerouslySetInnerHTML={{__html: variants[key].subtitle }} /> : ``}
  
                    {variants[key].price && variants[key].price.price ? <span className={`table-col price`} style={{ borderColor: secondary ? secondary : `transparent`}}>
                      {Number(variants[key].price.price) && priceFormatter(variants[key].price.price) !== null ? priceFormatter(variants[key].price.price) : "Free"}&nbsp;
                      {Number(variants[key].price.price) && currency !== "null" ? <span className={`currency`}>{currency}</span> : ``}
                    </span> : ``}
  
                    {variants[key].action ? <div
                      key={`api_variants_${key}`}
                      className={` table-col action ${key == 0 ? `dsp-active` : ``}`}
                      style={{ borderColor: secondary ? secondary : `transparent`}}
                    >
                      {variants[key].formular ? <Button
                        label={variants[key].formularLinkTitle ?? `Réserver`}
                        primary={primary ?? "black"}
                        secondary={secondary ?? "white"}
                        href={variants[key].formularLink ?? false}
                        style={{ 
                          color: primary ? primary : `white`,
                          background: secondary ? secondary : `transparent`
                        }}
                      /> : ``}

                      {variants[key].action.url ? <Button
                          label={variants[key].action && variants[key].action.title ? variants[key].action.title : `Réserver`}
                          primary={primary ?? "black"}
                          secondary={secondary ?? "white"}
                          href={variants[key].action.url}
                          style={{ 
                            color: primary ? primary : `white`,
                            background: secondary ? secondary : `transparent`
                          }}
                        /> : ``}
                      
                      {/**<div className={`variant-component-col col-price`}>
                        {variants[key].price_default != null ? variants[key].price_default : ""}
                        {variants[key].price_promotion != null ? variants[key].price_promotion : ""}
                      </div>**/}
                    </div> : ``}
  
                    {variants[key].in_cart === true ? <span
                    className={`variant-component-row table-col variants ref-variant-${variants[key].event ? variants[key].event.id : variants[key].product ? variants[key].product.id : `0`}-${variants[key].id} ${key == 0 ? `dsp-active` : ``}`}
                    key={`variant-component-key-${key}`}
                    style={{ borderColor: secondary ? secondary : `transparent`}}>
                    {variants[key].in_cart === true && (variants[key].stock === false || variants[key].stock?.limit > 0) ? <div className={`variant-component-col col-remove`}>
                        {variants[key].quantity > 0 ? <Button
                          icon={`remove`}
                          mode={`default`}
                          primary={primary ?? "black"}
                          secondary={secondary ?? "white"}
                          onClick={
                            (event: React.MouseEvent<HTMLElement>) => {
                              event.preventDefault();
                              let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                              if (
                                myEl.getAttribute("data-state") != "loading" &&
                                myEl.getAttribute("data-state") != "error" &&
                                myEl.getAttribute("data-state") != "complete"
                              ) removeItem(variants[key].parent.id, variants[key].id, myEl);
                            }
                          }
                        /> : ``}
                      </div> : ``}
  
                      {variants[key].in_cart === true && (variants[key].stock === false || variants[key].stock?.limit > 0) ? <div className={`variant-component-col col-indicator`}>
                        {variants[key].quantity > 0 ? <Button
                          label={`${variants[key].quantity}`}
                          primary={primary ?? "black"}
                          secondary={secondary ?? "white"}
                          mode={`indicator`}
                        /> : ``}
                      </div> : ``}

                      {variants[key].in_cart === true && (variants[key].stock === false || variants[key].stock?.limit > 0) ? <div className={`variant-component-col col-add`}>
                        <Button
                          icon={`add`}
                          mode={`default`}
                          primary={primary ?? "black"}
                          secondary={secondary ?? "white"}
                          onClick={
                            (event: React.MouseEvent<HTMLElement>) => {
                              event.preventDefault();
                              let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                              if (
                                myEl.getAttribute("data-state") != "loading" &&
                                myEl.getAttribute("data-state") != "error" &&
                                myEl.getAttribute("data-state") != "complete"
                              ) addItem(variants[key].parent.id, variants[key].id, myEl)
                            }
                          }
                        />
                      </div> : ``}

                      {variants[key].in_cart === true && variants[key].stock?.limit <= 0 ? <div className={`variant-component-col col-indicator`}>
                        {<Button
                          label={`Sold out`}
                          primary={primary ?? "black"}
                          secondary={secondary ?? "white"}
                          mode={`indicator`}
                        />}
                      </div> : ``}

                    </span> : ``}
                  </div>
                ))}
              </div>
            </div>
          </div>  
        );
        break;
      
      {/** 
      # Selector **/}
      case "selector":
        return (
          <div className={`variant-component-selector`}>
  
          {/** 
          # SELECTOR **/}
          {<div className={`variant-inner`}>
            {<div className={`selector`}>
              <Dropdown
                direction={`down`}
                selected={true}
              >
                {Object.keys(variants).map((key) => (
                  <div className={`selector-line`} onClick={(event: React.MouseEvent<HTMLElement>) => {
                    //if (selectItemFunc)
                      selectItem(event.currentTarget, variants[key].parent.id, variants[key].id)
                  }}>
  
                    {variants[key].title ? variants[key].title : ``}
  
                    {/*variants[key].date && variants[key].date.date_start || variants[key].date.date_end ? <span className={`date`}>
                      {moment(variants[key].date.date_start).format("dd DD MMM")}
                      {moment(variants[key].date.date_end).format("YYYY") !== moment(variants[key].date.date_start).format("YYYY") ? ` ${moment(variants[key].date.date_start).format("YY")}` : ``}
                      {variants[key].date.date_end && variants[key].date.date_end !== variants[key].date.date_start ? " au "+moment(variants[key].date.date_end).format("dd DD MMM YY") : ``}
                    </span> : ``*/}
  
                    {/*variants[key].date && moment(variants[key].date.hour_start) || variants[key].date && moment(variants[key].date.hour_end) ? <span className={`hour`}>
                      &nbsp; — &nbsp;{moment(variants[key].date.hour_start, "HH:mm:ss").format("HH:mm")}
                      {variants[key].date.hour_end && variants[key].date.hour_end !== variants[key].date.hour_start ? "/"+moment(variants[key].date.hour_end, "HH:mm:ss").format("HH:mm") : ``}
                    </span> : ``*/}
  
                    {variants[key].price && variants[key].price.price ? `${priceFormatter(variants[key].price.price) != null ? " for " : " for "} ${priceFormatter(variants[key].price.price) != null ? priceFormatter(variants[key].price.price) : "Free"} ${currency && ` `+currency}` : ``}
                    
                  </div>
                ))}
              </Dropdown>
            </div>}
  
          <div className={`variant-component-list`}>
            {Object.keys(variants).map((key) => variants[key].in_cart === true ? (
              <div
                key={`api_variants_${key}`}
                className={`variant-component-row ref-variant-${variants[key].parent.id}-${variants[key].id} ${key == 0 ? `dsp-active` : ``}`}
                key={`variant-component-key-${key}`}
              >
                {variants[key].in_cart === true && (variants[key].stock === false || variants[key].stock?.limit > 0) ? <div className={`variant-component-col col-remove`}>
                  {variants[key].quantity > 0 ? <Button
                    icon={`remove`}
                    mode={`default`}
                    primary={primary ?? "black"}
                    secondary={secondary ?? "white"}
                    onClick={
                      (event: React.MouseEvent<HTMLElement>) => {
                        event.preventDefault();
                        let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                        if (
                          myEl.getAttribute("data-state") != "loading" &&
                          myEl.getAttribute("data-state") != "error" &&
                          myEl.getAttribute("data-state") != "complete"
                        ) removeItem(variants[key].parent.id, variants[key].id, myEl);
                      }
                    }
                  /> : ``}
                </div> : ``}
                
                {variants[key].in_cart === true && (variants[key].stock === false || variants[key].stock?.limit > 0) ? <div className={`variant-component-col col-indicator`}>
                  {variants[key].quantity > 0 ? <Button
                    label={`${variants[key].quantity}`}
                    primary={primary ?? "black"}
                    secondary={secondary ?? "white"}
                    mode={`indicator`}
                  /> : ``}
                </div> : ``}

                {variants[key].in_cart === true && (variants[key].stock === false || variants[key].stock?.limit > 0) ? <div className={`variant-component-col col-add`}>
                  <Button
                    icon={`add`}
                    mode={`default`}
                    primary={primary ?? "black"}
                    secondary={secondary ?? "white"}
                    onClick={
                      (event: React.MouseEvent<HTMLElement>) => {
                        event.preventDefault();
                        let myEl = event.target.closest('.button-component').getElementsByClassName('fxIcon-button')[0]; // get FxButton
                        if (
                          myEl.getAttribute("data-state") != "loading" &&
                          myEl.getAttribute("data-state") != "error" &&
                          myEl.getAttribute("data-state") != "complete"
                        ) addItem(variants[key].parent.id, variants[key].id, myEl)
                      }
                    }
                  />
                </div> : ``}

                {variants[key].stock?.limit <= 0 ? <div className={`variant-component-col col-indicator`}>
                  {<Button
                    label={`Sold out`}
                    primary={primary ?? "black"}
                    secondary={secondary ?? "white"}
                    mode={`indicator`}
                  />}
                </div> : ``}

                {/**<div className={`variant-component-col col-price`}>
                  {variants[key].price_default != null ? variants[key].price_default : ""}
                  {variants[key].price_promotion != null ? variants[key].price_promotion : ""}
                </div>**/}
              </div>
            ) : ``)}
          </div>
          </div>}
        </div>  
        );
        break;
    }
  } catch {
    
  }
};

/*
# Export
*/
export default Variant;
