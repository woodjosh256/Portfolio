import { ReactNode, useState } from "react";
import { Picture } from "../../assets/data";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ImageGalleryProps {
    images: Picture[];
    className?: string;
}

export function ImageGallery(props: ImageGalleryProps) {
    const [curImage, setCurImage] = useState(0);

    function prevImage () {
        if (curImage == 0) {
            setCurImage(props.images.length - 1)
        } else {
            setCurImage(curImage - 1);
        }
    }

    function nextImage() {
        if (curImage == props.images.length - 1) {
            setCurImage(0);
        } else {
            setCurImage(curImage + 1);
        }
    }

    let imgComponents: ReactNode[] = [];
    let key = 0;
    props.images.forEach((im) => {
        imgComponents.push(
            <div className={`flex flex-col justify-center items-center space-y-2 transition-all duration-300 p-4`}>
                <img src={`/project_media/${im.src}`} alt={im.alt} className={`w-[30rem] rounded-3xl drop-shadow-xl flex-grow`}/>
                {im.caption && <p className="">{im.caption}</p>}
            </div>
        );
        key ++;
    });
    
    return (
        <div className={`w-full flex flex-row justify-center items-center space-x-2 select-none ${props.className}`}>
            <LuChevronLeft className={`hover:cursor-pointer transition-all duration-150 p-0 md:p-2 hover:p-0 w-10 h-10 ${props.images.length > 1 ? "" : "hidden"}`} onClick={ prevImage }/>
            <div className="max-h-[30rem] flex items-center justify-center">
                {imgComponents[curImage]}
            </div>
            <LuChevronRight className={`hover:cursor-pointer transition-all duration-150 p-0 md:p-2 hover:p-0 w-10 h-10 ${props.images.length > 1 ? "" : "hidden"}`} onClick={ nextImage }/>
        </div>
    );
}