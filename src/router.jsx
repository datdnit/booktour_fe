
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import Main from "./page/admin/component/main";
import Tour from "./page/admin/tour";
import TourUser from "./page/user/tour__list";

const renderUserRouter = () => {
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.COMPONENT,
      component: <Tour />,
    },
  ];

  const userRouters = [{ path: ROUTERS.USER.TOUR, component: <TourUser /> }];
  return (
    <Main>
      <Routes>
        {adminRouters.map((admin, idx) => (
          <Route key={idx} path={admin.path} element={admin.component} />
        ))}
        {userRouters.map((user, idx) => (
          <Route key={idx} path={user.path} element={user.component} />
        ))}
      </Routes>
    </Main>
  );
};

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
};

export default RouterCustom;
