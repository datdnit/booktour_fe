import {memo} from "react";
import Header from "../header";
import Footer from "../footer";
import Sidebar from "../sidebar";

const Main = ({children, ...props}) => {
    return <div {...props}>
       <div className="main-content row">
           <Header />
           <Sidebar />
           {children}
           <Footer />
       </div>
    </div>
}
export default memo(Main);