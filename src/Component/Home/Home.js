import React from 'react'

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "./banner";
import HomeList from "./homeList";
import Popup from "./Popup ";

import { show } from "../../store/slector";
import useApiData from "./api_data";

import styles from "./home.module.css";

import img_1 from "../image/product_1.png";
import img_2 from "../image/product_2.png";
import img_3 from "../image/product_3.png";
import img_4 from "../image/product_4.png";
import img_5 from "../image/product_5.png";
const Home = () => {
  const { data } = useApiData();

  const Content = () => {
    return data
      .slice(0, 8)
      .map((value) => <HomeList value={value} key={value._id.$oid} />);
  };

  const isShowModol = useSelector(show);

  return (
    <div className={styles.home}>
      <Banner />
      <div className={styles.list_product}>
        <h1>CAREFULLY CREATED COLLECTIONS</h1>
        <h1>BROWSE OUR CATETGORIES</h1>
      </div>
      <Link to="/shop" className={styles.image}>
        <img src={img_1} alt=""></img>
        <img src={img_2} alt=""></img>
        <img src={img_3} alt=""></img>
        <img src={img_4} alt=""></img>
        <img src={img_5} alt=""></img>
      </Link>
      <div className={styles.list_trending}>
        <h1>MADE THE HARD WAY</h1>
        <h1>TOP TRENDING PRODUCTS</h1>
      </div>
      <div className={styles.list}>
        <Content />
        {isShowModol && <Popup value={data} />}
      </div>
      <div>
        <div className={styles.information}>
          <div>
            <h1>FREE SHIPPING</h1>
            <p>Free Shipping worlwide</p>
          </div>
          <div>
            <h1>24 X 7 SERVICE</h1>
            <p>Free Shipping worlwide</p>
          </div>
          <div>
            <h1>FESTIVAL OFFER</h1>
            <p>Free Shipping worlwide</p>
          </div>
        </div>
        <div className={styles.friend}>
          <div>
            <h1>LET'S BE FRIENDS!</h1>
            <p>Nisi nisi tempor consequat laboris nisi.</p>
          </div>
          <div>
            <input type="text" placeholder="Email your email address"></input>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
