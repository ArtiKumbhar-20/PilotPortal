import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import QuizPage from "../components/QuizPage";
import ContactModal from "../components/ContactModal";

export default class Quiz extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContactModal />
        <Breadcrumb
          title='Quiz Form'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <QuizPage />
        <Footer />
      </>
    );
  }
}
