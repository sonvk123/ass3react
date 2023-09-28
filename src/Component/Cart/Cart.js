import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cart } from "../../store/slector";

import { CartSlice } from "./CartSlice";
import styles from "./cart.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FiTrash2 } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";

import img_left from "../Detail/image/caret-left-solid.svg";
import img_right from "../Detail/image/caret-right-solid.svg";

const Cart = () => {
  const dispatch = useDispatch();

  //  tạo hàm lấy dữ liệu ra từ Storage
  function getFromStorage(key) {
    return localStorage.getItem(key);
  }

  //  lấy dữ liệi list cart từ localStorage
  const listCart_localStorage = JSON.parse(getFromStorage(`listCart`)) || [];

  //  lấy dữ liệi list cart từ redux
  const data_cart = useSelector(cart) || 0;

  // chạy khi lần đầu khởi động trang web hoặc reload lại trang web
  useEffect(() => {
    if (data_cart.length === 0) {
      dispatch(CartSlice.actions.CLEAR_CART());
      listCart_localStorage.map((value) =>
        dispatch(CartSlice.actions.ADD_CART(value))
      );
    }
  }, []);

  // thêm sản phẩm vào localStorage khi số lượng sản phẩm thay đổi
  useEffect(() => {
    if (data_cart.length > 0) {
      console.log(data_cart);
      localStorage.setItem("listCart", JSON.stringify(data_cart));
    } else if (data_cart.length === 0) {
      localStorage.setItem("listCart", JSON.stringify([]));
    }
  }, [data_cart]);

  let subtotal = 0;
  // let total = 0;
  data_cart.map((value) => {
    return (subtotal += value.quantity * value.data_detail.price);
  });

  // nút giảm số lượng
  const click_button_down = (id, quantity) => {
    // nếu số lượng sản phẩm > 1 thì sẽ giảm xuống
    if (quantity > 1) {
      const data = { id: id, act: "down" };
      dispatch(CartSlice.actions.UPDATE_CART(data));
    }
    // nếu số sản phẩm bằng 1 thì sẽ chọn xóa sản phẩm khỏi đơn hàng
    else if (quantity <= 1) {
      const confirmation = window.confirm("Bạn có muốn xóa sản phẩm?");
      if (confirmation) {
        dispatch(CartSlice.actions.DELETE_CART(id));
      }
    }
  };
  // nút tăng số lượng
  const click_button_up = (e) => {
    const data = { id: e, act: "up" };
    dispatch(CartSlice.actions.UPDATE_CART(data));
  };
  // nút xóa sản phẩm
  const click_button_delete = (e) => {
    const confirmation = window.confirm("Bạn có muốn xóa sản phẩm?");
    if (confirmation) {
      dispatch(CartSlice.actions.DELETE_CART(e));
    }
  };

  return (
    <div className={styles.cart}>
      <div className={styles.name}>
        <h1>CART</h1>
        <p>CART</p>
      </div>
      <h1>SHOPPNG CART</h1>
      <div className={styles.shopping_cart}>
        <div className={styles.list_product}>
          <div className={styles.thead}>
            <p className={styles.col_1}>IMAGE</p>
            <p className={styles.col_2}>PRODUCT</p>
            <p className={styles.col_3}>PRICE</p>
            <p className={styles.col_4}>QUANTITY</p>
            <p className={styles.col_5}>TOTAL</p>
            <p>REMOVE</p>
          </div>
          <div>
            {data_cart.map((value) => (
              <div className={styles.body} key={value.id}>
                <div className={styles.image}>
                  <img src={value.data_detail.img1} alt="" />
                </div>
                <div>
                  <h6>{value.data_detail.name}</h6>
                </div>
                <div>
                  <p>
                    {parseInt(value.data_detail.price).toLocaleString()} VND
                  </p>
                </div>
                <div className={styles.quantity_up_down}>
                  <button
                    className={`${styles.button} ${styles.button_down}`}
                    onClick={() => click_button_down(value.id, value.quantity)}
                  >
                    <img src={img_left} alt="" />
                  </button>

                  <p className={styles.quantity}>{value.quantity}</p>
                  <button
                    className={`${styles.button} ${styles.up}`}
                    onClick={() => click_button_up(value.id)}
                  >
                    <img src={img_right} alt="" />
                  </button>
                </div>
                <div>
                  <p>
                    {`${(
                      value.data_detail.price * value.quantity
                    ).toLocaleString()} VND`}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => click_button_delete(value.id)}
                    className={`${styles.button} ${styles.button_delete}`}
                  >
                    <FiTrash2 className={styles.icon_delete} />
                  </button>
                </div>
              </div>
            ))}
            <div className={styles.link}>
              <Link to="/shop">
                <button className={styles.continue}>
                  <FontAwesomeIcon
                    icon={faLeftLong}
                    className={styles.left_arrow}
                  />
                  Continue shopping
                </button>
              </Link>
              <Link to="/checkout">
                <button className={styles.checkout}>
                  Proceed to checkout
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className={styles.right_arrow}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.cart_total}>
          <h1>CART TOTAL</h1>
          <div className={styles.sub}>
            <h6>SUBTOTAL</h6>
            <p>{parseInt(subtotal).toLocaleString()} VND</p>
          </div>
          <hr />
          <div className={styles.total}>
            <h6>TOTAL</h6>
            <p>{parseInt(subtotal).toLocaleString()} VND</p>
          </div>
          <div className={styles.coupon}>
            <input placeholder="Enter your coupon" />
            <button>
              <IoGiftOutline className={styles.gift_icon} />
              Apply coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
