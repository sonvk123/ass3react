import React from "react";
import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import homeSlice from "./homeSlice";
import { data_modol } from "../../store/slector";

import styles from "./popup.module.css";
const Popup_home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(data_modol);

  // nhấn nút đóng modol
  const click_clone = () => {
    dispatch(homeSlice.actions.HIDE_POPUP());
  };

  // khi nhấn nút View Detail thì chuyển sang trang Detail với sản phẩn đang xem
  const click_View_Detail = (id) => {
    dispatch(homeSlice.actions.HIDE_POPUP());
    navigate(`/detail/${id}`);
  };

  const Backdrop = () => {
    return <div className={styles.backdrop} onClick={click_clone}></div>;
  };
  return (
    <>
      {/* tạo màu background trong mờ */}
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop_popup")
      )}
      {/* phần popup hiển thị thông tin sản phẩm */}
      {ReactDOM.createPortal(
        <div className={styles.popup}>
          <div className={styles.image}>
            <img src={data.img1} alt="" />
          </div>
          <div className={styles.info}>
            <p>{data.name} </p>
            <p>{parseInt(data.price).toLocaleString()} VND</p>
            <p>{data.short_desc} </p>
            <button
              className={styles.detail}
              onClick={() => click_View_Detail(data._id.$oid)}
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
              View Detail!
            </button>
          </div>
          <button onClick={click_clone} className={styles.close}>
            x
          </button>
        </div>,
        document.getElementById("popup")
      )}
    </>
  );
};
export default Popup_home;
