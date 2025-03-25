/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../Product"
import Error from "../Error";
import Title from "../Title";
import "./Variants.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface VariantsProps {
  position?: number;
  column?: number;
  title: string | null;
  subtitle: string | null;
  padding?: true | false;
  display?: string;
  children: JSX.Element | JSX.Element[];
  elements?: JSX.Element | JSX.Element[];
  filter?: JSX.Element | JSX.Element[];
  render?: (data: any, inc: number) => any;
}

const Variants = ({
  position,
  column,
  title,
  subtitle,
  padding,
  display,
  children,
  elements,
  filter,
  render
}: VariantsProps) => {
  /*
  # Slider settings */
  let sliderSettings = {
    slidesToShow: display === `panel` ? 3 : Number(column) > 1 ? Number(column) : 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: display === `panel` ? 3 : Number(column) >= 3 ? Number(column) : 1,
          slidesToScroll: display === `panel` ? 3 : Number(column) >= 3 ? Number(column) : 1
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: display === `panel` ? 2 : Number(column) >= 2 ? Number(column) : 1,
          slidesToScroll: display === `panel` ? 2 : Number(column) >= 2 ? Number(column) : 1
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (<>
    {title || subtitle ? <Title
      position={position}
      title={title ?? null}
      subtitle={subtitle ?? null}
    /> : ``}
    <section
      className={`
        ${display === `slide` ? `variants-component-slide` : ``}
        ${display === `panel` ? `variants-component-panel` : ``}
        ${display === `grid` ? `variants-component-grid` : ``}
        ${display === `row` ? `variants-component-row` : ``}
      `}
    >
      {filter && filter}
      <div className={`
        variants-component-inner
      `}>
        {display === `slide` || display === `panel` ? <Slider {...sliderSettings}>
          {elements?.length > 0 ? elements.map((product, inc) => {
            return render ? (
              render(product, inc)
            ) : (
              <Error key={`error-content-${product.id}`} display={`message`}><strong>no event render</strong></Error>
            )
          }) : ``}
        </Slider> : ``}

        {display !== `slide` && display !== `panel` ? elements?.length > 0 ? elements.map((product, inc) => {
            return render ? (
              render(product, inc)
            ) : (
              <Error key={`error-content-${product.id}`} display={`message`}><strong>no event render</strong></Error>
            )
          }) : `` : ``}
      </div>
    </section>
  </>)
}

/*
# Export
*/
export default Variants;
