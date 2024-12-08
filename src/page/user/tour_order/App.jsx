import React, { useState } from 'react';
import './App.css';

function App() {
  const [passengerCount, setPassengerCount] = useState(1); // Số lượng hành khách
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: '',
  }); // Dữ liệu forn
  const [message, setMessage] = useState(''); 

  const unitPrice = 8899000; // Đơn giá 1 người (tạm set mặc định là 8tr9)
  const totalPrice = passengerCount * unitPrice;

  // Cập nhật số lượng hành khách
  const handlePassengerCountChange = (e) => {
    setPassengerCount(Number(e.target.value));
  };

  // Cập nhật dữ liệu form
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: value,
    }));
  };

  // Xử lý nút "Đặt Ngay"
  const handleBooking = () => {
    const { fullname, phone, email, address, paymentMethod } = formData;

    // Kiểm tra các điều kiện
    if (!fullname || !phone || !email || !address) {
      setMessage('Hãy điền đầy đủ thông tin');
      return;
    }

    if (!paymentMethod) {
      setMessage('Hãy chọn phương thức thanh toán');
      return;
    }

    setMessage('Đặt đơn thành công! Chúng tôi sẽ liên hệ lại với quý khách hàng trong vòng 12 giờ');
  };

  return (
    <div className="container">
      {/* Cột trái */}
      <div className="left-column">
        <div className="section">
          <h2>Thông Tin Liên Hệ</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullname">Họ và tên:</label>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại:</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Nhập email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Địa chỉ:</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Nhập địa chỉ"
              />
            </div>
            <div className="form-group">
              <label htmlFor="passenger-count">Số hành khách:</label>
              <select id="passenger-count" value={passengerCount} onChange={handlePassengerCountChange}>
                {[...Array(20)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="note">Ghi chú:</label>
              <textarea id="note" placeholder="Nhập ghi chú (nếu có)" />
            </div>
          </form>
        </div>

        <div className="section">
          <h2>Phương Thức Thanh Toán</h2>
          <div>
            <input
              type="radio"
              id="online"
              name="payment-method"
              value="Chuyển khoản trực tuyến"
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="online">Chuyển khoản trực tuyến</label>
          </div>
          <div>
            <input
              type="radio"
              id="office"
              name="payment-method"
              value="Thanh toán tại văn phòng công ty"
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="office">Thanh toán tại văn phòng công ty</label>
          </div>
          <div>
            <input
              type="radio"
              id="home"
              name="payment-method"
              value="Thanh toán tại nhà"
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="home">Thanh toán tại nhà</label>
          </div>
        </div>
      </div>

      
      <div className="right-column">
        <div className="section">
          <h2>Tổng Quan Chuyến Đi</h2>
          <p>
            <strong>Mã tour:</strong> XUYENVIET3N2D
          </p>
          <p>
            <strong>Hành trình:</strong> Du lịch xuyên Việt 6 ngày 5 đêm
          </p>
          <p>
            <strong>Ngày đi:</strong> 05-12-2024
          </p>
          <p>
            <strong>Ngày về:</strong> 11-12-2024
          </p>
          <p>
            <strong>Đơn giá:</strong> {unitPrice.toLocaleString('vi-VN')} VND/người
          </p>
        </div>

        <div className="section updated-price">
          <h2>Chi Phí Dự Kiến</h2>
          <p id="total-price">{totalPrice.toLocaleString('vi-VN')} VND</p>
          <button type="button" onClick={handleBooking}>
            Đặt Ngay
          </button>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
