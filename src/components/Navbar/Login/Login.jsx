import React, { useRef, useState } from "react";
import cls from "./login.module.scss";
import { CancelIcon } from "../../icons";

const Login = ({ handleClose }) => {
  const [isInputActives, setIsInputActive] = useState(false);
  const InputRef = useRef();
  return (
    <div className={cls.wrapper}>
      <span onClick={handleClose}>
        <CancelIcon />
      </span>
      <div className={cls.login_text}>
        <h1>Вход на сайт</h1>
        <p>Войдите с вашим номером телефона</p>
      </div>
      <form className={cls.form}>
        <p>Номер телефона</p>
        <div
          className={`${cls.input} ${isInputActives ? cls.active : ""}`}
          onClick={() => {
            setIsInputActive(true);
            InputRef.current.focus();
          }}
        >
          <p>+998</p>
          <input type="number" className={cls.input_num} ref={InputRef} />
        </div>
        <button type="submit" className={cls.submit}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
