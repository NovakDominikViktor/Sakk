import './App.css';
import ListPage from './ListPage';
import SinglePage from './SinglePage';
import CreatePage from './CreatePage';
import DeletePage from './DeletePage';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import ModPage from './ModPage';

function App() {
  return (
   <Router>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                <span className="nav-link">Players</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/newplayer`} className="nav-link">
                <span className="nav-link">Add new player</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/player/:id" element={<SinglePage />} />
      <Route path="newplayer" element={<CreatePage />} />
      <Route path="/modchess/:id" element={<ModPage />} />
      <Route path="/deletechess/:id" element={<DeletePage />} />
    </Routes>
   </Router>
  );
}

export default App;
