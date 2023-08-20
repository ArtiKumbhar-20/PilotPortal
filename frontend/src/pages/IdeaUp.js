import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import IdeaUpdate from "../components/IdeaUpdate";
import ContactModal from "../components/ContactModal";

function InstituteForm() {
    return (
      <>
        <Header />
        <ContactModal />
        <Breadcrumb
          title='Idea Status Form'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <IdeaUpdate />
        <Footer />
      </>
    );
  }
  
  export default InstituteForm;