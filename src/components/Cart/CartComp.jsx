import { Container } from "@mui/material";
import React from "react";
import cls from "./cart.module.scss";
import { CancelCartIcon, ClearAllButton, MinusIcon, PlusIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { ClearAction, DeleteAction, SaveAction } from "../../Redux/cartReducer";
import NoProducts from "./Nothing/NoProducts";

const CartComp = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.cart);

  // Calculate total price
  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.counter,
    0
  );

  return (
    <Container fixed>
      <div className={cls.cart}>
        {products.length == 0 ? (
          <NoProducts />
        ) : (
          <>
            <div className={cls.cart_part1}>
              <div className={cls.header}>
                <h1>Корзина</h1>
                <div
                  className={cls.clearAll_btn}
                  onClick={() => dispatch(ClearAction())}
                >
                  <ClearAllButton />
                  <h2>Очистить корзину</h2>
                </div>
              </div>

              <div className={cls.products}>
                {products.map((item) => (
                  <div className={cls.chosen_products}>
                    <div className={cls.chosen_product}>
                      <div className={cls.chosen_product_img}>
                        <img src={item.img} alt="pizza" />
                      </div>
                      <div className={cls.chosen_product_info}>
                        <div className={cls.chosen_product_name}>
                          <h2>{item.name}</h2>
                          <h3>Средняя, Воздушное</h3>
                        </div>
                        <div className={cls.price_count}>
                          <h2 className={cls.price}>{item.price}</h2>
                          <div className={cls.count_wrapper}>
                            <div
                              className={cls.minus}
                              onClick={() =>
                                dispatch(
                                  SaveAction(item.id, item.counter, "minus")
                                )
                              }
                            >
                              <MinusIcon />
                            </div>
                            <div className={cls.count}>{item.counter}</div>
                            <div
                              className={cls.plus}
                              onClick={() =>
                                dispatch(
                                  SaveAction(item.id, item.counter, "plus")
                                )
                              }
                            >
                              <PlusIcon />
                            </div>

                            <div
                              className={cls.deleteEach}
                              onClick={() => {
                                console.log(products);
                                console.log(item.id);
                                dispatch(DeleteAction(item.id));
                              }}
                            >
                              <CancelCartIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cls.cart_part2}>
              <div className={cls.header}>
                <h1>Ваш заказ</h1>
              </div>

              <div className={cls.prices}>
                {products.map((item) => (
                  <>
                    <div className={cls.each_product_price}>
                      <p>
                        {item.counter} x {item.name}
                      </p>
                      <p>{item.price * item.counter} сум</p>
                    </div>
                  </>
                ))}
                <div className={cls.deliver}>
                  <p>Доставка</p>
                  <p>0 сум</p>
                </div>
                <div className={cls.overall}>
                  <h1>Итого</h1>
                  <h1>{totalPrice} сум</h1>
                </div>
              </div>

              <div className={cls.cart_buttons}>
                <div className={cls.submit}> К оформление заказа</div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default CartComp;
