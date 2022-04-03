import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Link as MUILink } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import "./blog.css";
import NextLink from "../../components/UI/NextLink";
import PageBanner from "../../components/page-banner";
// import bannerImage from "/public/images/clientbg.jpeg";
// import BlogImage from "/public/images/blogImage.jpg";
import { Box, Container } from "@material-ui/core";
import ApiClient from "../../api-client";
import Head from 'next/head'
// import { Link as RouterLink } from "react-router-dom";
// import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Blog(props) {
  const classes = useStyles();
  const [blogList, setBlogList] = useState(props.data || []);

  useEffect(() => {
    populateBlogList();
  }, []);

  const populateBlogList = () => {
    const getData = async () => {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/blog/getAllActiveBlog",
        {},
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );
      debugger;
      const data = response.data.filter((d) => d.active);
      setBlogList(data);
      console.log("blog details", response.data);
    };
    getData();
  };

  // const {blogImage, title, _id, sortDescription, description} = blogData;
  // const img = blogImage && blogImage[0]?.path ? ApiClient.SERVER_ADDRESS + "/" + blogImage[0]?.path : 'no-image-available-icon-6.png';
  return (
    <Box className="BlogPage">
      <Head>
        <title>Vishal Construction Company</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="title" content="daily updates and news regarding the real estate properties " />
        <meta name="description" content="For most of us, purchasing a house is a very emotional experience. so, people plan, save, and put in long hours of searching before buying the same." />
        <meta name="keywords" content="Construction Company in Jaipur, Construction Company in Jagatpura, Construction Company, Construction Company in Rajasthan, Vishal Construction Company" />
      </Head>
      <PageBanner
        bgImage="/images/clientbg.jpeg"
        title="Latest News"
        currentPage="LATEST NEWS"
      />
      <Container className="CardSection">
        {(blogList || []).map((blog, i) => {
          // console.log("blog", blog);
          const { blogImage, title, _id, sortDescription, description } = blog;

          const img =
            blogImage && blogImage[0]?.path
              ? ApiClient.SERVER_ADDRESS + "/" + blogImage[0]?.path
              : "no-image-available-icon-6.png";
          return (
            <Card key={i} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title="Contemplative Reptile"
                />
                <CardContent className="BlogCrad">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="Heading"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {sortDescription}
                  </Typography>
                  {/* <Link
                    href={{
                      pathname: "/blog-details",
                      query: _id,
                    }}
                    passHref
                  > */}
                  <Box className="ParentButton">
                    <NextLink
                      href={{
                        pathname: `/blog-details/${(
                          title.toLowerCase() || ""
                        ).replace(/\s/g, "-")}`,
                      }}
                    >
                      <Button
                        onClick={() => {
                          dispatch(SetRoute({ id: _id }));
                        }}
                      >
                        View Details{" "}
                      </Button>
                    </NextLink>
                  </Box>
                  {/* </Link> */}
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
}
export const getStaticProps = async (props) => {

  try {
    // console.log("property details payload", payload);
    const getData = async () => {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/blog/getAllActiveBlog",
        {},
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        true, true
      );

      // console.log("properties ", response);
      const data = response.data.filter((d) => d.active);
      return {
        props: {
          data,
        }, // will be passed to the page component as props
      };
    };
    return getData();
  } catch (err) {
    console.log(err);
  }
}