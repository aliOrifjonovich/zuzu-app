// import React from "react";
import cls from "./menu.module.scss";
import { ActiveIcon, CancelIcon } from "../../icons";
import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { ManuIcon } from "../../icons";
import { NavLink } from "react-router-dom";

export default function MenuNavbar() {
  const [state, setState] = React.useState(false);
  const EachPage = [
    {
      page: "Филиалы",
      href: "/branches",
    },
    {
      page: "О нас",
      href: "/about",
    },
    {
      page: "Контакты",
      href: "/contact",
    },
  ];

  const toggleDrawer = (action) => (event) => {
    setState(action);
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <ManuIcon />
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div className={cls.wrapper}>
            <div className={cls.items}>
              <div className={cls.menu_x}>
                <h1 className={cls.menu_text}>Меню</h1>
                <div
                  className={cls.cancelIcon}
                  onClick={(e) => {
                    setState(false);
                  }}
                >
                  <CancelIcon />
                </div>
              </div>
              <div className={cls.pages}>
                {EachPage.map((item) => (
                  <NavLink to={item.href} activeClassName={cls.active}>
                    {(props) => (
                      <div className={cls.page}>
                        <h1 className={cls.page_text}>{item.page}</h1>
                        {props.isActive ? (
                          <span>
                            <ActiveIcon />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
