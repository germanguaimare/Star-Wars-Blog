import React, {useProps} from "react";
import { Link } from "react-router-dom"
import {Card, CardImg, CardTitle, CardBody, Button} from "reactstrap"
import "../../styles/itemCard.css"

export const ItemCard = (props) => {
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
      </CardBody>
    </Card>
  );
};
