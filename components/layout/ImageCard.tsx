import Card from "components/layout/Card";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function ImageCard(props: {
  image: StaticImageData;
  children: React.ReactNode;
  cardLocation?: "Right" | "Left";
}) {
  return (
    <div className="grid w-full grid-cols-1 items-center md:grid-cols-10 ">
      <div
        className={twMerge(
          "md:col-span-6 md:col-start-1 md:row-span-full",
          props.cardLocation == "Left" && "md:col-start-5 md:col-end-11"
        )}
      >
        <Image
          src={props.image}
          width={1000}
          height={500}
          alt=""
          className="rounded-md"
        />
      </div>

      <div
        className={twMerge(
          "z-10 md:col-span-5 md:col-end-11 md:row-span-full ",
          props.cardLocation == "Left" && "md:col-start-1 md:col-end-6"
        )}
      >
        <Card className="p-8 md:p-12">{props.children}</Card>
      </div>
    </div>
  );
}

export default ImageCard;
