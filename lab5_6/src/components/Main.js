import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Offers from './Offers.js'
import New from './New.js'
import SearchBox from './SearchBox';

import Login from './Login';

import firebase from 'firebase/app'
import 'firebase/auth';
import db from './firebase.config';

import {Redirect} from 'react-router-dom';

import Register from './Register';
import Registered from './Registered';


class Main extends Component {	
  state = {
        offers_name: ["Ładowanie ofert, proszę czekać..."],
		offers_text: [""],
		offers_email: [""],
		offers_tags: [""],
		offers_visible: ["true"],
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

  componentDidMount = () =>
  {
	  db.collection('offers').onSnapshot((snapshot) => {
      const names = [];
	  const texts = [];
	  const emails = [];
	  const tags = [];
	  const visible = [];
      snapshot.forEach((doc) => 
	  {
		  names.push( doc.data()['name'])
		  texts.push( doc.data()['text'])
		  emails.push( doc.data()['email'])
		  tags.push( doc.data()['tags'])
		  visible.push("true")
	  }
	  );
	  
	  this.setState({
				offers_name: names,
				offers_text: texts,
				offers_email: emails,
				offers_tags: tags,
				offers_visible: visible
			});	  
    });	  
	  
	  this.forceUpdate();
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
		<Route path="/login">
		  <section><Login /></section>
		</Route>
		<Route path="/logout">
		  <section><Logout /></section>
		</Route>
		<Route path="/register" exact>
		  <section><Register /></section>
		</Route>
		<Route path="/please-reload" exact>
		  <section><Registered /></section>
		</Route>
        <Route>
          <section><h1>Error 404 - not found</h1></section>
        </Route>
      </Switch>
    );
  }
}

export default Main;

const Logout = () =>
{
	firebase.auth().signOut();
	return <Redirect to="/" />
}
