
import Offer from './Offer';
import Found from './Found';

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

const Offers = (props) => {

	var list = [];
	var count = 0;
	
	for (var i = 0; i < props.offers.offers_name.length; i++)
	{
		if (props.offers.offers_visible[i] === "true")
		{
			list.push(<Offer name={props.offers.offers_name[i]} text={props.offers.offers_text[i]} email={props.offers.offers_email[i]} tags={props.offers.offers_tags[i]} shown={props.offers.offers_visible[i]} key={hashCode(props.offers.offers_name[i])} />);
			count++;
		}
	}

  

    return (
		<div className="offers-div">
        <h3>Lista ofert <Found text={count} /></h3>
			<ul>
				{list}
			</ul>
		</div>
    )
}

export default Offers;
