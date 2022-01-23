import React from "react";
import Slider from "react-slick";
// import dynamic from "next/dynamic";
// import OwlCarousel from "react-owl-carousel";
// const OwlCarousel = dynamic(import("react-owl-carousel"), {
//   ssr: false,
// });
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./inner-carousel-slider.css";

import { Grid, makeStyles } from "@material-ui/core";
const settings1 = {
  dots: false,
  arrows: false,
  margin: 8,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
};

const InnerCarouselSlider = (props) => {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  return (
    <div style={{ width: 350 }}>
      <Slider {...settings1}>
        <Box className="property-image-thumb">
          <div>
            <img
              className="img"
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + "/property_img3.jpeg"}
            />
          </div>
          <div>
            <img
              className="img"
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + "/property_img3.jpeg"}
            />
          </div>
          <div>
            <img
              className="img"
              src={process.env.NEXT_PUBLIC_PUBLIC_URL + "/property_img3.jpeg"}
            />
          </div>
        </Box>
        );
      </Slider>

      {/* <OwlCarousel
        items={1}
        className="owl-theme"
        loop
        nav={false}
        margin={8}
        autoPlay={false}
        dots={false}
      >
        <div>
          <img
            className="img"
            src={process.env.NEXT_PUBLIC_PUBLIC_URL + "/property_img3.jpeg"}
          />
        </div>
        <div>
          <img
            className="img"
            src={process.env.NEXT_PUBLIC_PUBLIC_URL + "/property_img3.jpeg"}
          />
        </div>
        <div>
          <img
            className="img"
            src={process.env.NEXT_PUBLIC_PUBLIC_URL + "/property_img3.jpeg"}
          />
        </div>
      </OwlCarousel> */}
    </div>
  );
};

export default InnerCarouselSlider;
