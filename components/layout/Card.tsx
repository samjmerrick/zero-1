import { twMerge } from "tailwind-merge";

function Card(props: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={twMerge(
        "rounded-xl border border-neutral-600 bg-neutral-800 bg-opacity-60 shadow-xl backdrop-blur-md",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default Card;
