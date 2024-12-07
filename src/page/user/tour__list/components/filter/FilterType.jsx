import React from "react";

function FilterType(props) {
  return (
    <li className="filter__type filter__item">
      <h6 className="filter-type__title">
        <b>Dòng tour</b>
      </h6>
      <select name="type" id="type" className="type__select filter__select">
        <option disabled selected>
          -- Chọn dòng tour --
        </option>
        <option className="type__option">Tiết kiệm</option>
        <option className="type__option">Tiêu chuẩn</option>
        <option className="type__option">Cao cấp</option>
      </select>
      <hr />
    </li>
  );
}

export default FilterType;
