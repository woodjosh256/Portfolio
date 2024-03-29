import { Experience } from "../../assets/data";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { Link } from "react-router-dom";

interface ExperienceItemProps {
    experience: Experience;
    id: string;
}

export function ExperienceItem(props: ExperienceItemProps) {
    return (
        <Link
            className={`experience-item pt-2 pb-2 hover:ml-0 hover:mr-0 md:hover:ml-8 md:hover:-mr-8 ease-in-out duration-300 transition-all mr-0 first:pt-0 last:pb-0 cursor-pointer group text-black hover:text-black`}
            to={`/experience/${props.id}`}
        >
            <div
                className={`w-full bg-white shadow-lg rounded-lg text-xl p-[.75em] pl-6 pr-6 leading-[1.5em] flex flex-row`}
            >
                <div className="flex flex-col flex-grow">
                    <div className="flex flex-row">
                        <h3 className="font-sans font-medium  text-ellipsis line-clamp-2 flex-grow pr-4">
                            {props.experience.shortDescription}
                        </h3>
                    </div>
                    <h3 className="font-slab font-black text-black text-lg">
                        {props.experience.role}
                    </h3>
                </div>
                <div className="flex flex-col items-center justify-center text-gray group-hover:text-sea-green">
                    <LuArrowUpRightSquare size="2em" />
                    <h4 className="text-xs text-gray md:text-white group-hover:text-sea-green">
                        Expand
                    </h4>
                </div>
            </div>
        </Link>
    );
}
