/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Footer.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FooterProps {
  position: number;
  facebook: false | true;
  instagram: false | true;
  linkedin: false | true;
  mail: false | true;
  tel: false | true;
  address: string | null;
  children: JSX.Element | JSX.Element[];
}

/*
# Class Components */
const Footer = ({
  position,
  instagram,
  facebook,
  linkedin,
  mail,
  tel,
  address,
  children
}: FooterProps) => (
  <section
    className={`footer-component`}
    style={{
      position: `relative`,
      zIndex: position ?? 2
    }}
  >
    <div className={`footer-inner`}>

      {/*
      Specific part */}
      {children}

      {/*
      col-address */}
      <div className={`footer-inner-col col-address`}>
        <div className={`body`} dangerouslySetInnerHTML={{ __html: address }} />
      </div>

      {/*
      col-social */}
      <div className={`footer-inner-col col-social`}>
        <ul>

          {instagram && <li className={`social`}>
            <img src={"/social/instagram.svg"} />
          </li>}

          {facebook && <li className={`social`}>
            <img src={"/social/instagram.svg"} />
          </li>}

          {linkedin && <li className={`social`}>
            <img src={"/social/linkedin.svg"} />
          </li>}

          {mail && <li className={`social`}>
            <span className={`material-icons`}>send</span>
          </li>}

          {tel && <li className={`social`}>
            <span className={`material-icons`}>call</span>
          </li>}

        </ul>
      </div>

      {/*
      col-payment */}
      <div className={`footer-inner-col col-payment`}>
      </div>

      {/*
      col-menu */}
      <div className={`footer-inner-col col-menu`}>
      </div>

    </div>
  </section>
);

/*
# Export
*/
export default Footer;
