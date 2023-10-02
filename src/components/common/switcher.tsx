import { LuBriefcase, LuInfo } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export function Switcher() {
    return (
        <div className="flex flex-row justify-between mb-8 pl-4 pr-4 md:pl-0 md:pr-0 w-full md:w-2/3 lg:w-1/2 m-auto">
            <NavLink
                className={({ isActive }) => {
                    let classString = `font-slab font-black text-2xl lg:text-4xl xl:text-5xl list-none cursor-pointer select-none hover:text-selective-yellow `;
                    if (isActive) {
                        classString += ` text-selective-yellow`;
                    } else {
                        classString += ` text-black`;
                    }
                    return classString;
                }}
                to={"/about"}
            >
                <div className="flex flex-col items-center w-full h-full">
                    <LuInfo className="h-1/2 lg:hidden" />
                    <span>About</span>
                </div>
            </NavLink>
            <NavLink
                className={({ isActive }) => {
                    let classString = `font-slab font-black text-2xl lg:text-4xl xl:text-5xl list-none cursor-pointer select-none hover:text-sea-green`;
                    if (isActive) {
                        classString += ` text-sea-green`;
                    } else {
                        classString += ` text-black`;
                    }
                    return classString;
                }}
                to={"/experience"}
            >
                <div className="flex flex-col items-center w-full h-full">
                    <LuBriefcase className="h-1/2 lg:hidden" />
                    <span>Experience</span>
                </div>
            </NavLink>
            <NavLink
                className={({ isActive }) => {
                    let classString = `font-slab font-black text-2xl lg:text-4xl xl:text-5xl list-none cursor-pointer select-none hover:text-big-red`;
                    if (isActive) {
                        classString += ` text-big-red`;
                    } else {
                        classString += ` text-black`;
                    }
                    return classString;
                }}
                to={"/contact"}
            >
                <div className="flex flex-col items-center w-full h-full">
                    <LuInfo className="h-1/2 lg:hidden" />
                    <span>Contact</span>
                </div>
            </NavLink>
        </div>
    );
}
