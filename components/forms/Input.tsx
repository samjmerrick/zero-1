import { twMerge } from "tailwind-merge";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={twMerge(
        "relative my-1 block w-full appearance-none py-2 focus:z-10 focus:outline-none ",
        "border-b-2 border-neutral-200 text-neutral-900 placeholder-neutral-500 transition-colors focus:border-neutral-500 focus:ring-neutral-500 ",
        props.className
      )}
    />
  );
}

export default Input;
