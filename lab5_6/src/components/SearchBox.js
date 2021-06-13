import React, { Component } from 'react';



class SearchBox extends React.Component
{
	state = {
		search_box_value: "",
		radio_state: "",
		search_text: "Wyszukiwarka"
	}
				
	render() {
        return (
            //React.Fragment
            <>
				<div className="search-div">
                <h2>{this.state.search_text}</h2>				
				<div>
				<input
					type="text"
					name="search_box"
					id="search-box"
					value={this.state.search_box_value}
					onChange={this.handleNewEntry_search}
				/>
				</div>			
				<div id={"radiobuttons"}>
				<div>
				<input type="radio" id="rdb-name" name="search_rdb" onClick={this.handleChangeRadio_name} />
				<label htmlFor="rdb-name">Imię i nazwisko</label>
				</div>
				<div>
				<input type="radio" id="rdb-text" name="search_rdb" onClick={this.handleChangeRadio_text} />
				<label htmlFor="rdb-text">Treść oferty</label>
				</div>
				<div>
				<input type="radio" id="rdb-email" name="search_rdb" onClick={this.handleChangeRadio_email} />
				<label htmlFor="rdb-email">Email</label>
				</div>
				<div>
				<input type="radio" id="rdb-tags" name="search_rdb" onClick={this.handleChangeRadio_tags} />
				<label htmlFor="rdb-tags">Tagi</label>
				</div>
				</div>
               </div>
            </>
        );
    }
	
	componentWillMount() {
		for (var i = 0; i < this.props.offers.offers_text.length; i++)
		{
			this.props.offers.offers_visible[i] = "true";
		}
		
		this.props.main.forceUpdate();
	}
		
	handleNewEntry_search = (event) => 
	{
        this.setState({
            search_box_value: event.target.value
        });
		
		let visible_arr = Array(this.props.offers.offers_text.length);
	
		for (var i = 0; i < this.props.offers.offers_text.length; i++)
		{
			var str_to_compare;
			if (this.state.radio_state === "name")
			{
				str_to_compare = this.props.offers.offers_name[i];
			}
			else if (this.state.radio_state === "text")
			{
				str_to_compare = this.props.offers.offers_text[i];
			}
			else if (this.state.radio_state === "email")
			{
				str_to_compare = this.props.offers.offers_email[i];
			}
			else if (this.state.radio_state === "tags")
			{
				str_to_compare = this.props.offers.offers_tags[i];
			}
			else return;
			
			
			if (str_to_compare.toLowerCase().includes(event.target.value.toLowerCase()))
			{
				visible_arr[i] = "true";
			}
			else
			{
				visible_arr[i] = "false";
			}
			
		}
		for (var i = 0; i < this.props.offers.offers_text.length; i++)
		{
			this.props.offers.offers_visible[i] = visible_arr[i];
		}
		
		this.props.main.forceUpdate();
    }	
	
	handleChangeRadio_name = (event) =>
	{
		this.setState({
            radio_state: "name",
			search_box_value: ""
        });
		
		for (var i = 0; i < this.props.offers.offers_text.length; i++)
		{
			this.props.offers.offers_visible[i] = "true";
		}
		
		this.props.main.forceUpdate();
	}
	
	handleChangeRadio_text = (event) =>
	{
		this.setState({
            radio_state: "text",
			search_box_value: ""
        });
		
		for (var i = 0; i < this.props.offers.offers_text.length; i++)
		{
			this.props.offers.offers_visible[i] = "true";
		}
		
		this.props.main.forceUpdate();
	}
	
	handleChangeRadio_email = (event) =>
	{
		this.setState({
            radio_state: "email",
			search_box_value: ""
        });
		
		for (var i = 0; i < this.props.offers.offers_text.length; i++)
		{
			this.props.offers.offers_visible[i] = "true";
		}
		
		this.props.main.forceUpdate();
	}
	
	handleChangeRadio_tags = (event) =>
	{
		this.setState({
            radio_state: "tags",
			search_box_value: ""
        });
		
		for (var i = 0; i < this.props.offers.offers_text.length; i++)
		{
			this.props.offers.offers_visible[i] = "true";
		}
		
		this.props.main.forceUpdate();
	}
}

export default SearchBox;