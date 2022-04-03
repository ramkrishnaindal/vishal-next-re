import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import {
  Container,
  Grid,
  // Typography,
  makeStyles,
  Box,
  Paper,
} from "@material-ui/core";
// import "./search-property-list.css";
// import PageBanner from "../../components/page-banner";
import SearchBox from "../../components/search-box";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import ApiClient from "../../api-client";
import PropertyListCard from "../../components/property-list-card";
// import { CustomNoRowsOverlay } from "../../components/no-data-found/no-data-found";
// import { DoubleArrowIcon } from "@material-ui/icons/DoubleArrow";
import { NoDataAvailable } from "../../components/no-details-available/no-details-available";
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

const SearchPropertyList = (props) => {
  const classes = useStyles();
  // const location = useLocation();
  const router = useRouter();
  // const { item } = props;
  // const dispatch = useDispatch();
  // let query = useQuery();
  const [viewDetails, setViewDetails] = React.useState(true);
  // let token = router.query.token;
  console.log("props.data", props.data)
  const [propertyListItems, setPropertyListItem] = useState(props.data || []);
  const propertyListItem = useSelector((state) => state.PropertyDetail.data);
  const [searchPayload, setSearchPayload] = useState(null);

  // console.log("propertyListItem", propertyListItem);
  if (propertyListItem) {
    if (viewDetails === false) {
      // console.log(propertyListItem);
      setViewDetails(true);
      setPropertyListItem(propertyListItem.data.list);
    }
  }
  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }

  useEffect(() => {
    // console.log("Search location?.state", location?.state);
    // let reqData = {
    //   propertyId: location?.state,
    //   // propertyId: "6125373540f10f2712e43db5"
    // };
    // dispatch(PropertyAction.GetPropertyDetailRequestAsync(reqData));
    if (router?.query) {
      populateProperties(router?.query);
      setSearchPayload(router?.query);
    }
  }, [router?.query]);

  useEffect(() => {
    const { type } = router.query;
    if (type) {
      const payload = {
        type: type.substr(0, 1).toUpperCase() + type.substr(1),
        pType: "",
        minAmount: "",
        maxAmount: "",
      };
      populateProperties(payload);
      setSearchPayload(payload);
    }
  }, []);

  const params = router.query;

  useEffect(() => {
    // console.log("params changed", params);
    // const type = new URLSearchParams(location.search).get("type");
    const { type } = router.query;
    if (type === "Rent" || type === "Sell") {
      // console.log("type is ^^^ ", type);
      const payload = {
        type: type,
        pType: "",
        minAmount: "",
        maxAmount: "",
      };
      populateProperties(payload);
      setSearchPayload(payload);
    }
  }, [params]);
  const changeHandler = () => {
    // console.log("params changed", params);
    // const type = new URLSearchParams(location.search).get("type");
    const { type } = router.query;
    if (type === "rent" || type === "sell") {
      // console.log("type is ^^^ ", type);
      const payload = {
        type: type,
        pType: "",
        minAmount: "",
        maxAmount: "",
      };
      populateProperties(payload);
      setSearchPayload(payload);
    }
  };
  const populateProperties = (payload) => {
    debugger;
    // console.log("property details payload", payload);
    const getData = async () => {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/property/getSearchPropertyList",
        payload,
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );

      console.log("properties ", response);
      // setServices(response.data);
      setPropertyListItem(response.data.list);
    };
    return getData();
  };

  // console.log("view Details", viewDetails);
  // console.log("property details *** ", propertyListItem);

  return (
    <div style={{ background: "#F7F7F7" }}>
      <Box
        style={{
          height: 326,
          width: "100%",
          backgroundImage: "url(/images/about_us.jpeg)",
        }}
      >
        <SearchBox searchPayload={searchPayload} />
      </Box>

      {/* <Gallery /> */}

      {viewDetails ? (
        <Container>
          <Paper elevation={0}>
            <Grid item xs={12} md={12} style={{ padding: 20, marginTop: 20 }}>
              <Container style={{ paddingBottom: 40 }}>
                {propertyListItems.length > 0 ? (
                  propertyListItems.map((pl) => (
                    <PropertyListCard item={pl} onChange={changeHandler} />
                  ))
                ) : (
                  // <CustomNoRowsOverlay />
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {NoDataAvailable("Details Unavailable")}
                  </Box>
                )}
              </Container>
            </Grid>
          </Paper>
        </Container>
      ) : null}
    </div>
  );
};
export async function getStaticPaths() {
  // const response = await ApiClient.call(
  //   ApiClient.REQUEST_METHOD.POST,
  //   "/cms/getBottomPages",
  //   {},
  //   {},
  //   null,
  //   true,
  //   true
  // );
  // const data = response.data;
  const paths = ['/property/sell', '/property/rent'];
  // const paths = ["/pages/2-bhk-flats-in-jaipur"];
  return {
    paths: paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}
export const getStaticProps = async (props) => {

  try {
    const populateProperties = (payload) => {
      console.log("property details payload", payload);
      const getData = async () => {
        const response = await ApiClient.call(
          ApiClient.REQUEST_METHOD.POST,
          "/property/getSearchPropertyList",
          payload,
          {},
          { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
          true, true
        );

        // console.log("properties ", response);
        return {
          props: {
            data: response.data.list,
          }, // will be passed to the page component as props
        };
      };
      return getData();
    };
    const payload = {
      type: props.params.type.substr(0, 1).toUpperCase() + props.params.type.substr(1),
      pType: "",
      minAmount: "",
      maxAmount: "",
    };
    return populateProperties(payload);
  } catch (err) {
    console.log(err);
  }
}
export default SearchPropertyList;
