import {ROUTERS} from "./utils/router";
import {Route, Routes} from "react-router-dom";
import Main from "./page/admin/component/main";
import Tour from "./page/admin/tour";

const renderUserRouter = () => {
    const adminRouters = [{
        path: ROUTERS.ADMIN.COMPONENT, component: <Tour/>,
    }]
    return (
        <Main >
            <Routes>
                {
                    adminRouters.map((admin, idx) => (
                        <Route key={idx} path={admin.path} element={admin.component}/>
                    ))
                }
            </Routes>
        </Main>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;