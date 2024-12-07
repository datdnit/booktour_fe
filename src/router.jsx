import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import Main from "./page/admin/component/main";
import Tour from "./page/admin/tour";
import TourUser  from "./page/user/tour__list";
import Home from "./page/user/home";

const renderUserRouter = () => {
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.COMPONENT,
            element: <Tour />,
        },
        {
            path: ROUTERS.USER.HOME,
            element: <Home />,
        },
    ];

    const userRouters = [
        {
            path: ROUTERS.USER.TOUR,
            element: <TourUser  />,
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
    return renderUserRouter();
};

export default RouterCustom;