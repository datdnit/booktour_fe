import React from "react";

const PaymentMethod = ({ selectedMethod, onSelectMethod }) => {
  return (
    <div className="payment-method">
      <h2>Phương Thức Thanh Toán</h2>
      <div className="method">
        <input
          type="radio"
          id="credit-card"
          name="payment-method"
          value="credit-card"
          checked={selectedMethod === "credit-card"}
          onChange={(e) => onSelectMethod(e.target.value)}
        />
        <label htmlFor="credit-card">Thẻ tín dụng</label>
      </div>
      <div className="method">
        <input
          type="radio"
          id="bank-transfer"
          name="payment-method"
          value="bank-transfer"
          checked={selectedMethod === "bank-transfer"}
          onChange={(e) => onSelectMethod(e.target.value)}
        />
        <label htmlFor="bank-transfer">Chuyển khoản ngân hàng</label>
      </div>
    </div>
  );
};

export default PaymentMethod;
