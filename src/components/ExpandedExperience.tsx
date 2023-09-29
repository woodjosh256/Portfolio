import { Link, useLoaderData } from "react-router-dom";
import { experiences } from "../assets/data";
import { LuArrowLeft } from "react-icons/lu";

export function ExpandedExperience() {
    const id = useLoaderData() as string;

    const experience = experiences[id];

    return (
        <>
            <div className="w-full bg-white shadow-lg rounded-lg p-4 flex-grow mb-8">
                <Link to="/experience" className="text-dark-gray underline hover:text-black">
                    <LuArrowLeft size="1.5em" />
                </Link>
                <h2 className="text-center text-3xl font-bold">{experience.title}</h2>
                <div className="text-lg">
                    {experience.content}
                </div>
            </div>
        </>
    );
}
