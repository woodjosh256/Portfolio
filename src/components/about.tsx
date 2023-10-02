import { CoolText } from "./common/CoolText";
import { useEffect, useRef, useState } from "react";

export function About() {
    const [showBorder, setShowBorder] = useState(false);
    const scrollDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollDiv.current === null) return;
            if (scrollDiv.current?.scrollTop > 0 && !showBorder) {
                setShowBorder(true);
            } else if (scrollDiv.current?.scrollTop === 0 && showBorder) {
                setShowBorder(false);
            }
        };
        
        if (scrollDiv.current === null) return;

        scrollDiv.current.addEventListener('scroll', handleScroll);
    
        return () => {
            if (scrollDiv.current === null) return;
            scrollDiv.current.removeEventListener('scroll', handleScroll);
        };
    }, [showBorder]);

    return (
        <div ref={scrollDiv} className={`flex flex-col text-black overflow-scroll ${showBorder ? 'border-t-2 animate-expandOutwards border-black' : ''}`}>
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 justify-center items-center">
                <div className="w-1/3 mr-8 md:mr-16 relative">
                    <img
                        src={"./professional.jpeg"}
                        className="relative w-full rounded-xl z-10"
                    />
                    <div className="absolute left-4 top-4 w-full h-full bg-sea-green rounded-xl z-0"></div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <CoolText className="text-6xl font-bold font-slab">
                            Josh
                        </CoolText>
                        <CoolText className="text-6xl font-bold font-slab">
                            Wood
                        </CoolText>
                    </div>
                    <p className="text-3xl font-bold font-sans">
                        Full stack developer
                    </p>
                    <a href="https://www.linkedin.com/in/woodjosh256/" target="_blank" className="w-8 h-8 mt-4"><img src="./linkedin.svg" className="w-full h-full hover-filter cursor-pointer"/></a>
                </div>
            </div>

            <div className="flex flex-col m-auto mt-16 items-center">
                <h3 className="text-4xl font-bold font-slab">About</h3>
                <p className="text-xl font-medium font-sans mt-4 mb-4 p-0 text-center md:pl-18 md:pr-18 xl:pl-24 xl:pr-24">
                    I'm a creative problem solver who isn't afraid to tackle big challenges. I learn rapidly, have experience with various technologies, and write readable, extendable code.
                </p>
                <p className="text-xl font-medium font-sans p-0 text-center md:pl-18 md:pr-18 xl:pl-24 xl:pr-24">
                    I'm also a passionate outdoorsperson. I love hiking and mountain biking and have thru-hiked the Appalachian Trail (2,200 mi). I think the world would be a better place if more people got outside.
                </p>
            </div>


            <div className="flex flex-col m-auto mt-16 mb-16 items-center space-y-4">
                <h3 className="text-4xl font-bold font-slab -mb-4">Skills</h3>
                <div className="flex flex-row flex-wrap justify-center">
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">Python</h4>
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">Typescript</h4>
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">Java</h4>
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">C#</h4>
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">React</h4>
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">Tailwind</h4>
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">Serverless</h4>
                    <h4 className="text-xl font-medium bg-gray border-dark-sea-green border-2 border-solid rounded-full pl-4 pr-4 pb-1 pt-1 m-6 mb-0">Agile Methodology</h4>
                </div>
                {/* <div className="flex flex-row">
                    <Link to="/experience" className="text-black text-2xl flex flex-row items-center justify-center hover:text-black group">Skills in use<LuArrowRight size="1.25em" className="text-black ml-1 transition-all ease-in-out duration-300 group-hover:ml-3"/></Link>
                </div> */}
            </div>

        </div>
    );
}
