import React, { useState, useEffect } from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Box,
  Menu,
  MenuItem as DropdownMenu,
  // Link as MUILink,
} from "@material-ui/core";
import NextLink from "../UI/NextLink";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
// import { useHistory, Link as RouterLink } from "react-router-dom";
// import Link from "next/link";
import { useRouter } from "next/router";
import ApiClient from "../../api-client";
import { useDispatch } from "react-redux";
import { SetRoute } from "../../redux/actions/RouteActions";
const useStyles = makeStyles((theme) => ({
  menu: {
    padding: 0,
    color: "#252525",
    marginRight: 15,
    fontFamily: '"Open Sans",sans-serif',
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
  },
  menuWithSubmenu: {
    padding: 0,
    color: "#252525",
    fontFamily: '"Open Sans",sans-serif',
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
    marginRight: 15,
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
    color: "#FF7601",
  },
}));

const MenuItem = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const history = useHistory();
  const dispatch = useDispatch();
  const router = useRouter();

  const classes = useStyles();
  let hasSubmenu = false;
  const { title, submenu, id, href } = props.menu || {};
  if (submenu) {
    hasSubmenu = true;
  }
  const menuStyle = hasSubmenu ? classes.menuWithSubmenu : classes.menu;

  const _renderAboutUsSubmenu = () => {
    return (
      <Grid container>
        <Grid item={12}>
          {console.log("submenu", submenu)}
          {submenu.map((sm, i) => (
            <DropdownMenu
              key={Math.random() * 1000}
              onClick={() => handleClose(sm)}
            >
              {sm.title}
            </DropdownMenu>
          ))}
        </Grid>
      </Grid>
    );
  };

  const _renderServicesSubmenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [services, setServices] = useState(null);
    const onSubmenuClickListener = (index) => {
      setActiveIndex(index);
    };

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
      populateServiceInfo();
    }, []);

    <Box className={"info"} style={{ marginTop: 10 }}>
      MORE DETAIL
    </Box>;

    return (
      <Grid
        container
        spacing={0}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid item md={12} className="services-submenu-bg1">
          {(services || []).map((sm, idx) => {
            const mStyle =
              idx === activeIndex
                ? { fontFamily: '"Open Sans",sans-serif' }
                : { fontFamily: '"Open Sans",sans-serif' };
            return (
              // <Link
              //   href={{ pathname: "/service-details", query: sm._id }}
              //   passHref
              // >
              <NextLink
                key={idx}
                href={{
                  pathname: `/services/${sm?.title?.toLowerCase()}`,
                }}
                style={mStyle}
              >
                <DropdownMenu
                  onClick={() => {
                    dispatch(SetRoute({ id: sm._id }));
                    handleClose(sm);
                  }}
                >
                  {sm.title}
                </DropdownMenu>
              </NextLink>
              // </Link>
            );
          })}
        </Grid>
        {/* <Grid item md={6} style={{padding: 10}}>
          <Grid container>
            <Grid item md={6} style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>COMMERCIAL</Typography>
              {submenu[activeIndex].commercial.map(cm => <DropdownMenu>{cm.title}</DropdownMenu>)}
            </Grid>
            <Grid item md={6} style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>RESIDENTIAL</Typography>
              {submenu[activeIndex].residential.map(cm => <DropdownMenu>{cm.title}</DropdownMenu>)}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 8}}>
          <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} style={{width: 100, height: 100}} />
        </Grid> */}
      </Grid>
    );
  };

  const _renderPropertySubmenu = () => {
    return (
      <Grid
        container
        spacing={0}
        style={{
          width: 400,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item md={8}>
          {submenu.map((sm) => (
            <DropdownMenu onClick={() => handleClose(sm)}>
              {sm.title}
            </DropdownMenu>
          ))}
        </Grid>
        <Grid
          item
          md={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: 8,
          }}
        >
          <img
            src={
              process.env.NEXT_PUBLIC_PUBLIC_URL + "/images/property_img3.jpeg"
            }
            style={{ width: 100, height: 100 }}
          />
        </Grid>
      </Grid>
    );
  };

  const _renderSubmenu = (menuId) => {
    switch (menuId) {
      case 2:
        return _renderAboutUsSubmenu();
      case 5:
        return _renderServicesSubmenu();
      case 3:
        return _renderPropertySubmenu();
    }
  };

  const _renderIcon = () => {
    if (hasSubmenu) {
      return isOpen ? (
        <CloseIcon className={classes.icon} />
      ) : (
        <ExpandMoreIcon className={classes.icon} />
      );
    }
    return null;
  };

  const onMenuClickListener = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleClose = (menu) => {
    console.log("menu", menu);
    setAnchorEl(null);
    setIsOpen(!isOpen);
    if (menu?.href) router.push(menu.href);
  };

  return (
    <>
      <Box
        href={href || "/"}
        onClick={onMenuClickListener}
        aria-controls="menu"
        m={0}
      >
        <Grid
          container
          className="primary-menu-navbar"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Link href={href} passHref> */}
          {href ? (
            <NextLink href={href} className={menuStyle}>
              <Typography>{title}</Typography>
            </NextLink>
          ) : (
            <Typography style={{ cursor: "pointer" }}>{title}</Typography>
          )}
          {/* </Link> */}
          {_renderIcon()}
        </Grid>
      </Box>
      {hasSubmenu && (
        <Menu
          style={{ marginTop: 85, padding: 0 }}
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose.bind(null, { href: href })}
        >
          {_renderSubmenu(id)}
        </Menu>
      )}
    </>
  );
};

export default MenuItem;
