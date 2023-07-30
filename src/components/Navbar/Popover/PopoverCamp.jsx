import React from "react";
import Popover from "@mui/material/Popover";
import cls from "./popovercamp.module.scss"




const PopoverCamp = ({
  openPopover,
  handleClosePopover,
  id,
  anchorEl,
  Language,
  setLanguage
}) => {
  
  return (
    <Popover
      id={id}
      open={openPopover}
      anchorEl={anchorEl}
      onClose={handleClosePopover}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      {Language.map((item) => (
        <div className={cls.laguage_map} onClick={()=>{
          setLanguage(item)
          handleClosePopover()
        }}>
          <img src={item.img} alt="flag" />
          <h2 className={cls.lang_text}>{item.Language}</h2>
        </div>
      ))}
    </Popover>
  );
};

export default PopoverCamp;
