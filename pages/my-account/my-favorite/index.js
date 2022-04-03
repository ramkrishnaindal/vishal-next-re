import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  // TextField,
  Button,
  Link as MUILink,
} from "@material-ui/core";
import PageBanner from "../../../components/page-banner";
// import "../my-account.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import BathtubIcon from "@material-ui/icons/Bathtub";
import ApiClient from "../../../api-client";
import * as Snackbar from "../../../redux/actions/SnackbarActions";
// import { Link as RouterLink } from "react-router-dom";
// import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { SetRoute } from "../../../redux/actions/RouteActions";
import NextLink from "../../../components/UI/NextLink";
import Image from "next/image";
const settings1 = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
};

const useStyles = makeStyles((theme) => ({}));

const MyFavorite = (props) => {
  const [name, setName] = useState("");
  const [favorite, setBookingList] = useState([]);
  const dispatch = useDispatch();
  const { classes } = props;
  const router = useRouter();
  const logoutHandler = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("bookNow");
      localStorage.removeItem("postProperty");
      // router.replace("/");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setName(user.firstName + " " + user.lastName);
    populateDirectorDetails();
  }, []);

  const populateDirectorDetails = () => {
    const getData = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/users/getUserWishList",
        { userId: user._id },
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        true
      );
      debugger;
      setBookingList(response?.data || []);
      // console.log('About us details', aboutUsInfo, aboutSection);
    };
    try {
      getData();
    } catch (e) {
      Snackbar.showFailSnackbar(
        "We are facing some issue Please try again later."
      );
      console.log("populateDirectorDetails::e", e);
    }
  };

  const handleDeleteFavourite = async (e) => {
    debugger;
    let userDetails = JSON.parse(localStorage.getItem("user"));
    if (!userDetails) {
      router.replace("/signin");
    }

    try {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/users/removeFromWishList",
        {
          userId: userDetails?._id,
          propertyId: e,
        },
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );

      dispatch(Snackbar.showSuccessSnackbar(response.message));
      populateDirectorDetails();
    } catch (error) {
      console.error("this is the error::", error);
      dispatch(
        Snackbar.showFailSnackbar(
          "We are facing some issue Please try again later."
        )
      );
    }
  };

  return (
    <div>
      <PageBanner
        bgImage={"/images/about_us.jpeg"}
        title="My Favorite"
        currentPage="My Favorite"
      />

      <Container>
        <Box className="content-wrapper">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} className="sidebar-section">
              <Box className="box-item">
                <Box className="box-wrap box-border-bottom box-radius">
                  <Box className="user-intro box-body">
                    {/* <Box className="user-icon">
                      {" "}
                      <img src="images/profile-img.jpg" alt="" />{" "}
                    </Box> */}
                    <Box className="user-info">
                      <h4> {name}</h4>
                      {/* <p>Permium</p> */}
                    </Box>
                  </Box>
                  <Box className="box-body p-0">
                    <ul className="sidebar-account-menu">
                      <li>
                        {/* <Link href="/my-account" passHref> */}
                        <NextLink href="/my-account">
                          <Typography>
                            <i className="fas fa-house-user"></i>My Account{" "}
                          </Typography>
                        </NextLink>
                        {/* </Link>{" "} */}
                      </li>
                      <li>
                        {" "}
                        {/* <Link href="/my-account/my-profile" passHref> */}
                        <NextLink href="/my-account/my-profile">
                          <Typography>
                            <i className="far fa-user"></i>My Profile{" "}
                          </Typography>
                        </NextLink>
                        {/* </Link>{" "} */}
                      </li>
                      <li>
                        {" "}
                        {/* <Link href="/my-account/my-property" passHref> */}
                        <NextLink href="/my-account/my-property">
                          <Typography>
                            <i className="fas fa-building"></i>My Property{" "}
                          </Typography>
                        </NextLink>
                        {/* </Link>{" "} */}
                      </li>
                      <li>
                        {" "}
                        {/* <Link href="/my-account/my-booking" passHref> */}
                        <NextLink href="/my-account/my-booking">
                          <Typography>
                            <i className="far fa-list-alt"></i>My Booking{" "}
                          </Typography>
                        </NextLink>
                        {/* </Link>{" "} */}
                      </li>
                      <li className="active">
                        {" "}
                        {/* <Link href="/my-account/my-favorite" passHref> */}
                        <NextLink href="/my-account/my-favorite">
                          <Typography>
                            <i className="far fa-heart"></i>My Favorite{" "}
                          </Typography>
                        </NextLink>
                        {/* </Link>{" "} */}
                      </li>
                      <li>
                        {" "}
                        {/* <NextLink className="logout" href="#"> */}
                        <Typography onClick={logoutHandler}>
                          <i className="fas fa-sign-out-alt"></i>Log out
                        </Typography>
                        {/* </NextLink>{" "} */}
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* <!-- sidebar-section --> */}
            <Grid item xs={12} md={9} className="content-area">
              <Box className="content-section">
                <Box className="box-item">
                  <Box className="box-wrap box-border-bottom box-radius">
                    <Box className="box-header">
                      <h5 className="box-title">My Favorite Lists</h5>
                    </Box>
                    <Box className="box-body">
                      <Grid
                        container
                        spacing={2}
                        className="my-property-wrapper"
                      >
                        {favorite?.map((item, index) => {
                          debugger;
                          return (
                            <Grid item xs={12} sm={6} md={4}>
                              <Box className="property-item my-property-item">
                                <Grid container className="property-wrap">
                                  <Grid
                                    className="property-favorite-remove"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <a
                                      onClick={() =>
                                        handleDeleteFavourite(
                                          item?.propertyId._id
                                        )
                                      }
                                      className="remove remove-from-favorite"
                                      title="Remove this Property"
                                    >
                                      ×
                                    </a>
                                  </Grid>
                                  <Grid className="property-image">
                                    <Slider
                                      {...settings1}
                                      style={{ display: "inline-block" }}
                                    >
                                      {item?.images?.map((img) => (
                                        <Box className="property-image-thumb">
                                          <Image
                                            src={
                                              img?.path
                                                ? ApiClient.SERVER_ADDRESS +
                                                "/" +
                                                img?.path
                                                : "/no-image-available-icon-6.png"
                                            }
                                            // className={classes.avatar} 
                                            alt={""}
                                            // className={`${classes.detailImage} box-img`}
                                            // width={100}
                                            // height={100}
                                            // style={props.style}
                                            // style={{ cursor: "pointer" }}
                                            // className="img"
                                            layout="fill"
                                            onLoadingComplete={(imageDimension) => console.log(imageDimension)}
                                          />
                                          {/* <img
                                            src={
                                              img?.path
                                                ? ApiClient.SERVER_ADDRESS +
                                                  "/" +
                                                  img?.path
                                                : "/no-image-available-icon-6.png"
                                            }
                                          /> */}
                                        </Box>
                                      ))}
                                    </Slider>
                                  </Grid>
                                  <Grid className="property-summery">
                                    <Box
                                      component="span"
                                      className="property-tag"
                                    >
                                      {item?.propertyId?.pType}
                                    </Box>
                                    <Typography
                                      variant="h3"
                                      className="property-title"
                                    >
                                      {item?.propertyId?.nameOfProject}
                                    </Typography>
                                    <Grid
                                      container
                                      className="property-information"
                                    >
                                      <Grid
                                        item
                                        xs={6}
                                        md={6}
                                        className="property-feature"
                                      >
                                        <ZoomOutMapIcon />
                                        <Typography>
                                          {item?.Features?.carpetArea}
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={6}
                                        md={6}
                                        className="property-feature"
                                      >
                                        <LocalHotelIcon />
                                        <Typography>
                                          {item?.Features?.bedrooms} Bedrooms
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={6}
                                        md={6}
                                        className="property-feature"
                                      >
                                        <LocalHotelIcon />
                                        <Typography>
                                          {item?.Features?.balconies} Balconies
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={6}
                                        md={6}
                                        className="property-feature"
                                      >
                                        <BathtubIcon />
                                        <Typography>
                                          {item?.Features?.bathrooms} Bathroom
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid container className="property-button">
                                    {/* <NextLink className="btn btn-primary" href="/">
                                    {" "}
                                    MORE DETAIL
                                  </NextLink> */}
                                    {/* <Link
                                      href={{
                                        pathname: "/house-details",
                                        query: item?.Features?.propertyId,
                                      }}
                                      passHref
                                    > */}
                                    <NextLink
                                      href={{
                                        pathname: `/house-details`,
                                        // query: item?.Features?.propertyId,
                                      }}
                                    >
                                      <Button
                                        className="btn btn-primary"
                                        component={NextLink}
                                        onClick={() => {
                                          dispatch(
                                            SetRoute({
                                              id: item?.Features?.propertyId,
                                            })
                                          );
                                        }}
                                      >
                                        MORE DETAIL
                                      </Button>
                                    </NextLink>
                                    {/* </Link> */}
                                  </Grid>
                                </Grid>
                              </Box>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* <!--content-area--> */}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MyFavorite;
