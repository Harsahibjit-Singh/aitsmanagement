import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Messages from './components/Messages';
import AdminNotification from './components/AdminNotification';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import DynamicTeamPage from './components/TeamPageComponents/DynamicTeamPage';
// import TeamVolunteers from './pages/TeamVolunteers';
import Info from './pages/Info';
import Data from './pages/Data';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:teamName" element={<DynamicTeamPage />} />
            {/* <Route path="/team/:leadId" element={<TeamVolunteers />} /> */}
            <Route path="/info" element={<Info />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data" element={<Data />} />
            <Route path="/messages" element={<Messages />} /> {/* Moved this inside Routes */}
            <Route path="/admin/notifications" element={<AdminNotification />} />
          </Routes>
        </main>
        <div className="App">
			<Outlet />
		</div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
