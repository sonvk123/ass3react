import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";


const Delete_cart = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDelete = () => {
    // Thực hiện hành động xóa tại đây
    onDelete();
    setIsOpen(false);
  };

  const handleCancel = () => {
    // Hủy bỏ xóa
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="confirmation-dialog">
        <div className="message">Bạn có chắc muốn xóa?</div>
        <button className="confirm" onClick={handleDelete}>
          Xóa
        </button>
        <button className="cancel" onClick={handleCancel}>
          Hủy
        </button>
      </div>
    )
  );
};

export default Delete_cart;
