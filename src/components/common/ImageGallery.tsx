interface ImageGalleryProps {
    images: string[];
    className?: string;
}

export function ImageGallery(props: ImageGalleryProps) {

    return (
        <div className={`w-full flex justify-center ${props.className}`}>
            <img src={`/project_media/${props.images[0]}`} className="rounded-lg h-64 border-2 border-solid border-black"/>            
        </div>
    );
}