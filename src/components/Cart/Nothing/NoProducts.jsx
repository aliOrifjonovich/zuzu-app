import React from "react";
import cls from "./noproducts.module.scss";
import { Link } from "react-router-dom";
import CartImg from "../../../Images/cart.png";

const NoProducts = () => {
  return (
    <>
      <div className={cls.nothing_wrapper}>
        <div className={cls.nothing_content}>
          <div className={cls.text_img}>
            <div className={cls.cartImg}>
              <img src={CartImg} alt="img" />
            </div>
            <div className={cls.description}>
              <h1>В вашей корзине пока пусто</h1>
              <p>Тут появятся товары, которые вы закажете</p>
            </div>
          </div>
          <Link to="/">
            <div className={cls.homeButton}>Вернуться в меню</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoProducts;
