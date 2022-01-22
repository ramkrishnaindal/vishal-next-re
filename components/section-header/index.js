import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
// import GoogleMapReact from 'google-map-react';
// import './section-header.css';

const useStyles = makeStyles((theme) => ({}));

const SectionHeader = (props) => {
  const { title, subtitle } = props;
  const classes = useStyles();
  return (
    <Grid className="section-header">
      <Typography className="section-subtitle">{title}</Typography>
      <Typography variant="h2" className="section-title" style={props.style}>
        {subtitle}
      </Typography>
    </Grid>
  );
};

export default SectionHeader;
