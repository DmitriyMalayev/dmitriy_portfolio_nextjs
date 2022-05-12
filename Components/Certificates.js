import React, { Component } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image1 from "../public/01.webp";
import Image2 from "../public/02.webp";
import Image3 from "../public/03.webp";
import Image4 from "../public/04.webp";
import Image5 from "../public/05.webp";
import Image6 from "../public/06.webp";
import Image7 from "../public/07.webp";
import Image8 from "../public/08.webp";
import Image9 from "../public/09.webp";
import Image10 from "../public/10.webp";
import Image11 from "../public/11.webp";
import Image12 from "../public/12.webp";
import Image13 from "../public/13.webp";
import Image14 from "../public/14.webp";

class SimpleSlider extends Component {
  render() {
    return (
      <Carousel className="md:max-w-[800px] mb-32 mx-auto sm:px-2" showThumbs={false}>
        <div>
          <Image src={Image1} alt="Image1" />
        </div>
        <div>
          <Image src={Image2} alt="Image2" />
        </div>
        <div>
          <Image src={Image3} alt="Image3" />
        </div>
        <div>
          <Image src={Image4} alt="Image4" />
        </div>
        <div>
          <Image src={Image5} alt="Image5" />
        </div>
        <div>
          <Image src={Image6} alt="Image6" />
        </div>
        <div>
          <Image src={Image7} alt="Image7" />
        </div>
        <div>
          <Image src={Image8} alt="Image8" />
        </div>
        <div>
          <Image src={Image9} alt="Image9" />
        </div>
        <div>
          <Image src={Image10} alt="Image10" />
        </div>
        <div>
          <Image src={Image11} alt="Image11" />
        </div>
        <div>
          <Image src={Image12} alt="Image12" />
        </div>
        <div>
          <Image src={Image13} alt="Image13" />
        </div>
        <div>
          <Image src={Image14} alt="Image14" />
        </div>
      </Carousel>
    );
  }
}
export default SimpleSlider;
