/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./MenuExpandable.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface MenuExpandableProps {
  display: string | null;
  onClickFunc?: (event: React.MouseEvent<HTMLDivElement>) => void;
  isExpandable: true | false;
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
/*const MenuExpandable: React.FC<MenuExpandableProps> = ({
  display,
  MenuExpandable,
  onClick
}) => (
*/
const MenuExpandable = ({
  display,
  isExpandable,
  menu,
  onClickFunc
}: MenuExpandableProps) => {

  function expandable (e) {
    e.preventDefault();
    try {
      if (e.currentTarget.querySelector(`.submenu`).classList.contains(`dsp-open`)) {
        e.currentTarget.querySelector(`.submenu`).classList.remove(`dsp-open`);
        e.currentTarget.querySelector(`.submenu`).classList.add(`dsp-close`);
      } else {
        e.currentTarget.querySelector(`.submenu`).classList.add(`dsp-open`);
        e.currentTarget.querySelector(`.submenu`).classList.remove(`dsp-close`);
      }
    } catch {
    }
    
  }

  function openItem (e, url) {
    e.preventDefault();

    if (onClickFunc) {
      onClickFunc(url);
    }
  }
  return (
    <ul
      className={`
        menu-container
        ${display === null || display === `line` ? `dsp-line` : ``}
        ${display === null || display === `list` ? `dsp-list` : ``}
        ${display === `inline` ? `dsp-inline` : ``}
      `}
    >
        {menu && Object.keys(menu).length > 0 &&
          Object.keys(menu).map(
            (menuKey) => menu[menuKey].id && (
              <li
                className={`menu-line`}
                key={`menu_expandable-${menu[menuKey].id}-li-${menuKey}`}
                style={{
                  width: display === `inline` ? `${Math.floor(100/Object.keys(menu).length)}%` : `auto`
                }}
                onClick={(
                  event: React.MouseEvent<HTMLElement>) => {
                    if (isExpandable) {
                      expandable(event);
                    }
                  }
                }
              >
                <span
                  onClick={(
                    event: React.MouseEvent<HTMLElement>) => {
                      if (onClickFunc) {
                        if (menu[menuKey].page && menu[menuKey].page.slug) {
                          openItem(event, `/page/${menu[menuKey].page.slug}`)
                        } else {
                          if (menu[menuKey].url) {
                            openItem(event, menu[menuKey].url)
                          }
                        }
                      }
                    }
                  }
                  className={`menu-item ${display === `list`}`}
                >{menu[menuKey].title ?? null}</span>


                {menu[menuKey].submenu && Object.keys(menu[menuKey].submenu).length > 0 ? <span className={`submenu ${isExpandable === true ? `dsp-close` : `dsp-open`}`}>
                  <ul>
                  {menu[menuKey].submenu && Object.keys(menu[menuKey].submenu).length > 0 &&
                    Object.keys(menu[menuKey].submenu).map(
                      (menuSubKey) => menu[menuKey].submenu[menuSubKey].id && (
                        <li
                          className={`submenu-line`}
                          key={`menu_expandable-sub-${menu[menuKey].submenu[menuSubKey].id}-li-${menuSubKey}`}
                          style={{
                            width: display === `inline` ? `${Math.floor(100/Object.keys(menu.submenu).length)}%` : `auto`
                          }}
                        >
                          <span
                            onClick={(
                              event: React.MouseEvent<HTMLElement>) => {
                                if (onClickFunc) {
                                  if (menu[menuKey].submenu[menuSubKey].page && menu[menuKey].submenu[menuSubKey].page.slug) {
                                    openItem(event, `/page/${menu[menuKey].submenu[menuSubKey].page.slug}`)
                                  } else {
                                    if (menu[menuKey].submenu[menuSubKey].url) {
                                      openItem(event, menu[menuKey].submenu[menuSubKey].url)
                                    }
                                  }
                                }
                              }
                            }
                            className={`submenu-item`}
                          >{menu[menuKey].submenu[menuSubKey].name ?? null}</span>
                          </li>)
                    )
                  }
                  </ul>
                </span> : ``}
              </li>
            )
          )
        }
    </ul>)
};

/*
# Export
*/
export default MenuExpandable;
