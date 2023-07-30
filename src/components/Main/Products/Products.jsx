import React, { useState } from "react";
import cls from "./products.module.scss";
import Grid from "@mui/material/Grid";
import Product from "../Product/Product";
import Modal from "../../Modal/Modal";
import productsData from "../../../API/data";
import Order from "../../Order/Order";
import MobileModal from "../../MobileModal/MobileModal";
import MobileOrder from "../../MobileOrder/MobileOrder";
const Products = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleOpenProduct = (product) => {
    setOpenProduct(product);
    setCounter(1);
  };
  const handleCloseProduct = () => {
    setOpenProduct(false);
  };
  return (
    <>
      <div className={cls.wrapper}>
        {productsData.map((items) => (
          <div className={cls.product} id={items.categories}>
            <h1 className={cls.product_name}>{items.categories}</h1>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {items.products.map((item) => (
                <Grid item xs={2} sm={4} md={3}>
                  <Product
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    comment={item.comment}
                    price={item.price}
                    handleOpenProduct={handleOpenProduct}
                    handleCloseProduct={handleCloseProduct}
                    open={openProduct}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>

      <Modal open={!!openProduct.name} handleClose={handleCloseProduct}>
        <Order
          openProduct={openProduct}
          handleCloseProduct={handleCloseProduct}
          counter={counter}
          setCounter={setCounter}
        />
      </Modal>

      <MobileModal open={!!openProduct.name} handleClose={handleCloseProduct} onOpen={()=>setOpenProduct(true)}>
        <MobileOrder
          openProduct={openProduct}
          handleCloseProduct={handleCloseProduct}
          counter={counter}
          setCounter={setCounter}
        />
      </MobileModal>
    </>
  );
};

export default Products;
