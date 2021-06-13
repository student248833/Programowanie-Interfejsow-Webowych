import firebase from 'firebase/app'
import 'firebase/auth';

import {useState} from 'react';
import {Redirect} from 'react-router-dom';

const Register = (props) =>
{	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [redirect, setRedirect] = useState("");
		
	const createUserWithEmailAndPasswordHandler = () =>
	{
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then( () =>
		{
			firebase.auth().signInWithEmailAndPassword(email, password)
			.then(loggedUser =>
			{
				loggedUser.user.updateProfile({ displayName: displayName, })
			})
				
			.catch(error => { console.log(error); })
			setRedirect(true);
		})
		.catch(error => {console.log(error); })
	};
		
	if (redirect) return <Redirect to='/please-reload' />
			
	return (
		<div className="form">
			<input
				name="username"
				className="form-input"
				value={displayName}
				placeholder="Nazwa wyświetlana"
				onChange = {e => setDisplayName(e.target.value)}
			/>
			
			<input
				name="email"				
				className="form-input"
				value={email}
				placeholder="Email"
				onChange = {e => setEmail(e.target.value)}
			/>
			
			<input
				name="password"
				className="form-input"
				value={password}
				placeholder="Hasło"
				onChange = {e => setPassword(e.target.value)}
				type="password"
			/>
			
			
		<button onClick = {createUserWithEmailAndPasswordHandler}>Utwórz użytkownika</button>
		
		
		</div>		
	)
		
		
	}
export default Register;