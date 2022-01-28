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
// import NextLink from "../../../components/UI/NextLink";
import PageBanner from "../../../components/page-banner";
// import "../my-account.css";
import ApiClient from "../../../api-client";
import * as Snackbar from "../../../redux/actions/SnackbarActions";
// import { Link as RouterLink } from "react-router-dom";
// import Link from "next/link";
import NextLink from "./../../../components/UI/NextLink";
import { useRouter } from "next/router";
const useStyles = makeStyles((theme) => ({}));

const MyBooking = (props) => {
  const [name, setName] = useState("");
  const [booking, setBookingList] = useState([]);
  const router = useRouter();

  const logoutHandler = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("bookNow");
      localStorage.removeItem("postProperty");
      router.replace("/");
    }
  };

  const { classes } = props;

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
        "/users/getUserBookings",
        { userId: user._id },
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        true
      );

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
  return (
    <div>
      <PageBanner
        bgImage={"/images/about_us.jpeg"}
        title="My Booking"
        currentPage="My Booking"
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
                            {" "}
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
                      <li className="active">
                        {" "}
                        {/* <Link href="/my-account/my-booking" passHref> */}
                        <NextLink href="/my-account/my-booking">
                          <Typography>
                            <i className="far fa-list-alt"></i>My Booking{" "}
                          </Typography>
                        </NextLink>
                        {/* </Link>{" "} */}
                      </li>
                      <li>
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
                        {/* <Link className="logout" href="#" passHref> */}
                        {/* <NextLink href="#"> */}
                        <Typography className="logout" onClick={logoutHandler}>
                          <i className="fas fa-sign-out-alt"></i>Log out
                        </Typography>
                        {/* </NextLink> */}
                        {/* </Link>{" "} */}
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
                      <h5 className="box-title">My Booking Lists</h5>
                    </Box>
                    <Box className="box-body">
                      {booking?.map((item, index) => {
                        debugger;
                        return (
                          <Box className="booking-table">
                            <Box className="tabel-row">
                              <Box className="table-cell">
                                Booking No.-{item?._id}
                              </Box>
                              <Box className="table-cell text-right">
                                {item?.created}
                              </Box>
                            </Box>
                            <Box className="tabel-row">
                              <Box className="table-cell booking-img">
                                <NextLink href="#">
                                  <img
                                    src={
                                      item?.images[0]?.mainImage[0]?.path
                                        ? ApiClient.SERVER_ADDRESS +
                                          "/" +
                                          item?.images[0]?.mainImage[0]?.path
                                        : "/no-image-available-icon-6.png"
                                    }
                                    width="75"
                                    height="75"
                                  />
                                </NextLink>
                              </Box>
                              <Box className="table-cell">
                                <p className="booking-title">
                                  {item?.propertyId?.nameOfProject}
                                </p>
                                <p className="booking-status booking-sucess">
                                  Booking Sucessfully!
                                </p>
                              </Box>
                              <Box className="table-cell text-right booking-total">
                                <p className="booking-price">
                                  <i className="fas fa-rupee-sign"></i>{" "}
                                  {item?.bookingAmount}
                                </p>
                                <p className="booking-view">
                                  {/* <Link
                                    href={{
                                      pathname: "/house-details",
                                      query: item?._id,
                                    }}
                                    passHref
                                  > */}
                                  <NextLink
                                    href={{
                                      pathname: "/house-details",
                                      query: item?._id,
                                    }}
                                  >
                                    <Button>View</Button>
                                  </NextLink>
                                  {/* </Link> */}
                                </p>
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
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

export default MyBooking;
