import React from "react";

import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "./Navbar";
import Footer from "./Footer";
import LiveChat from "../Component/liveChat/LiveChat";

import { chat } from "../store/slector";
import { LiveChatSlice } from "../Component/liveChat/LiveChatSlice";
import { LoginSlice } from "../Component/Login/LoginSlice";

const Root = () => {
  //  tạo hàm lấy dữ liệu ra từ Storage
  function getFromStorage(key) {
    return localStorage.getItem(key);
  }

  // lấy dữ liệu tài khoản đang đăng nhập
  const user = JSON.parse(getFromStorage(`user`)) || [];

  const dispatch = useDispatch();

  // xem xem live chat có được bật hay không
  const isShow = useSelector(chat);

  // khi click vào biểu tượng live chat
  const click_chat = () => {
    dispatch(LiveChatSlice.actions.isShow());
  };

  // nếu trên localStorage có user thì sẽ đăng nhập vào tài khoản đó
  if (user.length > 0) {
    dispatch(LoginSlice.actions.ON_LOGIN());
  }

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
        {isShow && <LiveChat />}
      </main>
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg"
        alt=""
        className={"image_chat"}
        onClick={click_chat}
      />
      <Footer />
    </>
  );
};

export default Root;
