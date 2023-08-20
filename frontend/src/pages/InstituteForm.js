import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import {InstantForm} from "../components/InstantForm";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

function InstituteForm() {
  return (
    <>
      <Header />
      <ContactModal />
      <Breadcrumb
        title='Institute Form'
        desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <InstantForm />
      <Footer />
    </>
  );
}

export default InstituteForm;
