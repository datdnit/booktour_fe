import {memo} from "react";
import Header from "../header";
import Footer from "../footer";

const UserMain = ({children, ...props}) => {
    return <div {...props}>
        <div className="main-content">
            <Header />
            {children}
            <Footer />
        </div>
    </div>
}
export default memo(UserMain);