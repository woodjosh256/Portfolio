interface CoolTextProps {
    className?: string;
    children: string;
    color?: string;
}

export function CoolText(props: CoolTextProps) {

    return (
        <div className="relative pr-4 pb-4 overflow-visible">
            <h3 className={`relative text-5xl z-10 ${props.className}`}>{props.children}</h3>
            <h3 className={`absolute select-none top-1 left-1 textl-5xl z-0 text-light-sea-green ${props.className}`}>{props.children}</h3>
        </div>
    );
}