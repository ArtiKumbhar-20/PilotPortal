import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ResetPassword} from "../components/ResetPassword";
import ContactModal from "../components/ContactModal";

export default class ResetPass extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContactModal />
        <ResetPassword/>
        <Footer />
      </>
    );
  }
}
