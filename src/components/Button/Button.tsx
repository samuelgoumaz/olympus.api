import React from "react";
import 'material-icons/iconfont/material-icons.css';
import "./ButtonDefault.scss";
import "./ButtonHeader.scss";
import "./ButtonIndicator.scss";
import "./ButtonBorder.scss";
import "./ButtonSubmit.scss";
import "./FxIconHeader.scss";
import "./FxIconButton.scss";

export interface ButtonProps {
  label?: string | null;
  icon?: string | null;
  mode?: string | null;
  color?: string | null;
  state?: string | null;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Button = ({
  label,
  icon,
  mode,
  color,
  state,
  onClick
}: button) => {

  function renderIcon (value) {
    let key = value;

    switch (key) {

      case `facebook`:
        return (<span className={`icon`}>
          <svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg>
        </span>)
        break;

      case `instagram`:
        return (<span className={`icon`}>
          <svg viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg>
        </span>)
        break;

      case `linkedin`:
        return (<span className={`icon`}>
          <svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg>
        </span>)
        break;

      case `youtube`:
        return (<span className={`icon`}>
          <svg viewBox="0 0 512 512"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"/></svg>
        </span>)
        break;

      case `soundcloud`:
        return (<span className={`icon`}>
          <svg viewBox="0 0 512 512"><path d="M443.5 273.1c0 25.1-20.4 45.5-45.5 45.5H271.5V162.3c4.8-1.8 9.9-3.1 15.1-3.9 4.1-0.6 8.3-1 12.5-1 42.3 0 77 32.7 80.3 74.1 5.7-2.5 11.9-4 18.6-4C423.1 227.6 443.5 248 443.5 273.1zM224.2 193.2v125.4h15.1v-134.5c-3.4 3.7-6.4 7.8-9 12.1C228.4 195 226.3 194.1 224.2 193.2zM247.6 318.6h15.1v-152.4c-5.4 2.7-10.5 6.1-15.1 9.9V318.6zM151.8 208.9v109.7h15.1V196.9C161.3 200.2 156.2 204.2 151.8 208.9zM106.5 231.6v86.5c1.9 0.2 3.7 0.4 5.7 0.4h7.9v-86.6c-2.6-0.5-5.2-0.7-7.9-0.7C110.3 231.3 108.4 231.4 106.5 231.6zM86.5 310.2c3.4 2.5 7.2 4.5 11.3 5.9v-82.4c-4.1 1.4-7.9 3.4-11.3 5.9V310.2zM128.4 234.4v84.2h15.1v-98.7c-3.4 5.6-6 11.8-7.5 18.4C133.6 236.8 131.1 235.5 128.4 234.4zM175.9 318.6h15.1V188.8c-5.3 0.7-10.3 2-15.1 3.8V318.6zM200.1 318.6h15.1v-128.3c-4.8-1.2-9.9-1.9-15.1-1.9V318.6L200.1 318.6zM79.1 303.4v-56.9c-6.6 7.6-10.6 17.6-10.6 28.5C68.5 285.8 72.5 295.7 79.1 303.4z"/></svg>
        </span>)
        break;

      case `behance`:
        return (<span className={`icon`}>
          <svg viewBox="0 0 512 512"><path d="M254.8 171.8c6.4 8.9 9.6 19.6 9.6 32 0 12.8-3.2 23.1-9.7 30.9 -3.6 4.4-9 8.4-16 12 10.7 3.9 18.8 10.1 24.2 18.5 5.5 8.4 8.2 18.7 8.2 30.7 0 12.4-3.1 23.6-9.3 33.5 -4 6.6-8.9 12.1-14.9 16.5 -6.7 5.1-14.6 8.6-23.7 10.5 -9.1 1.9-19 2.8-29.6 2.8H99.1V149.5h101.4C226.1 149.8 244.2 157.3 254.8 171.8zM140.9 185.9v46.3h51c9.1 0 16.5-1.7 22.2-5.2 5.7-3.5 8.5-9.6 8.5-18.4 0-9.8-3.8-16.2-11.3-19.4 -6.5-2.2-14.7-3.3-24.8-3.3H140.9zM140.9 266.9v55.9h50.9c9.1 0 16.2-1.2 21.2-3.7 9.2-4.6 13.8-13.3 13.8-26.2 0-10.9-4.5-18.4-13.4-22.5 -5-2.3-12-3.5-21-3.6H140.9L140.9 266.9zM396.4 207.3c10.8 4.8 19.8 12.5 26.8 23 6.4 9.2 10.5 19.9 12.4 32.1 1.1 7.1 1.5 17.4 1.3 30.8H323.9c0.6 15.6 6 26.5 16.2 32.7 6.2 3.9 13.6 5.8 22.4 5.8 9.2 0 16.8-2.4 22.5-7.1 3.2-2.6 5.9-6.1 8.4-10.7h41.4c-1.1 9.2-6.1 18.5-15 28 -13.9 15.1-33.4 22.6-58.4 22.6 -20.6 0-38.9-6.4-54.6-19.1 -15.8-12.7-23.7-33.4-23.7-62.1 0-26.9 7.1-47.5 21.4-61.8 14.2-14.3 32.7-21.5 55.5-21.5C373.4 200 385.6 202.4 396.4 207.3zM335.7 242.3c-5.7 5.9-9.3 13.9-10.8 24h69.9c-0.7-10.8-4.3-18.9-10.8-24.5 -6.5-5.6-14.5-8.4-24.1-8.4C349.5 233.4 341.4 236.4 335.7 242.3zM402.8 161.5h-91.2V182.7h91.2V161.5z"/></svg>
        </span>)
        break;

      case `vimeo`:
        return(<span className={`icon`}>
          <svg viewBox="0 0 512 512"><path d="M420.1 197.9c-1.5 33.6-25 79.5-70.3 137.8 -46.9 60.9-86.5 91.4-118.9 91.4 -20.1 0-37.1-18.5-51-55.6 -9.3-34-18.5-68-27.8-102 -10.3-37.1-21.4-55.7-33.2-55.7 -2.6 0-11.6 5.4-27 16.2L75.7 209.1c17-14.9 33.8-29.9 50.3-44.9 22.7-19.6 39.7-29.9 51.1-31 26.8-2.6 43.3 15.8 49.5 55 6.7 42.4 11.3 68.7 13.9 79 7.7 35.1 16.2 52.7 25.5 52.7 7.2 0 18-11.4 32.5-34.2 14.4-22.8 22.2-40.1 23.2-52.1 2.1-19.7-5.7-29.5-23.2-29.5 -8.3 0-16.8 1.9-25.5 5.7 16.9-55.5 49.3-82.4 97.1-80.9C405.5 130 422.2 153 420.1 197.9z"/></svg>
        </span>)
        break;

      case `twitter`:
        return (<span className={`icon`}>
          <svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg>
        </span>)
        break;

      default:
        return (<span className={`icon material-icons`}>{`${value}`}</span>)
        break;
    }
  }

  return (
    <button
      type={mode == `submit` ? `submit` : ``}
      className={`
        ${mode == `header` ? `button-header-component` : ``}
        ${mode == `indicator` ? `button-indicator-component` : ``}
        ${mode == `border` ? `button-border-component` : ``}
        ${mode == `default` || mode == null ? `button-component` : ``}
        ${mode == `submit` || mode == null ? `button-submit-component` : ``}
        ${icon ? `hv-icon` : ``}
        ${label ? `hv-label` : ``}
      `}
      style={{
        color: color ? color : `inherit`,
        border: mode == `border` ? `2px solid ${color ? color : `black`}` : `none`,
        cursor: `pointer`
      }}
      onClick={onClick}
    >

      {/**
        FxCube
        state =
          default,
          loading,
          complete,
          error
      **/}
      {icon ? <div
        className={`
          ${mode == `header` ? `fxIcon-header` : ``}
          ${mode == `indicator` ? `fxIcon-button` : ``}
          ${mode == `border` ? `fxIcon-button` : ``}
          ${mode == `default` || mode == null ? `fxIcon-button` : ``}
          ${mode == `submit` || mode == null ? `fxIcon-button` : ``}
        `}
        data-state={state != null ? String(state) : `default`}
      >
        <div className={`cancel`}>
          <div className={`inner`}>
            <span className={`icon material-icons`}>cancel</span>
          </div>
        </div>
        <div className={`front`}>
          <div className={`inner`}>
            {icon ? renderIcon(icon) : ``}
          </div>
        </div>
        <div className={`back`}>
          <div className={`inner`}>

            {/**
            # STATE : loading **/}
            <svg
              className={`spinner`}
              xmlns={`http://www.w3.org/2000/svg`}
              width={`200px`}
              height={`200px`}
              viewBox={`0 0 100 100`}
              preserveAspectRatio={`xMidYMid`}
            >
              <circle
                cx={50}
                cy={50}
                fill={`none`}
                stroke={color ? color : `black`}
                strokeWidth={10}
                r={35}
                strokeDasharray={`164.93361431346415 56.97787143782138`}
              >
                <animateTransform
                  attributeName={`transform`}
                  type={`rotate`}
                  repeatCount={`indefinite`}
                  dur={`1s`}
                  values={`0 50 50;360 50 50`}
                  keyTimes={`0;1`}
                ></animateTransform>
              </circle>
            </svg>

          </div>
        </div>
        <div className={`done`}>
          <div className={`inner`}>
            <span className={`icon error material-icons`}>warning</span>
            <span className={`icon complete material-icons`}>check_circle</span>
          </div>
        </div>
      </div> : ``}

      {label ? <span className={`label`}>{`${label}`}</span> : ``}

    </button>
  );
};

export default Button;
