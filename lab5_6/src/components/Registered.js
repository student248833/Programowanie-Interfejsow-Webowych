import firebase from 'firebase/app'
import 'firebase/auth';

import {useState} from 'react';
import {Redirect} from 'react-router-dom';

const Registered = () =>
{	
	
		return (
			<div>
				Pomyślnie zarejestrowano.<br />
				<b>Przejdź do strony głównej (Lista wszystkich) a następnie naciśnij F5, aby odświeżyć cache.</b><br />
				Po tym kroku możesz swobodnie korzystać z portalu. <br />
				<b style={{color: "red"}}>Jest to KONIECZNE z uwagi na sposób działania gh-pages oraz konieczność przeładowania jednego komponentu który nie chce się w tym przypadku przeładować sam.</b> <br />
				Jest to problem występujący <u>wyłącznie</u> podczas rejestracji.
			</div>		
		)
		
		
	}
export default Registered;