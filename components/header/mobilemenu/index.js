import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import { withRouter, Link as RouterLink } from "react-router-dom";
import NextLink from "../../UI/NextLink";
import Link from "next/link";
import Button from "@material-ui/core/Button";
// import { Link as MUILink } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
// import logo from "/public/images/vishal-logo.png";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ApiClient from "../../../api-client";
import { useRouter } from "next/router";
// import "../header.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Mobilemenu(props) {
  const router = useRouter();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [userdata, setUserdata] = useState(false);
  const [no, setNo] = useState({ no: 0, status: false });
  const [services, setServices] = useState(null);

  const populateServiceInfo = () => {
    const getData = async () => {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/home/getService",
        {},
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );

      // console.log("ServiceInfo ", response);
      setServices(response?.data?.items);
    };
    getData();
  };
  useEffect(() => {
    let userdata = localStorage.getItem("user");
    if (userdata) {
      setUserdata(true);
    } else {
      setUserdata(false);
    }
  }, []);
  useEffect(() => {
    populateServiceInfo();
  }, []);
  const logoutHandler = () => {
    // setAnchorEl(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("bookNow");
      localStorage.removeItem("postProperty");
      // router.replace("/");
      window.location.href = "/";
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            id: 1,
            title: "Home",
            href: "/",
          },
          {
            id: 2,
            title: "About Us",
            href: "",
            submenu: [
              {
                title: "About The Company",
                href: "/about-us",
              },
              {
                title: "About The Directors",
                href: "/about-us/about-director",
              },
              {
                title: "Invest With Us",
                href: "/about-us/invest-with-us",
              },
              {
                title: "Construction Process",
                href: "/about-us/construction-process",
              },
            ],
          },
          {
            id: 2,
            title: "Property",
            href: "",
            submenu: [
              {
                id: 3,
                title: "Sell",
                href: "/search-property-details?type=Sell",
              },
              {
                id: 4,
                title: "Rent",
                href: "/search-property-details?type=Rent",
              },
            ],
          },
          {
            id: 5,
            title: "Services",
            image: "",
            submenu: ["services"],
          },
          {
            id: 6,
            title: "Carriers",
            href: "/carrier",
          },
          {
            id: 7,
            title: "Finance",
            href: "/finance",
          },
          {
            id: 8,
            title: "Contact Us",
            href: "/contact-us",
          },
          {
            id: 9,
            title: "Supplier Form",
            href: "/supplier-form",
          },
        ].map(({ id, title, href, submenu }, index) => {
          return (
            <div onClick={!submenu ? toggleDrawer(anchor, false) : () => {}}>
              {/* <Link href={href} passHref> */}
              <NextLink href={href || "/"}>
                <ListItem
                  button
                  key={id}
                  onClick={() => {
                    setNo({
                      no: index,
                      status: !no.status,
                    });
                  }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </NextLink>
              {/* </Link> */}
              {submenu
                ? submenu.map((sm, i) => {
                    if (sm == "services") {
                      return (services || []).map((sm, idx) => {
                        return (
                          //   <Link
                          //     href={{
                          //       pathname: "/service-details",
                          //       query: sm._id,
                          //     }}
                          //     passHref
                          //   >
                          <NextLink
                            key={i}
                            href={{
                              pathname: "/service-details",
                              query: sm._id,
                            }}
                            className={
                              no.no == index && no.status === true
                                ? "showNav"
                                : "hideNav"
                            }
                          >
                            <ListItem
                              onClick={toggleDrawer(anchor, false)}
                              button
                            >
                              <ListItemIcon>
                                <DoubleArrowIcon />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                <b>
                                  {" "}
                                  <ListItemText primary={sm.title} />
                                </b>
                              </ListItemIcon>
                            </ListItem>
                          </NextLink>
                          // </Link>
                        );
                      });

                      // return <ListItem onClick={toggleDrawer(anchor, false)} className={no.no == index && no.status === true ? 'showNav' : 'hideNav'} button key={i} component={RouterLink} to={{pathname: '/service-details', state: sm._id}}>
                      //     <ListItemIcon><DoubleArrowIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b> <ListItemText primary={sm.title} /></b></ListItemIcon>

                      // </ListItem>;
                    }

                    const { id, title, href, submenu } = sm;

                    return (
                      // <Link href={href} passHref>
                      <NextLink
                        key={id}
                        href={href || "/"}
                        className={
                          no.no == index && no.status === true
                            ? "showNav"
                            : "hideNav"
                        }
                      >
                        <ListItem onClick={toggleDrawer(anchor, false)} button>
                          <ListItemIcon>
                            <DoubleArrowIcon />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              {" "}
                              <ListItemText primary={title} />
                            </b>
                          </ListItemIcon>
                        </ListItem>
                      </NextLink>
                      // </Link>
                    );
                  })
                : null}
            </div>
          );
        })}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="fullWidthheader">
            <div className="blackRowheader PL">
              <a href="/">
                <img
                  src="/images/vishal-logo.png"
                  alt="Logo"
                  className="mobilelogoWidth"
                />
              </a>
              <div className="humbergIcon">
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </div>
            </div>
            <div className="completeRow">
              <div className="headerRight_part">
                {/* <Link href="/book-online" passHref> */}
                <NextLink href="/book-online" className="btn_Bookonline">
                  <Button style={{ color: "white" }}>Book Online</Button>
                </NextLink>
                {/* </Link> */}
                &nbsp;&nbsp;
                <NextLink href="/" className="btn_Postonline">
                  <Button
                    onClick={() => {
                      if (!localStorage.getItem("user")) {
                        localStorage.setItem("postProperty", true);
                        return router.push("/signin");
                      } else {
                        return router.push("/post-property");
                      }
                    }}
                    style={{ color: "white" }}
                  >
                    {" "}
                    Post Property
                  </Button>
                </NextLink>
                &nbsp;&nbsp;
                {userdata ? (
                  <Button
                    // variant="outlined"
                    className="btn_Bookonline"
                    onClick={logoutHandler}
                    style={{ padding: "1px 4px", color: "white" }}
                  >
                    Logout
                  </Button>
                ) : (
                  // <Link href="/signin" passHref>
                  <NextLink href="/signin" className="btn_Bookonline">
                    <Button
                      variant="outlined"
                      style={{ padding: "1px 4px", color: "white" }}
                    >
                      Login / Signup
                    </Button>
                  </NextLink>
                  // </Link>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
