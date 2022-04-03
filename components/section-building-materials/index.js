import React, { useEffect } from "react";
// import OwlCarousel from "react-owl-carousel";
// import dynamic from "next/dynamic";
// import OwlCarousel from "react-owl-carousel";
// const OwlCarousel = dynamic(import("react-owl-carousel"), {
//   ssr: false,
// });
import Image from 'next/image'
import Slider from "react-slick";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { Grid, Box } from "@material-ui/core";
// import "./section-building-materials.css";
const settings1 = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  cssEase: "linear",
};
// const settings1 = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 1000,
//   // nextArrow: (
//   //   <div>
//   //     <div className="next-slick-arrow"> Prev </div>
//   //   </div>
//   // ),
//   // prevArrow: (
//   //   <div>
//   //     <div className="prev-slick-arrow"> Next </div>
//   //   </div>
//   // ),
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   cssEase: "linear",
//   // responsive: [
//   //   {
//   //     breakpoint: 992,
//   //     settings: {
//   //       arrows: true,
//   //       slidesToShow: 4,
//   //     },
//   //   },
//   //   {
//   //     breakpoint: 768,
//   //     settings: {
//   //       arrows: true,
//   //       slidesToShow: 4,
//   //     },
//   //   },

//   //   {
//   //     breakpoint: 576,
//   //     settings: {
//   //       arrows: true,
//   //       slidesToShow: 4,
//   //     },
//   //   },
//   //   {
//   //     breakpoint: 0,
//   //     settings: {
//   //       arrows: true,
//   //       slidesToShow: 1,
//   //     },
//   //   },
//   // ],
// };
const options = {
  margin: 0,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  loop: true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
};

const SectionBM = (props) => {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  // }, []);
  console.log("props for building material ", props.images);
  const images = props.images;
  return (
    <Grid container>
      <Slider {...settings1}>
        {(images || []).map((image, i) => {
          console.log("=> ", image);
          return (
            <Box key={i} className="building-material-wrap">
              <Image
                src={image.imageUrl}
                alt={image.name}
                // width={100}
                // height={100}
                // style={props.style}
                // style={{ cursor: "pointer" }}
                // className="img"
                layout="fill"
                onLoadingComplete={(imageDimension) => console.log(imageDimension)}
              />
              {/* <img src={image.imageUrl} alt={image.name} /> */}
              <Box className="mask mask-1"></Box>
              <Box className="mask mask-2"></Box>
              <Box className="content">
                <h3>{image.name}</h3>
              </Box>
            </Box>
          );
        })}
      </Slider>
      {/* <OwlCarousel
        className="building-material-carousel owl-theme"
        {...options}
      >
        {(images || []).map((image, i) => {
          console.log("=> ", image);
          return (
            <Box key={i} className="building-material-wrap">
              <img src={image.imageUrl} alt={image.name} />
              <Box className="mask mask-1"></Box>
              <Box className="mask mask-2"></Box>
              <Box className="content">
                <h3>{image.name}</h3>
              </Box>
            </Box>
          );
        })}
      </OwlCarousel> */}
    </Grid>
  );
};
export default SectionBM;
