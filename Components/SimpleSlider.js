// // import React, { Component } from "react";
// // import "~slick-carousel/slick/slick.css";
// // import "~slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";

// import Image from "next/image";
// import React, { Component } from "react";
// // import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// import Image1 from "../public/combined_certificates/01.jpg";
// import Image2 from "../public/combined_certificates/02.jpg";
// import Image3 from "../public/combined_certificates/03.jpg";
// import Image4 from "../public/combined_certificates/04.jpg";
// import Image5 from "../public/combined_certificates/05.jpg";
// import Image6 from "../public/combined_certificates/06.jpg";
// import Image7 from "../public/combined_certificates/07.jpg";
// import Image8 from "../public/combined_certificates/08.jpg";
// import Image9 from "../public/combined_certificates/09.jpg";
// import Image10 from "../public/combined_certificates/10.jpg";
// import Image11 from "../public/combined_certificates/11.jpg";
// import Image12 from "../public/combined_certificates/12.jpg";










import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import carouselStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/carouselStyle.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

const useStyles = makeStyles(carouselStyle);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

// class NextJsCarousel extends Component {
  
// render() {
//   let images = [
//   Image1,
//   Image2,
//   Image3,
//   Image4,
//   Image5,
//   Image6,
//   Image7,
//   Image8,
//   Image9,
//   Image10,
//   Image11,
//   Image12,
// ];
//     return (
//       <div>
//         <h2>NextJs Carousel - GeeksforGeeks</h2>
//         <Carousel>
//           {images.map((image, index) => (
//             <div>
//                <Image src={image} key={index} alt="Image1" />
//             </div>
//           ))}
//           {/* <div className="w-full h-full">
//             <Image src={Image1} alt="i1" />
//           </div>
//           <div className="w-full h-full">
//             <Image src={Image2} alt="i1" />
//           </div>{" "} */}
//           {/* <div className="w-full h-full">
//             <Image src={Image3} alt="i1" />
//           </div>{" "}
//           <div className="w-full h-full">
//             <Image src={Image4} alt="i1" />
//           </div>{" "}
//           <div className="w-full h-full">
//             <Image src={Image5} alt="i1" />
//           </div>{" "}
//           <div className="w-full h-full">
//             <Image src={Image6} alt="i1" />
//           </div>{" "}
//           <div className="w-full h-full">
//             <Image src={Image7} alt="i1" />
//           </div>{" "}
//           <div className="w-full h-full">
//             <Image src={Image8} alt="i1" />
//           </div>{" "}
//           <div className="w-full h-full">
//             <Image src={Image9} alt="i1" />
//           </div> */}
//         </Carousel>
//       </div>
//     );
//   }
// }
// // const SimpleSlider = () => {
// //   return (
// //     <Carousel className="max-w-[1000px] mx-auto">
// //       <div>
// //         {images.map(image, (i) => (
// //           <Image src={image} key={i} alt="Image1" />
// //         ))}
// //       </div>
// //     </Carousel>
// //   );
// // };

// export default NextJsCarousel;
