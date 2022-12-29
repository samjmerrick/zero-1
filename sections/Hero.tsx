import React, { useEffect } from "react";
import Container from "../components/Container";

function Hero() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: screen.width > 768 ? "start" : "start",
        });
      });
    });
  });

  return (
    <div className=" relative flex flex-col space-y-4 bg-slate-200 py-10 sm:py-20 md:py-32 lg:flex-row lg:py-40 xl:py-48 2xl:py-60">
      <Container>
        <div className="flex w-full flex-col space-y-8 lg:w-1/2">
          <h1 className="text-4xl font-semibold md:text-5xl ">
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
        src={"/illustrations/d.png"}
        className=" relative  right-0 top-0 h-full lg:absolute"
      />
    </div>
  );
}

export default Hero;
