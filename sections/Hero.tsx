import React from "react";
import Container from "components/Container";

function Hero() {
  return (
    <div className="bg-neutral-900 py-40 md:py-60">
      <Container>
        <div className="flex flex-col space-y-8 ">
          <h1 className="text-6xl font-extrabold text-gray-100 md:text-7xl ">
            Innovative{" "}
            <span className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent">
              digital experiences
            </span>
            ,
            <br /> from Zero to One.
          </h1>
          <p className="text-xl text-gray-400">
            We work with startups, scale-ups and enterprises to build, ideate
            and scale world class digital products
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
