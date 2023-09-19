/*
# Imports
*/
import React from "react";
import Slider from "react-slick";
import Article from "../Article";
import Error from "../Error";
import "./ArticlesRow.scss";
import "./ArticlesGrid.scss";
import "./ArticlesSlide.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ArticlesProps {
  position?: number;
  slug?: string;
  id?: number;
  display?: string;
  elements?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  filter?: JSX.Element | JSX.Element[];
  render?: (data: any, inc: number) => any;
}



/*
# Class Components
*/
const Articles: React.FC<ArticlesProps> = ({
  position,
  slug,
  id,
  display,
  children,
  elements,
  filter,
  render
}) => {

  /*
  # Slider settings */
  let sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true
  };

  /*
  # myDisplay */
  function myDisplay(elements) {
    Object.keys(elements).map((key) => {
      return render ? (render(elements[key])) : <Error key={`error-content-${elements[key].id}`} display={`message`}><strong>no articles render</strong></Error>
    })
  }


  return (
    <section
      className={`
        ${display === `slide` ? `articles-component-slide` : ``}
        ${display === `grid` ? `articles-component-grid` : ``}
        ${display === `row` ? `articles-component-row` : ``}
      `}
    >
      {filter && filter}
      <div className={`
        articles-component-inner
      `}>
        
        {display === `slide` && <Slider {...sliderSettings}>
          {elements.map((article, inc) => {
            return render ? (
              render(article, inc)
            ) : (
              <Error key={`error-content-${article.id}`} display={`message`}><strong>no event render</strong></Error>
            )
          })}
        </Slider>}

        {display !== `slide` && <>
          {elements.map((article, inc) => {
            return render ? (
              render(article, inc)
            ) : (
              <Error key={`error-content-${article.id}`} display={`message`}><strong>no event render</strong></Error>
            )
          })}
        </>}
      </div>
    </section>
  );
};

/*
# Export
*/
export default Articles;
