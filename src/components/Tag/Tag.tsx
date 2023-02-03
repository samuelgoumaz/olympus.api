/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Tag.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface TagProps {
  name?: string | null;
  slug?: string | null;
  id?: string | null;
}



/*
# Class Components
*/
/*const Tag: React.FC<TagProps> = ({
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
const Tag = ({
  name,
  slug,
  id
}: TagProps) => {
  return (
    <div className={`tag-component ${slug != null ? `tag-${slug}` : ``}`}>
      <div className={`
        tag-component-inner
      `}>
        {name != null ? <span className={`title`}>{name}</span> : ``}
      </div>
    </div>
  );
};

/*
# Export
*/
export default Tag;
