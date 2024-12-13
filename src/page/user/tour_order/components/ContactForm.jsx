import React from "react";

function ContactForm({ formData, onInputChange, passengerCount, onPassengerChange }) {
  return (
    <div className="contact-info">
      <h2>Thông Tin Liên Hệ</h2>
      <form>
        <div>
          <label htmlFor="fullname">Họ và tên:</label>
          <input
            type="text"
            id="fullname"
            value={formData.fullname}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="passengerCount">Số hành khách:</label>
          <select
            id="passengerCount"
            value={passengerCount}
            onChange={onPassengerChange}
          >
            {[...Array(20)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
