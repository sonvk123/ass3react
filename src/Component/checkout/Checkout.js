import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../store/slector";
import { CartSlice } from "../Cart/CartSlice";
import styles from "./checkout.module.css";

const Checkout = () => {
  const input_name = (e) => {};
  const input_email = (e) => {};
  const input_phone = (e) => {};
  const input_address = (e) => {};

  const data_cart = useSelector(cart);
  const dispatch = useDispatch();

  //  tạo hàm lấy dữ liệu ra từ Storage
  function getFromStorage(key) {
    return localStorage.getItem(key);
  }

  //  lấy dữ liệi list cart từ localStorage
  const listCart_localStorage = JSON.parse(getFromStorage(`listCart`)) || [];

  // chạy khi lần đầu khởi động trang web hoặc reload lại trang web
  useEffect(() => {
    if (data_cart.length === 0) {
      dispatch(CartSlice.actions.CLEAR_CART());
      listCart_localStorage.map((value) =>
        dispatch(CartSlice.actions.ADD_CART(value))
      );
    }
  }, []);

  let total = 0;
  data_cart.map((value) => {
    return (total += value.quantity * value.data_detail.price);
  });

  const click_order = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.checkout}>
      <div className={styles.name}>
        <h1>CHECKOUT</h1>
        <h1>
          HOME / CART /<p> CHECKOUT</p>
        </h1>
      </div>
      <h1 className={styles.billing}>BILLING DETAILS</h1>
      <div className={styles.bill}>
        <form className={styles.form}>
          <label>FULL NAME :</label>
          <input
            type="text"
            placeholder="Enter Your Full Name Here!"
            onChange={input_name}
            name="name"
          />
          <label>EMAIL :</label>
          <input
            type="email"
            placeholder="Enter Your Email Here!"
            onChange={input_email}
            name="email"
          />
          <label>PHONE NUMBER :</label>
          <input
            type="phone"
            placeholder="Enter Your Phone Number Here!"
            onChange={input_phone}
            name="phone"
          />
          <label>ADDRESS :</label>
          <input
            type="text"
            placeholder="Enter Your Address Here!"
            onChange={input_address}
            name="address"
          />
          <button className={styles.buttom_order} onClick={click_order}>
            Place order
          </button>
        </form>

        <div className={styles.order}>
          <h1>YOUR ORDER</h1>
          {data_cart.map((value) => (
            <div key={value.id}>
              <div className={styles.product}>
                <h5>{value.data_detail.name} </h5>
                <p>
                  {parseInt(value.data_detail.price).toLocaleString()} VND x
                  {value.quantity}
                </p>
              </div>
              <hr />
            </div>
          ))}
          <div className={styles.total}>
            <h5>TOTAL</h5>
            <p> {parseInt(total).toLocaleString()} VND</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
