import { StaticImageData } from "next/image";
import Image from "next/image";

function ImageCard(props: {
  image: StaticImageData;
  url: string;
  children: React.ReactNode;
}) {
  function openUrl(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div
      className="
                flex  
                w-full    
                cursor-pointer 
                flex-col 
                items-center 
                rounded-lg
                bg-zinc-50 
                md:flex-row
                md:space-x-5"
      onClick={() => openUrl(props.url)}
    >
      <Image
        src={props.image}
        width={600}
        height={500}
        className="rounded-t-lg md:h-1/2 md:w-1/2 md:rounded-l-lg md:rounded-r-none"
        alt=""
      />
      <div className="p-5">{props.children}</div>
    </div>
  );
}

export default ImageCard;
