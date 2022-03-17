import React from "react";

//include images into your bundle
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return [
		<div>
			<Jumbotron />
		</div>,
		<div className="row">
			<div className="col-sm-12 col-md-6 col-lg-3">
				<Card />
			</div>
			,
			<div className="col-sm-12 col-md-6 col-lg-3">
				<Card />
			</div>
			,
			<div className="col-sm-12 col-md-6 col-lg-3">
				<Card />
			</div>
			,
			<div className="col-sm-12 col-md-6 col-lg-3">
				<Card />
			</div>
		</div>,
	];
};

export default Home;
