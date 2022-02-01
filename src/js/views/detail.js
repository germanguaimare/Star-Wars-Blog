import React, { useState, useEffect, useContext, useProps } from "react";
import { DetailCard } from "../component/detailCard";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = () => {
  const fetchRoute = window.location.pathname;
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getDetails(fetchRoute);
  });
  if (fetchRoute.includes("people")) {
    return (
      <div>
        <DetailCard type="people"></DetailCard>
      </div>
    );
  }
  if (fetchRoute.includes("planets")) {
    return (
      <div>
        <DetailCard type="planets"></DetailCard>
      </div>
    );
  }
  if (fetchRoute.includes("vehicles")) {
    return (
      <div>
        <DetailCard type="vehicles"></DetailCard>
      </div>
    );
  }
};