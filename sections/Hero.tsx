import React from "react";
import ColumnLayout from "../components/ColumnLayout";
import Container from "../components/Container";

function Hero() {
  return (
    <div className=" relative flex flex-col space-y-4 bg-slate-200 py-10 sm:py-20 md:flex-row md:py-32 lg:py-40 xl:py-48 2xl:py-60">
      <Container>
        <div className="flex w-full flex-col space-y-8 md:w-1/2">
          <h1 className="text-4xl md:text-5xl ">
            Digital experiences from Zero to One
          </h1>
          <p className="text-xl">
            We help startups and scale-ups to build innovative digital products
            that solve real user problems.
          </p>
          <div className="flex flex-row space-x-3">
            <a
              className="cursor-pointer rounded-md bg-slate-600 py-3 px-5 text-lg font-bold text-white hover:bg-slate-700"
              href="#Contact"
            >
              Get in touch
            </a>
            <a
              className="cursor-pointer rounded-md border border-slate-800 py-3 px-5 text-lg font-bold hover:bg-slate-300"
              href="#About"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>

      <img
        src={
          "https://gojilabs.com/wp-content/uploads/2022/12/27_May_06-copy-1-1621x1370.png"
        }
        className=" relative  right-0 top-0 h-full md:absolute"
      />
    </div>
  );
}

export default Hero;
