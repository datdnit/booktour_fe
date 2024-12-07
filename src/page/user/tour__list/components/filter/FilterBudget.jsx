import React from "react";

function FilterBudget(props) {
  return (
    <li className="filter__budget filter__item">
      <form>
        <h6 className="filter-budget__title">
          <b>Ngân sách</b>
        </h6>
        <input
          type="number"
          min="0"
          placeholder="Từ giá"
          name="budgetMin"
          id="budgetMin"
          className="filter-budget__min filter__input"
        />
        <input
          type="number"
          min="0"
          placeholder="Đến giá"
          name="budgetMax"
          id="budgetMax"
          className="filter-budget__max filter__input"
        />
        <button type="submit" className="filter-budget__submit">
          Lọc ngân sách
        </button>
      </form>
      <hr />
    </li>
  );
}

export default FilterBudget;
