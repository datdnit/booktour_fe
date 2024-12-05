import React, { useRef } from "react";
import CardItem from "./components/CardItem";
import Pagination from "./components/Pagination";
import FilterAddress from "./components/filter/FilterAddress";
import FilterBudget from "./components/filter/FilterBudget";
import FilterType from "./components/filter/FilterType";
import "./tour__list.scss";
import FilterSort from "./components/filter/FilterSort";

function TourUser(props) {
  const filterRef = useRef();
  const sortRef = useRef();

  const handleOpenMobieFilter = () => {
    const filterMobieBox = filterRef.current;
    filterMobieBox.classList.add("tour-filter__mobie--display");
  };

  const handleCloseMobieFilter = () => {
    const filterMobieBox = filterRef.current;
    filterMobieBox.classList.remove("tour-filter__mobie--display");
  };

  const handleOpenSortList = () => {
    const sortRefBox = sortRef.current;
    sortRefBox.classList.toggle("button-sort__list--display");
  };

  return (
    <section class="tour__list">
      <div ref={filterRef} className="tour-filter__mobie">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <div className="tour-mobie__title">
                <h5>
                  <b>LỌC</b>
                </h5>
                <i class="bi bi-x-lg" onClick={handleCloseMobieFilter}></i>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <h6 className="filter-address__title">
              <b>Chọn điểm</b>
            </h6>
            <div className="col-6">
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
            </div>
            <div className="col-6">
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
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <h6 className="filter-type__title">
                <b>Dòng tour</b>
              </h6>
              <select
                name="type"
                id="type"
                className="type__select filter__select"
              >
                <option disabled selected>
                  -- Chọn dòng tour --
                </option>
                <option className="type__option">Tiết kiệm</option>
                <option className="type__option">Tiêu chuẩn</option>
                <option className="type__option">Cao cấp</option>
              </select>
            </div>
          </div>

          <form>
            <div className="row">
              <h6 className="filter-budget__title">
                <b>Ngân sách</b>
              </h6>
              <div className="col-6">
                <input
                  type="number"
                  min="0"
                  placeholder="Từ giá"
                  name="budgetMin"
                  id="budgetMin"
                  className="filter-budget__min filter__input"
                />
              </div>
              <div className="col-6">
                <input
                  type="number"
                  min="0"
                  placeholder="Đến giá"
                  name="budgetMax"
                  id="budgetMax"
                  className="filter-budget__max filter__input"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="filter-budget__submit">
                  Lọc ngân sách
                </button>
              </div>
            </div>
          </form>
        </div>
        <button
          className="tour-filter__button"
          onClick={handleCloseMobieFilter}
        >
          Tìm kiếm
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <ul className="tour__filter">
              <FilterAddress />
              <FilterType />
              <FilterBudget />
              <FilterSort />
            </ul>
          </div>

          <div className="col-lg-9 col-md-8 col-12">
            <div className="tour__banner">
              <img
                src="https://www.luavietours.com/wp/wp-content/uploads/2023/12/uu-dai-dac-biet-pc.png"
                alt="banner-tour"
                width="100%"
              />
            </div>

            <div className="tour__card">
              <div className="row">
                <div className="col-8">
                  <h1 className="tour__title">Danh Sách Các Tour</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button
                    className="button button__filter"
                    onClick={handleOpenMobieFilter}
                  >
                    <i className="bi bi-funnel"></i>Bộ lọc
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className="button button__sort"
                    onClick={handleOpenSortList}
                  >
                    <i className="bi bi-filter"></i>Sắp xếp theo
                    <ul className="button-sort__list" ref={sortRef}>
                      <li className="button-sort__item">Giá từ thấp tới cao</li>
                      <li className="button-sort__item">Giá từ cao tới thấp</li>
                    </ul>
                  </button>
                </div>
              </div>
              <div className="row">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </div>
            </div>

            <div className="tour__pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourUser;
