import { useEffect, useState } from "react";
import { ExpTypes, Tags } from "../../assets/data";
import { LuX } from "react-icons/lu";

interface FilterSelectorProps {
    setTagFilters: (tags: Tags[]) => void;
    setExpTypeFilters: (expTypes: ExpTypes[]) => void;
}

function getKeys(e: {}) {
    return Object.keys(e).filter((key) =>
        isNaN(Number(key))
    ) as (keyof typeof e)[];
}

export function FilterSelector(props: FilterSelectorProps) {
    const [tagStates, setTagStates] = useState<Map<Tags, boolean>>(new Map());
    const [expTypeStates, setExpTypeStates] = useState<Map<ExpTypes, boolean>>(
        new Map()
    );

    useEffect(() => {
        for (const key of getKeys(Tags)) {
            setTagStates((prev) => prev.set(key, false));
        }
        for (const key of getKeys(ExpTypes)) {
            setExpTypeStates((prev) => prev.set(key, false));
        }
    }, []);

    useEffect(() => {
        props.setTagFilters(
            Array.from(tagStates.entries())
                .filter((entry) => entry[1])
                .map((entry) => entry[0])
        );
    }, [tagStates]);

    useEffect(() => {
        props.setExpTypeFilters(
            Array.from(expTypeStates.entries())
                .filter((entry) => entry[1])
                .map((entry) => entry[0])
        );
    }, [expTypeStates]);

    let key = 0;
    const tagComponents = Array.from(tagStates.entries()).map((entry) => {
        key++;
        return (
            <div
                key={key}
                className={`pl-3 pr-3 text-sm rounded-full font-medium text-center cursor-pointer border-solid border-2 m-1 border-gray hover:border-black flex flex-row items-center ${
                    entry[1] ? "bg-light-big-red" : ""
                }`}
                onClick={() => {
                    setTagStates((prev) => {
                        const updatedMap = new Map(prev);
                        for (const key of getKeys(Tags)) {
                            if (key == entry[0]) {
                                updatedMap.set(key, !prev.get(key));
                            } else {
                                updatedMap.set(key, false);
                            }
                        }
                        return updatedMap;
                    });
                }}
            >
                {entry[0].toString() === "CSharp" ? "C#" : entry[0]}
                {entry[1] ? <LuX className="ml-1" /> : null }
            </div>
        );
    });

    key = 0;
    const expTypeComponents = Array.from(expTypeStates.entries()).map(
        (entry) => {
            key++;
            return (
                <div
                    key={key}
                    className={`pl-3 pr-3 text-sm rounded-full font-medium text-center cursor-pointer border-solid border-2 m-1 border-gray hover:border-black flex flex-row items-center ${
                        entry[1] ? "bg-light-selective-yellow" : ""
                    }`}
                    onClick={() => {
                        setExpTypeStates((prev) => {
                            const updatedMap = new Map(prev);
                            for (const key of getKeys(ExpTypes)) {
                                if (key == entry[0]) {
                                    updatedMap.set(key, !prev.get(key));
                                } else {
                                    updatedMap.set(key, false);
                                }
                            }
                            return updatedMap;
                        });
                    }}
                >
                    {entry[0]}
                    {entry[1] ? <LuX className="ml-1" /> : null }
                </div>
            );
        }
    );

    return (
        <div className="flex flex-row w-full justify-between select-none space-x-4">
            <div className="flex-1 flex flex-col overflow-auto">
                <h3 className="font-bold text-dark-gray text-lg ml-1">
                    Type
                </h3>
                <div className="flex flex-row flex-wrap">
                    {expTypeComponents}
                </div>
            </div>
            <div className="flex-1 flex flex-col items-end overflow-auto">
                <h3 className="font-bold text-dark-gray text-lg mr-1">
                    Technology
                </h3>
                <div className="flex flex-row-reverse flex-wrap">
                    {tagComponents}
                </div>
            </div>
        </div>
    );
}
