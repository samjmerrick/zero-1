import Icon from "@mdi/react";
import Link from "next/link";

function IconCard(props: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-zinc-50 p-10 text-center lg:w-1/3">
      <Icon
        path={props.icon}
        title={props.title}
        size={2.5}
        className="text-zinc-600"
      />
      <h3 className="py-2 text-2xl font-bold">{props.title}</h3>
      <p className="text-base">{props.description}</p>
    </div>
  );
}

export default IconCard;
