/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Core.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface CoreProps {
  debug?: true | false;
}



/*
# Class Components
*/
/*const Core: React.FC<CoreProps> = ({
}) => (
*/
const Core = ({
  debug
}: CoreProps) => {
  const styles = `
    html, body {
      padding: 0;
      margin: 0;
    }
    .body {
      font-size: 1em;
    }
    h1 {
        font-size: 3em;
        margin-bottom: 0.25em;
        line-height: 1.1;
        margin: 0;
        padding: 0;
        display: block;
    }
    h2 {
        font-size: 3em;
        margin-bottom: 0.25em;
        line-height: 1.1;
        margin: 0;
        padding: 0;
        display: block;
    }
    h3 {
        font-size: 2.5em;
        margin-bottom: 0.25em;
        line-height: 1.1;
        margin: 0;
        padding: 0;
        display: block;
    }
    h4 {
        font-size: 2.5em;
        line-height: 1.1;
        margin: 0;
        padding: 0;
        margin-bottom: 0.25em;
        display: block;
    }
    h5 {
        font-size: 2em;
        line-height: 1.1;
        margin: 0;
        padding: 0;
        margin-bottom: 0.25em;
        display: block;
    }
    h6 {
        font-size: 1.5em;
        line-height: 1.1;
        margin: 0;
        padding: 0;
        margin-bottom: 0.25em;
        display: block;
    }
  `;
  return <style dangerouslySetInnerHTML={{ __html: styles }} />
};

/*
# Export
*/
export default Core;
