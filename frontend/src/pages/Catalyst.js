import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { CatalystForm } from "../components/CatalystForm";
import ContactModal from "../components/ContactModal";

export default class Catalyst extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContactModal />
        <Breadcrumb
          title='Catalyst Signup Form'
          desc='All the information provided by you will be kept confidential.'
        />
        <CatalystForm />
        <Footer />
      </>
    );
  }
}
