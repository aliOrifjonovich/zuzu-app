import React from "react";
import cls from "./product.module.scss";

const Product = ({ img, name, comment, price, handleOpenProduct, id }) => {
  const handleSelectProduct = () => {
    handleOpenProduct({ id, img, name, comment, price });
  };
  return (
    <>
      <div className={cls.product_item}>
        <img src={img} alt="product" className={cls.product_img} />
        <div className={cls.product_info}>
          <div className={cls.product_name}>{name}</div>
          <div className={cls.about_product}>{comment}</div>
        </div>
        <div className={cls.product_price_buy}>
          <div className={cls.product_price}> От {price} сумов</div>
          <div className={cls.buy} onClick={handleSelectProduct}>
            <span className={cls.buyText}>Выбрать</span>
            <span className={cls.buyText2}>От {price} сумов</span>
          </div>
        </div>
        {/* <p className={cls.noProduct} >Временно не доступен</p> */}
      </div>
    </>
  );
};

export default Product;
