import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Table,
  Button,
} from "reactstrap";
import "../../styles/detailCard.css";

export const DetailCard = (props) => {
  useEffect(()=>{})
  switch (props.type) {
    case "people":
      return (
        <div className="container">
          <Card className="detailCard">
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{props.activeItem.properties.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                A character from Star Wars
              </CardSubtitle>
              <Table borderless>
                <tbody>
                  <tr>
                    <th scope="row">Birth Year</th>
                    <td>{activeItem.properties.birth_year}</td>
                  </tr>
                  <tr>
                    <th scope="row">Eye Color</th>
                    <td>{activeItem.properties.eye_color}</td>
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td>{activeItem.properties.gender}</td>
                  </tr>
                  <tr>
                    <th scope="row">Hair Color</th>
                    <td>{activeItem.properties.hair_color}</td>
                  </tr>
                  <tr>
                    <th scope="row">Height</th>
                    <td>{activeItem.properties.height}</td>
                  </tr>
                </tbody>
              </Table>
              <Button>Add to Favorites</Button>
            </CardBody>
          </Card>
        </div>
      );
    case "planets":
      return (
        <div className="container">
          <Card className="detailCard">
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{props.activeItem.properties.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
              A planet from Star Wars
              </CardSubtitle>
              <Table borderless>
                <tbody>
                  <tr>
                    <th scope="row">Climate</th>
                    <td>{props.activeItem.properties.climate}</td>
                  </tr>
                  <tr>
                    <th scope="row">Diameter</th>
                    <td>{props.activeItem.properties.diameter}</td>
                  </tr>
                  <tr>
                    <th scope="row">Gravity</th>
                    <td>{props.activeItem.properties.gravity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Orbital Period</th>
                    <td>{props.activeItem.properties.orbital_period}</td>
                  </tr>
                  <tr>
                    <th scope="row">Population</th>
                    <td>{props.activeItem.properties.population}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rotation Perdio</th>
                    <td>{props.activeItem.properties.rotation_period}</td>
                  </tr>
                  <tr>
                    <th scope="row">Surface Water</th>
                    <td>{props.activeItem.properties.surface_water + " %"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Terrain Types</th>
                    <td>{props.activeItem.properties.terrain}</td>
                  </tr>
                </tbody>
              </Table>
              <Button>Add to Favorites</Button>
            </CardBody>
          </Card>
        </div>
      );
    case "vehicles":
      return (
        <div className="container">
          <Card className="detailCard">
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                A vehicle from Star Wars
              </CardSubtitle>
              <CardText>{props.type}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      );
  }
};
