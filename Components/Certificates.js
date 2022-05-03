/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532827/01_vb4thu.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532827/02_zfkll9.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532827/04_riqskm.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532827/05_jjyeyf.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532827/03_lgj9tc.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532827/06_gbxbht.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/07_mzi7vg.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/10_izxguh.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/12_nzsw1y.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/11_psbi14.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/08_vxaenm.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/09_ewte4c.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/13_esodfa.jpg",
  "https://res.cloudinary.com/dmitriymalayev-com/image/upload/v1651532828/14_kupqr8.jpg",
];
class SimpleSlider extends Component {
  render() {
    return (
      <Carousel className="max-w-[1000px] mx-auto" showThumbs={false}>
        {images.map((image) => (
          <div key={image}>
            <img
              loading="lazy"
              src={image}
              alt="Certificate"
              width="1200"
              height="800"
            />
          </div>
        ))}
      </Carousel>
    );
  }
}
export default SimpleSlider;
