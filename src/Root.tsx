import {Outlet, useLocation} from "react-router-dom";
import { Switcher } from "./components/common/switcher";
import {useEffect} from "react";

function Root() {

    const location = useLocation();

    useEffect(() => {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirect && redirect != window.location.href) {
            window.history.replaceState(null, "", new URL(redirect).pathname);
        }
    }, [location]);

    return (
        <>
            <div className="w-screen h-screen bg-off-white flex justify-center">
                {/* <div className="h-screen pl-4 pr-4 pt-4 md:pl-0 md:pr-0 md:w-2/3 lg:w-1/2 m-auto flex flex-col"> */}
                <div className="h-screen w-screen pt-4 m-auto flex flex-col">
                    <Switcher />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Root;
