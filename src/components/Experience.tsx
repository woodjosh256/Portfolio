import { useEffect, useRef, useState } from "react";
import { ExperienceItemData, FilterList } from "./common/FilterList";
import { ExpTypes, Tags, experiences } from "../assets/data";
import { ExperienceItem } from "./common/ExperienceItem";
import { FilterSelector } from "./common/FilterSelector";

export function Experience() {
    const [experienceData, setExperienceData] = useState<ExperienceItemData[]>(
        []
    );

    const [tagFilters, setTagFilters] = useState<Tags[]>([]);
    const [typeFilters, setExpTypeFilters] = useState<ExpTypes[]>([]);

    const filterListRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    function updateExperienceData() {
        let newExperienceData: ExperienceItemData[] = [];

        for (let key in experiences) {
            let tagMatch = true;
            let typeMatch = true;
            let experience = experiences[key];

            tagFilters.forEach((filterTag) => {
                if (!experience.tags.includes(filterTag)) {
                    tagMatch = false;
                }
            });

            typeFilters.forEach((filterType) => {
                if (experience.type != filterType) {
                    typeMatch = false;
                }
            });

            if (tagMatch && typeMatch) {
                newExperienceData.push({
                    component: (
                        <ExperienceItem experience={experience} key={key} id={key} />
                    ),
                    data: experience,
                });
            }
        }

        newExperienceData.sort((a, b) => {
            return b.data.date.getTime() - a.data.date.getTime();
        });

        setExperienceData(newExperienceData);
    }

    useEffect(() => {
        updateExperienceData();
    }, [tagFilters, typeFilters]);

    useEffect(() => {
        if (!(filterListRef.current && experienceRef.current)) {
            return;
        }
        function handleParentScroll(e: WheelEvent) {
            if (!filterListRef.current) return;
            filterListRef.current.scrollTop += e.deltaY;
        }

        experienceRef.current.addEventListener("wheel", handleParentScroll, {
            passive: false,
        });
        return () => {
            if (!experienceRef.current) return;
            experienceRef.current.removeEventListener(
                "wheel",
                handleParentScroll
            );
        };
    }, []);

    return (
        <div className="flex-grow overflow-auto">
            <div
                ref={experienceRef}
                className="flex-grow flex flex-col h-full max-h-full"
            >
                <div className="flex flex-col pl-4 pr-4 md:pl-[16.6%] md:pr-[16.6%] lg:pl-[25%] lg:pr-[25%]">
                    <FilterSelector setTagFilters={setTagFilters} setExpTypeFilters={setExpTypeFilters} />
                    <hr className="h-px w-full mt-4 bg-dark-gray border-1"/>
                </div>
                <div className="pl-4 pr-4 md:pl-[16.6%] md:pr-[16.6%] lg:pl-[25%] lg:pr-[25%] overflow-auto flex-grow">
                    <FilterList
                        ref={filterListRef}
                        experienceData={experienceData}
                        className="flex-grow max-h-full md:overflow-auto pl-0 pr-0 ml-0 mr-0 md:pl-12 md:pr-12 md:-ml-12 md:-mr-12 no-scrollbar pt-4"
                    />
                </div>
            </div>
        </div>
    );
}
