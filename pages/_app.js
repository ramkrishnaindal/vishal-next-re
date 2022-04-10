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
import Script from 'next/script'
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
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2NS6RV7ZDM" />

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         
         gtag('config', 'G-QE59EMYED0');
         `,
          }}
        />
        {/* <!-- Required meta tags --> */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Luxury Flat, Apartment, Villas, House for Sale or Rent in Jaipur</title>
        <meta name="description" content="Buy Flat, Apartment, Villas and House in Jaipur and get 100% verified for buy or Sale with Vishal Construction Company." />
        <meta name="keywords" content="Construction Company in Jaipur, Construction Company in Jagatpura, Construction Company, Construction Company in Rajasthan, Vishal Construction Company" />
        <link rel="canonical" href="https://www.vishalconstructioncompany.com/" />
        <link rel="alternate" href="https://www.vishalconstructioncompany.com/" hreflang="en-in" />
        <meta name="Geography" content="Vishal Construction Company, 19-A, Brij Vatika, 7 No. Bus Stand, Mahal Rd, Jagatpura, Jaipur, Rajasthan 302017" />
        <meta name="Language" content="English" />
        <meta name="google" content="notranslate" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="Vishal Construction Company" />
        <meta https-equiv="Expires" content="never" />
        <meta https-equiv="CACHE-CONTROL" content="PUBLIC" />
        <meta https-equiv="PRAGMA" content="NO-CACHE" />
        <meta name="Copyright" content="https://www.vishalconstructioncompany.com/" />
        <meta name="Designer" content="https://www.vishalconstructioncompany.com/" />
        <meta name="Publisher" content="https://www.vishalconstructioncompany.com/" />
        <meta name="Revisit-After" content="perday/everyday/allday" />
        <meta name="distribution" content="Global" />
        <meta name="Robots" content="INDEX,FOLLOW" />
        <meta name="YahooSeeker" content="INDEX, FOLLOW" />
        <meta name="msnbot" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="INDEX, FOLLOW" />

        <link rel="shortcut icon" href="https://www.vishalconstructioncompany.com/static/media/vishal-logo.1dccbda9.png" type="image/x-icon" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vishalconstructioncompany.com/" />
        <meta property="og:title" content="Luxury Flat, Apartment, Villas, House for Sale or Rent in Jaipur" />
        <meta property="og:description" content="Buy Flat, Apartment, Villas and House in Jaipur and get 100% verified for buy or Sale with Vishal Construction Company." />
        <meta property="og:image" href="https://api.vishalconstructioncompany.com/uploads/slider/image-1641470700662.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.vishalconstructioncompany.com/" />
        <meta property="twitter:title" content="Luxury Flat, Apartment, Villas, House for Sale or Rent in Jaipur" />
        <meta property="twitter:description" content="Buy Flat, Apartment, Villas and House in Jaipur and get 100% verified for buy or Sale with Vishal Construction Company." />
        <meta property="twitter:image" href="https://api.vishalconstructioncompany.com/uploads/slider/image-1641470700662.jpg"></meta>
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
