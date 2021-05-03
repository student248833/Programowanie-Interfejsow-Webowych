import './App.css';

import Main from './components/Main'

import Header from './components/Header'

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header><Header/></header>
      <main>

        <nav>
            <NavLink to="/" exact>Lista wszytkich</NavLink>
            <NavLink to="/new">Dodaj nowy</NavLink>
        </nav>

        <Main />

      </main>
      <footer>Student248833</footer>
    </Router>
  );
}

export default App;
