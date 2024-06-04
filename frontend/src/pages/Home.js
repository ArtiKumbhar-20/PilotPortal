import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import AboutHome from "../components/AboutHome";
import Methodology from "../components/Methodology";
import Companions from "../components/Companions";
import EventsList from "../components/EventsList";
import Testimonials from "../components/Testimonials";
import ContactModal from "../components/ContactModal";
import YoutubeLink from "../components/YoutubeLink";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Slider />
        <ContactModal />
        <AboutHome />
        <Methodology />
        <YoutubeLink />
        <Companions />
        <EventsList />
        <Testimonials />
        <Footer />
      </>
    );
  }
}
