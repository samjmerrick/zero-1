import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Options(props: {
  options: string[];
  onClick?: (selected: string) => void;
}) {
  const [selected, setSelected] = useState("");

  const handleClick = (option: string) => {
    setSelected(option);
    props.onClick(option);
  };

  return (
    <div className="flex w-full flex-col justify-center space-y-2 py-10 md:flex-row md:items-center md:space-y-0 md:space-x-5">
      {props.options.map((option) => (
        <button
          key={option}
          className={twMerge(
            "rounded-md border-2 border-neutral-500 bg-neutral-50 px-2 py-3 text-left transition-colors hover:bg-neutral-200 md:w-32",
            selected == option &&
              "border-2 bg-neutral-500 text-neutral-100 hover:bg-neutral-600"
          )}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
