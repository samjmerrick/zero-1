import { twMerge } from "tailwind-merge";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "cursor-pointer rounded-lg  bg-neutral-800 py-2 px-5 text-lg font-semibold text-neutral-100 transition-colors hover:bg-neutral-700 ",
        props.className
      )}
    />
  );
}

export default Button;
