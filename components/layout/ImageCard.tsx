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
      className="grid w-full cursor-pointer grid-cols-1 items-center rounded-lg bg-white md:grid-cols-2 "
      onClick={() => openUrl(props.url)}
    >
      <Image
        src={props.image}
        width={600}
        height={500}
        className="rounded-t-lg bg-white md:rounded-l-lg md:rounded-r-none"
        alt=""
      />
      <div className=" -translate-x-0 bg-white p-8 shadow-lg md:-translate-x-10 md:p-12 ">
        {props.children}
      </div>
    </div>
  );
}

export default ImageCard;
