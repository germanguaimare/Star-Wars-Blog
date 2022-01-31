import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/itemCard";


export const Planets = () => {
	const { store, actions } = useContext(Context);
	const planets = JSON.parse(sessionStorage.getItem('planets'))
	return (
		<div className="container-full px-5">
			<h1>Planets View</h1>
			<div className="d-flex flex-wrap justify-content-start mb-4">
			{planets.map((key,index) => <ItemCard key={index} name={planets[index].name}
			uid={planets[index].uid}></ItemCard>)}
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
