import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";
import Tags from "../Tags";
import "./Popup.scss";

export interface PopupProps {
  position: number;
  name?: string | null;
  slug?: string | null;
  closeFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  reduceFunc: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: JSX.Element | JSX.Element[];
}

const popupInitSize = () => {
};

const popupInitPosition = () => {
};

const createPopup = (data: any[]) => {
};

const Popup = ({
  position,
  name,
  slug,
  closeFunc,
  reduceFunc,
  children
}: PopupProps) => {
  return (
    <>
      <div className="popup-component-bg" onClick={
                  (event: React.MouseEvent<HTMLElement>) => {
                    if (closeFunc) {
                      closeFunc()
                    }
                  }
                }></div>
      <div className="popup-component dsp-open" id={`popup-${slug}`}>
      <div className="popup-component-inner">
        <div className="popup-header">
          <div className="popup-header-col title"><h5>{name ?? `Notification`}</h5></div>
          <div className="popup-header-col action">
              {/**<Button
                icon={`remove`}
                mode={`header`}
                onClick={
                  (event: React.MouseEvent<HTMLElement>) => {
                    if (document.getElementById(`popup-${slug}`)) {
                      let block = document.getElementById(`popup-${slug}`);
                      if (block.classList.contains(`dsp-open`) === true) {
                        block.classList.remove("dsp-open");
                        block.classList.add("dsp-close");
                      } else {
                        block.classList.remove("dsp-close");
                        block.classList.add("dsp-open");
                      }
                    }
                  }
                }
              />**/}
              <Button
                icon={`close`}
                mode={`header`}
                onClick={
                  (event: React.MouseEvent<HTMLElement>) => {
                    if (closeFunc) {
                      closeFunc()
                    }
                  }
                }
              />
          </div>
        </div>
        <div className="popup-content">
          <div className="popup-content-inner">
              {children}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export { createPopup };
export default Popup;
