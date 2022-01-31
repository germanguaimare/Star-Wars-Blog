import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { HomeCard } from "../component/homeCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	useEffect(() => {
actions.getData()
		,[]})
  return (
    <div className="text-center mt-2 mb-2">
      <h1>Star Wars Enciclopedia</h1>
      <div className="d-flex justify-content-around mt-2 mb-5">
        <HomeCard
          title="Characters"
          link="/characters"
          action="Explore Characters"
        ></HomeCard>
        <HomeCard
          title="Planets"
          link="/planets"
          action="Explore Planets"
        ></HomeCard>
        <HomeCard
          title="Vehicles"
          link="/vehicles"
          action="Explore Vehicles"
        ></HomeCard>
      </div>
    </div>
  );
};
