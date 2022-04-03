import { Box } from "@material-ui/core";
import React from "react";
import Image from "next/image";
// import "./carrer-banner.css"

function CarrierBannerImg() {
  return (
    <Box className="onlineFormHeader">
      <Image
        src={"/banner/carrier-banner.jpg"}
        // className={classes.avatar} 
        alt={""}
        // width={100}
        // height={100}
        // style={props.style}
        // style={{ cursor: "pointer" }}
        // className="img"
        layout="fill"
        onLoadingComplete={(imageDimension) => console.log(imageDimension)}
      />
      {/* <img
        src={"/banner/carrier-banner.jpg"}
      /> */}
    </Box>
  );
}

export default CarrierBannerImg;
