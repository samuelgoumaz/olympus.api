/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import Button from "../Button"
import "./Banner.scss";
import "./BannerFullscreen.scss";
import "./BannerRatio.scss";
import "./Parallax.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface BannerProps {
  debug?: true | false;
  position?: number;
  title?: string | null;
  subtitle?: string | null;
  body?: string | null;
  mode?: string | null;
  align?: string | null;
  display?: string | null;
  scrollTo?: true | false;
  buttons?: any;
  scene?: JSX.Element | JSX.Element[];
  children?: JSX.Element | JSX.Element[];
  fx?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const Banner: React.FC<BannerProps> = ({
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
const Banner = ({
  debug,
  position,
  title,
  subtitle,
  body,
  mode,
  align,
  scrollTo,
  display,
  buttons,
  scene,
  fx,
  children
}: BannerProps) => (
  <>
    <section
      className={`
      ${display === `fullscreen` ? `banner-component-fullscreen` : ``}
      ${display === `small` ? `banner-component-small` : ``}
      ${display === null || !display ? `banner-component` : ``}
      ${debug === true ? `debug` : ``}
      `}
      style={{
        position: `relative`,
        zIndex: position ?? 2
      }}
    >
      {fx && <div className={`fx`}>
        {fx}
      </div>}

      <div className={`banner-inner`}>

       {scene && <div className={`scene`}>
          {scene}
        </div>}

        <div className={`banner-content`}>
          <div className={`banner-content-inner ${align === `center` ? `align-center` : ``} ${align === `right` ? `align-right` : ``}`}>
          {children ? children : <>
            {title != null ? <h2 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : ``}
            {body != null ? <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} /> : ``}
            {buttons && <div className="action">
              {buttons && buttons}
            </div>}
          </>}
          </div>
        </div>

        {scrollTo && <div className={`banner-action ${align === `center` ? `align-center` : ``} ${align === `right` ? `align-right` : ``}`}>
          <Scroll.Link
            to={`banner-component-${position ?? 0}`}
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button
              icon={`arrow_downward`}
              label={subtitle ?? null}
              mode={`default`}
              color={mode == `negative` ? `white` : `black`}
            />
          </Scroll.Link>
        </div>}

      </div>
    </section>
    <div id={`banner-component-${position ?? 0}`} className={`anchor-banner`} />
  </>
);

/*
# Export
*/
export default Banner;
