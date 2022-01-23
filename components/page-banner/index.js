import React from "react";
import {
  Breadcrumbs,
  Grid,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import NextLink from "../UI/NextLink";
import PropTypes from "prop-types";
// import RouterLink from "next/link";
// import {Link as RouterLink} from "react-router-dom";
// import "./page-slider.css";

// const useStyles = makeStyles((theme) => (
const classes = {
  bannerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 326,
    overflow: "hidden",
    textAlign: "center",
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
  },
  bannersummery: {
    position: "relative",
  },
  bannertitle: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#fff",
    fontSize: 40,
    fontWeight: 500,
  },
  breadcrumbs: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    color: "#fff",
  },
  breadcrumbtext: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#fff",
    fontSize: 14,
    fontWeight: 400,
    textDecoration: "none",
  },
  "@media (max-width: 767px)": {
    bannerContainer: {
      height: 200,
    },
    bannertitle: {
      fontSize: 24,
    },
  },
};

const PageBanner = (props) => {
  // const classes = useStyles();
  const { showSearch = false, bgImage, title, currentPage } = props;

  return (
    <div
      style={{ ...classes.bannerContainer, backgroundImage: `url(${bgImage}` }}
    >
      <div style={{ ...classes.overlay }}></div>
      <Grid container style={{ ...classes.bannersummery }}>
        <Grid item xs={12} md={12}>
          <Typography variant="h1" style={{ ...classes.bannertitle }}>
            {title}
          </Typography>

          <Breadcrumbs
            aria-label="breadcrumb"
            style={{ ...classes.breadcrumbs }}
          >
            {/* <RouterLink href="/" passHref> */}
            <NextLink href="/" style={{ ...classes.breadcrumbtext }}>
              <Typography color="inherit" underline="hover">
                HOME
              </Typography>
            </NextLink>
            {/* </RouterLink> */}
            <Typography style={{ ...classes.breadcrumbtext }}>
              {currentPage}
            </Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </div>
  );
};

PageBanner.propTypes = {
  showSearch: PropTypes.bool,
  bgImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default PageBanner;
