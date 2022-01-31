import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/itemCard";


export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const vehicles = JSON.parse(sessionStorage.getItem('vehicles'))
	return (
		<div className="container-full px-5">
			<h1>Vehicles View</h1>
			<div className="d-flex flex-wrap justify-content-start mb-4">
			{vehicles.map((key,index) => <ItemCard key={index} name={vehicles[index].name}
			uid={vehicles[index].uid}></ItemCard>)}
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
