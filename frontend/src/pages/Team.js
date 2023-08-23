import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { TeamForm } from "../components/TeamForm";
import ContactModal from "../components/ContactModal";

function Team() {
  return (
    <>
      <Header />
      <ContactModal />
      <Breadcrumb
        title='Team Formation'
        desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <TeamForm />
      <Footer />
    </>
  );
}

export default Team;
