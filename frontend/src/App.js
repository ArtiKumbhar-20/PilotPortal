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

// Login Auth
import { Logout } from "./components/logout";
import { Dashboard } from "./components/Dashboard";

// dashboard
import Profile from "./pages/Profile";
import Team_mem from "./pages/Team_Mem";
import Sub_Ideas from "./pages/Sub_Ideas";
import Idea_Status from "./pages/Idea_Status";

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
        <Route path='/Idea-Details' element={<Idea />}></Route>

        {/* Login Auth */}
        <Route path='/logout' element={<Logout />} />
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/IdeaUpdate' element={<IdeaUpdate />}></Route>

        {/* dashboard */}
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Team_Mem' element={<Team_mem/>}></Route>
        <Route path='/Sub_Ideas' element={<Sub_Ideas/>}></Route>
        <Route path='/Idea_Status' element={<Idea_Status/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
