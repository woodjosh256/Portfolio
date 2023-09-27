import React, { ReactNode } from "react";

interface SwitcherProps {
    titles: Map<string, () => void>;
}

export function Switcher(props: SwitcherProps) {

    let titleComponents: Array<ReactNode> = []
    
    props.titles.forEach((fn, title) => titleComponents.push(
        <p>{title}</p>
    ));

    return (
        <>
            <div className="flex">
                {titleComponents}
            </div>
        </>
    );
}