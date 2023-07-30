import React from "react";
import cls from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={cls.contact}>
      <div className={cls.header}>
        <h1>Контакты</h1>
      </div>

      <div className={cls.text}>
        <p className={cls.phone_number}>
          Единный call-центр: <span>+998 71 200 77 77</span>
        </p>
        <span className={cls.line}></span>
        <div className={cls.info_bot}>
          <p>
            Вы можете написать нам <span>@ZuzuPizzaSupport_bot</span> также вы
            можете звонить по номеру +998712005400.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
