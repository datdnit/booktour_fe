import { motion } from "motion/react";
import React from "react";

function CardItem(props) {
  return (
    <div className="col-lg-4 col-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          times: 0.5,
          easings: "cubic-bezier(0.11,0.41,0,1.66)",
          delay: 0.2,
        }}
      >
        <a href="/" className="card__bg">
          <div className="card__image">
            <div className="card__type">
              <i class="bi bi-coin"></i>
              <span>Tiết kiệm</span>
            </div>
            <img
              src="https://www.luavietours.com/wp/wp-content/uploads/2024/06/cong-vien-duong-minh-son-dai-loan.jpg"
              alt="card-01"
              width="100%"
            />
          </div>

          <div className="card__info">
            <div className="card__time">
              <span>Thời lượng: </span>5N4Đ
            </div>

            <h6 className="card__title">
              <b>ĐÀI LOAN 5N4Đ | ĐÀI BẮC – ĐÀI TRUNG – NAM ĐẦU – CAO HÙNG</b>
            </h6>

            <div className="card__tourid">
              <i className="bi bi-ticket-perforated"></i>
              <span>Mã tour: </span>
              <span>
                <b>DAILOANHNVJ</b>
              </span>
            </div>

            <div className="card__location">
              <i className="bi bi-geo-alt"></i>
              <span>Nơi khởi hành: </span>
              <span>
                <b>Hà Nội</b>
              </span>
            </div>

            <div className="card__brand">
              <i className="bi bi-airplane"></i>
              <span>Hãng bay</span>
              <span>
                <b>Vietjet Air</b>
              </span>
            </div>

            <div className="card__depart">
              <span>Ngày đi: </span>
              <div>13-03</div>
              <div>13-03</div>
              <div>13-03</div>
              <div>13-03</div>
              <div>13-03</div>
            </div>

            <div className="card__price">
              <h5>
                <b>72.000.000 </b>
                <span>VNĐ</span>
              </h5>
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
}

export default CardItem;
