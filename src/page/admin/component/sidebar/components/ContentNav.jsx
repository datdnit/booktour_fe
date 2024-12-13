import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

ContentNav.propTypes = {
  handleDisplaySidebar: PropTypes.func.isRequired,
};

function ContentNav({ handleDisplaySidebar = null }) {
  const [displayDropdownMobie, setDisplayDropdownMobie] = useState(false);

  const handleDisplayDropdownMobie = () => {
    setDisplayDropdownMobie(!displayDropdownMobie);
  };

  return (
    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-secondary"
            onClick={() => handleDisplaySidebar()}
          >
            <i className="fas fa-align-left" />
          </button>
          <button
            className={
              displayDropdownMobie
                ? "btn btn-dark d-inline-block d-lg-none ml-auto collapse"
                : "btn btn-dark d-inline-block d-lg-none ml-auto"
            }
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleDisplayDropdownMobie}
          >
            <i className="fas fa-align-justify" />
          </button>

          <div
            className={
              displayDropdownMobie
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" href="#">
                  Tổng Quan
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" href="#">
                  Đặt Tour
                </NavLink>
              </li>
              <li className="nav-item dropdown active">
                <NavLink
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tours<i className="bi bi-caret-down-fill ms-2"></i>
                </NavLink>
                <ul className="dropdown-menu bg-light border border-0">
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Danh sách tour
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Thêm tour
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" href="#">
                  Sự Kiện
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" href="#">
                  Ưu Đãi
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ContentNav;
