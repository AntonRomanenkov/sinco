import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";


//All Home Page Routes
import UserAnalysis from '../views/home-pages/UserAnalysis';
import ArtificialIntelligence from '../views/home-pages/ArtificialIntelligence';
import DataScience from '../views/home-pages/DataScience';
import ChatBoot from '../views/home-pages/ChatBoot';
import MachineLearning from '../views/home-pages/MachineLearning';

//All Inner Page Routes

//All DropDown Page Routes

//All About Page Routes
import AboutUsOne from '../views/inner-pages/pages/about-us/AboutUsOne';
import AboutUsTwo from '../views/inner-pages/pages/about-us/AboutUsTwo';

//All Service Page Routes
import ServicesOne from '../views/inner-pages/pages/services/ServicesOne';
import ServicesTwo from '../views/inner-pages/pages/services/ServicesTwo';
import ServicesDetails from '../views/inner-pages/pages/services/ServicesDetails';

//All Team Page Routes
import TeamMember from '../views/inner-pages/pages/team/TeamMember';
import TeamDetails from '../views/inner-pages/pages/team/TeamDetails';


// Testimonial Page Routes
import Testimonial from '../views/inner-pages/pages/Testimonial';
import OurPricing from '../views/inner-pages/pages/OurPricing';
import FAQ from '../views/inner-pages/pages/FAQ';
import Error from '../views/inner-pages/pages/Error';

// All Portfolio Page Routes
import Portfolio3Column from '../views/inner-pages/portfolio/Portfolio3Column';
import Portfolio2Column from '../views/inner-pages/portfolio/Portfolio2Column';
import PortfolioMasonry from '../views/inner-pages/portfolio/PortfolioMasonry';
import PortfolioSingle from '../views/inner-pages/portfolio/PortfolioSingle';

// All Blog Page Routes
import GridLayout from '../views/inner-pages/blog/GridLayout';
import GridWithSidebar from '../views/inner-pages/blog/GridWithSidebar';
import BlogMasonry from '../views/inner-pages/blog/BlogMasonry';
import BlogStandard from '../views/inner-pages/blog/BlogStandard';
import BlogDetails from '../views/inner-pages/blog/BlogDetails';

// Contact Page Routes
import Contact from '../views/inner-pages/contact/Contact';

// Not Found Page
import NotFound from "../views/NotFound";





const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<UserAnalysis />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/chatboot" element={<ChatBoot />} />
        <Route path="/machine-learning" element={<MachineLearning />} />

        <Route path="/about-one" element={<AboutUsOne />} />
        <Route path="/about-two" element={<AboutUsTwo />} />

        <Route path="/service-one" element={<ServicesOne />} />
        <Route path="/service-two" element={<ServicesTwo />} />
        <Route path="/service-details" element={<ServicesDetails />} />

        <Route path="/team-member" element={<TeamMember />} />
        <Route path="/team-details" element={<TeamDetails />} />

        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/price" element={<OurPricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/error" element={<Error />} />

        <Route path="/portfolio-3" element={<Portfolio3Column />} />
        <Route path="/portfolio-2" element={<Portfolio2Column />} />
        <Route path="/portfolio-masonry" element={<PortfolioMasonry />} />
        <Route path="/portfolio-single" element={<PortfolioSingle />} />

        <Route path="/blog-grid" element={<GridLayout />} />
        <Route path="/blog-sidebar" element={<GridWithSidebar />} />
        <Route path="/blog-masonry" element={<BlogMasonry />} />
        <Route path="/blog-standard" element={<BlogStandard />} />
        <Route path="/blog-details" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default AppRouter