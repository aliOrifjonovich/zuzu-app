import React, { useState } from "react";
import cls from "./categories.module.scss";
import { CategoriesMenu } from "../../../API/api";
import { Link } from "react-scroll";

const Categories = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  return (
      <div className={cls.wrapper}>
        {CategoriesMenu.map((category) => (
          <Link
            to={category.id}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`${cls.category} ${
              category.id === activeCategoryId ? cls.active : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className={cls.categoryName}>{category.name}</div>
          </Link>
        ))}
      </div>
  );
};

export default Categories;
