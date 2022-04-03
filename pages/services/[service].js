import React, { useState } from "react";
import {
  Container,
  Grid,
  // Typography,
  makeStyles,
  Box,
  // Paper,
} from "@material-ui/core";
// import "./service-details.css";
import PageBanner from "../../components/page-banner";
import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import ApiClient from "../../api-client";
import ReactHtmlParser from "react-html-parser";
import { wrapper } from "./../../redux/index";
import EnquryFormService from "../../components/enquryFormService/enquryForm";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";

// import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { useSelector } from "react-redux";
import Head from 'next/head'
const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#777777",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#666666",
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 20,
    fontWeight: "bold",
  },
  text6: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#888888",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1.8,
  },
  text7: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 10,
  },
  text8: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 10,
  },
  icon: {
    color: "#FF7601",
    fontSize: 20,
    paddingRight: 10,
  },
  style1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  btn1: {
    borderRadius: 8,
    color: "#FFFFFF",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: "#FF7601",
  },
  btn2: {
    borderRadius: 15,
    color: "#FFFFFF",
    textTransform: "none",
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
  },
  style2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  style3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box1: {
    width: 10,
    paddingRight: 5,
    paddingLeft: 5,
    color: "#333333",
  },
}));

const ServiceDetailPage = (props) => {
  const classes = useStyles();
  // const location = useLocation();
  const router = useRouter();
  const stateRoute = useSelector((state) => state.route);
  // const { item } = props;
  const dispatch = useDispatch();
  // let query = useQuery();
  const [viewDetails, setViewDetails] = React.useState(true);
  // const [headTitle, setHeadTitle] = useState('')
  // const [headDescription, setHeadDescription] = useState('')
  const [serviceDetail, setServiceDetail] = React.useState(props.data || {});

  // let token = router.query.token;

  // const propertyListItem = useSelector((state) => state.PropertyDetail.data);
  // console.log("propertyListItem", propertyListItem);
  // if (propertyListItem) {
  //   if (viewDetails === false) {
  //     console.log(propertyListItem);
  //     setViewDetails(true);
  //     setPropertyDetail(propertyListItem.data);
  //   }
  // }
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  React.useEffect(() => {
    // let reqData = {
    //   // serviceId: router?.query,

    // };
    // const serviceId = router?.query;
    // const { service } = router.query;

    fetchServiceDetails(stateRoute.id);
  }, [stateRoute.id]);

  const fetchServiceDetails = (serviceId) => {
    const getData = async () => {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/home/getServiceDetails",
        { _id: serviceId },
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );

      console.log("Service Details Info ", response.data);
      setServiceDetail(response.data);
      setViewDetails(true);
    };
    return getData();
  };

  let img1 = "/images/property_img3.jpeg";
  let banner = "/images/about_us.jpeg";
  let images = [];
  if (
    serviceDetail !== {} &&
    serviceDetail.media &&
    serviceDetail.media.length > 0 &&
    serviceDetail.media[0].image &&
    serviceDetail.media[0].image.length > 0
  ) {
    // img1 = ApiClient.SERVER_ADDRESS + "/" + serviceDetail.media[0].image[0].path;

    images = serviceDetail.media[0].image.map((imgInfo) => {
      return ApiClient.SERVER_ADDRESS + "/" + imgInfo.path;
    });

    console.log(" imag ***x", img1);
    banner =
      ApiClient.SERVER_ADDRESS + "/" + serviceDetail.media[0].banner[0].path;
    console.log("banner", banner);
  }

  return (
    <>
      <Head>
        <title>Vishal Construction Company</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="title" content={props.headTitle} />
        <meta name="description" content={props.headDescription} />
        <meta name="keywords" content="Construction Company in Jaipur, Construction Company in Jagatpura, Construction Company, Construction Company in Rajasthan, Vishal Construction Company" />
      </Head>
      <div style={{ background: "#F7F7F7" }}>
        <PageBanner
          bgImage={banner}
          title="Service details"
          currentPage="SERVICE DETAILS"
        />
        {/* <Gallery /> */}
        {viewDetails ? (
          <Box className="CareerPageText">
            <Container>
              <div className={`${classes.root} headingtext`} >
                <Grid container>
                  <Grid item md={6}>
                    <Box className="middel-content">
                      <h2>
                        {" "}
                        <span style={{ color: "#00afb8" }}>
                          {ReactHtmlParser(serviceDetail?.title)}
                        </span>
                      </h2>
                      <p>{ReactHtmlParser(serviceDetail?.description)}</p>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box className="middel-content">
                      <EnquryFormService />
                    </Box>
                  </Grid>
                </Grid>
                <Box className="work-space">
                  <h2 style={{ textAlign: "left" }}>
                    <span style={{ color: "#00afb8" }}>COMPLETED PROJECTS</span>
                  </h2>
                  <Grid container spacing={3}>
                    <Gallery>
                      {(images || []).map((img) => {
                        return (
                          <Grid item xs={4} className="workSpaceImgaes">
                            <Item
                              original={img}
                              thumbnail={img}
                              width="1024"
                              height="768"
                            >
                              {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={img} />
                              )}
                            </Item>
                          </Grid>
                        );
                      })}
                    </Gallery>
                  </Grid>
                </Box>
              </div>
            </Container>
          </Box>
        ) : null}
        {/* // <Container> */}
        {/* <Paper elevation={0} style={{padding: 20, marginTop: 20}}>

            <Grid container>
              <Grid item xs={12} md={6} className={classes.style2} >
                <img src={img1} height={"auto"} alt="" width={'110%'} />
              </Grid>
              <Grid item xs={12} md={6} style={{padding: 20, backgroundColor: "#ff7600", height: 'fit-content', margin: 'auto'}}>
                <Typography className={classes.text8} style={{padding: 20}}> {serviceDetail.title}</Typography>
                <Typography className={classes.text3} style={{padding: 20, lineHeight: "2.3em", color: '#fff'}} >
                  {ReactHtmlParser(serviceDetail.description)}
                </Typography>
              </Grid>
            </Grid>
          </Paper> */}
        ;
        {/* <Paper elevation={0} style={{padding: 20, marginTop: 20, marginBottom: 20}}>

            <Grid container style={{marginBottom: 20}}>
              <Grid item xs={12} md={6} style={{padding: 20, marginTop: 20}}>
                <Typography className={classes.text5} style={{paddingLeft: 20}} >Why Us</Typography>
                <Typography className={classes.text7} style={{padding: 20}}>
                  Why Are We Awesome?</Typography>
                <Typography className={classes.text3} style={{padding: 20, lineHeight: "2.3em"}} >
                  Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={classes.style2} style={{backgroundImage: "#03b2cb", padding: 40}}>
                <img src="Happy-Family.jpeg" height={"100%"} width={'100%'} />
              </Grid>

            </Grid>
          </Paper> */}
        {/* // </Container> */}
      </div>
    </>
  );
};
export async function getStaticPaths() {

  const getData = async () => {
    const response = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      "/home/getService",
      {},
      {},
      { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
      true,
      true
    );

    console.log("response?.data?.items ", response?.data?.items);
    // setServices(response?.data?.items);
    return {
      paths: response?.data?.items.map(pr => "/services/" + pr.title.trim().toLowerCase()),
      // Enable statically generating additional pages
      // For example: `/posts/3`
      fallback: true,
    };

  };
  return getData();
  // const paths = ["/pages/2-bhk-flats-in-jaipur"];
}
export const getStaticProps = wrapper.getStaticProps(
  (store) => async (props) => {
    let headTitle = '';
    let headDesc = ""
    try {
      console.log("props", props)
      const { service } = props.params


      switch (service.toLowerCase()) {
        case "sell":
          headTitle = "we care for flexibility, innovation, quality, and value for money."
          headDesc = "We have a team of experts that provide interior design and remodeling services for 1, 2, and 3 BHK flats, and businesses for sale and rent in Jaipur."
          break;
        case "construction":
          headTitle = "flats, and shops that are safe, profitable, and techno-savvy."
          headDesc = "Vishal Construction knows the difference between bandaging an issue and providing long-term amazing services for both residential and business clients."
          break;
        case "interior":
          headTitle = "highly customized and reliable flats, and workspaces in Jaipur"
          headDesc = "Our efficient, custom-made home and office interiors design incorporates your desires and ensures the fulfillment of needs and desires."
          break;
        case "rent":
          headTitle = "fully furnished, semi-furnished, and unfurnished properties for rent"
          headDesc = "We have plenty of alternatives if you're seeking optimum comfort. In our portfolio, we have a big number of empty home properties available for rent."
          break;
      }
      console.log("headTitle", headTitle)
      console.log("headDesc", headDesc)
      // console.log("store", store);
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/home/getServiceDetails",
        { _id: store.getState().route.id },
        {},
        {},
        true,
        true
      );

      return {
        props: {
          data: response.data,
          headTitle,
          headDescription: headDesc
          // bgImage:
          //   API_ENDPOINTS.BASE_URL + response.data?.image[0]?.image[0]?.path,
        }, // will be passed to the page component as props
      };
    } catch (err) {
      console.log("err", err);
      return {
        props: {
          // data: response.data,
          headTitle,
          headDescription: headDesc
          // bgImage:
          //   API_ENDPOINTS.BASE_URL + response.data?.image[0]?.image[0]?.path,
        }, // will be passed to the page component as props
      };
    }
  }
);
export default ServiceDetailPage;
