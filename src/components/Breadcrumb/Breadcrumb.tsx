/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Breadcrumb.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface BreadcrumbProps {
  position?: number;
  title?: string;
}



/*
# Class Components
*/
/*const Breadcrumb: React.FC<BreadcrumbProps> = ({
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
const Breadcrumb = ({
  position,
  title,
}: BreadcrumbProps) => (
  <section
    className={`
      breadcrumb-component
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    <div className={`breadcrumb-component-inner`}>
      <h1>{title}</h1>
    </div>
  </section>
);

/*
# Export
*/
export default Breadcrumb;
