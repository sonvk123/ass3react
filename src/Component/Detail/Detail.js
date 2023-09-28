import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useApiData from "../Home/api_data";

import styles from "./Detail.module.css";

import { useDispatch, useSelector } from "react-redux";
import { CartSlice } from "../Cart/CartSlice";
import { cart } from "../../store/slector";
import { v4 as uuidv4 } from "uuid";

import img_left from "./image/caret-left-solid.svg";
import img_right from "./image/caret-right-solid.svg";

const Detail = () => {
  //  tạo hàm lưu dữ liệu vào Storage
  function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  //  lấy dữ liệi list cart từ redux
  const listCart_redux = useSelector(cart);

  // thêm sản phẩm vào localStorage
  useEffect(() => {
    saveToStorage("listCart", listCart_redux);
  }, [listCart_redux]);

  const id = useParams().id;
  const dispatch = useDispatch();

  // lấy dữ liệu sản phẩm từ API
  const { data } = useApiData();

  // sản phẩm được hiển thị chính
  const [data_detail, setData_detail] = useState();
  // các sản phẩm liên quan đến sản phẩm chính
  const [data_related, setData_related] = useState();
  const [htmlList, setHtmlList] = useState();
  const [quantity, setQuantity] = useState(1);

  // lấy các dữ liệu của data_detail,  data_related, htmlList
  useEffect(() => {
    if (data.length > 0) {
      // lấy dữ liệu sản phẩm hiện tại
      const data_detail_1 = data.filter((value) => {
        return value._id.$oid === id;
      });

      setData_detail(data_detail_1[0]);

      // lấy dữ liệu các sản phẩm có khác với sản phẩm hiện tại
      const data_detail_2 = data.filter((value) => {
        return value !== data_detail_1[0];
      });

      // lấy dữ liệu các sản phẩm có cùng category với sản phẩm hiện tại
      const data_detail_3 = data_detail_2.filter((value) => {
        return value.category === data_detail_1[0].category;
      });

      setData_related(data_detail_3);

      //chuyển data_detail.long_desc thành hàng list
      const convertToHTMLList = (data) => {
        const items = data.split("\n").filter((item) => item.trim() !== "");
        let html = "";

        items.forEach((item) => {
          html += `<p>${item.trim()}</p>`;
        });

        html += "";

        return html;
      };

      if (data_detail) {
        const newHtmlList = convertToHTMLList(data_detail.long_desc);
        setHtmlList(newHtmlList);
      }
    }
  }, [data, id]);

  // khi chuyển sang sản phẩm cùng loại thì di chuyển lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // khi thay đổi số lượng hàng
  const click_down = (e) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const click_up = (e) => {
    setQuantity(quantity + 1);
  };
  // khi nhấn add_to_cart
  const click_add = (e) => {
    dispatch(
      CartSlice.actions.ADD_CART({ data_detail, quantity, id: uuidv4() })
    );
  };
  return (
    <div className={styles.detail}>
      <div className={styles.name}>
        <h1>DETAIL</h1>
        <p>DETAIL</p>
      </div>
      {data_detail && data_related && (
        <>
          {/* khu trên cùng hình ảnh, tên ...*/}
          <div className={styles.div_1}>
            <div className={styles.div_1_1}>
              <img src={data_detail.img1} alt=""></img>
              <img src={data_detail.img2} alt=""></img>
              <img src={data_detail.img3} alt=""></img>
              <img src={data_detail.img4} alt=""></img>
            </div>
            <div className={styles.div_1_2}>
              <img src={data_detail.img4} alt=""></img>
            </div>
            <div className={styles.div_1_3}>
              <h1>{data_detail.name}</h1>
              <h4>{parseInt(data_detail.price).toLocaleString()} VND</h4>
              <p>{data_detail.short_desc}</p>
              <h6>
                CATEGORY: <span> {data_detail.category}</span>
              </h6>
              <div className={styles.quantity_up_down}>
                <p>CATEGORY</p>
                <button className={styles.down} onClick={click_down}>
                  <img src={img_left} alt="" />
                </button>
                <p className={styles.quantity} style={{ color: " black" }}>
                  {quantity}
                </p>
                <button className={styles.up} onClick={click_up}>
                  <img src={img_right} alt="" />
                </button>
                <button onClick={click_add}>Add to cart</button>
              </div>
            </div>
          </div>
          {/* khu thứ 2 chi tiết */}
          <div className={styles.div_2}>
            <p className={styles.description}>DESCRIPTION</p>
            <p style={{ fontWeight: "500", fontSize: "24px" }}>
              PRODUCT DESCRIPTION
            </p>
            <div dangerouslySetInnerHTML={{ __html: htmlList }}></div>
          </div>
          {/* khu cuối các sản phẩm cùng loại */}
          <div className={styles.div_3}>
            <p style={{ fontWeight: "500", fontSize: "24px" }}>
              RELATED PRODUCTS
            </p>
            <div>
              {data_related.map((value) => (
                <Link
                  to={`/detail/${value._id.$oid}`}
                  key={value._id.$oid}
                  onClick={scrollToTop}
                >
                  <img src={value.img1} alt="" />
                  <p
                    style={{ fontWeight: "500", margin: "0" }}
                    className={styles.div_3_name}
                  >
                    {value.name}
                  </p>
                  <p className={styles.div_3_price}>
                    {parseInt(value.price).toLocaleString()} VND
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Detail;
