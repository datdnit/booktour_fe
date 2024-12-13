import React, {memo} from "react";
import './style.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                {/* Văn phòng */}
                <div className="footer-section">
                    <h4>Văn phòng liên hệ</h4>
                    <p>174 Hồng Mai, phường Quỳnh Lôi, quận Hai Bà Trưng, Hà Nội</p>
                    <p>Điện thoại: 0123 456 789</p>
                    <p>Email: quanlytour@gmail.com</p>
                </div>

                {/* Thông tin */}
                <div className="footer-section">
                    <h4>Thông tin</h4>
                    <ul>
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#">Tin tức</a></li>
                    </ul>
                </div>

                {/* Chính sách */}
                <div className="footer-section">
                    <h4>Chính sách</h4>
                    <ul>
                        <li><a href="#">Chính sách bảo mật thông tin khách hàng</a></li>
                        <li><a href="#">Điều khoản hợp đồng dịch vụ</a></li>
                    </ul>
                </div>

                {/* Gửi email lên LHQ */}
                <div className="footer-section">
                    <h4>Email của Quý Khách</h4>
                    <form>
                        <input type="email" placeholder="Email của Quý Khách" className="newsletter-input"/>
                        <button type="submit" className="newsletter-button">Gửi</button>
                    </form>

                    {/* MXH */}
                    <div className="social-links">
                        <a href="https://www.facebook.com/" className="social-icon">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                                alt="Facebook"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Credit */}
            <div className="footer-copyright">
                Copyright © Nhóm 4 - 21CN5
            </div>
        </footer>
    );
}
export default memo(Footer);