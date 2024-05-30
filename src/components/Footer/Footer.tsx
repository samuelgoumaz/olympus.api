/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Icon from '../Icon';
import Partners from '../Partners';
import "./Footer.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface FooterProps {
  position: number;
  debug?: true | false;

  /*
  # icon */
  dhl?: true | false;
  ups?: true | false;
  fedex?: true | false;
  poste_switzerland?: true | false;
  americanexpress?: true | false;
  postfinance?: true | false;
  mastercard?: true | false;
  maestro?: true | false;
  payrexx?: true | false;
  twint?: true | false;
  visa?: true | false;

  /*
  # linked icon */
  facebook?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  soundcloud?: string | null;
  behance?: string | null;
  vimeo?: string | null;
  twitter?: string | null;
  tiktok?: string | null;


  /*
  # text */
  contact?: string;
  address?: string;
  delivery?: string;
  payment?: string;
  partners?: JSX.Element | false;
  navigation?: JSX.Element | false;
  scene?: JSX.Element | false;
}

/*
# Class Components */
const Footer = ({
  debug,
  american_express,
  position,
  facebook,
  instagram,
  linkedin,
  youtube,
  soundcloud,
  behance,
  vimeo,
  twitter,
  tiktok,
  dhl,
  ups,
  fedex,
  poste_switzerland,
  americanexpress,
  postfinance,
  mastercard,
  maestro,
  payrexx,
  twint,
  visa,
  contact,
  address,
  delivery,
  payment,
  navigation,
  partners,
  scene
}: FooterProps) => {



  return (
    <footer className={`footer-component panel ${debug === true ? `debug` : ``}`}>
      {scene && <div className={`scene`}>{scene}</div>}
      <div className={`footer-component-inner`}>

        {/*
        # Display delivery and payment method */}
        {delivery || payment ? <div className={`footer-component-row shop-row`}>

          <div className={`footer-component-col delivery`}>
            <div className="content">
              {delivery && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${delivery}` }} />}
            </div>
            <ul className={`list`}>
              {dhl && <li><Icon name={`dhl`} /></li>}
              {ups && <li><Icon name={`ups`} /></li>}
              {fedex && <li><Icon name={`fedex`} /></li>}
              {poste_switzerland && <li><Icon name={`poste_switzerland`} /></li>}
            </ul>
          </div>

          <div className={`footer-component-col payment`}>
            <div className="content">
              {payment && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${payment}` }} />}
              <ul className={`list`}>
                {americanexpress && <li><Icon name={`americanexpress`} /></li>}
                {postfinance && <li><Icon name={`postfinance`} /></li>}
                {mastercard && <li><Icon name={`mastercard`} /></li>}
                {maestro && <li><Icon name={`maestro`} /></li>}
                {payrexx && <li><Icon name={`payrexx`} /></li>}
                {twint && <li><Icon name={`twint`} /></li>}
                {visa && <li><Icon name={`visa`} /></li>}
              </ul>
            </div>
          </div>

        </div> : ``}

        {/*
        # Display address, contact and social */}
        <div className={`footer-component-row contact-row`}>

          {address ? <div className={`footer-component-col address`}>
            <div className="content">
              {address !== null && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${address}` }} />}
            </div>
          </div> : ``}

          {contact ? <div className={`footer-component-col contact`}>
            <div className="content">
              {contact !== null && <div className={`body`} dangerouslySetInnerHTML={{ __html: `${contact}` }} />}
            </div>
          </div> : ``}

          {navigation ? <div className={`footer-component-col navigation`}>
            <div className="content">
              <div className={`body`}>
                {navigation && navigation}
              </div>
            </div>
          </div> : ``}

          {partners ? <div className={`footer-component-col partners`}>
            <div className="content">
              {partners && partners}
            </div>
          </div> : ``}

          <div className={`footer-component-col social`}>
            <ul className={`list`}>
              {instagram && <li><a href={instagram} target={`blank`}><Icon name={`instagram`} /></a></li>}
              {facebook && <li><a href={facebook} target={`blank`}><Icon name={`facebook`} /></a></li>}
              {linkedin && <li><a href={linkedin} target={`blank`}><Icon name={`linkedin`} /></a></li>}
              {youtube && <li><a href={youtube} target={`blank`}><Icon name={`youtube`} /></a></li>}
              {soundcloud && <li><a href={soundcloud} target={`blank`}><Icon name={`soundcloud`} /></a></li>}
              {behance && <li><a href={behance} target={`blank`}><Icon name={`behance`} /></a></li>}
              {tiktok && <li><a href={tiktok} target={`tiktok`}><Icon name={`tiktok`} /></a></li>}
              {twitter && <li><a href={twitter} target={`twitter`}><Icon name={`twitter`} /></a></li>}
              {vimeo && <li><a href={vimeo} target={`vimeo`}><Icon name={`vimeo`} /></a></li>}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )

};

/*
# Export
*/
export default Footer;
