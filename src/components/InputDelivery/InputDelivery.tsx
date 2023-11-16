/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./InputDelivery.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InputDeliveryProps {
  label?: string | null;
  name: string | null;
  required?: string | null;
  placeholder?: string | null;
  value?: string | null;
  total?: string | null;
  onChange?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}



/*
# Class Components
*/
/*const InputDelivery: React.FC<InputDeliveryProps> = ({
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
const InputDelivery = ({
  label,
  name,
  required,
  placeholder,
  value,
  total,
  onChange,
  onLoad,
  onClick
}: InputDeliveryProps) => (
  <p
    className={"form-item form-item-delivery"}
  >
    {label && label !== null ? <label className={"form-item-label"}>{label}</label> : ``}
    <input
      className={"form-item-input form-item-input-delivery"}
      type="hidden"
      name={String(`delivery`)}
      alt={label ? String(label) : placeholder ? String(placeholder) : ``}
      required={required == true ? `required` : ``}
      value={value ?? null}
    />
    <input
      className={"form-item-input form-item-input-delivery"}
      type="number"
      name={String(`input-amount-delivery`)}
      alt={label ? String(label) : placeholder ? String(placeholder) : ``}
      required={required == true ? `required` : ``}
      value={total ?? null}
    />
  </p>
);

/*
# Export
*/
export default InputDelivery;
