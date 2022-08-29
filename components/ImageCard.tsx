import { StaticImageData } from "next/image";
import Image from "next/future/image";

function ImageCard(props: {
    image: StaticImageData,
    url: string,
    children: React.ReactNode,
}) {

    function openUrl(url: string) {
        window.open(url, '_blank');
    }

    return (
        <div
            className='
                bg-slate-800     
                hover:bg-opacity-75    
                rounded-lg 
                w-full 
                flex 
                flex-col
                md:flex-row 
                md:space-x-5
                items-center
                cursor-pointer'
            onClick={() => openUrl(props.url)}
        >
            <Image
                src={props.image}
                width={600}
                height={500}
                className='rounded-lg md:w-1/2 md:h-1/2'
            />
            <div className='p-5'>
                {props.children}
            </div>
        </div>
    )
}

export default ImageCard