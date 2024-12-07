
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css"
import { faTicket, faClock, faPlane, faBookmark } from '@fortawesome/free-solid-svg-icons';


function TourDetail() {
    return (
        <div>
            <div className="detail wcm">
                <div className="intro">
                    <div className="left">
                        <div className="c-code">
                            <p className="ttl"><FontAwesomeIcon icon={faTicket} style={{ paddingRight: 5 }} /> Mã tour:</p>
                            <p className="txt">HANQUOC4N4DTT</p>
                        </div>
                        <h1 className="detail__ttl">
                            HÀN QUỐC 4N4Đ | SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)
                        </h1>
                        <ul className="gr">
                            <li>
                                <div className="txtIco"><FontAwesomeIcon icon={faClock} style={{ paddingRight: 5 }} /> 4N4Đ </div>
                            </li>
                            <li className="flex">
                                <div className="txtIco txtIco--calendar">  Ngày đi: </div>
                                <div className="grBtn">
                                    <div
                                        className="js-change-date grBtn__item active"
                                        data-id={21360}
                                        data-date="01-01-2025"
                                        data-price="15.990.000"
                                    >
                                        01-01
                                    </div>
                                    <div
                                        className="js-change-date grBtn__item "
                                        data-id={21363}
                                        data-date="29-01-2025"
                                        data-price="21.990.000"
                                    >
                                        29-01
                                    </div>
                                    <div
                                        className="js-change-date grBtn__item "
                                        data-id={21365}
                                        data-date="05-02-2025"
                                        data-price="15.990.000"
                                    >
                                        05-02
                                    </div>
                                    <div
                                        className="js-change-date grBtn__item "
                                        data-id={21367}
                                        data-date="12-02-2025"
                                        data-price="15.990.000"
                                    >
                                        12-02
                                    </div>
                                    <div
                                        className="js-change-date grBtn__item "
                                        data-id={21369}
                                        data-date="19-02-2025"
                                        data-price="15.990.000"
                                    >
                                        19-02
                                    </div>
                                    <div
                                        className="js-change-date grBtn__item "
                                        data-id={21371}
                                        data-date="26-02-2025"
                                        data-price="15.990.000"
                                    >
                                        26-02
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="txtIco"><FontAwesomeIcon icon={faPlane} style={{ paddingRight: 5 }} />Vietjet Air</div>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="c-price">
                            <span className="jsPrice">15.990.000</span>
                            <em>VNĐ</em>
                        </div>
                        <a
                            href="#"
                            className="c-btn c-btn--red btnBooking"
                        >
                            <span>Đặt Ngay</span>
                        </a>
                    </div>
                </div>
                <div className="gallery">
                    <div className="item">
                        <div className="thumb">
                            <img
                                rel="js-lazy"
                                src="https://www.luavietours.com/wp/wp-content/uploads/2024/11/thap-namsan-mua-dong.jpg"
                                data-src="https://www.luavietours.com/wp/wp-content/uploads/2024/11/thap-namsan-mua-dong.jpg"
                                alt="HÀN QUỐC 4N4Đ |  SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)"
                                data-ll-status="loaded"
                                className="entered loaded"
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="thumb">
                            <img
                                rel="js-lazy"
                                src="https://www.luavietours.com/wp/wp-content/uploads/2024/01/lotteworld-han-quoc.jpg"
                                data-src="https://www.luavietours.com/wp/wp-content/uploads/2024/01/lotteworld-han-quoc.jpg"
                                alt="HÀN QUỐC 4N4Đ |  SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)"
                                data-ll-status="loaded"
                                className="entered loaded"
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="thumb">
                            <img
                                rel="js-lazy"
                                src="https://www.luavietours.com/wp/wp-content/uploads/2024/11/khu-truot-tuyet-seoul-elysian-han-quoc.jpg"
                                data-src="https://www.luavietours.com/wp/wp-content/uploads/2024/11/khu-truot-tuyet-seoul-elysian-han-quoc.jpg"
                                alt="HÀN QUỐC 4N4Đ |  SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)"
                                data-ll-status="loaded"
                                className="entered loaded"
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="thumb">
                            <img
                                rel="js-lazy"
                                src="https://www.luavietours.com/wp/wp-content/uploads/2024/10/thu-vien-sach-starfield-han-quoc.jpg"
                                data-src="https://www.luavietours.com/wp/wp-content/uploads/2024/10/thu-vien-sach-starfield-han-quoc.jpg"
                                alt="HÀN QUỐC 4N4Đ |  SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)"
                                data-ll-status="loaded"
                                className="entered loaded"
                            />
                        </div>
                    </div>
                    <div className="item">
                        <div className="thumb">
                            <img
                                rel="js-lazy"
                                src="https://www.luavietours.com/wp/wp-content/uploads/2024/11/hero-show-han-quoc.jpg"
                                data-src="https://www.luavietours.com/wp/wp-content/uploads/2024/11/hero-show-han-quoc.jpg"
                                alt="HÀN QUỐC 4N4Đ |  SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)"
                                data-ll-status="loaded"
                                className="entered loaded"
                            />
                        </div>
                    </div>
                </div>
                <div className="tour-info c-wrap">
                    <div className="c-wrap__cont">
                        <div className="etr etr--overview">
                            <div className="ttlIco ttlIco--overview js-toggle active">
                                <FontAwesomeIcon icon={faBookmark} /> Tổng Quan
                            </div>
                            <div className="c-hide">
                                <div className="txt cms-content">
                                    <h4 style={{ textAlign: "justify" }}>
                                        <span style={{ color: "#000080" }}>
                                            <strong>ƯU ĐÃI</strong>
                                        </span>
                                    </h4>
                                    <p style={{ textAlign: "justify" }}>
                                        <strong>• Không rủi ro Visa</strong>: Hoàn 100% giá tour (Bao gồm
                                        Phí Visa).
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        <strong>• Tiện lợi ngay khi bắt đầu</strong>: Đưa đón tận nhà Miễn
                                        phí 2 chiều.
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        <strong>• Duy trì kết nối</strong>: Tặng sim 3G/4G (1 sim/2 khách
                                        người lớn).
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        <strong>• Thanh toán bằng Thẻ tín dụng</strong>: Tiết kiệm 5%.
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        <i>
                                            Số lượng quà tặng có giới hạn và các khuyến mãi có điều kiện áp
                                            dụng.
                                        </i>
                                    </p>
                                    <h4 style={{ textAlign: "justify" }}>
                                        <span style={{ color: "#000080" }}>
                                            <strong>ĐIỂM NHẤN</strong>
                                        </span>
                                    </h4>
                                    <p style={{ textAlign: "justify" }}>
                                        <strong>• Tham quan:</strong> Tháp truyền hình N’Seoul, vui chơi
                                        tại công viên giải trí Lotte World, Đảo Nami, Cung điện
                                        Gyeongbokgung, Phố kangnam,…
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        <strong>• Lưu trú</strong>: Chuẩn lưu trú 4 sao.&nbsp;
                                    </p>
                                    <p>
                                        <strong>• Ăn uống</strong>: Khám phá ẩm thực đường phố Hàn Quốc
                                        tại một trong những khu chợ đêm Myeongdong nổi tiếng tại Seoul,
                                        thưởng thức các món ăn truyền thống Hàn Quốc: gà hầm sâm, gà
                                        nướng, thịt nướng,…
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        <strong>• Hoạt động khác</strong>: Trải nghiệm trượt tuyết, mặc
                                        thử Hanbok, xem Hero Show – một show diễn nghệ thuật vẽ đặc sắc và
                                        vui nhộn từ các chàng trai tài hoa.&nbsp;
                                    </p>
                                    <div
                                        id="eJOY__extension_root"
                                        className="eJOY__extension_root_class"
                                        style={{ all: "unset" }}
                                    >
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-wrap__side">
                        <div className="box-fixed" style={{ top: "72.9688px" }}>
                            <p className="ttl">Thông Tin Cơ Bản</p>
                            <ul className="lst">
                                <li>
                                    <p>
                                        Khởi hành:
                                        <em style={{ fontStyle: "normal" }} className="jsCurrentDate">
                                            01-01-2025
                                        </em>
                                    </p>
                                </li>
                                <li>
                                    <p>Giờ đi: 22:15</p>
                                </li>
                                <li>
                                    <p>Thời gian: 4 ngày 4 đêm</p>
                                </li>
                            </ul>
                            <div className="c-price">
                                <span className="jsPrice">15.990.000</span>
                                <em>VNĐ</em>
                            </div>
                            <a
                                href="#"
                                className="c-btn c-btn--red btnBooking"
                            >
                                <span>Đặt Ngay</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourDetail

