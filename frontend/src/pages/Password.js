import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import  {ForgetPassword} from "../components/ForgetPassword";
import ContactModal from "../components/ContactModal";

function Password() {
    return (
      <>
        <Header />
        <ContactModal />
        <ForgetPassword />
        <Footer />
      </>
    );
  }
  
export default Password;
  
