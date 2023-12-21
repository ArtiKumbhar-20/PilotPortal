import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstituteForm from "./pages/InstituteForm";
import IdeaStatus from "./pages/IdeaStatus";
import Login from "./pages/Login";
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

// Login Auth
import { Logout } from "./components/logout";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/InstituteForm' element={<InstituteForm />}></Route>
        <Route path='/IdeaStatus' element={<IdeaStatus />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/IdeaSub' element={<IdeaSub />}></Route>
        <Route path='/Team' element={<Team />}></Route>
        <Route path='/Student-Registration' element={<SignUp />}></Route>
        <Route path='/PanelistForm' element={<PanelForm />}></Route>
        <Route path='/IncubatorsForm' element={<IncubatorsForm />}></Route>
        <Route path='/IdeaEvaluation' element={<IdeaEvaluation />}></Route>
        <Route path='/CatalystForm' element={<Catalyst />}></Route>
        <Route path='/Event' element={<Event />}></Route>
        <Route path='/Idea' element={<Idea />}></Route>
        <Route path='/Quiz' element={<Quiz />}></Route>
        <Route path='/Password' element={<Password />}></Route>
        <Route path='/ResetPass/:otp/:email' element={<ResetPass />}></Route>

        {/* Login Auth */}
        <Route path='/logout' element={<Logout />} />
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/IdeaUpdate' element={<IdeaUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
