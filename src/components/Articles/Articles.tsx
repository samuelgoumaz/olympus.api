/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Article from "../Article"
import "./Articles.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ArticlesProps {
  elements?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  align?: string | null;
}



/*
# Class Components
*/
/*const Articles: React.FC<ArticlesProps> = ({
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
const Articles = ({
  children,
  elements,
}: ArticlesProps) => {
  return (
    <section
      className={`
        articles-component
        panel
      `}
    >
      <div className={`
        articles-component-inner
      `}>

        {elements != null ? Object.keys(elements).map((key) => (
          <Article
            id={elements[key].key}
            name={elements[key].name}
          />
        )) : ``}

        {children && children}

      </div>
    </section>
  );
};

/*
# Export
*/
export default Articles;
