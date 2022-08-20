import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import "aos/dist/aos.css"


import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Fragment>

      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Data Science, Analytics, Data, sass, software company" />
        <meta name="description"
          content="Sinco - Data Science & Analytics React Template is designed especially for the agency, multipurpose and business and those who offer business-related services." />
        <meta property="og:site_name" content="Sinco" />
        <meta property="og:url" content="https://themeforest.net/user/creativegigs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sinco - Data Science & Analytics React Template" />
      </Helmet>
      {/* {End Seo Helmet}
       */}



      <ScrollToTop />


      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>






    </Fragment>

  );
}

export default App;
