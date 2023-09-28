import React from 'react'
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h2>CUSTOMER SERVICES</h2>
        <div className={styles.link}>
          <a href="/#">Help & Contact Us</a>
          <a href="/#">Returns & Refunds</a>
          <a href="/#">Online Stores</a>
          <a href="/#">Terms & Conditions</a>
        </div>
      </div>
      <div>
        <h2>COMPANY</h2>
        <div className={styles.link}>
          <a href="/#">What We Do</a>
          <a href="/#">Available</a>
          <a href="/#">Last Posts</a>
          <a href="/#">FAQs</a>
        </div>
      </div>
      <div>
        <h2>SOCIAL MEDIA</h2>
        <div className={styles.link}>
          <a href="/#">Twitter</a>
          <a href="/#">Instagram</a>
          <a href="/#">Facebook</a>
          <a href="/#">Pinterest</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
