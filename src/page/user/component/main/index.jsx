import {memo, useEffect, useRef} from "react";
import Header from "../header";
import Footer from "../footer";

const UserMain = ({children, ...props}) => {
    const mainRef = useRef(null);

    useEffect(() => {
        const handleHashChange = () => {
            if (mainRef.current && window.location.hash) {
                const targetId = window.location.hash.substring(1);
                const targetElement = mainRef.current.querySelector(`#${targetId}`);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        };

        window.addEventListener("hashchange", handleHashChange);
        handleHashChange(); // initial check
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return <div {...props}>
        <div className="main-content">
            <Header />
            <main ref={mainRef} id="main-content">{children}</main>
            <Footer />
        </div>
    </div>
}
export default memo(UserMain);