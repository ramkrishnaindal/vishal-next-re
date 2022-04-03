import "react-image-gallery/styles/css/image-gallery.css";
import "react-dropzone-uploader/dist/styles.css";
import "react-quill/dist/quill.snow.css";
import "react-phone-number-input/style.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wrapper } from "./../redux";
import "../styles/globals.css";
import "../Final.css";
import Head from "next/head";
import { Container } from "@material-ui/core";
// import routes from "../routes";
// import { useSelector } from "react-redux";
import Header from "../components/header";
import Footer from "../components/footer";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import EmiCalculater from "./components/emiCalculater/emiCalculater";
import EnquryForm from "../components/enquryForm/enquryForm";
import Snackbar from "../components/snackbar/Snackbar";
import { Provider } from "react-redux";
import store from "../redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header />
      {/* <EmiCalculater /> */}
      <Snackbar />
      <EnquryForm />
      {/* <Switch>
        {routes.map((route, i) => (
          <Route
            exact={route.exact}
            path={route.path}
            render={() => route.render({ isAuth })}
            key={i}
          />
        ))}
      </Switch> */}
      <Component {...pageProps} />
      <div className="footer-section">
        <Container style={{ paddingTop: 10, paddingBottom: 40 }}>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);
