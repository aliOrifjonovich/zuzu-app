import React from "react";
import EachBranch from "../../../API/branches";
import imgInfo from "../../../Images/branchInfo.png";
import { useParams } from "react-router-dom";
import cls from "./branchinfo.module.scss";
const BranchInfo = () => {
  const { id } = useParams();
  const branchData = EachBranch.find((item) => item.id === id);
  console.log(branchData);
  return (
    <div className={cls.branchinfo}>
      <div className={cls.header}>
        <h1>{branchData.name}</h1>
      </div>
      <div className={cls.infos}>
        <div className={cls.about_text}>
          <p>
            Название кафе «Zuzu» переводится с грузинского как «комната для
            приёмов». В интерьере заведения королевская пышность сочетается с
            уютом гостиной: на полу лежат домотканые орнаментальные ковры, зал
            украшает мебель из антикварного магазина, а серванты заполнены
            милыми безделушками.{" "}
          </p>
          <p>
            Еду здесь готовят по-домашнему, точно в тбилисском сахли. Посетители
            рекомендуют брать «бадриджаны бебия», то есть «баклажаны по
            бабушкиному рецепту» и мацони. Говорят, этот кисломолочный продукт
            здесь — один из лучших в городе.
          </p>
        </div>
        <div className={cls.img}>
          <img src={imgInfo} alt="img" />
        </div>
        <div className={cls.contact_address}>
          <p>
            Адрес: 
            <span>{branchData.address}</span>
          </p>
          <p>
            Часы работы:
            <span>
              {branchData.from} - {branchData.to}
            </span>
          </p>
          <p>
            Номер телефона:
            <span>+998 71 200 77 77</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BranchInfo;
