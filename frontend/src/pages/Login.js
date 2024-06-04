import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { LoginForm } from "../components/LoginForm";
import ContactModal from "../components/ContactModal";

function LoggedIn() {
  return (
    <>
      <Header />
      <ContactModal />
      <LoginForm />
      <Footer />
    </>
  );
}

export default LoggedIn;
