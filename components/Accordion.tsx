import React, { useId } from "react";

function Accordion(props: { children: React.ReactNode }) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {props.children}
    </div>
  );
}

function AccordionItem(props: { id: string; children: React.ReactNode }) {
  const childArray: React.ReactNode[] = React.Children.toArray(props.children);

  return (
    <div className="mt-2 rounded-lg bg-neutral-800">
      <h2 className="accordion-header mb-0 p-0 ">
        <button
          className="
                        collapsed
                        relative
                        flex
                        w-full
                        items-center
                        rounded-none
                        border-0
                        py-4 px-5 text-left
                        text-base
                        text-white
                        transition
                        focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${props.id}`}
        >
          {childArray.shift()}
        </button>
      </h2>
      <div
        id={`collapse${props.id}`}
        className="
                    accordion-collapse 
                    collapse 
                    border-0"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body py-4 px-5">{childArray}</div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem };
