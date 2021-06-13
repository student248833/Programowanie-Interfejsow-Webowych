import React, { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import db from './firebase.config';

class New extends Component {
    state = {
        text: "",
		user: null
    }
	
    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    append = () => {
		if (firebase.auth().currentUser)
		{
			this.props.offers.new_offer_name_value = firebase.auth().currentUser.displayName;
		}				
		
        this.props.adder()
		db.collection("offers").add(
		{
			name: this.props.offers.new_offer_name_value,
			text: this.props.offers.new_offer_text_value,
			email: this.props.offers.new_offer_email_value,
			tags: this.props.offers.new_offer_tags_value
		}
		);
		
		this.forceUpdate()
    }
	
	handleNewEntry_name = (event) => {
        
        this.props.offers.new_offer_name_value = firebase.auth().currentUser ? firebase.auth().currentUser.displayName : event.target.value
        this.forceUpdate();
    }
	
	handleNewEntry_text = (event) => {
        
        this.props.offers.new_offer_text_value = event.target.value;
        this.forceUpdate();
    }
	
	handleNewEntry_email = (event) => {
        
        this.props.offers.new_offer_email_value = event.target.value;
        this.forceUpdate();
    }
	
	handleNewEntry_tags = (event) => {
        
        this.props.offers.new_offer_tags_value = event.target.value;
        this.forceUpdate();
    }

    render() {
        return (
        <>	
				<div className="offer-add-div" id="offer-div">
                <h2>{this.props.text_add_offer}</h2>				
				<div>
				<div>
				<label htmlFor="new_offer_name">Imię i nazwisko:</label>
				<input
					type="text"
					name="new_offer_name"
					value={firebase.auth().currentUser ? firebase.auth().currentUser.displayName : this.props.offers.new_offer_name_value}
					onChange={this.handleNewEntry_name}
				/>
				</div>
				<div>
				<label htmlFor="new_offer_text">Treść oferty:</label>
				<input
					type="text"
					name="new_offer_text"
					value={this.props.offers.new_offer_text_value}
					onChange={this.handleNewEntry_text}
				/>
				</div>
				<div>
				<label htmlFor="new_offer_email">Email:</label>
				<input
					type="text"
					name="new_offer_email"
					value={this.props.offers.new_offer_email_value}
					onChange={this.handleNewEntry_email}
				/>
				</div>
				<div>
				<label htmlFor="new_offer_tags">Tagi:</label>
				<input
					type="text"
					name="new_offer_tags"
					value={this.props.offers.new_offer_tags_value}
					onChange={this.handleNewEntry_tags}
				/>
				</div>
				<div>
				<input
					type="button"
					name="add_offer"
					value={this.props.offers.add_offer_button_text}
					onClick={this.append}
				/>
				</div>
				</div>
				</div>
		
				{this.props.offers.showWarning && <h1 style={{color: "red"}}>{this.props.offers.errorMessage}</h1> }
				{this.props.offers.showWarning2 && <h1 style={{color: "red"}}>{this.props.offers.errorMessage2}</h1> }
		
        </>
        );
    }
}

export default New;
