import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import AdminMain from "./page/admin/component/main";
import UserMain from "./page/user/component/main";
import Tour from "./page/admin/tour";
import TourDetail from "./page/user/tour_detail";
import Favorite from "./page/user/favorite";
import TourUser from "./page/user/tour__list";
import Home from "./page/user/home";

import TourAdd from "./page/admin/tour__add";
import TourList from "./page/admin/tour__list";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TourOrder from "./page/admin/tour__order";
import App from "./page/admin/news/App";
const theme = createTheme();


const renderAdminRouter = () => {
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.COMPONENT, // Consider adding a specific path for admin like '/admin' or '/admin/tour'
            element: <Tour />,
        },
        // Add other admin routes here
        {

            path: ROUTERS.ADMIN.ADD_TOUR,
            element: <TourAdd />,
        },
        {
            path: ROUTERS.ADMIN.LIST_TOUR,
            element: <TourList />,
        },
        {
            path: ROUTERS.ADMIN.TOUR_ORDER,
            element: <TourOrder />,
        },

            path: ROUTERS.ADMIN.NEWS, // Đường dẫn cho Quản lý tin tức
            element: <App />,
        }

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
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/admin/*" element={renderAdminRouter()} /> {/* Use wildcard to catch all admin routes */}
                <Route path="/*" element={renderUserRouter()} /> {/* Use wildcard to catch all user routes, make sure this is placed after the admin route */}
            </Routes>
        </ThemeProvider>
    );
};

export default RouterCustom;