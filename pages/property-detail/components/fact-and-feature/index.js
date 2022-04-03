import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Paper,
} from "@material-ui/core";
import Image from "next/image";
const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#777777",
    fontSize: 13,
  },
  text2: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#888888",
    fontSize: 13,
    fontWeight: 700,
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
  features: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  icon: {
    color: "#FF7601",
    fontSize: 20,
    paddingRight: 10,
  },
  btn1: {
    borderRadius: 12,
    color: "#FFFFFF",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: "#FF7601",
  },
  btn2: {
    borderRadius: 12,
    color: "#666666",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: "#ECECEC",
  },
  style1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  style2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

const FactAndFeature = (props) => {
  const classes = useStyles();
  const { icon, title, value } = props;

  return (
    <Grid container style={{ marginTop: 20, marginBottom: 20 }}>
      <Grid item xs={12} md={12} className={classes.style2}>
        <Paper style={{ marginRight: 10, padding: 5 }}>
          <Image
            src={
              icon
            }
            // className={classes.avatar} 
            alt={""}
            // style={{ margin: "15px" }}
            // className={`${classes.detailImage} box-img`}
            // width={100}
            // height={100}
            // style={props.style}
            // style={{ cursor: "pointer" }}
            // className="img"
            // layout="fill" 
            width={30}
            height={30}
            onLoadingComplete={(imageDimension) => console.log(imageDimension)}
          />
          {/* <img src={icon} style={{ width: 30, height: 30 }} /> */}
        </Paper>
        <Grid container>
          <Grid item xs={8} md={8} className={classes.style1}>
            <Typography className={classes.text1}>{title}</Typography>
            <Typography className={classes.text2}>{value}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FactAndFeature;
