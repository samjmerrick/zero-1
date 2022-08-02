import React from "react";

function Card(props: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-slate-800 px-10 mt-5 py-1 rounded-lg break">
            {props.children}
        </div>


    )
}

export default Card;