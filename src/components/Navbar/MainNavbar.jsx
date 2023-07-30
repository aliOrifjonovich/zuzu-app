import React, { useState } from "react";
import cls from "./MainNavbar.module.scss";
import {
  CartIcon,
  LanguageSelectionIcon,
  LocationIcon,
  ProfileIcon,
} from "../icons";
import MenuNavbar from "./MenuNavbar/MenuNavbar";
import ModalComp from "./ChosenLocation/ModalComp";
import { Language } from "../../API/api";
import PopoverCamp from "./Popover/PopoverCamp";
import Logo from "../../Images/Logo.png";
import RussianLang from "../../Images/russain.png";
import { Container } from "@mui/material";
import Modal from "../Modal/Modal";
import Login from "./Login/Login";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainNavbar = () => {
  // State for both of the popover and chosenLocation components
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const store = useSelector((store) => store.cart);

  // States
  const [location, setLocation] = useState("Tashkent");
  const [language, setLanguage] = useState({
    Language: "Russian",
    img: RussianLang,
  });

  //////  Popover functions////////////////////////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const openPopover = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  ////////////////////////////////////////////////////////////////

  //Chosen Location Functions for changing the state of the setOpenLocation function
  const handleOpenChosen = () => setOpenLocation(true);
  const handleCloseChosen = () => setOpenLocation(false);
  // Function for opening and clothing the login screen
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  return (
    <>
      <div className={cls.navbar}>
        <Container fixed>
          <div className={cls.wrapper}>
            <div className={cls.part1}>
              <div className={cls.menu}>
                <MenuNavbar />
              </div>
              <div className={cls.logo}>
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className={cls.location} onClick={handleOpenChosen}>
                <LocationIcon />
                {location}
              </div>
            </div>
            <div className={cls.part2}>
              <Link to="/cart">
                <div className={cls.cart_count_button}>
                  <div className={cls.cart}>
                    <CartIcon />
                   <p className={cls.cart_text}>Cart</p>
                  </div>
                  {store.length == 0 ? null : <span>{store.length}</span>}
                </div>
              </Link>
              <div className={cls.language} onClick={handleClick}>
                <img src={language.img} alt="" />
                <LanguageSelectionIcon />
              </div>
              <div className={cls.login} onClick={handleOpenLogin}>
                <ProfileIcon />
                Login
              </div>
            </div>
          </div>
        </Container>
      </div>

      <PopoverCamp
        openPopover={openPopover}
        id={id}
        handleClosePopover={handleClosePopover}
        anchorEl={anchorEl}
        Language={Language}
        setLanguage={setLanguage}
      />
      <Modal open={openLocation} handleClose={handleCloseChosen}>
        <ModalComp
          setLocation={setLocation}
          location={location}
          handleClose={handleCloseChosen}
        />
      </Modal>

      <Modal open={openLogin} handleClose={handleCloseLogin}>
        <Login handleClose={handleCloseLogin} />
      </Modal>
    </>
  );
};

export default MainNavbar;
