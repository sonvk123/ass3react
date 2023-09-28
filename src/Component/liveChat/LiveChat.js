import React from "react";
import styles from "./LiveChat.module.css";
const LiveChat = () => {
  return (
    <div className={styles.LiveChat}>
      <div className={styles.title}>
        <p>Customer Support</p>
        <p>Let's Chat Appp</p>
      </div>
      <hr className={styles.top} />
      <div className={styles.messgae_div}>
        <div>
          <div className={styles.messgae_KH}>
            <p>Xin chào</p>
          </div>
        </div>
        <div>
          <div className={styles.messgae_KH}>
            <p>Làm thế nào để xem các sản phẩm</p>
          </div>
        </div>

        <div className={styles.messgae_adim}>
          <img
            src="https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg"
            alt=""
            className={styles.image}
          />
          <p>ADMIN: Chào bạn</p>
        </div>

        <div className={styles.messgae_adim}>
          <img
            src="https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg"
            alt=""
            className={styles.image}
          />
          <p>ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</p>
        </div>
      </div>
      <hr className={styles.bot} />
      <div className={styles.tool}>
        <img
          src="https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg"
          alt=""
          className={styles.image}
        />
        <input
          className={styles.message}
          type="text"
          placeholder="Enter Message!"
        />

        <i className={`${`fa fa-paperclip`} ${styles.paperclip}`}></i>
        <i className={`${"far fa-smile"} ${styles.smile}`}></i>
        <i className={`${"fas fa-paper-plane"} ${styles.plane}`}></i>
      </div>
    </div>
  );
};

export default LiveChat;
