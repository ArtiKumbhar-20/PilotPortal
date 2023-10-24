import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import {IncubatorsForm} from "../components/IncubatorsForm";
import ContactModal from "../components/ContactModal";

export default class IdeaSub extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContactModal />
        <Breadcrumb
          title='Incubator Form'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <IncubatorsForm />
        <Footer />
      </>
    );
  }
}
