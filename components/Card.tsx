import React from "react";

function Card(props: { children: React.ReactNode }) {
  return (
    <div className="break mt-5 rounded-lg bg-zinc-200 px-10 py-1">
      {props.children}
    </div>
  );
}

export default Card;
