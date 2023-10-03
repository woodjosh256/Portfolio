import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { experiences } from "../assets/data";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { ExpSection } from "./common/ExpSection";
import { ImageGallery } from "./common/ImageGallery";
import { ReactNode } from "react";

export function ExpandedExperience() {
    const id = useLoaderData() as string;

    const experience = experiences[id];

    let i = 0;
    let bullets: ReactNode[] = [];
    experience.bulletedDesc.forEach((bullet) => {
        bullets.push(<li className="text-lg" key={i}>{bullet}</li>);
        i ++;
    })

    let tech: ReactNode;
    i = 0;
    if (experience.tech !== undefined) {
        let techList: ReactNode[] = [];
        experience.tech.forEach((t) => {
            techList.push(
                <div className="h-24 flex flex-col justify-center items-center m-4" key={i}>
                    <img src={`/icons/${t.logo_src}`} alt={t.name} className="h-16 flex-grow " />
                    <h5 className="text-lg mt-2">{t.name}</h5>
                </div>
            );
            i++;
        });
        tech = <div className="flex flex-row flex-wrap justify-center items-center">{techList}</div>
    }


    let links: ReactNode;
    i = 0;
    if (experience.links !== undefined) {
        let linkList: ReactNode[] = [];
        experience.links.forEach((link) => {
            linkList.push(
                <a href={link.url} className="text-lg flex flex-row items-center text-black hover:text-dark-sea-green group" target="_blank" key={i}>{link.name}<LuArrowRight className="ml-1 transition-all duration-300 ease-in-out group-hover:ml-2" /></a>
            );
            i ++;
        });
        links = <div className="flex flex-col space-y-2">{linkList}</div>
    }
    const navigate = useNavigate();
    
    return (
        <>
            <div className="w-full flex-grow pl-4 pr-4 pb-20 md:pl-[16.6%] md:pr-[16.6%] lg:pl-[25%] lg:pr-[25%] overflow-auto mt-4">
                <div className="flex flex-row md:sticky md:top-0 bg-off-white relative z-40">
                    <button onClick={() => navigate(-1)} className="flex flex-row items-center ml-2 border-0 focus:outline-none hover:outline-none outline-none active:outline-none text-dark-gray hover:ml-0 hover:pr-2 transition-all duration-300 hover:text-black">
                        <LuArrowLeft size="1.5em" />
                        <p className="text-lg ml-2">Back</p>
                    </button>
                    <div className="flex-grow" />
                    {experience.next && <Link to={`/experience/${experience.next}`} className="flex flex-row items-center mr-2 border-0 focus:outline-none hover:outline-none outline-none active:outline-none text-dark-gray hover:mr-0 hover:pl-2 transition-all duration-300 hover:text-black">
                        <p className="text-lg mr-2">Next</p>
                        <LuArrowRight size="1.5em" />
                    </Link>}
                </div>
                <h2 className="text-center text-4xl md:text-5xl font-extrabold font-sans mb-6">{experience.title}</h2>
                <h3 className="text-center text-2xl italic">{experience.shortDescription}</h3>
                {experience.pictures && <ImageGallery images={experience.pictures} />}
                <ExpSection header="Summary" opened={true} className="mt-4">
                    {bullets}
                </ExpSection>
                {experience.tech && <ExpSection header="Technologies Used">{tech}</ExpSection>}
                {experience.links && <ExpSection header="Links">{links}</ExpSection>}
            </div>
        </>
    );
}
