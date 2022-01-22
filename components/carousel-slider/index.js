import React from "react";
import Slider from "react-slick";
// import dynamic from "next/dynamic";
// import OwlCarousel from "react-owl-carousel";
// const OwlCarousel = dynamic(import("react-owl-carousel"), {
//   ssr: false,
// });
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./slider.css";

import { Grid } from "@material-ui/core";
const settings1 = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  cssEase: "linear",
  // variableWidth: true,
};
const OwlCarouselSlider = (props) => {
  // const [loading, setLoading] = useState(false);
  const images = props.images;
  // useEffect(() => {
  //   setLoading(true);
  // }, []);
  const items = props.items || 1;

  // console.log("images check", images, props, (images || []));
  return (
    <Grid className="carousel-wrapper" container>
      {/* <OwlCarousel
        items={items}
        className="carousel-item owl-theme"
        loop={true}
        nav={false}
        margin={0}
        autoplay={true}
        dots={true}
      >
        {(images || []).map((image, i) => {
          return (
            <div className="carousel-wrap" key={i}>
              <img
                className="img"
                src={image.imageUrl}
                style={props.style}
                alt=""
              />
            </div>
          );
        })}
      </OwlCarousel> */}
      <Slider {...settings1}>
        {(images || []).map((image, i) => {
          return (
            <div className="carousel-wrap" key={i}>
              <img
                className="img"
                src={image.imageUrl}
                style={props.style}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </Grid>
  );
};
export default OwlCarouselSlider;
