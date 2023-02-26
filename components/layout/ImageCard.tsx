import { StaticImageData } from "next/image";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Parallax from "components/Parallax";
import { useEffect } from "react";
import useWindowSize from "components/useWindowSize";

function ImageCard(props: {
  image: StaticImageData;
  children: React.ReactNode;
  cardLocation?: "Right" | "Left";
}) {
  const screenSize = useWindowSize();

  return (
    <div className="grid w-full grid-cols-1 items-center md:grid-cols-10 ">
      <Parallax
        offset={0}
        className={twMerge(
          "md:col-span-6 md:col-start-1 md:row-span-full",
          props.cardLocation == "Left" && "md:col-start-5 md:col-end-11"
        )}
      >
        <Image src={props.image} width={1000} height={500} alt="" />
      </Parallax>

      <Parallax
        offset={screenSize.width > 768 ? 20 : 0}
        className={twMerge(
          "z-10 bg-white p-8 shadow-xl md:col-span-5 md:col-end-11 md:row-span-full md:p-12",
          props.cardLocation == "Left" && "md:col-start-1 md:col-end-6"
        )}
      >
        {props.children}
      </Parallax>
    </div>
  );
}

export default ImageCard;
