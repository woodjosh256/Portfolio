import { ReactElement, forwardRef, useEffect } from "react";
import { Experience } from "../../assets/data";

interface FilterListProps {
    className?: string;
    experienceData: ExperienceItemData[];
}

export interface ExperienceItemData {
    component: JSX.Element;
    data: Experience;
}

export const FilterList = forwardRef<HTMLDivElement, FilterListProps>(
    (props, ref) => {
        let components: ReactElement[] = [];
        let lastYear = 100000;
        props.experienceData.forEach((experienceItemData) => {
            let year = experienceItemData.data.date.getFullYear();
            if (year < lastYear) {
                components.push(
                    <h3 key={"header-"+year} className="mt-8 first:mt-0 text-4xl font-slab font-black text-dark-gray">{year}</h3>
                )
                lastYear = year;
            }

            components.push(experienceItemData.component);
        });

        return (
            <div
                ref={ref}
                id="item-group"
                className={`flex flex-col select-none pb-4 ${props.className}`}
            >
                {components}
            </div>
        );
    }
);
