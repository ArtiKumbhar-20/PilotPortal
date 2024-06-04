import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { Sign } from "../components/Sign";
import ContactModal from "../components/ContactModal";

function SignUp() {
  return (
    <>
      <Header />
      <ContactModal />
      <Breadcrumb
        title='Student Sign Up Form'
        desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <Sign />
      <Footer />
    </>
  );
}

export default SignUp;
