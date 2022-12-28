import React from "react";
import ColumnLayout from "../components/ColumnLayout";
import Container from "../components/Container";

function Hero() {
  return (
    <div className=" relative bg-slate-200 sm:py-20 md:py-60">
      <Container>
        <div className="flex w-1/2 flex-col space-y-8">
          <h1 className="text-4xl md:text-5xl ">
            Digital experiences from Zero to One
          </h1>

          <p className="text-2xl">
            We help startups and scale-ups to build innovative digital products.
          </p>
        </div>
      </Container>

      <img
        src={
          "https://gojilabs.com/wp-content/uploads/2022/12/27_May_06-copy-1-1621x1370.png"
        }
        className=" max-w-1/2 absolute right-0 top-0 h-full"
      />
    </div>
  );
}

export default Hero;
