/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./LoadingScreen.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface LoadingScreenProps {
  debug?: true | false;
  delay?: number | false;
  content: JSX.Element | JSX.Element[];
  loader: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
/*const LoadingScreen: React.FC<LoadingScreenProps> = ({
}) => (
*/
const LoadingScreen = ({
  debug,
  content,
  loader
}: LoadingScreenProps) => {
  const styles = `
      .loading-component {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 9999;
        display: block;
        top: 0;
        left: 0;
        padding: 0;
        opacity: 1;
        background: white;

        animation-duration: 0.5s;
        animation-name: fadeOut;
        animation-delay: 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
      .loading-component-inner {
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
        height: 100%;
        display: block;
        position: relative;
        padding: 0;
      }
      .loading-component-inner .content {
        width: 100%;
        height: 50%;
        display: table;
        position: relative;
      }
      .loading-component-inner .content .content-inner {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        display: table-cell;
        text-align: center;
      }
      .loading-component-inner .loader {
        width: 100%;
        height: 50%;
        display: table;
        position: relative;
      }
      .loading-component-inner .loader .loader-inner {
        width: 100%;
        height: 100%;
        vertical-align: top;
        display: table-cell;
        text-align: center;
      }

      .loading-component-inner .loader .loader-inner .loading {
        animation-duration: 1s;
        animation-name: fadeIn;
        animation-iteration-count: 1;
      }

      @keyframes fadeIn {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      
  `;
  return (<>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <section className={`loading-component
      ${debug ? "debug" : ""}
    `}>
      <div className="loading-component-inner">
        <div className="content" style={{
          padding: "1em"
        }}>
          <div className="content-inner">
            {content}
          </div>
        </div>
        <div className="loader" style={{
          padding: "1em"
        }}>
          <div className="loader-inner">
            {loader?.length > 0 ? loader : <div 
              className="loading"
              style={{
                width: "100%",
                height: "6px",
                display: "block",
                position: "relative",
                background: "rgba(0,0,0,0.15)",
                borderRadius: "3px"
              }}
            />}
          </div>
        </div>
      </div>
    </section>
  </>)
};

/*
# Export
*/
export default LoadingScreen;
