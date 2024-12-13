import React from "react";

function UpdatedPrice({ totalPrice, onBookNow }) {
  return (
    <div className="updated-price">
      <h2>Chi Phí Dự Kiến</h2>
      <p id="total-price">{totalPrice.toLocaleString("vi-VN")} VND</p>
      <button id="book-now-btn" onClick={onBookNow} disabled={!totalPrice}>
        Đặt Ngay
      </button>
    </div>
  );
}

export default UpdatedPrice;
