/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button"
import "./Banner.scss";

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
  children
}: BannerProps) => (
  <section
    className={`
      section section-banner
      banner-container
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

      <div className={`banner-action`}>
        <Button
          icon={`arrow_downward`}
          label={subtitle ?? null}
        />
      </div>

    </div>
  </section>
);

/*
# Export
*/
export default Banner;
