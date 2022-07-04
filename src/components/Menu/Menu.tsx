/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Menu.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface MenuProps {
  display: string | null;
  menu: {
    id: Number;
    title: string | null;
    url_extern: string | null;
    url_intern: string | null;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  };
}



/*
# Class Components
*/
/*const Menu: React.FC<MenuProps> = ({
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
const Menu = ({
  display,
  menu,
  onClick
}: MenuProps) => (
  <ul
    className={`
      menu-container
      ${display === null || display === `list` ? `dsp-list` : ``}
      ${display === `inline` ? `dsp-inline` : ``}
    `}
    onClick={onClick ?? null}
  >
    {
      menu && Object.keys(menu).length > 0 &&
        Object.keys(menu).map(
          menuKey => menu[menuKey].id && (
            <li
              className={`menu-line`}
              style={{
                width: display === `inline` ? `${Math.floor(100/Object.keys(menu).length)}%` : `auto`
              }}
            >
              {menu[menuKey].url ?
                <a href={menu[menuKey].url}>
                  <span className={`menu-item`}>{menu[menuKey].name ?? null}</span>
                </a>
                :
                <span className={`menu-item`}>{`error on id:${menu[menuKey].id}`}</span>
              }
            </li>
          )
        )
    }
  </ul>
);

/*
# Export
*/
export default Menu;
