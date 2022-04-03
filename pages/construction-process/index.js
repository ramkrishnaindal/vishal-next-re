import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box } from '@material-ui/core';
// import '../about-us.css';
import PageBanner from '../../components/page-banner';
import ApiClient from '../../api-client';
import HtmlParser from 'react-html-parser';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({

}));

const ConstructionProcess = (props) => {
  const classes = useStyles();
  const [constructionProcessData, setConstructionProcessData] = useState([]);


  React.useEffect(() => {
    populateConstructionProcessDetails();

  }, []);


  const populateConstructionProcessDetails = () => {
    const getData = async () => {
      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/constructionProcess/getAllActiveConstructionProcess', {}, {}, { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization }, false);

      setConstructionProcessData(response.data || []);
    };
    getData();
  };

  return (
    <>
      <Head>
        <title>Vishal Construction Company</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="title" content="construct new living that is attractive, functional, and inventive." />
        <meta name="description" content="Our team works to assist valued customers in constructing the greatest real estate decision possible based on their needs and budget." />
        <meta name="keywords" content="Construction Company in Jaipur, Construction Company in Jagatpura, Construction Company, Construction Company in Rajasthan, Vishal Construction Company" />
      </Head>
      <div style={{ background: '#fff' }}>
        <PageBanner
          bgImage={'/about_us.jpeg'}
          title="Construction Process"
          currentPage="Construction Process"
        />

        <Container>
          <Box className="content-wrapper">
            {
              constructionProcessData.map((Process, i) => {
                const img = Process?.image[0]?.path ? ApiClient.SERVER_ADDRESS + '/' + Process.image[0].path : 'no-image-available-icon-6.png';
                if (i % 2 == 0) {
                  return <Box className="about-page-item">
                    <Grid container spacing={3} alignItems="center">
                      <Grid className="about-page-summery" item xs={12} md={6}>
                        <Box className="about-page-content">
                          <Typography variant="h3">{Process.title}</Typography>
                          <Typography>
                            {HtmlParser(Process.description)}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} className={`${classes.style2} about-page-images`}>
                        <Box className="about-page-image"><img src={img} alt='' /></Box>
                      </Grid>
                    </Grid>
                  </Box>;
                }
                return <Box className="about-page-item">
                  <Grid container spacing={3} direction="row-reverse" alignItems="center">
                    <Grid className="about-page-summery" item xs={12} md={6}>
                      <Box className="about-page-content">
                        <Typography variant="h3">{Process.title}</Typography>
                        <Typography>
                          {HtmlParser(Process.description)}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className={`${classes.style2} about-page-images`}>
                      <Box className="about-page-image"><img src={img} alt='' /></Box>
                    </Grid>
                  </Grid>
                </Box>;
              })
            }

          </Box>
        </Container>
        )
      </div>
    </>
  );
};

export default ConstructionProcess;