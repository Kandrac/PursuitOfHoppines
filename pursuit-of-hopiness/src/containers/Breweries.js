import React, { useEffect, useRef } from "react";
import "../style/breweries.css";
import BreweryCard from "../components/breweryCard";
import Navbar from "../components/navbar";
import { apiCall } from "../services/api";
import useData from "use-data";

export default function Breweries() {
  let breweries = useRef(null);
const{loding,error,data}=
apiCall(
    "get",
    "https://pursuit-of-hoppiness.herokuapp.com/breweries/"
  ).then(res => {
    console.log(res);
    breweries.current = res;
  });
useData(() =>
someApi(apiCall));



  let breweryList = "";

  if (breweries.current !== null) {
    breweryList = breweries.current.map(brewery => {
      return (
        <BreweryCard
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
        <section className="cards">{breweryList}</section>
      </section>
    </>
  );
}
