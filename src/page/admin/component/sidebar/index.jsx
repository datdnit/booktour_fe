import "./sidebar.scss";
import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import ContentNav from "./components/ContentNav";

const SideBar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  // Hiển thị Sidebar
  const handleDisplaySidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };

  // Hiển thị Menu Dropdown
  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  // Xử lý Class NavLink của react-router-dom
  const handleClassActive = ({ isActive }) => {
    return isActive ? "link--active" : "";
  };

  return (
    <div className="wrapper">
      {/* Sidebar  */}
      <nav id="sidebar" className={`${displaySidebar ? "" : "active"}`}>
        <div className="sidebar-header">
          <h3>Admintrator</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <NavLink to="#" className={handleClassActive}>
              <i className="bi bi-house-fill me-2 ms-2"></i>Tổng Quan
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className={handleClassActive}>
              <i className="bi bi-cart-fill me-2 ms-2"></i>Đặt Tour
            </NavLink>
          </li>
          <li className="active">
            <NavLink
              to=""
              data-toggle="collapse"
              aria-expanded={displayDropdown ? "true" : "false"}
              className={`${
                displayDropdown
                  ? "dropdown-toggle collapsed"
                  : "dropdown-toggle"
              }`}
              onClick={handleDisplayDropdown}
            >
              <i className="bi bi-grid-3x2 me-2 ms-2"></i>Tours
            </NavLink>
            <ul
              className={
                displayDropdown
                  ? "collapse list-unstyled show"
                  : "collapse list-unstyled"
              }
              id="homeSubmenu"
            >
              <li>
                <NavLink to="#" className={handleClassActive}>
                  Danh sách tour
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className={handleClassActive}>
                  Thêm tour
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href="#" className={handleClassActive}>
              <i class="bi bi-calendar2-check-fill me-2 ms-2"></i>
              Sự Kiện
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className={handleClassActive}>
              <i className="bi bi-ticket-perforated-fill me-2 ms-2"></i>
              Ưu Đãi
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Page Content  */}
      <ContentNav handleDisplaySidebar={handleDisplaySidebar} />
    </div>
  );
};
export default memo(SideBar);
