import React from "react";

import styles from "./navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginSlice } from "../Component/Login/LoginSlice";
import { Login } from "../store/slector";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(`user`)) || [];

  const location = useLocation();
  const currentPath = location.pathname;

  // lấy tên người dùng đang đăng nhập
  let user_name = "";
  if (user.length > 0) {
    user_name = user[0].name;
  }
  // xem đã login hay chưa
  const isLogin = useSelector(Login);

  // khi nhấn logout
  const click_logout = () => {
    dispatch(LoginSlice.actions.ON_LOGOUT());
    localStorage.removeItem("user");
  };
  // đổi màu sau khi nhấn button
  const handleButtonClick = (link) => {
    navigate(`/${link}`);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_1}>
        <button
          onClick={() => handleButtonClick("")}
          className={`${currentPath === "/" ? styles.active : undefined} ${
            styles.button
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleButtonClick("shop")}
          className={`${currentPath === "/shop" ? styles.active : undefined} ${
            styles.button
          }`}
        >
          Shop
        </button>
      </div>
      <h1>BOUTIQUE</h1>
      <div className={styles.navbar_2}>
        <button
          onClick={() => handleButtonClick("cart")}
          className={`${currentPath === "/cart" ? styles.active : undefined} ${
            styles.button
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          Cart
        </button>
        {/* nút login */}
        {!isLogin && (
          <button
            onClick={() => handleButtonClick("login")}
            className={`${
              currentPath === "/login" ? styles.active : undefined
            } ${styles.button}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            Login
          </button>
        )}

        {/* trang cá nhân */}
        {isLogin && (
          <button
            onClick={() => handleButtonClick("#")}
            className={`${currentPath === "/#" ? styles.active : undefined} ${
              styles.button
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            {user_name}
          </button>
        )}
        {isLogin && (
          <button onClick={click_logout} className={styles.button}>
            {"(Logout)"}
          </button>
        )}
      </div>
    </div>
  );
};
export default NavBar;
