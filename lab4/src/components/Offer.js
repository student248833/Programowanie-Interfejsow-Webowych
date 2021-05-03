const Offer = (props) => (
	<li>
	<div className="offer">
	<div className="name"> {props.name} </div>
	<div className="text"> {props.text} </div>
	<div className="email"> {props.email} </div>
	<div className="tags"> {props.tags} </div>	
	</div>
	</li>
)

export default Offer
