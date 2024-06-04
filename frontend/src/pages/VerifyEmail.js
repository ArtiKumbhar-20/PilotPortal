import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import  {EmailVerification} from "../components/EmailVerification";
import ContactModal from "../components/ContactModal";

function VerifyEmail() {
    return (
      <>
        <Header />
        <ContactModal />
        <EmailVerification />
        <Footer />
      </>
    );
  }
  
export default VerifyEmail;
  
