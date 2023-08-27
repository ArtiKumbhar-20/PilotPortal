import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import IdeaDetails from "../components/IdeaDetails";
import ContactModal from "../components/ContactModal";

export default class Idea extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContactModal />
        <Breadcrumb
          title='Idea Details'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <IdeaDetails />
        <Footer />
      </>
    );
  }
}
