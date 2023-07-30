import React from "react";
import "boxicons";
import cls from "./footer.module.scss";
import { FacebookIcon, InstagramIcon, TelegramIcon } from "../icons";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <Container fixed>
        <div className={cls.wrapper}>
          <div className={cls.first_footer}>
            <div className={cls.logo}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={cls.pages}>
              <div className={cls.page}>
                <Link to="/branches">
                  <p>Филиалы</p>
                </Link>
              </div>
              <div className={cls.page}>
                <Link to="/about">
                  <p>О нас</p>
                </Link>
              </div>
              <div className={cls.page}>
                <Link to="/contact">
                  <p>Контакты</p>
                </Link>
              </div>
            </div>
            <span></span>
          </div>
          <div className={cls.second_footer}>
            <div className={cls.copyright}>
              <p className={cls.text}>©Zuzu 2005 - 2021 All rights reserved</p>
              <div className={cls.medias}>
                <box-icon type="logo" name="instagram"></box-icon>
                <box-icon name="telegram" type="logo"></box-icon>
                <box-icon name="facebook" type="logo"></box-icon>
              </div>
              <p className={cls.text2}>©Zuzu 2005 - 2021 All rights reserved</p>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
