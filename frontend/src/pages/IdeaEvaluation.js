import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import {IdeaEval} from "../components/IdeaEval";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

export default class IdeaEvaluation extends React.Component{
  render(){
  return (
    <>
      <Header />
      <ContactModal />
      <Breadcrumb
        title='Idea Evaluation Form'
        desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <IdeaEval />
      <Footer />
    </>
  );
}
}

