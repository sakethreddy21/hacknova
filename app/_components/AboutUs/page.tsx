import React from "react";
import image from "../../../images/aboutimg.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section className="container justify-center items-center">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about items-center">
          <div className="hero-img ml-[250px] ">
            <Image
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content mt-8">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tenetur doloremque molestias repellat minus asperiores
              in aperiam dolor, quaerat praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus, repudiandae! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident
              quibusdam doloremque ex? Officia atque ab dolore? Tempore totam
              non ea!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;