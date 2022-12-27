import React from "react";
import ColumnLayout from "../ColumnLayout";

function Hero() {
  return (
    <ColumnLayout>
      <div className="flex flex-col space-y-8 pt-20">
        <h1 className="text-6xl md:text-6xl ">
          Digital products from Zero to One
        </h1>
        <p className="text-2xl">
          We help startups and scale-ups to build innovative digital products.
        </p>
      </div>

      <img
        src={
          "https://gojilabs.com/wp-content/uploads/2022/12/27_May_06-copy-1-1621x1370.png"
        }
        className=""
      />
    </ColumnLayout>
  );
}

export default Hero;
