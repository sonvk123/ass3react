import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginSlice } from "./LoginSlice";


import Card from "../../Layout/Card";
import styles from "./login.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  //  tạo hàm lưu dữ liệu vào Storage
  function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  //  tạo hàm lấy dữ liệu ra từ Storage
  function getFromStorage(key) {
    return localStorage.getItem(key);
  }
  const [password, setPassword] = useState("");
  const userArr = JSON.parse(getFromStorage(`userArr`)) || [];


  // hàm nhập email
  const input_email = (e) => {
    setEmail(e.target.value);
  };

  // hàm nhập password
  const input_password = (e) => {
    setPassword(e.target.value);
  };

  // tại hàm kiếm tra
  const test = () => {
    let kt = true;

    if (!email.includes("@")) {
      window.alert("Mời nhập lại email");
      kt = false;
    } else if (!(password.trim().length > 8)) {
      window.alert("Password phải dài hơn 8 ký tự");
      kt = false;
    } else if (
      userArr.some(
        (value) => value.email === email && value.password === password
      )
    ) {
      window.alert("Đăng nhập thành công");
    } else {
      window.alert("Email hoặc mật khẩu bị sai, vui lòng thử lại");
      setPassword("");
      kt = false;
    }

    return kt;
  };

  // khi nhấn nút log in
  const button = (e) => {
    e.preventDefault();

    if (test()) {
      saveToStorage(
        "user",
        userArr.filter((value) => {
          return value.email === email;
        })
      );
      dispatch(LoginSlice.actions.ON_LOGIN());
      navigate("/");
    }
  };
  return (
    <div className={styles.login}>
      <Card>
        <h1>Sign In</h1>
        <form>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={input_email}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={input_password}
            value={password}
          />
          <button onClick={button}>SIGN UP</button>
        </form>
        <p>
          Create an accouht?
          <Link to="/register"> Sign Up</Link>
        </p>
      </Card>
    </div>
  );
};
export default Register;
