
function hashCode(str) {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const Offer = (props) => (
	<>
	<li>
	<div className="offer">
	<div className="name"> {props.name} </div>
	<div className="text"> {props.text} </div>
	<div className="email"> {props.email} </div>
	<div className="tags"> {props.tags} </div>	
	</div>
	</li>
	</>
)

const Found = (props) => (
	<>
	<b> ({props.text}) </b>
	</>
)

function update(text)
{		
	let visible_arr = Array(this.state.offers_text.length);
	
	for (var i = 0; i < this.state.offers_text.length; i++)
	{
		var str_to_compare;
		if (radio_checked() === "name")
		{
			str_to_compare = this.state.offers_name[i];
		}
		else if (radio_checked() === "text")
		{
			str_to_compare = this.state.offers_text[i];
		}
		else if (radio_checked() === "email")
		{
			str_to_compare = this.state.offers_email[i];
		}
		else if (radio_checked() === "tags")
		{
			str_to_compare = this.state.offers_tags[i];
		}
		else return;
		
		if (str_to_compare.toLowerCase().includes(text.toLowerCase()))
		{
			visible_arr[i] = "true";
		}
		else
		{
			visible_arr[i] = "false";
		}
	}
	
	this.setState({offers_visible: visible_arr});
}

function radio_checked()
{
	return this.state.radio_state;
}
	
function refresh_search()
{		
	this.setState({search_box_value: ""});
}
	
function refresh_new_offer()
{
	this.setState({
	new_offer_name_value: "",
	new_offer_text_value: "",
	new_offer_email_value: "",
	new_offer_tags_value: ""});
}
	

class SearchBox extends React.Component
{
	constructor(props)
	{
        super(props);
		refresh_search = refresh_search.bind(this);
		radio_checked = radio_checked.bind(this);
	}
	state = {
		search_box_value: "",
		radio_state: ""
	}
			
	render() {
        return (
            //React.Fragment
            <>
				<div className="search-div">
                <h2>{this.props.search_text}</h2>				
				<div>
				<input
					type="text"
					name="search_box"
					id="search-box"
					value={this.state.search_box_value}
					onChange={this.handleNewEntry_search}
				/>
				</div>			
				<div>
				<input type="radio" id="rdb-name" name="search_rdb" onClick={this.handleChangeRadio_name} />
				<label htmlFor="rdb-name">Imię i nazwisko</label>
				<input type="radio" id="rdb-text" name="search_rdb" onClick={this.handleChangeRadio_text} />
				<label htmlFor="rdb-text">Treść oferty</label>
				<input type="radio" id="rdb-email" name="search_rdb" onClick={this.handleChangeRadio_email} />
				<label htmlFor="rdb-email">Email</label>
				<input type="radio" id="rdb-tags" name="search_rdb" onClick={this.handleChangeRadio_tags} />
				<label htmlFor="rdb-tags">Tagi</label>
				</div>
               </div>
            </>
        );
    }
	
	handleNewEntry_search = (event) => 
	{
        this.setState({
            search_box_value: event.target.value
        });
		update(event.target.value);
		refresh_new_offer();
    }	
	
	handleChangeRadio_name = (event) =>
	{
		this.setState({
            radio_state: "name"
        });
		refresh_search();
		update("");
	}
	
	handleChangeRadio_text = (event) =>
	{
		this.setState({
            radio_state: "text"
        });
		refresh_search();
		update("");
	}
	
	handleChangeRadio_email = (event) =>
	{
		this.setState({
            radio_state: "email"
        });
		refresh_search();
		update("");
	}
	
	handleChangeRadio_tags = (event) =>
	{
		this.setState({
            radio_state: "tags"
        });
		refresh_search();
		update("");
	}
}

class ProjectTinder extends React.Component {
	constructor(props) 
	{
        super(props);
		update = update.bind(this);
		refresh_new_offer = refresh_new_offer.bind(this);
	}

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
		showWarning2: false
    }
    errorMessage = "Użytkownik już istnieje"
	errorMessage2 = "Pola nie mogą być puste"
	
	handleAddOffer = (event) =>
	{
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
	
	handleNewEntry_name = (event) => {
        this.setState({
            new_offer_name_value: event.target.value
        });
		refresh_search();
		update("");
    }
	
	handleNewEntry_text = (event) => {
        this.setState({
            new_offer_text_value: event.target.value
        });
		refresh_search();
		update("");
    }
	
	handleNewEntry_email = (event) => {
        this.setState({
            new_offer_email_value: event.target.value
        });
		refresh_search();
		update("");
    }
	
	handleNewEntry_tags = (event) => {
        this.setState({
            new_offer_tags_value: event.target.value
        });
		refresh_search();
		update("");
    }
	
    render() {
		
		var list = [];
		var count = 0;
		
		for (var i = 0; i < this.state.offers_name.length; i++)
		{
			if (this.state.offers_visible[i] === "true")
			{
				list.push(<Offer name={this.state.offers_name[i]} text={this.state.offers_text[i]} email={this.state.offers_email[i]} tags={this.state.offers_tags[i]} shown={this.state.offers_visible[i]} key={hashCode(this.state.offers_name[i])} />);
				count++;
			}
		}
		
        return (
            //React.Fragment
            <>
				<h1>{this.props.text_title}</h1>		
				<div className="offer-add-div" id="offer-div">
                <h2>{this.props.text_add_offer}</h2>				
				<div>
				<div>
				<label htmlFor="new_offer_name">Imię i nazwisko:</label>
				<input
					type="text"
					name="new_offer_name"
					value={this.state.new_offer_name_value}
					onChange={this.handleNewEntry_name}
				/>
				</div>
				<div>
				<label htmlFor="new_offer_text">Treść oferty:</label>
				<input
					type="text"
					name="new_offer_text"
					value={this.state.new_offer_text_value}
					onChange={this.handleNewEntry_text}
				/>
				</div>
				<div>
				<label htmlFor="new_offer_email">Email:</label>
				<input
					type="text"
					name="new_offer_email"
					value={this.state.new_offer_email_value}
					onChange={this.handleNewEntry_email}
				/>
				</div>
				<div>
				<label htmlFor="new_offer_tags">Tagi:</label>
				<input
					type="text"
					name="new_offer_tags"
					value={this.state.new_offer_tags_value}
					onChange={this.handleNewEntry_tags}
				/>
				</div>
				<div>
				<input
					type="button"
					name="add_offer"
					value={this.state.add_offer_button_text}
					onClick={this.handleAddOffer}
				/>
				</div>
				</div>
				</div>
				
               {this.state.showWarning && <h1 style={{color: "red"}}>{this.errorMessage}</h1> }
			   {this.state.showWarning2 && <h1 style={{color: "red"}}>{this.errorMessage2}</h1> }
			   
			   <h3>Lista ofert <Found text={count} /></h3>
                <ul>
                    {list}
                </ul>
            </>
        );
    }
}

ReactDOM.render(
	<div>
    <ProjectTinder text_add_offer="Dodaj ofertę" text_title="Tinder do projektów" />
	<SearchBox search_text="Wyszukiwarka" />
	</div>,
    document.getElementById('root')	
);
