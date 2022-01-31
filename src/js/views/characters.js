import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ItemCard } from "../component/itemCard";


export const Characters = () => {
	const { store, actions } = useContext(Context);
	const characters = JSON.parse(sessionStorage.getItem('characters'))
	return (
		<div className="container-full px-5">
			<h1>Character View</h1>
			<div className="d-flex flex-wrap justify-content-start mb-4">
			{characters.map((key,index) => 
			<ItemCard 
			key={index} 
			name={characters[index].name} 
			uid={characters[index].uid}
			type="people"
			></ItemCard>)}
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
