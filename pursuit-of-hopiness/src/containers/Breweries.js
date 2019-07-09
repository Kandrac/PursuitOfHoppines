import React from "react";
import "../style/breweries.css";
import BreweryCard from "../components/breweryCard";
import Navbar from "../components/navbar";
import { apiCall } from "../services/api";
import useData from "use-data";
import uniqid from "uniqid";

export default function Breweries() {
	const { loading, error, data } = useData(() => {
		return apiCall(
			"get",
			"https://pursuit-of-hoppiness.herokuapp.com/breweries/"
		)
	});

	const breweries = data;

	console.log('data', data);

	let breweryList = "";

	if (error) {
		console.log(error);
	}

	if (breweries) {
		breweryList = breweries.map(brewery => {
			return (
				<BreweryCard
					key={uniqid()}
					image={brewery.image}
					name={brewery.name}
					rating={brewery.rating}
					breweryID={brewery._id}
				/>
			);
		});
	}

	return (
		<>
			<Navbar />
			<section className="breweries">
				<header className="jumbotron">
					<div className="container">
						<h1>
							<i className="fab fa-untappd" aria-hidden="true" /> Pursuit of
							Hoppiness!
						</h1>
						<p> Breweries from all over the United States</p>
						<p>
							<a className="btn btn-primary btn-lg" href="/breweries/new">
								Add New Brewery
							</a>
						</p>
						<div className="form-group">
							<input
								type="text"
								name="search"
								placeholder="Brewery search...."
								className="form-contol"
							/>
							<input
								type="submit"
								value="search"
								className="btn btn-secondary search"
							/>
						</div>
					</div>
				</header>
				{
					loading ?
						<h2 className='loading'>Loading...</h2> :
						<section className="cards">{breweryList}</section>
				}
			</section>
		</>
	);
}
