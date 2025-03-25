/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Policy.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface PolicyProps {
  debug?: true | false;
  position: number;
  body?: string;
  aside?: string;
  fx?: JSX.Element | false;
  scene?: JSX.Element | false;
  handlerAcceptFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  handlerDeclineFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  common?: {
    accept: string | "Accept";
    decline: string | "Decline";
    readmore: string | "Read more";
  };
  relation?: JSX.Element | false;
  children?: JSX.Element | false;
  services?: JSX.Element | false;
  buttons?: JSX.Element | false;
}



/*
# Class Components
*/
/*const Policy: React.FC<PolicyProps> = ({
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
const Policy = ({
  debug,
  position,
  body,
  aside,
  fx,
  scene,
  children,
  relation,
  common,
  services,
  buttons,
  handlerAcceptFunc,
  handlerDeclineFunc
}: PolicyProps) => {
  return <section
    className={`
      policy-component 
      ${debug === true ? `debug` : ``}
    `}
    style={{
      position: `relative`,
      zIndex: position ?? 2,
      width: "100%",
      display: "block"
    }}
  >

    {fx ? <div 
      className={`fx`}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
      }}
    >{fx}</div> : ``}

    <div className={`policy-inner`} style={{
      width: "100%",
      display: "block"
    }}>
      <div className={`handler`} style={{
        width: "100%",
        display: "table"
      }}>
        {children && <div className={`body`} style={{
          width: "70%",
          display: "table-cell",
          verticalAlign: "middle",
        }}>
          {children}
          {relation && <span style={{ color: "white"}}> {relation}</span>}
        </div>}
        <div className={`action`} style={{
          width: "30%",
          display: "table-cell",
          verticalAlign: "middle"
        }}>
          <button 
            onClick={
              (event: React.MouseEvent<HTMLElement>) => {
                if (handlerAcceptFunc) {
                  handlerAcceptFunc()
                }
              }
            }
          >{common?.accept}</button>
          <button 
            onClick={
              (event: React.MouseEvent<HTMLElement>) => {
                if (handlerDeclineFunc) {
                  handlerDeclineFunc()
                }
              }
            }
          >{common?.decline}</button>
        </div>
      </div>

      {services && <div className={`content`} style={{
        width: "100%",
        display: "block"
      }}>
        {services && services}
      </div>}

    </div>
    
  </section>
};

/*
# Export
*/
export default Policy;
