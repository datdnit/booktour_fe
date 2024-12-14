import { Link } from 'react-router-dom';
import './style.css'
import { memo } from "react";

const Header = () => {
    const onToggleSideBar = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    const menuItems = [
        { id: "special-offer", label: "Ưu đãi đặc biệt" },
        { id: "outstanding", label: "Tour nổi bật" },
        { id: "favorite-destinations", label: "Điểm đến yêu thích" },
        { id: "new_event", label: "Tin tức sự kiện" },
    ];

    return (
        <>
            <div className="topnav" id="myTopnav">
                <Link to={"/home"} className="logo-link">
                    <img src="/assets/images/logo.jpg" alt="Logo"/>
                </Link>
                <div className="nav-links">
                    {menuItems.map(item => (
                        <a key={item.id} href={`#${item.id}`}>{item.label}</a>
                    ))}
                </div>
                <a href="#" className="icon" onClick={onToggleSideBar}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </>
    )
}
export default memo(Header);