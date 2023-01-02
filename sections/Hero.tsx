import React, { useEffect } from "react";
import Container from "components/Container";
import Image from "next/image";

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
    <div className="bg-slate-200 py-10">
      <Container>
        <div className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2">
          <div className="flex flex-col space-y-8 ">
            <h1 className="text-4xl font-semibold md:text-5xl ">
              Digital experiences from Zero to One
            </h1>
            <p className="text-xl">
              We help startups and scale-ups to build innovative digital
              products that solve real user problems.
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

          <Image
            src={"/illustrations/hero.png"}
            className="fit max-h-[50rem] object-contain  "
            alt="Zero 1 hero image"
            width={919}
            height={1370}
          />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
