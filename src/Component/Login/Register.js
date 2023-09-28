import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import Card from "../../Layout/Card";
import styles from "./login.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const userArr = JSON.parse(getFromStorage(`userArr`)) || [];

  //  tạo hàm lưu dữ liệu vào Storage
  function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  //  tạo hàm lấy dữ liệu ra từ Storage
  function getFromStorage(key) {
    return localStorage.getItem(key);
  }
  const data_reg = {
    name: name,
    email: email,
    password: password,
    phone: phone,
  };

  // hàm nhập name
  const input_name = (e) => {
    setName(e.target.value);
  };

  // hàm nhập email
  const input_email = (e) => {
    setEmail(e.target.value);
  };

  // hàm nhập password
  const input_password = (e) => {
    setPassword(e.target.value);
  };

  // hàm nhập phone
  const input_phone = (e) => {
    setPhone(e.target.value);
  };

  const button = (e) => {
    e.preventDefault();
    const kt = test();
    if (kt) {
      userArr.push(data_reg);
      saveToStorage("userArr", userArr);
      window.alert('Đăng ký thành công!')
      navigate('/login')
    }
  };

  // tại hàm kiếm tra
  const test = () => {
    let kt = true;

    if (!(name.trim().length > 0)) {
      window.alert("Mời nhập name");
      kt = false;
    }
    if (!email.includes("@")) {
      window.alert("Mời nhập lại email");
      kt = false;
    } else if (userArr.some((value) => value.email === email)) {
      window.alert("Email đã được sử dụng, vui lòng sử dụng email khác");
      kt = false;
    } else if (!(password.trim().length > 8)) {
      window.alert("Password phải dài hơn 8 ký tự");
      kt = false;
    } else if (!(phone.trim().length > 9)) {
      window.alert("Số điện thoại phải dài hơn 9 ký tự");
      kt = false;
    }

    return kt;
  };
  return (
    <div className={styles.login}>
      <Card>
        <h1>Sign Up</h1>
        <form>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={input_name}
          />
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
          />
          <input
            id="Phone"
            name="Phone"
            type="phone"
            placeholder="Phone"
            onChange={input_phone}
          />
          <button onClick={button}>SIGN UP</button>
        </form>
        <p>
          Login?
          <Link to="/login"> Click</Link>
        </p>
      </Card>
    </div>
  );
};
export default Register;
