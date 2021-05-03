import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Offers from './Offers.js'
import New from './New.js'
import SearchBox from './SearchBox';

class Main extends Component {	
  state = {
        offers_name: ["Student248833", "Andrzej92", "Henryk95"],
		offers_text: ["Wszystko czego dziś chcę to zaliczenie lab z PIW :)", "Czy ktoś wie jak wyjść z vima?", "Szukam osoby do startupu w języku C++, kontakt priv"],
		offers_email: ["248833@poczta_studencka", "andrzej92@skrzynka", "henryk95@totally-not-a-scam"],
		offers_tags: ["PIWo", "vim", "c++ startup"],
		offers_visible: ["true", "true", "true"],
		new_offer_name_value: "",
		new_offer_text_value: "",
		new_offer_email_value: "",
		new_offer_tags_value: "",
		add_offer_button_text: "Dodaj",
        showWarning: false,
		showWarning2: false,
		errorMessage: "Użytkownik już istnieje",
		errorMessage2: "Pola nie mogą być puste"
    }


  addNew = () => {
    if(this.state.offers_name.includes(this.state.new_offer_name_value))
		{
			this.setState({
				showWarning: true,
				showWarning2: false
			})
		} 
		else if (!this.state.new_offer_name_value.trim())
		{
			this.setState({
				showWarning: false,
				showWarning2: true
			})
		}
		else if (!this.state.new_offer_text_value.trim())
		{
			this.setState({
				showWarning: false,
				showWarning2: true
			})
		}
		else if (!this.state.new_offer_email_value.trim())
		{
			this.setState({
				showWarning: false,
				showWarning2: true
			})
		}
		else if (!this.state.new_offer_tags_value.trim())
		{
			this.setState({
				showWarning: false,
				showWarning2: true
			})
		}
		else 
		{	
			this.setState({
				offers_name: this.state.offers_name.concat(this.state.new_offer_name_value),
				offers_text: this.state.offers_text.concat(this.state.new_offer_text_value),
				offers_email: this.state.offers_email.concat(this.state.new_offer_email_value),
				offers_tags: this.state.offers_tags.concat(this.state.new_offer_tags_value),
				offers_visible: this.state.offers_visible.concat("true"),
				new_offer_name_value: "",
				new_offer_text_value: "",
				new_offer_email_value: "",
				new_offer_tags_value: "",
				showWarning: false,
				showWarning2: false
			})
		}
	
  }

  render() {
    return (

      <Switch>
        <Route path="/" exact>
          <section><SearchBox offers={this.state} main={this}/><Offers offers={this.state} toggler={this.toggleItem}/></section>
        </Route>
        <Route path="/new">
          <section><New offers={this.state} text_add_offer="Dodaj ofertę" adder={this.addNew}/></section>
        </Route>
        <Route>
          <section><h1>Error 404 - not found</h1></section>
        </Route>
      </Switch>
    );
  }
}

export default Main;
