/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../Product"
import Error from "../Error";
import Title from "../Title";
import "./Products.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ProductsProps {
  position?: number;
  title: string | null;
  subtitle: string | null;
  padding?: true | false;
  display?: string;
  children: JSX.Element | JSX.Element[];
  elements?: JSX.Element | JSX.Element[];
  filter?: JSX.Element | JSX.Element[];
  render?: (data: any, inc: number) => any;
}

const Products = ({
  position,
  title,
  subtitle,
  padding,
  display,
  children,
  elements,
  filter,
  render
}: ProductsProps) => {
  /*
  # Slider settings */
  let sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false
  };

  return (<>
    {title || subtitle ? <Title
      position={position}
      title={title ?? null}
      subtitle={subtitle ?? null}
    /> : ``}
    <section
      className={`
        ${display === `slide` ? `products-component-slide` : ``}
        ${display === `grid` ? `products-component-grid` : ``}
        ${display === `row` ? `products-component-row` : ``}
      `}
    >
      {filter && filter}
      <div className={`
        products-component-inner
      `}>
        {display === `slide` && <Slider {...sliderSettings}>
          {elements.map((product, inc) => {
            return render ? (
              render(product, inc)
            ) : (
              <Error key={`error-content-${product.id}`} display={`message`}><strong>no event render</strong></Error>
            )
          })}
        </Slider>}

        {display !== `slide` && <>
          {elements.map((product, inc) => {
            return render ? (
              render(product, inc)
            ) : (
              <Error key={`error-content-${product.id}`} display={`message`}><strong>no event render</strong></Error>
            )
          })}
        </>}
      </div>
    </section>
  </>)
}

/*
# Export
*/
export default Products;
