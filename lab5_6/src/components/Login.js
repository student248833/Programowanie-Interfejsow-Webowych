import firebase from 'firebase/app'
import 'firebase/auth';

import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import auth from './firebase.config';

const Login = () =>
{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	
	const login = () =>
	{
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(loggedUser =>
		{
			console.log("Zalogowano");
			setRedirect(true);
		})
		.catch(error =>
		{
			console.log(error);
		})
	}
	
	if (redirect)
	{
		return <Redirect to="/new" />
	}
	
	return (
	
	<div className="form">
	<input
		className="form-input"
		placeholder="Email"
		value={email}
		onChange = {e => setEmail(e.target.value)}
		/>
		
	<input
		className="form-input"
		placeholder="Hasło"
		value={password}
		onChange = {e => setPassword(e.target.value)}
		type="password"
		/>
		
	<button onClick = {login}>Zaloguj</button>
	
	
	</div>
	
	)
	
	
}
export default Login;