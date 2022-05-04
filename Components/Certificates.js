// import React, { Component } from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import React, { Component } from "react";
import Image from "next/image";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image1 from "../public/01.jpg";
import Image2 from "../public/02.jpg";
import Image3 from "../public/03.jpg";
import Image4 from "../public/04.jpg";
import Image5 from "../public/05.jpg";
import Image6 from "../public/06.jpg";
import Image7 from "../public/07.jpg";
import Image8 from "../public/08.jpg";
import Image9 from "../public/09.jpg";
import Image10 from "../public/10.jpg";
import Image11 from "../public/11.jpg";
import Image12 from "../public/12.jpg";

class SimpleSlider extends Component {
  render() {
    return (
      <Carousel className="max-w-[1000px] mx-auto pb-48" showThumbs={false}>
        <div>
          <Image width={1200} height={800} src={Image1} alt="Image1" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image2} alt="Image2" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image3} alt="Image3" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image4} alt="Image4" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image5} alt="Image5" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image6} alt="Image6" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image7} alt="Image7" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image8} alt="Image8" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image9} alt="Image9" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image10} alt="Image10" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image11} alt="Image11" />
        </div>
        <div>
          <Image width={1200} height={800} src={Image12} alt="Image12" />
        </div>
       
      </Carousel>
    
    );
  }
}
export default SimpleSlider;
