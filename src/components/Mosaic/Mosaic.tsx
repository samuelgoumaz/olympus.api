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
  orientation?: string | null;
  body?: string | false;
  height?: string | null;
  image?: string | null;
  video?: JSX.Element | false;
  display: string | null;
}



/*
# Class Components
*/
const Mosaic = ({
  position,
  alt,
  orientation,
  height,
  image,
  body,
  video,
  display
}: MosaicProps) => (
  <section
    className={`
      ${display === `one` ? `mosaic-component-one` : ``}
      ${display === `double` ? `mosaic-component-double` : ``}
      ${display === `triple` ? `mosaic-component-triple` : ``}
      ${display === `quadruple` ? `mosaic-component-quadruple` : ``}
      ${orientation ? orientation : ``}
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

      {video ? video : <div className={`scene`}>
        <img className={`image`} src={image} style={{ display: `block` }} />
      </div>}

      {body || alt ? <div className={`content`}>
        {alt != null ? <h5 className="title" dangerouslySetInnerHTML={{ __html: alt }} /> : ``}
        {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />}
      </div> : ``}

    </div>
  </section>
);

/*
# Export
*/
export default Mosaic;
