import { twMerge } from "tailwind-merge";

function OutlineButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-md border-2 border-neutral-500 bg-neutral-50 px-2 py-3 text-left transition-colors hover:bg-neutral-200 md:w-32",
        props.className
      )}
    />
  );
}

export default OutlineButton;
