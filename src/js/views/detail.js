import React, { useState, useEffect, useContext } from "react";
import { DetailCard } from "../component/detailCard";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Detail = () => {
    const { store, actions } = useContext(Context);
    const uid = useParams()
    useEffect(()=> actions.getDetails(),[])
  return (
    <div>
      <h1>Detalle de {uid}</h1>
      <DetailCard></DetailCard>
    </div>
  );
};
