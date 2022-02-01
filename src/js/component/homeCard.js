import React, { useProps, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Button
} from "reactstrap";
import "../../styles/homecard.css";

export const HomeCard = (props) => {
  return (
    <div>
      <Card className="homeCard">
        <CardBody className="py-0">
        </CardBody>
        <img
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          width="100%"
        />
        <CardBody>
              <h3>{props.title}</h3>
          <Link to={props.link}><Button>{props.action}</Button></Link>
        </CardBody>
      </Card>
    </div>
  );
};
