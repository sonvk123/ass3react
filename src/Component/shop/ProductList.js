import React from "react";

import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";
const ProductList = ({ value, category, id }) => {

  // sau khi category được chọn hiển thị danh sách sản phẩm
  const Content_1 = ({ data }) => {
    return (
      <Link to={`/detail/${id}`}>
        <div className={styles.item}>
          <img src={data.img1} alt="" />
          <h1>{data.name}</h1>
          <p>{parseInt(data.price).toLocaleString()} VND</p>
        </div>
      </Link>
    );
  };
    // hiển thị danh sách sản phẩm theo category được chọn
  const Content = () => {
    if (value.category === category && value.category !== "all") {
      return <Content_1 data={value} />;
    } else if (category === "all") {
      return <Content_1 data={value} />;
    }
  };
  return <Content />;
};
export default ProductList;
