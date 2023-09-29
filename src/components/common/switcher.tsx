import { Link, NavLink } from "react-router-dom";

export function Switcher() {
    return (
        <div className="flex flex-row justify-between mb-8">
            <NavLink
                className={({isActive}) =>{
                    let classString = `font-slab font-black text-4xl md:text-5xl list-none cursor-pointer select-none hover:text-sea-green `;
                    if (isActive) {
                        classString += ` text-sea-green`;
                    } else {
                        classString += ` text-black`;
                    }
                    return classString;
                }}
                to={"/about"}
            >
                About
            </NavLink>
            <NavLink
                className={({isActive}) => {
                    let classString = `font-slab font-black text-4xl md:text-5xl list-none cursor-pointer select-none hover:text-selective-yellow`;
                    if (isActive) {
                        classString += ` text-selective-yellow`;
                    } else {
                        classString += ` text-black`;
                    }
                    return classString;
                }}
                to={"/experience"}
            >
                Experience
            </NavLink>
            <NavLink
                className={({ isActive }) => {
                    let classString = `font-slab font-black text-4xl md:text-5xl list-none cursor-pointer select-none hover:text-big-red`;
                    if (isActive) {
                        classString += ` text-big-red`;
                    } else {
                        classString += ` text-black`;
                    }
                    return classString;
                }}
                to={"/contact"}
            >
                Contact
            </NavLink>
        </div>
    );
}
