import { JSXElementConstructor, ReactElement, ReactNode, forwardRef, useEffect, useState } from "react";
import { ExpTypes, Experience } from "../../assets/data";
import { ExperienceItem } from "./ExperienceItem";

interface FilterListProps {
    className?: string;
    experienceData: ExperienceItemData[];
    setCurrentExperience: (index: number) => void;
}

export interface ExperienceItemData {
    component: JSX.Element;
    data: Experience;
}

export const FilterList = forwardRef<HTMLDivElement, FilterListProps>(
    (props, ref) => {
        let components: ReactElement[] = [];
        let lastYear = 100000;
        props.experienceData.forEach((experienceItemData, index) => {
            let year = experienceItemData.data.date.getFullYear();
            if (year < lastYear) {
                components.push(
                    <h3 key={"header-"+year} className="mt-8 first:mt-0 text-4xl font-slab font-black text-dark-gray">{year}</h3>
                )
                lastYear = year;
            }

            components.push(experienceItemData.component);
        });
        

        function setTopmostVisibleItem() {
            const itemGroup = document.querySelector("#item-group");
            if (!itemGroup) return null;

            const children = Array.from(itemGroup.children);

            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const rect = child.getBoundingClientRect();
                const containerRect = itemGroup.getBoundingClientRect();

                // If the top position of the child is within the container's visible region
                if (
                    rect.top >= containerRect.top &&
                    rect.top < containerRect.bottom
                ) {
                    props.setCurrentExperience(
                        i + (containerRect.top - rect.top) / rect.height
                    );
                    return;
                }
            }

            props.setCurrentExperience(children.length - 1);
        }

        useEffect(() => {

            let itemGroup = document.getElementById("item-group");
            itemGroup?.addEventListener("scroll", setTopmostVisibleItem);

            return () => {
                itemGroup?.removeEventListener("scroll", setTopmostVisibleItem);
            };
        }, [props.experienceData]);

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
