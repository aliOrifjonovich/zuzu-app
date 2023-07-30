import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import EachBranch from "../../API/branches";
import cls from "./branches.module.scss";
import Branch from "./Branch/Branch";
import { Link } from "react-router-dom";

const Branches = () => {
  return (
    <Container>
      <div className={cls.wrapper}>
        <div className={cls.branches}>
          <h1>Филиалы</h1>
          <div className={cls.pages}>
            <Link to="/branches">
              <p>Список</p>
            </Link>
          </div>
        </div>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          {EachBranch.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Link to={item.id}>
                <div className={cls.Branches}>
                  <Branch item={item} />
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Branches;
