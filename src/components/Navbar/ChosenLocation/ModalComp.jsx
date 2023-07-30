import React from "react";
import { Location } from "../../../API/api";
import cls from "./Modal.module.scss";
import { ActiveIcon, CancelIcon } from "../../icons";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   borderRadius: "5px",
//   boxShadow: 24,
//   p: 4,
// };

const ModalComp = ({ handleClose, setLocation, location }) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.region_header}>
        <h1 className={cls.region_text}>Выберите город</h1>
        <span className={cls.cancel} onClick={handleClose}>
          <CancelIcon />
        </span>
      </div>
      {Location.map((item) => {
        return (
          <div
            className={cls.eachItem}
            onClick={() => {
              setLocation(item);
              handleClose();
            }}
          >
            {item}
            {item === location ? <ActiveIcon /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default ModalComp;
