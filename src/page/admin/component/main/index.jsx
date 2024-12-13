import { memo } from "react";
import Header from "../header";
import Footer from "../footer";
import Sidebar from "../sidebar";

const AdminMain = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="main-content">
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default memo(AdminMain);
