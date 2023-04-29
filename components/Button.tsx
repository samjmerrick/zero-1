import { twMerge } from "tailwind-merge";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "cursor-pointer rounded-lg  bg-neutral-50 py-2 px-5 text-lg font-semibold  text-neutral-900 transition-colors hover:bg-opacity-70  ",
        props.className
      )}
    />
  );
}

export default Button;
