import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  // Paper,
} from "@material-ui/core";
// import "./cms-page-details.css";
import PageBanner from "../../components/page-banner";
// import InfoCard from "./components/ourTeam";
// import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
// import OurTeam from "./components/ourTeam/index";
import ApiClient from "../../api-client";
// import OwlCarouselSlider from '../../components/carousel-slider';
import HtmlParser from "react-html-parser";
import API_ENDPOINTS from "../../constants/api-endpoints";
import { useSelector } from "react-redux";
import { wrapper } from "../../redux";
const useStyles = makeStyles((theme) => ({}));

const CmsPageDetails = (props) => {
  const classes = useStyles();
  const stateRoute = useSelector((state) => state.route);
  console.log("stateRoute", stateRoute);
  // const location = useLocation();
  const router = useRouter();
  // let query = useQuery();
  const [data, setData] = useState(props.data);
  const [bgImage, setBgImage] = useState(props.bgImage);

  // const { query: id } = router;
  debugger;
  React.useEffect(() => {
    if (stateRoute.id) populateAboutUsDetails(stateRoute.id);
    // populateTeamDetails();
  }, [stateRoute.id]);

  const populateAboutUsDetails = (id) => {
    const getData = async () => {
      try {
        const response = await ApiClient.call(
          ApiClient.REQUEST_METHOD.POST,
          "/cms/getDetailData",
          { _id: id },
          {},
          {},
          false
        );
        setData(response.data || null);
        if (
          response.data?.image &&
          response.data?.image.length > 0 &&
          response.data?.image[0].image &&
          response.data?.image[0].image[0]
        ) {
          setBgImage(
            API_ENDPOINTS.BASE_URL + response.data?.image[0]?.image[0]?.path
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  };

  return (
    <div style={{ background: "#fff" }}>
      <PageBanner
        bgImage={bgImage}
        title={HtmlParser(data?.pageName)}
        currentPage={HtmlParser(data?.pageName)}
      />

      {data ? (
        <Container>
          <Box className="content-wrapper">
            <Box
              xs={12}
              md={12}
              style={{
                flexDirection: "row",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/*<Grid className="about-page-summery" item xs={12} md={6}>
                 <Box className="about-page-content">
                  <Typography variant="h3">Page position</Typography>
                </Box> 
                <Box className="about-page-content">
                  <Typography>{HtmlParser(data.position)}</Typography>
                </Box>
              </Grid>
              
              <Grid className="about-page-summery" item xs={12} md={6}>
                <Box className="about-page-content">
                  <Typography variant="h3">Page name</Typography>
                </Box>
                <Box className="about-page-content">
                  <Typography>{HtmlParser(data.pageName)}</Typography>
                </Box>
              </Grid>
              */}
              <Grid className="about-page-summery" item xs={12} md={12}>
                <Box className="about-page-content">
                  <Typography variant="h2">
                    {HtmlParser(data.pageTitle)}
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-page-summery" item xs={12} md={12}>
                <Box className="about-page-content">
                  <Typography>
                    {HtmlParser(data.pageSortDescription)}
                  </Typography>
                </Box>
              </Grid>
              {/* {data?.pageUrl && (
                <Grid className="about-page-summery" item xs={12} md={6}>
                  <Box className="about-page-content">
                    <Typography variant="h3">Page URL</Typography>
                  </Box>
                  <Box className="about-page-content">
                    <Typography>{HtmlParser(data.pageUrl)}</Typography>
                  </Box>
                </Grid>
              )} */}
              <Grid className="about-page-summery" item xs={12} md={12}>
                <Box className="about-page-content">
                  <Typography>{HtmlParser(data.pageDescription)}</Typography>
                </Box>
              </Grid>
            </Box>
          </Box>
          {data?.image &&
            data?.image.length > 0 &&
            data?.image[0].image &&
            data?.image[0].image[0] && (
              <Grid
                item
                xs={12}
                md={12}
                className={`${classes.style2} about-page-images`}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={API_ENDPOINTS.BASE_URL + data.image[0]?.image[0].path}
                    style={{ margin: "15px" }}
                    alt=""
                  />
                </Box>
              </Grid>
            )}
        </Container>
      ) : null}
    </div>
    //   <Container>
    //     <Box className="content-wrapper">
    //       {aboutUsSection.map((aboutUsData, i) => {
    //         const img = aboutUsData?.image[0]?.path
    //           ? ApiClient.SERVER_ADDRESS + "/" + aboutUsData.image[0].path
    //           : "no-image-available-icon-6.png";

    //         if (i % 2 === 0) {
    //   return (
    //     <Box className="about-block-item">
    //       <Grid container alignItems="center">
    //         <Grid className="about-block-images" item xs={12} md={6}>
    //           <Box className="about-block-image">
    //             {/* <img src={aboutUsSection.images[0].imageUrl || "about-img.jpeg"} height={"auto"} alt={''} /> */}
    //             {/* <OwlCarouselSlider images={aboutUsSection.images || []} autoplay={true} /> */}
    //             <img src={img} alt="" />
    //           </Box>
    //         </Grid>
    //         <Grid className="about-block-summery" item xs={12} md={6}>
    //           <Box className="about-block-content">
    //             <Typography variant="h3">
    //               {aboutUsData.title}
    //             </Typography>
    //             <Typography>
    //               {HtmlParser(aboutUsData.description)}
    //             </Typography>
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   );
    // }
    //   return (
    //     <Box className="about-page-item about-whyus-item">
    //       <Grid container spacing={3}>

    //         <Grid
    //           className="about-page-images"
    //           item
    //           xs={12}
    //           md={6}
    //           className={classes.style2}
    //         >
    //           <Box className="about-page-image">
    //             {" "}
    //             <img src={img} alt="" />
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   );
    // })}

    //  <Box className="about-page-item">
    //   <Box className="about-page-content">
    //     <Typography variant="h4"> {aboutUsSection.header}</Typography>
    //     <Typography variant="h3"> {aboutUsSection.title}</Typography>
    //     <Typography>
    //       {aboutUsSection.description}
    //     </Typography>
    //   </Box>
    // </Box>

    // {/* <Box className="page-section-header" align="center">
    //   <Box component="h2" className="page-section-title">
    //     Our Team
    //   </Box>
    // </Box>
    // <OurTeam team={team} /> */}
    // </Box>
    // </Container>
    // ) : null}
    // </div>
  );
};
export async function getStaticPaths() {
  const response = await ApiClient.call(
    ApiClient.REQUEST_METHOD.POST,
    "/cms/getBottomPages",
    {},
    {},
    null,
    true,
    true
  );
  const data = response.data;
  const paths = data.map((bp) =>
    ("/pages/" + bp.pageName.toLowerCase() || "").replace(/\s/g, "-")
  );
  // const paths = ["/pages/2-bhk-flats-in-jaipur"];
  return {
    paths: paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}
export const getStaticProps = wrapper.getStaticProps(
  (store) => async (props) => {
    try {
      console.log("store", store);
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/cms/getDetailData",
        { _id: store.getState().route.id },
        {},
        {},
        true,
        true
      );

      return {
        props: {
          data: response.data,
          bgImage:
            API_ENDPOINTS.BASE_URL + response.data?.image[0]?.image[0]?.path,
        }, // will be passed to the page component as props
      };
    } catch (err) {
      console.log(err);
    }
  }
);
export default CmsPageDetails;
