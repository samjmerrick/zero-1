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
                grid
                w-full
                cursor-pointer    
                grid-cols-1 
                flex-col 
                items-center 
                rounded-lg
                bg-zinc-50 
                md:grid-cols-2
                md:space-x-5"
      onClick={() => openUrl(props.url)}
    >
      <Image
        src={props.image}
        width={600}
        height={500}
        className="rounded-t-lg bg-white md:rounded-l-lg md:rounded-r-none"
        alt=""
      />
      <div className="p-5 md:p-2">{props.children}</div>
    </div>
  );
}

export default ImageCard;
