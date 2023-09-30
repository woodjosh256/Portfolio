import { ReactNode, useRef, useState } from "react";
import { Switcher } from "./components/common/Switcher";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Outlet } from "react-router-dom";

export enum Pages {
    ABOUT,
    EXPERIENCE,
    CONTACT,
}

function Root() {
    return (
        <>
            <div className="w-screen h-screen bg-off-white overflow-visible flex justify-center">
                <div className="h-screen pl-4 pr-4 pt-4 md:pl-0 md:pr-0 md:w-2/3 lg:w-1/2 m-auto flex flex-col">
                    <Switcher />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Root;
