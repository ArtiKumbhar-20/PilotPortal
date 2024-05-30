import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstituteForm from "./pages/InstituteForm";
import IdeaStatus from "./pages/IdeaStatus";
import Login from "./pages/Login";
import FirstLogin from "./pages/FLogin";
import IdeaSub from "./pages/IdeaSub";
import Team from "./pages/Team";
import PanelForm from "./pages/PanelForm";
import IncubatorsForm from "./pages/IncubForm";
import IdeaEvaluation from "./pages/IdeaEvaluation";
import Catalyst from "./pages/Catalyst";
import SignUp from "./pages/SignUp";
import Event from "./pages/Event";
import IdeaUpdate from "./components/IdeaUpdate";
import Idea from "./pages/Idea";
import Quiz from "./pages/Quiz";
import Password from "./pages/Password";
import ResetPass from "./pages/ResetPass";
import VerifyEmail from "./pages/VerifyEmail";

// Login Auth
import { Logout } from "./components/logout";
//import { quiz } from "./components/questions";
import Dashboard from "./components/Dashboard";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/institute_form' element={<InstituteForm />}></Route>
        <Route path='/idea_status' element={<IdeaStatus />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/flogin' element={<FirstLogin />}></Route>
        <Route path='/idea_submission' element={<IdeaSub />}></Route>
        <Route path='/team_formation' element={<Team />}></Route>
        <Route path='/student_registration' element={<SignUp />}></Route>
        <Route path='/panelist_form' element={<PanelForm />}></Route>
        <Route path='/incubators_form' element={<IncubatorsForm />}></Route>
        <Route path='/idea_evaluation' element={<IdeaEvaluation />}></Route>
        <Route path='/catalyst_form' element={<Catalyst />}></Route>
        <Route path='/event' element={<Event />}></Route>
        <Route path='/idea' element={<Idea />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/questions' element={<quiz />}></Route>
        <Route path='/password' element={<Password />}></Route>
        <Route path='/reset_pass/:otp/:email' element={<ResetPass />}></Route>
        <Route path='/verify_email' element={<VerifyEmail />}></Route>

        {/* Login Auth */}
        <Route path='/logout' element={<Logout />} />
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/idea_update' element={<IdeaUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
