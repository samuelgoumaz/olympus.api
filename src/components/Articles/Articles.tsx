/*
# Imports
*/
import React from "react";
import Slider from "react-slick";
import Article from "../Article";
import Title from "../Title";
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
  title: string | null;
  subtitle: string | null;
  slug?: string;
  id?: number;
  display?: string;
  column?: number;
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
  title,
  subtitle,
  slug,
  id,
  display,
  children,
  elements,
  filter,
  column,
  render
}) => {

  /*
  # Slider settings */
  /*
  # Slider settings */
  let sliderSettings = {
    slidesToShow: column ?? 1,
    slidesToScroll: column ?? 1,
    infinite: false,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: column >= 3 ? 3 : 1,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: column >= 2 ? 2 : 1,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  /*
  # myDisplay */
  function myDisplay(elements) {
    Object.keys(elements).map((key) => {
      return render ? (render(elements[key])) : <Error key={`error-content-${elements[key].id}`} display={`message`}><strong>no articles render</strong></Error>
    })
  }


  return (
    <>
      {title || subtitle ? <Title
        position={position}
        title={title ?? null}
        subtitle={subtitle ?? null}
      /> : ``}

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
            {elements?.length > 0 ? elements.map((article, inc) => {
              return render ? (
                render(article, inc)
              ) : (
                <Error key={`error-content-${article.id}`} display={`message`}><strong>no event render</strong></Error>
              )
            }) : ``}
          </Slider>}

          {display !== `slide` && <>
            {elements?.length > 0 ? elements.map((article, inc) => {
              return render ? (
                render(article, inc)
              ) : (
                <Error key={`error-content-${article.id}`} display={`message`}><strong>no event render</strong></Error>
              )
            }) : ``}
          </>}
        </div>
      </section>
    </>
  );
};

/*
# Export
*/
export default Articles;
