import React from "react";
// import "./service-card.css";
import { makeStyles, Box } from "@material-ui/core";
// import { Link as RouterLink } from "react-router-dom";
// import Link from "next/link";
import ApiClient from "../../api-client";
import NextLink from "../UI/NextLink";
import { useDispatch } from "react-redux";
import { SetRoute } from "../../redux/actions/RouteActions";
const useStyles = makeStyles((theme) => ({
  btnBox1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    cursor: "pointer",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#FF7601",
    color: "#FFFFFF",
    fontFamily: '"Open Sans",sans-serif',
    fontWeight: "bold",
  },
}));

const ServiceCard = (props) => {
  // console.log("segrvice", props);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { title, shortDescription, media, _id } = props.service;

  // console.log("Service card", props.service);
  // console.log("{title, shortDescription}", title, shortDescription, media);
  let img1 = "/images/property_img3.jpeg";
  if (
    media !== [] &&
    media.length > 0 &&
    media[0].image &&
    media[0].image.length > 0
  ) {
    img1 = ApiClient.SERVER_ADDRESS + "/" + media[0].image[0].path;
    // console.log("newe imag", img1);
  }

  return (
    <div className="portfolio-item">
      <figure>
        <img
          className="img pulse"
          src={img1}
          alt=""
          style={{ width: "100%", height: 240 }}
        />
        <div className="mask">
          <h2>{title}</h2>
          <p className="portfolio-item-content">{shortDescription}</p>
          {/* <Link
            href={{
              pathname: "/service-details",
              query: _id,
            }}
            passHref
          > */}
          <NextLink
            href={{
              pathname: "/service-details",
            }}
            className={"info"}
            style={{ marginTop: 10 }}
          >
            <Box
              onClick={() => {
                dispatch(SetRoute({ id: _id }));
              }}
            >
              MORE DETAIL
            </Box>
          </NextLink>
          {/* </Link> */}
          {/* <a href="/service-details" className="info" style={{marginTop: 10}} >Read More</a> */}
        </div>
      </figure>
    </div>
  );
};

export default ServiceCard;
