import {ROUTERS} from "./utils/router";
import {Route, Routes} from "react-router-dom";

// import Main from "./page/admin/component/main";
import Home from "./page/user/home";



const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME, element: <Home/>,
        },]
    return (
            <Routes>
                {
                    userRouters.map((user, idx) => (
                        <Route key={idx} path={user.path} element={user.element}/>
                    ))
                }
            </Routes>
    )
}


const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;