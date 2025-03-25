/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../Product"
import Error from "../Error";
import Title from "../Title";
import "./Resume.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ResumeProps {
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

const Resume = ({
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
}: ResumeProps) => {
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
        resume-component 
        ${display === `slide` ? `resume-component-slide` : ``}
        ${display === `panel` ? `resume-component-panel` : ``}
        ${display === `grid` ? `resume-component-grid` : ``}
        ${display === `row` ? `resume-component-row` : ``}
      `}
    >
      {filter && filter}
      <div className={`
        resume-component-inner
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
export default Resume;
