import React, {useProps, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import {Card, CardImg, CardTitle, CardBody, Button} from "reactstrap"
import "../../styles/itemCard.css"

export const ItemCard = (props) => {
  const {store, actions} = useContext(Context)
  return (
    <Card className="itemCard">
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{props.name}</CardTitle>
        <Link to={`/${props.type}/${props.uid}`}>
        <Button>Details</Button>
        </Link>
        <Button onClick={() => {actions.addFavorite(props.index, props.type, props.type, props.uid)}}>Add to Favorites</Button>
      </CardBody>
    </Card>
  );
};
