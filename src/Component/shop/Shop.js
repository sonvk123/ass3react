import React, { useState } from "react";

import styles from "./shop.module.css";
import ProductList from "./ProductList";
import useApiData from "../Home/api_data";

const Shop = () => {
  const [activeButton, setActiveButton] = useState("all");
  const [category, setCategory] = useState("all");
  const { data } = useApiData();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setCategory(buttonName);
  };

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  
  let stt = 1;
  let style = "";
  const pre = () => {};
  const next = () => {};
  return (
    <div className={styles.shop}>
      <div className={styles.name}>
        <h1>SHOP</h1>
        <p>SHOP</p>
      </div>
      <div className={styles.product}>
        <div className={styles.button}>
          <h1>CATEGORIES</h1>
          <h1>APPLE</h1>
          <button
            className={activeButton === "all" ? styles.active : undefined}
            onClick={() => handleButtonClick("all")}
          >
            All
          </button>
          <h1>IPHONW & MAC</h1>
          <button
            className={activeButton === "iphone" ? styles.active : undefined}
            onClick={() => handleButtonClick("iphone")}
          >
            Iphone
          </button>
          <button
            className={activeButton === "ipad" ? styles.active : undefined}
            onClick={() => handleButtonClick("ipad")}
          >
            Ipad
          </button>
          <button
            className={activeButton === "macbook" ? styles.active : undefined}
            onClick={() => handleButtonClick("macbook")}
          >
            Macbook
          </button>
          <h1>WIRELESS</h1>

          <button
            className={activeButton === "airpod" ? styles.active : undefined}
            onClick={() => handleButtonClick("airpod")}
          >
            Airpod
          </button>
          <button
            className={activeButton === "watch" ? styles.active : undefined}
            onClick={() => handleButtonClick("watch")}
          >
            Watch
          </button>
          <h1>OTHER</h1>

          <button
            className={activeButton === "mouse" ? styles.active : undefined}
            onClick={() => handleButtonClick("mouse")}
          >
            Mouse
          </button>
          <button
            className={activeButton === "keyboard" ? styles.active : undefined}
            onClick={() => handleButtonClick("keyboard")}
          >
            Keyboard
          </button>
          <button
            className={activeButton === "other" ? styles.active : undefined}
            onClick={() => handleButtonClick("other")}
          >
            Other
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.div_1}>
            <input type="text" placeholder="Enter Search Here!"></input>
            <select>
              <option value="option1" defaultValue>
                Default Sorting
              </option>
              <option value="option2">Option 1</option>
              <option value="option3">Option 2</option>
            </select>
          </div>

          <div className={styles.productList}>
            {data.map((value) => (
              <ProductList
                value={value}
                category={category}
                key={value._id.$oid}
                id={value._id.$oid}
              />
            ))}
          </div>

          <div className={styles.last}>
            <div>
              <button onClick={pre}>{"<<"}</button>
              <p className={style}>{stt}</p>
              <button onClick={next}> {">>"}</button>
            </div>
            <p>Showing 1-9 of results</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
