import React from "react";
import { NavLink } from "react-router-dom";

function Pagination(props) {
  return (
    <div className="pagination__box">
      <ul className="pagination__list">
        <li className="pagination__item">
          <button className="pagination__link pagination__prev">
            <i class="bi bi-caret-left"></i>
          </button>
        </li>
        <li className="pagination__item">
          <NavLink href="" className="pagination__link">
            1
          </NavLink>
        </li>
        <li className="pagination__item">
          <NavLink href="" className="pagination__link">
            2
          </NavLink>
        </li>
        <li className="pagination__item">
          <NavLink href="" className="pagination__link">
            3
          </NavLink>
        </li>
        <li className="pagination__item">
          <button className="pagination__link pagination__next">
            <i class="bi bi-caret-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
