import React from "react";
import PropTypes from "prop-types";

FilterSort.propTypes = {};

function FilterSort(props) {
  return (
    <li className="filter__sort filter__item">
      <h6 className="filter-sort__title">
        <b>Sắp xếp theo</b>
      </h6>
      <select name="sort" id="sort" className="sort__select filter__select">
        <option disabled>-- Chọn kiểu sắp xếp --</option>
        <option selected className="sort__option">
          Giá từ thấp tới cao
        </option>
        <option className="sort__option">Giá từ cao tới thấp</option>
      </select>
      <hr />
    </li>
  );
}

export default FilterSort;
