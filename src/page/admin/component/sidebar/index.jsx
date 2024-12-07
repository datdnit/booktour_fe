
import { Link } from 'react-router-dom';
import './_sidebar.scss'
import { memo } from "react";
import { ROUTERS } from '../../../../utils/router';


const SideBar = () => {
    const onToggleSideBar = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <>

            <div className="topnav" id="myTopnav">
                <Link to={"/"} className="active">Trang chủ</Link>
                <a href="#news">Ưu đã đặc biệt</a>
                <a href="#contact">Tour nổi bật</a>
                <a href="#favorite">Địa điểm yêu thích</a>
                <a href="#about">Tin tức sự kiện</a>
                <a href="#" className="icon" onClick={onToggleSideBar}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </>
    )
}
export default memo(SideBar);

