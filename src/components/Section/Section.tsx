/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Section.scss";
import FxBackground from "../FxBackground";
import FxVideo from "../FxVideo";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface SectionProps {
  debug?: true | false;
  position: number;
  title?: string;
  subtitle?: string;
  body?: string;
  display?: string;
  image?: string | false;
  video?: JSX.Element | false;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  children?: JSX.Element | false;
  buttons?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Section: React.FC<SectionProps> = ({
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
const Section = ({
  debug,
  position,
  title,
  subtitle,
  body,
  display,
  image,
  video,
  fx,
  scene,
  children,
  buttons
}: SectionProps) => {
  switch (display) {
    case `left`:
      return (<section
        className={`
          section-component alignLeft
          ${debug === true ? `debug` : ``}
        `}
        style={{
          width: "100%",
          display: "block",
          position: `relative`,
          zIndex: Number(position) ? position : 2
        }}
      >
        {fx ? <div className={`fx`}>{fx}</div> : ``}
        
        <div className={`section-inner`} style={{
          display: "flex",
          position: "relative",
          zIndex: 2,
          justifyContent: "center"
        }}>
    
          {/*
          # Col scene */}
          <div className={`section-inner-col col-scene`} style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}>
            {scene || image || video ? <div className={`scene`}>
              {!scene ? image ? <FxBackground position={2} cover={video ? false : true} image={image ?? false} hover={video ? true : false} /> : `` : ``}
              {scene ? scene : video ? video : ``}
            </div> : ``}
          </div>
    
          {/*
          # Col content */}
          <div className={`section-inner-col col-content`} style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}>
            {children ? children : <div className={`col-content-inner`} style={{ width: "100%" }}>
              {title && <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} />}
              {subtitle && <h6 className={`title`} dangerouslySetInnerHTML={{ __html: subtitle }} />}
              <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />
              {buttons && <div className="action">
                {buttons && buttons}
              </div>}
            </div>}
          </div>
    
        </div>
      </section>);
    case `middle`:
      return (<section
        className={`
          section-component alignMiddle
          ${debug === true ? `debug` : ``}
        `}
        style={{
          width: "100%",
          display: "block",
          position: `relative`,
          zIndex: Number(position) ? position : 2
        }}
      >
        {fx ? <div className={`fx`}>{fx}</div> : ``}
        
        <div className={`section-inner`} style={{
          display: "flex",
          position: "relative",
          zIndex: 2,
          justifyContent: "center"
        }}>
    
          {/*
          # Col scene */}
          {scene || image || video ? <div className={`section-inner-col col-scene`} style={{
            width: "100%",
            height: "100%",
            display: "block",
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0
          }}>
            {scene || image || video ? <div className={`scene`}>
              {!scene ? image ? <FxBackground position={2} cover={video ? false : true} image={image ?? false} hover={video ? true : false} /> : `` : ``}
              {scene ? scene : video ? video : ``}
            </div> : ``}
          </div> : ``}
    
          {/*
          # Col content */}
          <div className={`section-inner-col col-content`} style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 2
          }}>
            {children ? children : <div className={`col-content-inner`} style={{ width: "100%" }}>
              {title && <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} />}
              {subtitle && <h6 className={`title`} dangerouslySetInnerHTML={{ __html: subtitle }} />}
              <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />
              {buttons && <div className="action">
                {buttons && buttons}
              </div>}
            </div>}
          </div>
    
        </div>
      </section>);
    case `right`:
      return (<section
        className={`
          section-component alignRight
          ${debug === true ? `debug` : ``}
        `}
        style={{
          width: "100%",
          display: "block",
          position: `relative`,
          zIndex: Number(position) ? position : 2
        }}
      >
        {fx ? <div className={`fx`}>{fx}</div> : ``}
        
        <div className={`section-inner`} style={{
          display: "flex",
          position: "relative",
          zIndex: 2,
          justifyContent: "center"
        }}>
    
          {/*
          # Col scene */}
          <div className={`section-inner-col col-scene`} style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}>
            {scene || image || video ? <div className={`scene`}>
              {!scene ? image ? <FxBackground position={2} cover={video ? false : true} image={image ?? false} hover={video ? true : false} /> : `` : ``}
              {scene ? scene : video ? video : ``}
            </div> : ``}
          </div>
    
          {/*
          # Col content */}
          <div className={`section-inner-col col-content`} style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}>
            {children ? children : <div className={`col-content-inner`} style={{ width: "100%" }}>
              {title && <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} />}
              {subtitle && <h6 className={`title`} dangerouslySetInnerHTML={{ __html: subtitle }} />}
              <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />
              {buttons && <div className="action">
                {buttons && buttons}
              </div>}
            </div>}
          </div>
    
        </div>
      </section>);
  }
}

/*
# Export
*/
export default Section;
