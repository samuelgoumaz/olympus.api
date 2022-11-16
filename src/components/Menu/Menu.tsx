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
  onClickFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  menu: {
    id: Number;
    title: string | null;
    url: string | null;
    url_extern: string | null;
    url_intern: string | null;
  };
}



/*
# Class Components
*/
/*const Menu: React.FC<MenuProps> = ({
  display,
  menu,
  onClick
}) => (
*/
const Menu = ({
  display,
  menu,
  onClickFunc
}: MenuProps) => {

  function openItem (e, url) {
    e.preventDefault();

    if (onClickFunc) {
      console.log(`openItem`, url);
      onClickFunc(url);
    }
  }

  return (
    <ul
      className={`
        menu-container
        ${display === null || display === `list` ? `dsp-list` : ``}
        ${display === `inline` ? `dsp-inline` : ``}
      `}
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
                  <span
                    onClick={(
                      event: React.MouseEvent<HTMLElement>) => {
                        if (onClickFunc)
                          openItem(event, menu[menuKey].url)
                      }
                    }
                    className={`menu-item`}
                  >{menu[menuKey].name ?? null}</span>
                  :
                  <span className={`menu-item`}>{`error on id:${menu[menuKey].id}`}</span>
                }
              </li>
            )
          )
      }
    </ul>
  )
};

/*
# Export
*/
export default Menu;
