document.addEventListener("DOMContentLoaded", function () {
    // Chọn số lượng hành khách, tối đa là 20
    const passengerCount = document.getElementById("passenger-count");
    for (let i = 1; i <= 20; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      passengerCount.appendChild(option);
    }
  
    // Update giá tour dựa trên số lượng hành khách
    const totalPriceElement = document.getElementById("total-price");
    const basePricePerPassenger = 8899000; // giá tour mặc định tạm đặt
    passengerCount.addEventListener("change", function () {
      const numberOfPassengers = parseInt(this.value);
      const totalPrice = numberOfPassengers * basePricePerPassenger;
      totalPriceElement.textContent = totalPrice.toLocaleString("vi-VN") + " VND";
    });
  
    // Xác thực form & logic nút Đặt ngay
    const bookNowButton = document.getElementById("book-now-btn");
    const contactForm = document.getElementById("contact-form");
    const paymentForm = document.getElementById("payment-form");
  
    function isFormValid() {
      const fullname = document.getElementById("fullname").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("address").value.trim();
      const passengerCount = document.getElementById("passenger-count").value;
      const paymentMethod = paymentForm.querySelector("input[name='payment-method']:checked");
  
      // kiểm tra nếu khách điền thiếu thông tin
      if (!fullname || !phone || !email || !address || !passengerCount) {
        return { valid: false, message: "Thông tin chưa đầy đủ" };
      }
  
      // kiêm tra nếu khách chưa chọn phương thức thanh toán
      if (!paymentMethod) {
        return { valid: false, message: "Hãy chọn phương thức thanh toán" };
      }
  
      return { valid: true };
    }
  
    // bật/tắt nút dựa trên tình trạng điền form
    contactForm.addEventListener("input", checkForm);
    paymentForm.addEventListener("change", checkForm);
  
    function checkForm() {
      const validation = isFormValid();
      bookNowButton.disabled = !validation.valid;
    }
  
    // Xử lý nust "Đặt Ngay"
    bookNowButton.addEventListener("click", function () {
      const validation = isFormValid();
      if (!validation.valid) {
        alert(validation.message);
      } else {
        alert("Cảm ơn quý khách đã đặt tour! Chúng tôi sẽ liên hệ với quý khách trong 12 giờ.");
      }
    });
  });
  