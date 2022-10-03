/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import Button from "../Button"
import "./Banner.scss";
import "./BannerFullscreen.scss";
import "./BannerSmall.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface BannerProps {
  position?: number;
  title?: string | null;
  subtitle?: string | null;
  body?: string | null;
  mode?: string | null;
  display?: string | null;
  scrollTo: boolean | false;
  children?: JSX.Element | JSX.Element[];
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
  position,
  title,
  subtitle,
  body,
  mode,
  scrollTo,
  display,
  children
}: BannerProps) => (
  <>
    <div
      className={`
      ${display === `fullscreen` ? `banner-component-fullscreen` : ``}
      ${display === `small` ? `banner-component-small` : ``}
      ${display === null || !display ? `banner-component` : ``}
      `}
      style={{
        position: `relative`,
        zIndex: position ?? 2
      }}
    >
      <div className={`banner-inner`}>

        <div className={`fx_content`}>
          {children}
        </div>

        {title != false || body != false || subtitle != false ? <div className={`banner-content`}>
          <div className={`banner-content-inner`}>
            {title != null ? <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} /> : ``}
            {body != null ? <div className="body" dangerouslySetInnerHTML={{ __html: body }} /> : ``}
          </div>
        </div> : ``}

        {scrollTo && <div className={`banner-action`}>
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
    </div>
    <div id={`banner-component-${position ?? 0}`} className={`anchor-banner`} />
  </>
);

/*
# Export
*/
export default Banner;
