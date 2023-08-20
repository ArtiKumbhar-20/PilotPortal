import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import EventForm from "../components/EventForm";
import ContactModal from "../components/ContactModal";

export default class Event extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContactModal />
        <Breadcrumb
          title='Event Creation Form'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <EventForm />
        <Footer />
      </>
    );
  }
}
