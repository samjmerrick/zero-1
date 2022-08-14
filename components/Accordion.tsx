import React, { useId } from "react"

function Accordion(props: {
    children: React.ReactNode
}) {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {props.children}
        </div>
    )
}

function AccordionItem(
    props: {
        id: string
        children: React.ReactNode
    }
) {
    const childArray: React.ReactNode[] = React.Children.toArray(props.children);

    return (
        <div className="mt-2 bg-slate-800 rounded-lg">
            <h2 className="accordion-header mb-0 p-0 ">
                <button
                    className="
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-white text-left
                        border-0
                        rounded-none
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
                    border-0 
                    collapse"
                data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body py-4 px-5">
                    {childArray}
                </div>
            </div>
        </div>
    )
}

export { Accordion, AccordionItem }
