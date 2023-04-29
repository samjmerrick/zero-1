import { twMerge } from "tailwind-merge";

function OutlineButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-md border border-neutral-500 bg-neutral-900 bg-opacity-0 px-2 py-3 text-left transition-colors hover:bg-opacity-20 md:w-32",
        props.className
      )}
    />
  );
}

export default OutlineButton;
