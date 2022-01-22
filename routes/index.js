// import { Redirect } from "react-router-dom";
import CartPage from "../pages/cart";
import HomePage from "../pages/home";
import CmsPageDetails from "../pages/cms-page-details";
import PropertyListPage from "../pages/property-list";
import PropertyDetailPage from "../pages/property-detail";
import ContactUsPage from "../pages/contact-us";
import PostPropertyPage from "../pages/post-property";
import Carrier from "../pages/carrier";
import Blog from "../pages/blog";
import BlogDetails from "../components/blog-details/blog-detalis";
import LoginPage from "../pages/signin";
import BookOnline from "../pages/book-online";
import RegisterPage from "../pages/register";
import ForgotPage from "../pages/forgot-password";
import NewPasswordPage from "../pages/new-password";
import Verification from "../pages/verification";
import HouseDetailPage from "../pages/house-details";
import AboutUsPage from "../pages/about-us";
import AboutDirectors from "../pages/about-us/about-director";
import InvestWithUs from "../pages/about-us/invest-with-us";
import ConstructionProcess from "../pages/about-us/construction-process";
import Finance from "../pages/finance";
import ServiceDetailPage from "../pages/service-details";
import SupplierFormPage from "../pages/supplier-form";
import DealingInItemDetailPage from "../pages/dealingIn-details";
import SearchPropertyList from "../pages/search-property-details";
import MyAccount from "../pages/my-account";
import MyProfile from "../pages/my-account/my-profile";

import MyBooking from "../pages/my-account/my-booking";
import MyFavorite from "../pages/my-account/my-favorite";
import MyProperty from "../pages/my-account/my-property";

const routes = [
  {
    exact: true,
    path: "/",
    render: (props) => <HomePage {...props} />,
  },
  {
    path: "/cms-page-details",
    render: (props) => <CmsPageDetails {...props} />,
  },

  {
    path: "/property-list",
    render: (props) => <PropertyListPage {...props} />,
  },
  {
    path: "/property-detail",
    render: (props) => <PropertyDetailPage {...props} />,
  },
  {
    path: "/contact-us",
    render: (props) => <ContactUsPage {...props} />,
  },
  {
    path: "/post-property",
    render: (props) => <PostPropertyPage {...props} />,
  },
  {
    path: "/carrier",
    render: (props) => <Carrier {...props} />,
  },
  {
    path: "/blog-details",
    render: (props) => <BlogDetails {...props} />,
  },
  {
    path: "/blog",
    render: (props) => <Blog {...props} />,
  },
  {
    path: "/cart",
    render: (props) => {
      if (props.isAuth) {
        return <CartPage />;
      }
      return <Redirect to={{ pathname: "/" }} />;
    },
  },
  {
    path: "/book-online",
    render: (props) => {
      if (props.isAuth) {
        return <BookOnline />;
      }
      return <Redirect to={{ pathname: "/" }} />;
    },
  },
  {
    path: "/signin",
    render: (props) => <LoginPage {...props} />,
  },
  {
    path: "/register",
    exact: "true",
    render: (props) => <RegisterPage {...props} />,
  },
  {
    path: "/forgot-password",
    render: (props) => <ForgotPage {...props} />,
  },
  {
    path: "/new-password",
    render: (props) => <NewPasswordPage {...props} />,
  },
  {
    path: "/verification",
    render: (props) => <Verification {...props} />,
  },
  {
    path: "/house-details",
    render: (props) => <HouseDetailPage {...props} />,
  },
  {
    path: "/about-us",
    render: (props) => <AboutUsPage {...props} />,
  },
  {
    path: "/about-us/about-director",
    render: (props) => <AboutDirectors {...props} />,
  },
  {
    path: "/about-us/invest-with-us",
    render: (props) => <InvestWithUs {...props} />,
  },
  {
    path: "/about-us/construction-process",
    render: (props) => <ConstructionProcess {...props} />,
  },
  {
    path: "/finance",
    render: (props) => <Finance {...props} />,
  },
  {
    path: "/service-details",
    render: (props) => <ServiceDetailPage {...props} />,
  },
  {
    path: "/supplier-form",
    render: (props) => <SupplierFormPage {...props} />,
  },
  {
    path: "/dealingIn-details",
    render: (props) => <DealingInItemDetailPage {...props} />,
  },
  {
    path: "/search-property-details",
    render: (props) => <SearchPropertyList {...props} />,
  },
  {
    path: "/my-account",
    render: (props) => <MyAccount {...props} />,
  },
  {
    path: "/my-account/my-profile",
    render: (props) => <MyProfile {...props} />,
  },
  {
    path: "/my-account/my-booking",
    render: (props) => <MyBooking {...props} />,
  },
  {
    path: "/my-account/my-favorite",
    render: (props) => <MyFavorite {...props} />,
  },
  {
    path: "/my-account/my-property",
    render: (props) => <MyProperty {...props} />,
  },
];

export default routes;
