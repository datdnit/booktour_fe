import {memo} from "react";
import './_home.scss'

import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

const Home = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    let settings2 = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 4,
        autoplay: false,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    };

    return <>
        <section style={{backgroundImage: "url('/assets/images/special_offer_bg.jpg')"}} id="special-offer">
            <div className="container">
                <h2>Ưu đãi đặc biệt</h2>
                <Slider {...settings}>
                    <div className="endow-img">
                        <Link to={""}>
                            <div className="endow-img__box"><img src="/assets/images/test.jpg" alt=""/></div>
                        </Link>
                    </div>
                    <div className="endow-img">
                        <Link to={""}>
                            <div className="endow-img__box"><img src="/assets/images/test.jpg" alt=""/></div>
                        </Link>
                    </div>
                    <div className="endow-img">
                        <Link to={""}>
                            <div className="endow-img__box"><img src="/assets/images/test.jpg" alt=""/></div>
                        </Link>
                    </div>
                    <div className="endow-img">
                        <Link to={""}>
                            <div className="endow-img__box"><img src="/assets/images/test.jpg" alt=""/></div>
                        </Link>
                    </div>
                    <div className="endow-img">
                        <Link to={""}>
                            <div className="endow-img__box"><img src="/assets/images/test.jpg" alt=""/></div>
                        </Link>
                    </div>
                    <div className="endow-img">
                        <Link to={""}>
                            <div className="endow-img__box"><img src="/assets/images/test.jpg" alt=""/></div>
                        </Link>
                    </div>
                </Slider>
            </div>
        </section>

        <section id="outstanding">
            <div className="container">
                <h2>Tour Nổi Bật</h2>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <Link to={"#"}>
                            <div className={"hoverImg"}>
                                <div className="outstanding-top">
                                    <img src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                </div>
                                <div className="outstanding-bottom">
                                    <p>Thời lượng: 4N4Đ</p>
                                    <h3>HÀN QUỐC 4N4Đ | SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)</h3>
                                    <p>
                                        <i className="fa-solid fa-location-dot tour-title"></i> <span
                                        className={"tour-title"}>Nơi khởi hành:</span> <strong> Thành phố Hồ Chí
                                        Minh</strong>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-plane"></i> <span>Hãng bay:</span> <strong> Vietjet
                                        Air</strong>
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <span className={"date-start"}>Ngày đi: </span>
                        <Link to={"#"} className="departure-date">
                            01-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            05-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            09-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            12-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            15-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            16-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            20-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            22-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            25-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            28-01
                        </Link>
                        <p className={"price-tour"}>19.900.900 <span className={"money"}>VNĐ</span></p>
                    </div>
                    <div className="col-md-4">
                        <Link to={"#"}>
                            <div className={"hoverImg"}>
                                <div className="outstanding-top">
                                    <img src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                </div>
                                <div className="outstanding-bottom">
                                    <p>Thời lượng: 4N4Đ</p>
                                    <h3>HÀN QUỐC 4N4Đ | SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)</h3>
                                    <p>
                                        <i className="fa-solid fa-location-dot tour-title"></i> <span
                                        className={"tour-title"}>Nơi khởi hành:</span> <strong> Thành phố Hồ Chí
                                        Minh</strong>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-plane"></i> <span>Hãng bay:</span> <strong> Vietjet
                                        Air</strong>
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <span className={"date-start"}>Ngày đi: </span>
                        <Link to={"#"} className="departure-date">
                            01-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            05-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            09-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            12-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            15-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            16-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            20-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            22-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            25-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            28-01
                        </Link>
                        <p className={"price-tour"}>19.900.900 <span className={"money"}>VNĐ</span></p>
                    </div>
                    <div className="col-md-4">
                        <Link to={"#"}>
                            <div className={"hoverImg"}>
                                <div className="outstanding-top">
                                    <img src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                </div>
                                <div className="outstanding-bottom">
                                    <p>Thời lượng: 4N4Đ</p>
                                    <h3>HÀN QUỐC 4N4Đ | SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)</h3>
                                    <p>
                                        <i className="fa-solid fa-location-dot tour-title"></i> <span
                                        className={"tour-title"}>Nơi khởi hành:</span> <strong> Thành phố Hồ Chí
                                        Minh</strong>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-plane"></i> <span>Hãng bay:</span> <strong> Vietjet
                                        Air</strong>
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <span className={"date-start"}>Ngày đi: </span>
                        <Link to={"#"} className="departure-date">
                            01-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            05-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            09-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            12-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            15-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            16-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            20-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            22-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            25-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            28-01
                        </Link>
                        <p className={"price-tour"}>19.900.900 <span className={"money"}>VNĐ</span></p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <Link to={"#"}>
                            <div className={"hoverImg"}>
                                <div className="outstanding-top">
                                    <img src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                </div>
                                <div className="outstanding-bottom">
                                    <p>Thời lượng: 4N4Đ</p>
                                    <h3>HÀN QUỐC 4N4Đ | SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)</h3>
                                    <p>
                                        <i className="fa-solid fa-location-dot tour-title"></i> <span
                                        className={"tour-title"}>Nơi khởi hành:</span> <strong> Thành phố Hồ Chí
                                        Minh</strong>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-plane"></i> <span>Hãng bay:</span> <strong> Vietjet
                                        Air</strong>
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <span className={"date-start"}>Ngày đi: </span>
                        <Link to={"#"} className="departure-date">
                            01-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            05-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            09-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            12-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            15-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            16-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            20-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            22-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            25-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            28-01
                        </Link>
                        <p className={"price-tour"}>19.900.900 <span className={"money"}>VNĐ</span></p>
                    </div>
                    <div className="col-md-4">
                        <Link to={"#"}>
                            <div className={"hoverImg"}>
                                <div className="outstanding-top">
                                    <img src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                </div>
                                <div className="outstanding-bottom">
                                    <p>Thời lượng: 4N4Đ</p>
                                    <h3>HÀN QUỐC 4N4Đ | SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)</h3>
                                    <p>
                                        <i className="fa-solid fa-location-dot tour-title"></i> <span
                                        className={"tour-title"}>Nơi khởi hành:</span> <strong> Thành phố Hồ Chí
                                        Minh</strong>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-plane"></i> <span>Hãng bay:</span> <strong> Vietjet
                                        Air</strong>
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <span className={"date-start"}>Ngày đi: </span>
                        <Link to={"#"} className="departure-date">
                            01-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            05-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            09-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            12-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            15-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            16-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            20-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            22-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            25-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            28-01
                        </Link>
                        <p className={"price-tour"}>19.900.900 <span className={"money"}>VNĐ</span></p>
                    </div>
                    <div className="col-md-4">
                        <Link to={"#"}>
                            <div className={"hoverImg"}>
                                <div className="outstanding-top">
                                    <img src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                </div>
                                <div className="outstanding-bottom">
                                    <p>Thời lượng: 4N4Đ</p>
                                    <h3>HÀN QUỐC 4N4Đ | SEOUL – TRƯỢT TUYẾT – LOTTE WORLD (KHỞI HÀNH: 2025)</h3>
                                    <p>
                                        <i className="fa-solid fa-location-dot tour-title"></i> <span
                                        className={"tour-title"}>Nơi khởi hành:</span> <strong> Thành phố Hồ Chí
                                        Minh</strong>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-plane"></i> <span>Hãng bay:</span> <strong> Vietjet
                                        Air</strong>
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <span className={"date-start"}>Ngày đi: </span>
                        <Link to={"#"} className="departure-date">
                            01-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            05-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            09-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            12-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            15-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            16-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            20-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            22-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            25-01
                        </Link>
                        <Link to={"#"} className="departure-date">
                            28-01
                        </Link>
                        <p className={"price-tour"}>19.900.900 <span className={"money"}>VNĐ</span></p>
                    </div>
                </div>
                <div className="button-see-more">
                    <a href="/tours">
                        <button className="btn style-btn" type="button">Xem Thêm</button>
                    </a>
                </div>
            </div>
        </section>

        <section id={"favorite-destinations"}>
            <div className="container">
                <h3>Điểm Đến Yêu Thích</h3>
                <div className="row">
                    <div className="col-md-6">
                        <Link to={"#"}>
                            <div className="content-img">
                                <img className="img-fluid" src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                <p className={"destinations"}><i className="fa-solid fa-plane-departure"></i> Hà Nội</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="row mb-3">
                            <div className="col-6">
                                <Link to={"#"}>
                                    <div className="content-img">
                                        <img className="img-fluid" src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                        <p className={"destinations"}><i className="fa-solid fa-plane-departure"></i> Hà
                                            Nội
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link to={""}>
                                    <div className="content-img">
                                        <img className="img-fluid" src="/assets/images/cau-cang-sydney.jpg" alt=""/>
                                        <p className={"destinations"}><i className="fa-solid fa-plane-departure"></i> Hà
                                            Nội
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <Link to={"#"}>
                                <div className="content-img">
                                    <img className={"img-fix"} src="/assets/images/test.jpg" alt=""/>
                                    <p className={"destinations"}><i className="fa-solid fa-plane-departure"></i> Hà Nội
                                    </p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="new_event">
            <div className="container">
                <h3>Tin Tức Và Sự Kiện</h3>
                <Slider {...settings2}>
                    <div className="new_event-img">
                        <Link to={""}>
                            <div className="hoverImg">
                                <div className="new_event-img__box">
                                    <img src="/assets/images/test.jpg" alt=""/>
                                </div>
                                <div className="new_event-content">
                                    <p className={"item-date"}>28-11-2024</p>
                                    <h4>LOTTE WORLD – THIÊN ĐƯỜNG GIẢI TRÍ BẬC NHẤT HÀN QUỐC KHÔNG THỂ BỎ LỠ</h4>
                                    <p className={"item-des"}>Du khách đang tìm kiếm một điểm đến vừa sôi động, vừa độc
                                        đáo để tận hưởng những giây phút vui chơi không giới hạn tại Hàn Quốc? Lotte
                                        World chính là lựa chọn hoàn hảo, nổi bật với sự kết hợp hài hòa giữa khu vui
                                        chơi trong nhà, công viên ngoài trời sôi động và hàng loạt chương trình giải trí
                                        hấp...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="new_event-img">
                        <Link to={""}>
                            <div className="hoverImg">
                                <div className="new_event-img__box">
                                    <img src="/assets/images/test.jpg" alt=""/>
                                </div>
                                <div className="new_event-content">
                                    <p className={"item-date"}>28-11-2024</p>
                                    <h4>LOTTE WORLD – THIÊN ĐƯỜNG GIẢI TRÍ BẬC NHẤT HÀN QUỐC KHÔNG THỂ BỎ LỠ</h4>
                                    <p className={"item-des"}>Du khách đang tìm kiếm một điểm đến vừa sôi động, vừa độc
                                        đáo để tận hưởng những giây phút vui chơi không giới hạn tại Hàn Quốc? Lotte
                                        World chính là lựa chọn hoàn hảo, nổi bật với sự kết hợp hài hòa giữa khu vui
                                        chơi trong nhà, công viên ngoài trời sôi động và hàng loạt chương trình giải trí
                                        hấp...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="new_event-img">
                        <Link to={""}>
                            <div className="hoverImg">
                                <div className="new_event-img__box">
                                    <img src="/assets/images/test.jpg" alt=""/>
                                </div>
                                <div className="new_event-content">
                                    <p className={"item-date"}>28-11-2024</p>
                                    <h4>LOTTE WORLD – THIÊN ĐƯỜNG GIẢI TRÍ BẬC NHẤT HÀN QUỐC KHÔNG THỂ BỎ LỠ</h4>
                                    <p className={"item-des"}>Du khách đang tìm kiếm một điểm đến vừa sôi động, vừa độc
                                        đáo để tận hưởng những giây phút vui chơi không giới hạn tại Hàn Quốc? Lotte
                                        World chính là lựa chọn hoàn hảo, nổi bật với sự kết hợp hài hòa giữa khu vui
                                        chơi trong nhà, công viên ngoài trời sôi động và hàng loạt chương trình giải trí
                                        hấp...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="new_event-img">
                        <Link to={""}>
                            <div className="hoverImg">
                                <div className="new_event-img__box">
                                    <img src="/assets/images/test.jpg" alt=""/>
                                </div>
                                <div className="new_event-content">
                                    <p className={"item-date"}>28-11-2024</p>
                                    <h4>LOTTE WORLD – THIÊN ĐƯỜNG GIẢI TRÍ BẬC NHẤT HÀN QUỐC KHÔNG THỂ BỎ LỠ</h4>
                                    <p className={"item-des"}>Du khách đang tìm kiếm một điểm đến vừa sôi động, vừa độc
                                        đáo để tận hưởng những giây phút vui chơi không giới hạn tại Hàn Quốc? Lotte
                                        World chính là lựa chọn hoàn hảo, nổi bật với sự kết hợp hài hòa giữa khu vui
                                        chơi trong nhà, công viên ngoài trời sôi động và hàng loạt chương trình giải trí
                                        hấp...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Slider>
            </div>
        </section>
    </>
}
export default memo(Home);

