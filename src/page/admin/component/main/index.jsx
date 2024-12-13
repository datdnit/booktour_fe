import { memo } from "react";
import Header from "../header";

import Sidebar from "../sidebar";
import App from "../footer/App";


const AdminMain = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="main-content">
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </div>
  );
};
export default memo(AdminMain);
