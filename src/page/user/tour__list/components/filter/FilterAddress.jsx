import React from "react";

function FilterAddress(props) {
  return (
    <li className="filter__address filter__item">
      <h6 className="filter-address__title">
        <b>Chọn điểm</b>
      </h6>
      <ul className="filter-address__list">
        <li className="filter-address__item filter-address__depart">
          <div className="depart__title">Điểm đi</div>
          <select
            name="depart"
            id="depart"
            className="depart__select filter__select"
          >
            <option disabled selected>
              -- Chọn điểm đi --
            </option>
            <option className="depart__option">Hà Nội</option>
            <option className="depart__option">Hồ Chí Minh</option>
          </select>
        </li>
        <li className="filter-address__item filter-address__destination">
          <div className="destination__title">Điểm đi</div>
          <select
            name="destination"
            id="destination"
            className="destination__select filter__select"
          >
            <option disabled selected>
              -- Chọn điểm đến --
            </option>
            <option className="destination__option">Huế</option>
            <option className="destination__option">Đà Nẵng</option>
            <option className="destination__option">Hội An</option>
            <option className="destination__option">Quảng Bình</option>
            <option className="destination__option">Tây Nguyên</option>
            <option className="destination__option">Quảng Trị</option>
            <option className="destination__option">Pleiku</option>
            <option className="destination__option">Nghệ An</option>
            <option className="destination__option">Hà Nội</option>
            <option className="destination__option">Hạ Long</option>
            <option className="destination__option">Ninh Bình</option>
            <option className="destination__option">Tây Bắc</option>
          </select>
        </li>
      </ul>
      <hr />
    </li>
  );
}

export default FilterAddress;
