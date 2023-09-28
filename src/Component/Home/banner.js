import React from "react";

import { Link } from "react-router-dom";
import styles from "./banner.module.css";

import img from "../image/banner1.jpg";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <h3>NEW INSPIRATION 2020</h3>
        <h1>20% OFF ON NEW SEASON</h1>
        <Link to="/shop">
          <button className={styles.button}>Browse colleatios</button>
        </Link>
      </div>
      <div className={styles.image}>
        <img src={img} alt="ảnh lỗi rồi !" />
      </div>
    </div>
  );
};
export default Banner;
