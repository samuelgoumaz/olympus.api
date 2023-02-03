/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./MosaicOne.scss";
import "./MosaicDouble.scss";
import "./MosaicTriple.scss";
import "./MosaicQuadruple.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface MosaicProps {
  position?: number | null;
  alt?: string | null;
  height?: string | null;
  image?: string | null;
  display: string | null;
}



/*
# Class Components
*/
const Mosaic = ({
  position,
  alt,
  height,
  image,
  display
}: MosaicProps) => (
  <article
    className={`
      ${display === `one` ? `mosaic-component-one` : ``}
      ${display === `double` ? `mosaic-component-double` : ``}
      ${display === `triple` ? `mosaic-component-triple` : ``}
      ${display === `quadruple` ? `mosaic-component-quadruple` : ``}
    `}
    style={{
      zIndex: position,
      position: `relative`,
      height: height
    }}
  >

    <div className={`
      mosaic-inner
    `}>

      <div className={`scene`}>
        <img src={image} />
      </div>

      <div className={`content`}>
        {alt != null ? <h5 className="title" dangerouslySetInnerHTML={{ __html: alt }} /> : ``}
      </div>

    </div>
  </article>
);

/*
# Export
*/
export default Mosaic;
