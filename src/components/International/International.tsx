/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./International.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface InternationalProps {
  flag: string | null;
  image: string | null;
  title: string | null;
  subtitle: string | null;
  introduction: string | null;
  body: string | null;
  address: string | null;
  contact: string | null;
  services: {
    id: number;
    image: string;
    title: string | null;
    subtitle: string | null;
    body: string | null;
  };
  children?: JSX.Element | JSX.Element[];
}

/*
# Class Components
*/
const International = ({
  flag,
  image,
  title,
  subtitle,
  introduction,
  body,
  address,
  contact,
  services,
  children
}: InternationalProps) => (
    <section className="section section-international">
      <div className="section-inner">

        {/*
          Col-left
            flag
            image
        */}
        <div className="section-inner-col col-left">
          <div className="flag">
            {flag && <img className="img" src={flag} />}
          </div>
          <div className="image">
            {image && <img className="img" src={image} />}
          </div>
          <div className="action">
          </div>
        </div>

        {/*
          Col-middle
            title
            address
        */}
        <div className="section-inner-col col-middle">
          <h6 className="title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="body" dangerouslySetInnerHTML={{ __html: address }} />
        </div>

        {/*
          Col-right
            services
        */}
        <div className="section-inner-col col-right">
          <ul className="services">
            {services != null ? Object.keys(services).map(function(key, index) {
              return (
                <li>{services[key].title}</li>
              )
            }) : ``}
          </ul>
        </div>

      </div>
    </section>
);

/*
# Export
*/
export default International;
