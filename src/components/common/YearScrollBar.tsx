import { useEffect, useRef, useState } from "react";

interface YearScrollBarProps {
    dates: Date[];
    scrollState: number;
    currentYear: number;
    setScrollState: (scrollState: number) => void;
    setClicked: (clicked: boolean) => void;
}

export function YearScrollBar(props: YearScrollBarProps) {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const isDraggingRef = useRef(isDragging); // I need this since the state at the time of a listener being added is what the listener will use
    const scrollerRef = useRef<HTMLDivElement>(null);
    const scrollerContainerRef = useRef<HTMLDivElement>(null);

    let firstYear = props.dates[0].getFullYear();
    let lastYear = props.dates[props.dates.length - 1].getFullYear();

    let scrollPercentage = props.scrollState / (props.dates.length - 1) * 100;

    function handleMouseDown() {
        setIsDragging(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseUp() {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove(event: MouseEvent) {
        if (!isDraggingRef || !scrollerRef.current || !scrollerContainerRef.current) return;

        const containerRect = scrollerContainerRef.current.getBoundingClientRect();

        let newScrollerPercent = (event.clientY - containerRect.top) / containerRect.height;

        console.log(newScrollerPercent)

        if (newScrollerPercent > 1) {
            newScrollerPercent = 1;
        } else if (newScrollerPercent < 0) {
            newScrollerPercent = 0;
        }

        props.setScrollState(newScrollerPercent * (props.dates.length - 1));
    }

    useEffect(() => {
        isDraggingRef.current = isDragging;
    }, [isDragging]);

    return (
        <div className="h-full max-h-full flex flex-col ml-2 select-none">
            <h4 className="mb-4 text-xl font-slab font-extrabold">{lastYear}</h4>
            <div className="w-full h-1 bg-black rounded-full"></div>
            <div className="relative flex-grow flex">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-2 h-full bg-black"></div>
                <div ref={scrollerContainerRef} className="relative mt-4 mb-4 flex-grow w-full">
                    <div
                        ref={scrollerRef}
                        style={{ top: `${scrollPercentage}%` }}
                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 bg-off-white rounded-full flex items-center justify-center border-solid border-2 border-black hover:bg-selective-yellow"
                        onMouseDown={handleMouseDown}
                    >
                        <span className="text-dark-purple">{props.currentYear}</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-1 bg-black rounded-full"></div>
            <h4 className="mt-4 mb-[50vh] text-xl font-slab font-extrabold">{firstYear}</h4>
        </div>
    );
}
