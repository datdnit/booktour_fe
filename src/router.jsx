import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import AdminMain from "./page/admin/component/main";
import UserMain from "./page/user/component/main";
import Tour from "./page/admin/tour";
import TourDetail from "./page/user/tour_detail";
import Favorite from "./page/user/favorite";
import TourUser from "./page/user/tour__list";
import Home from "./page/user/home";

const renderAdminRouter = () => {
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.COMPONENT, // Consider adding a specific path for admin like '/admin' or '/admin/tour'
            element: <Tour />,
        },
        // Add other admin routes here
    ];

    return (
        <AdminMain>
            <Routes>
                {adminRouters.map((route, idx) => (
                    <Route key={idx} path={route.path} element={route.element} />
                ))}
            </Routes>
        </AdminMain>
    );
};

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            element: <Home />,
        },
        {
            path: ROUTERS.USER.TOUR_DETAIL,
            element: <TourDetail />,
        },
        {
            path: ROUTERS.USER.FAVORITE,
            element: <Favorite />,
        },
        {
            path: ROUTERS.USER.TOUR,
            element: <TourUser />,
        },
    ];

    return (
        <UserMain>
            <Routes>
                {userRouters.map((route, idx) => (
                    <Route key={idx} path={route.path} element={route.element} />
                ))}
            </Routes>
        </UserMain>
    );
};

const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={renderAdminRouter()} /> {/* Use wildcard to catch all admin routes */}
            <Route path="/*" element={renderUserRouter()} /> {/* Use wildcard to catch all user routes, make sure this is placed after the admin route */}
        </Routes>
    );
};

export default RouterCustom;