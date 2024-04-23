import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FirstLogin } from "../components/FirstLogin";
import ContactModal from "../components/ContactModal";

function LoggedIn() {
  return (
    <>
      <Header />
      <ContactModal />
      <FirstLogin />
      <Footer />
    </>
  );
}

export default LoggedIn;
