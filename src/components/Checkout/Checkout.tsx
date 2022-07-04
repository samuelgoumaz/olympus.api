/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./Checkout.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CheckoutProps {
  position?: number;
  resume?: JSX.Element | JSX.Element[];
  form?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Checkout: React.FC<CheckoutProps> = ({
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
const Checkout = ({
  position,
  resume,
  form
}: CheckoutProps) => (
  <div
    className={`
      checkout-component
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >

    <div className={`checkout-component-header`}>
      <h6 className={`checkout-component-header-title`}>{`Checkout`}</h6>
    </div>

    <div className={`checkout-component-col col-resume`}>
      <div className={`checkout-component-fieldset`}>

        {/**
        # Header **/}
        <div className={`checkout-component-fieldset-header`}>
          <h6 className={`checkout-component-fieldset-legend`}>
            {`Resume`}
          </h6>
          <div className={`checkout-component-fieldset-icon`}>
            <Button
              mode={`header`}
              icon={`local_mall`}
            />
          </div>
        </div>

        {/**
        # Content **/}
        {resume && <div className={`checkout-component-fieldset-content`}>
          {resume}
        </div>}

      </div>
    </div>

    {form}

    {/** <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} /> **/}

  </div>
);

/*
# Export
*/
export default Checkout;
