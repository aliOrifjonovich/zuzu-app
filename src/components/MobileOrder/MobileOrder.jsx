import React from "react";
import cls from "./mobileorder.module.scss";
import { MinusIcon, PlusIcon } from "../icons";
import { useDispatch } from "react-redux";
import { AddAction } from "../../Redux/cartReducer";

const MobileOrder = ({
  openProduct,
  handleCloseProduct,
  counter,
  setCounter,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={cls.modal_wrapper}>
        <div className={cls.modal_img}>
          <img src={openProduct.img} alt="img" width="200px" />
        </div>
        <div className={cls.modal_infos}>
          <div className={cls.info}>
            <h1 className={cls.header}>{openProduct.name}</h1>
            <p className={cls.text}>{openProduct.comment}</p>
          </div>
          <div className={cls.buttons}>
            <div className={cls.count}>
              <span
                onClick={() => setCounter((old) => (old === 1 ? 1 : --old))}
              >
                <MinusIcon />
              </span>
              <p>{counter}</p>
              <span onClick={() => setCounter((old) => old + 1)}>
                <PlusIcon />
              </span>
            </div>

            <div
              className={cls.buyButton}
              onClick={() => {
                dispatch(
                  AddAction({
                    counter,
                    img: openProduct.img,
                    name: openProduct.name,
                    price: openProduct.price,
                    id: "a" + Date.now(),
                  })
                );
                handleCloseProduct(false);
                setCounter(1);
              }}
            >
              <p>Добавить</p>
              <p>{openProduct.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileOrder;
