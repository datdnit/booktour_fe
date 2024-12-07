import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import Main from "./page/admin/component/main";
import Tour from "./page/admin/tour";
import TourDetail from "./page/user/tour_detail"; // Giữ lại TourDetail từ nhánh Thuy
import Favorite from "./page/user/favorite"; // Giữ lại Favorite từ nhánh Thuy
import HOME from "./page/user/home"; // Giữ lại HOME từ nhánh Thuy
import TourUser  from "./page/user/tour__list"; // Giữ lại TourUser  từ nhánh master
import Home from "./page/user/home"; // Giữ lại Home từ nhánh master

const renderUser Router = () => {
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.COMPONENT,
            element: <Tour />,
        },
    ];

    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            element: <HOME />, // Giữ lại HOME từ nhánh Thuy
        },
        {
            path: ROUTERS.USER.TOUR_DETAIL,
            element: <TourDetail />, // Giữ lại TourDetail từ nhánh Thuy
        },
        {
            path: ROUTERS.USER.FAVORITE,
            element: <Favorite />, // Giữ lại Favorite từ nhánh Thuy
        },
        {
            path: ROUTERS.USER.TOUR,
            element: <TourUser  />, // Giữ lại TourUser  từ nhánh master
        },
    ];

    return (
        <Main>
            <Routes>
                {adminRouters.map((admin, idx) => (
                    <Route key={idx} path={admin.path} element={admin.element} />
                ))}
                {userRouters.map((user, idx) => (
                    <Route key={idx} path={user.path} element={user.element} />
                ))}
            </Routes>
        </Main>
    );
};

const RouterCustom = () => {
    return renderUser Router();
};

export default RouterCustom;