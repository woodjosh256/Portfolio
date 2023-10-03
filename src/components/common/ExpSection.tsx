import { ReactNode, useState } from "react";
import { LuChevronRight } from "react-icons/lu";

interface ExpSectionProps {
    header: string;
    children: ReactNode;
    opened?: boolean
    className?: string;
}

export function ExpSection(props: ExpSectionProps) {
    const [expanded, setExpanded] = useState<boolean>(props.opened || false);

    return (
        <div className={`w-full ${props.className}`}>
            <div className={`flex flex-row items-center cursor-pointer border-t-2 pt-1 pb-1 pl-2 group select-none`} onClick={() => setExpanded(!expanded)}>
                <h3 className="width-full text-xl font-semibold font-sans flex-grow text-black" >{props.header}</h3>
                <LuChevronRight className={`text-2xl transition-all duration-300 ease-in-out ${expanded ? "rotate-90" : "rotate-0"}`} />
            </div>
            <div className={`width-full pl-4 pr-4 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "pb-2 max-h-[1000px]" : "max-h-0"}`}>
                {props.children}
            </div>
        </div>
    );
}