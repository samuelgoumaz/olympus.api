/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Tag from "../Tag"
import "./Tags.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TagsProps {
  elements?: JSX.Element | JSX.Element[];
  align?: string | null;
}



/*
# Class Components
*/
/*const Tags: React.FC<TagsProps> = ({
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
const Tags = ({
  elements,
  align
}: TagsProps) => {
  return (
    <div
      className={`
        tags-component
      `}
    >
      <div className={`
        tags-component-inner
        ${align === `center` ? `align-center` : ``}
        ${align === `left` ? `align-left` : ``}
        ${align === `right` ? `align-right` : ``}
      `}>
        {elements != null ? Object.keys(elements).map((key) => (
          <Tag
            key={elements[key].slug}
            id={elements[key].id}
            name={elements[key].name}
            slug={elements[key].slug}
          />
        )) : ``}
      </div>
    </div>
  );
};

/*
# Export
*/
export default Tags;
