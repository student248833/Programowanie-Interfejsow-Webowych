import './../styles/header.css'

import { Switch, Route } from 'react-router-dom'



const Header = () => {
    return (
        <Switch>
            <Route path="/" exact render={()=><><h1>Tinder do projektów</h1><h2>Przeglądanie i wyszukiwanie</h2></>} />
            <Route path="/new" render={()=><><h1>Tinder do projektów</h1><h2>Dodawanie oferty</h2></>} />
        </Switch>

    )
}



export default Header;
