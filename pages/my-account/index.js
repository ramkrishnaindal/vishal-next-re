import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import PageBanner from "../../components/page-banner";
import NextLink from "./../../components/UI/NextLink";
import { useRouter } from "next/router";
import Image from "next/image";
// import './my-account.css';

const useStyles = makeStyles((theme) => ({}));

const MyAccount = (props) => {
  const [name, setName] = useState("user");
  const [email, setEmail] = useState("-");
  const [mobile, setMobile] = useState("-");
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
    setEmail(user.email);
    setMobile(user.countryCode + "-" + user.mobile);
  }, []);

  return (
    <div>
      <PageBanner
        bgImage={"/images/about_us.jpeg"}
        title="My Acount"
        currentPage="My Account"
      />

      <Container>
        <Box className="content-wrapper">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} className="sidebar-section">
              <Box className="box-item">
                <Box className="box-wrap box-border-bottom box-radius">
                  <Box className="user-intro box-body">
                    <Box className="user-icon">
                      {" "}
                      <Image
                        src={
                          "/images/profile-img.jpg"
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
                      {/* <img src="images/profile-img.jpg" alt="" />{" "} */}
                    </Box>
                    <Box className="user-info">
                      <h4> {name}</h4>
                      <p>Permium</p>
                    </Box>
                  </Box>
                  <Box className="box-body p-0">
                    <ul className="sidebar-account-menu">
                      <li className="active">
                        <NextLink href="/my-account">
                          {" "}
                          <i className="fas fa-house-user"></i>My Account{" "}
                        </NextLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <NextLink href="/my-account/my-profile">
                          {" "}
                          <i className="far fa-user"></i>My Profile{" "}
                        </NextLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <NextLink href="/my-account/my-property">
                          {" "}
                          <i className="fas fa-building"></i>My Property{" "}
                        </NextLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <NextLink href="/my-account/my-booking">
                          {" "}
                          <i className="far fa-list-alt"></i>My Booking{" "}
                        </NextLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <NextLink href="/my-account/my-favorite">
                          {" "}
                          <i className="far fa-heart"></i>My Favorite{" "}
                        </NextLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <Typography className="logout" onClick={logoutHandler}>
                          <i className="fas fa-sign-out-alt"></i>Log out
                        </Typography>{" "}
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
                      <h5 className="box-title">Profile Information</h5>
                    </Box>
                    <Box className="box-body">
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <Box className="myaccount-profileimg">
                            <Image
                              src={
                                "/images/profile-img.jpg"
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
                            {/* <img src="../images/profile-img.jpg" alt="" /> */}
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Box className="myccount-content">
                            <p>Hello {name}!</p>
                            <p>
                              <strong>User Name : </strong>
                              {name}
                            </p>
                            <p>
                              <strong>Your Name : </strong>
                              {name}
                            </p>
                            <p>
                              <strong>Email : </strong>
                              {email}
                            </p>
                            <p>
                              <strong>Phone : </strong>
                              {mobile}
                            </p>
                          </Box>
                        </Grid>
                      </Grid>
                      <hr />
                      <Box align="right">
                        <NextLink
                          className="btn btn-primary"
                          href="/my-account/my-profile"
                        >
                          Edit Profile
                        </NextLink>
                      </Box>
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

export default MyAccount;
