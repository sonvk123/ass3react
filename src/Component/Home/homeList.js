import React from 'react'
import { useDispatch } from "react-redux";

import homeSlice from "./homeSlice";

import styles from "./homeList.module.css";
const HomeList = (props) => {
  const dispatch = useDispatch();
  const data = props.value;

  const click = () => {
    dispatch(homeSlice.actions.SHOW_POPUP(data));
  };

  return (
    <div className={styles.item} onClick={click}>
      <img src={data.img1} alt="" />
      <h1>{data.name}</h1>
      <p>{parseInt(data.price).toLocaleString()} VND</p>
    </div>
  );
};
export default HomeList;
