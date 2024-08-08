/*
# Imports
*/
import React from "react";
import "./ErrorInline.scss";
import "./ErrorCover.scss";
import "./ErrorLog.scss";
import "./Error.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface ErrorProps {
  debug?: true | false;
  position: number;
  display?: string | null;
  icon?: string | null;
  error?: number | null;
  title?: string | null;
  subtitle?: string | null;
  body?: string | null;
  children?: JSX.Element | JSX.Element[];
}



/*
# Class Components
*/
const Error: React.FC<ErrorProps> = ({
  debug,
  position,
  icon,
  error,
  display, // <= cover, inline
  title,
  subtitle,
  body,
  children
}) => {

  function iconSwitcher (name) {
    switch (name) {
      case "install":
        return (
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 800 800">
            <path fill={`black`} d={`M39.2,289.5c0-118,0-176.9,36.6-213.5c36.6-36.5,95.6-36.5,213.3-36.5h221.2c117.8,0,176.7,0,213.3,36.6
              s36.6,95.5,36.6,213.3v221.2c0,117.8,0,176.7-36.6,213.3s-95.4,36.6-213.2,36.6H289.1c-117.8,0-176.7,0-213.3-36.6
              s-36.6-95.5-36.6-213.3V289.4C39.2,289.4,39.2,289.5,39.2,289.5z`} />
            <g>
              <polygon fill={`white`} points={`279.1,283.8 229.6,283.8 180.2,283.8 130.7,283.8 130.7,333.3 180.2,333.3 229.6,333.3 279.1,333.3 
                328.5,333.3 331.8,333.3 331.8,341.5 331.8,374.5 331.8,382.8 316.2,382.8 254.4,382.8 192.5,382.8 130.7,382.8 130.7,432.2 
                192.5,432.2 254.4,432.2 316.2,432.2 331.8,432.2 331.8,481.7 316.2,481.7 254.4,481.7 192.5,481.7 130.7,481.7 130.7,531.2 
                192.5,531.2 254.4,531.2 316.2,531.2 378,531.2 378,481.7 378,481.7 378,473.4 378,440.5 378,432.2 378,432.2 378,382.8 378,382.8 
                378,374.5 378,341.5 378,333.3 378,333.3 378,283.8 328.5,283.8`} />
              <polygon fill={`white`} points={`467.7,341.5 467.7,333.3 470.9,333.3 520.4,333.3 569.9,333.3 619.3,333.3 668.8,333.3 668.8,283.8 
                421.5,283.8 421.5,333.3 421.5,333.3 421.5,341.5 421.5,374.5 421.5,382.8 421.5,407.5 421.5,432.2 483.3,432.2 545.1,432.2 
                607,432.2 622.6,432.2 622.6,440.5 622.6,473.5 622.6,481.7 607,481.7 545.1,481.7 483.3,481.7 421.5,481.7 421.5,531.2 
                483.3,531.2 545.1,531.2 607,531.2 668.8,531.2 668.8,506.4 668.8,506.4 668.8,407.5 668.8,407.5 668.8,382.8 607,382.8 
                545.1,382.8 483.3,382.8 467.7,382.8 467.7,374.5`}/>
            </g>
          </svg>
        )
        break;
      case "loading":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: "rotate(45deg)",
              margin: "auto",
              background: "transparent",
              display: "block",
              shapeRendering: "auto",
            }}
            width="50"
            height="50"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <rect x="19" y="19" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
            </rect><rect x="40" y="19" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete"></animate>
            </rect><rect x="61" y="19" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete"></animate>
            </rect><rect x="19" y="40" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete"></animate>
            </rect><rect x="61" y="40" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete"></animate>
            </rect><rect x="19" y="61" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete"></animate>
            </rect><rect x="40" y="61" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete"></animate>
            </rect><rect x="61" y="61" width="20" height="20" fill="rgba(0,0,0,1)">
              <animate attributeName="fill" values="transparent;rgba(0,0,0,1);rgba(0,0,0,1)" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete"></animate>
            </rect>
          </svg>
        )
        break;
      case "wait":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "auto",
              background: "transparent",
              display: "block",
              shapeRendering: "auto"
            }}
            width="50"
            height="50"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="50" cy="23" r="13" fill="#000000">
              <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
            </circle>
          </svg>
        )
        break;
      default:
        break;
    }
  }

  const styles = `
  `;

  switch (display) {
    case 'page':
      break;
    case 'inline':
      break;
    case 'cover':
      return (
        <section
          className={`
            error-component-cover
            ${debug === true ? `debug` : ``}
          `}
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            display: "table",
            top: 0,
            left: "auto",
            right: "auto",
            zIndex: position ?? 2
          }}
        >
          <div 
            className={`error-component-inner`}
            style={{
              width: "100%",
              height: "100%",
              display: "table-cell",
              verticalAlign: "middle"
            }}
          >
            <div 
              className={`error-component-content`} 
              style={{
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px"
              }}
            >
              <div className={`error-scene`}>
                <div 
                  className={`icon`}
                  style={{
                    display: "block",
                    maxWidth: "80px",
                    minWidth: "80px",
                    margin: "0 auto"
                  }}
                >
                  {iconSwitcher(icon)}
                </div>
                {error && <div className={`name`}  style={{ textAlign: `center` }}>
                  Error {error ?? 404}
                </div>}
              </div>

              <div className={`error-content`} style={{ textAlign: `center` }}>
                {title != null ? <h1 className={`title`} dangerouslySetInnerHTML={{ __html: title }} style={{display:`block`}} /> : ``}
                {subtitle != null ? <span className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} style={{display:`block`}} /> : ``}
                {body != null ? <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} style={{display:`block`}} /> : ``}
                {children?.length > 0 ? <div className={`content`}>{children}</div> : ``}
              </div>

            </div>
          </div>
        </section>
      )
      break;
    case 'log':
      break;
    default:
      return (
        <section
          className={`
            ${!display ? 'error-component' : ''}
            ${display === 'inline' ? 'error-component-inline' : ''}
            ${display === 'cover' ? 'error-component-cover' : ''}
            ${display === 'log' ? 'error-component-log' : ''}
            panel
          `}
          style={{
            position: `relative`,
            zIndex: position ?? 2
          }}
        >
          <div className={`error-component-inner`}>
            <div className={`error-component-content`}>
    
              <div className={`error-scene`}>
                <div className={`icon`}>
                  {iconSwitcher(icon)}
                </div>
                {error && <div className={`name`}>
                  Error {error ?? 404}
                </div>}
              </div>
    
              <div className={`error-content`}>
                {title != null ? <h1 className={`title`} dangerouslySetInnerHTML={{ __html: title }} /> : ``}
                {subtitle != null ? <span className={`subtitle`} dangerouslySetInnerHTML={{ __html: subtitle }} /> : ``}
                {children ?? <p>No results could be found</p>}
              </div>
    
    
            </div>
          </div>
        </section>
      )
      break;
  }
}

/*
# Export
*/
export default Error;
