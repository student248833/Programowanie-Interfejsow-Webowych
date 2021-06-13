import './App.css';

import Main from './components/Main'

import Header from './components/Header'

import firebase from 'firebase/app'
import 'firebase/auth';

import {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  NavLink
} from "react-router-dom";

function App() {
	
	const [user, setUser] = useState(null);
	
	useEffect(() =>
	{
		const unsub = firebase.auth().onAuthStateChanged((u) =>
		{
			if (u) setUser(u);
			else setUser(null);
		});
		return () => unsub();
		
	}, []);
	
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header><Header/></header>
      <main>

        <nav>
            <NavLink to="/" exact>Lista wszystkich</NavLink>
            <NavLink to="/new">Dodaj nowy</NavLink>
			{ user === null && <NavLink to="/login">Login</NavLink> }
			{ user !== null && <NavLink to="/logout">Wyloguj</NavLink> }
			{ user === null && <NavLink to="/register">Zarejestruj się</NavLink> }
        </nav>

        <Main />

      </main>
      <footer>Zalogowano jako: <b>{firebase.auth().currentUser ? firebase.auth().currentUser.displayName  : ""}</b></footer>
    </Router>
  );
}

export default App;
