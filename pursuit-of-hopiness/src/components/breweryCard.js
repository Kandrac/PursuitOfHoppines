import React from "react";
import "../style/breweryCard.css";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

function Beer() {
	return <span className="fa fa-beer" />;
}

function BreweryCard({ image, name, rating, breweryID }) {

	const dummyRatingArray = [];

	// fills in dummy values; the count of elements in the dummy array is used to draw beer mugs for rating
	for (let i = 0; i < rating; i++) {
		dummyRatingArray.push("dummy");
	}

	return (
		<article className="breweryCard">
			<Link to={`/brewery/${breweryID}`}>
				<img src={image} alt="" />
			</Link>
			<h2>{name}</h2>
			<div className="rating">
				{
					dummyRatingArray.length === 0 ?
						<p><i>Be the first to review!</i></p> :
						// mapping beers to rating (1 beer image per rating point)
						dummyRatingArray.map(ratingLevel => (
							<Beer key={uniqid()} />
						))

				}
			</div>
			<Link to={`/brewery/${breweryID}`} className="btn btn-primary">
				More Info
      </Link>
		</article>
	);
}

export default BreweryCard;
