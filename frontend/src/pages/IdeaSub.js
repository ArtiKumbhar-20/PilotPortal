import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import {IdeaSubForm} from "../components/IdeaSubForm";
import ContactModal from "../components/ContactModal";

export default class IdeaSub extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContactModal />
        <Breadcrumb
          title='Idea Submission Form'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <IdeaSubForm />
        <Footer />
      </>
    );
  }
}
