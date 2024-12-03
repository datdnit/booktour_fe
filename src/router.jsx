import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import Main from "./page/admin/component/main";
import Tour from "./page/admin/tour";
import TourDetail from "./page/user/tour_detail";
import Favorite from "./page/user/favorite";
import HOME from "./page/user/home";

const renderUserRouter = () => {
    const adminRouters = [{
        path: ROUTERS.ADMIN.COMPONENT, component: <Tour />,
    }]
    const userRouters = [
        { path: ROUTERS.USER.HOME, component: <HOME />, },
        { path: ROUTERS.USER.TOUR_DETAIL, component: <TourDetail />, }, 
        { path: ROUTERS.USER.FAVORITE, component: <Favorite />, }
    ]

    return (
        <Main >
            <Routes>
                {
                    userRouters.map((admin, idx) => {
                        return <Route key={idx} path={admin.path} element={admin.component} />
                    })
                }
            </Routes>
        </Main>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;