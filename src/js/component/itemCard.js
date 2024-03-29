import React, {useProps, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import {Card, CardImg, CardTitle, CardBody, Button} from "reactstrap"
import "../../styles/itemCard.css"
import babyYoda from "../../img/babyYoda.jpeg"

export const ItemCard = (props) => {
  const {store, actions} = useContext(Context)
  return (
    <Card className="itemCard">
      <CardImg
        className="cardImg"
        alt="Card image cap"
        src={babyYoda}
        top
        width="100%"
      />
      <CardBody className="cardBody">
        <CardTitle tag="h5" className="cardTitle">{props.name}</CardTitle>
        <div className="d-flex justify-content-between">
        <Link to={`/${props.type}/${props.uid}`}>
        <Button className="detailButton">Details</Button>
        </Link>
        <Button className="favoriteButton"onClick={() => {actions.addFavorite(props.index, props.type, props.uid)}}><i class="far fa-heart"></i></Button>
        </div>
      </CardBody>
    </Card>
  );
};
