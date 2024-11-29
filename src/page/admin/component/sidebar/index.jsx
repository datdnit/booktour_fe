import './_sidebar.scss'
import {memo} from "react";


const SideBar = () => {
    return (
        <>
            <div id="sidebar">
                <div className="sidebar-top">
                    Hello
                    <div className="sidebar-main">
                        Hi
                    </div>
                </div>
            </div>
        </>
    )
}
export default memo(SideBar);