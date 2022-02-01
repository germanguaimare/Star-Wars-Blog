import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
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
  const { store, actions } = useContext(Context);
  useEffect(()=>{},[])
  let activeItem = store.activeItem
  switch (props.type) {
    case "people":
      return (
        <div className="container">
          <Card className="detailCard row d-flex">
            <div className="col-7">
            <CardImg
              
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            </div>
            <CardBody className="col-5">
              <CardTitle tag="h5">{activeItem.properties.name}</CardTitle>
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
            </CardBody>
          </Card>
        </div>
      );
    case "planets":
      return (
        <div className="container">
          <Card className="detailCard row d-flex">
            <div className="col-7">
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            </div>
            <CardBody className="col-5">
              <CardTitle tag="h5">{activeItem.properties.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
              A planet from Star Wars
              </CardSubtitle>
              <Table borderless>
                <tbody>
                  <tr>
                    <th scope="row">Climate</th>
                    <td>{activeItem.properties.climate}</td>
                  </tr>
                  <tr>
                    <th scope="row">Diameter</th>
                    <td>{activeItem.properties.diameter}</td>
                  </tr>
                  <tr>
                    <th scope="row">Gravity</th>
                    <td>{activeItem.properties.gravity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Orbital Period</th>
                    <td>{activeItem.properties.orbital_period}</td>
                  </tr>
                  <tr>
                    <th scope="row">Population</th>
                    <td>{activeItem.properties.population}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rotation Period</th>
                    <td>{activeItem.properties.rotation_period}</td>
                  </tr>
                  <tr>
                    <th scope="row">Surface Water</th>
                    <td>{activeItem.properties.surface_water + " %"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Terrain Types</th>
                    <td>{activeItem.properties.terrain}</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      );
    case "vehicles":
      return (
        <div className="container">
          <Card className="detailCard row d-flex">
            <div className="col-7">
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            </div>
            <CardBody className="col-5">
              <CardTitle tag="h5">{activeItem.properties.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                A vehicle from Star Wars
              </CardSubtitle>
              <Table borderless>
                <tbody>
                  <tr>
                    <th scope="row">Cargo Capacity</th>
                    <td>{activeItem.properties.cargo_capacity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Consumables</th>
                    <td>{activeItem.properties.consumables}</td>
                  </tr>
                  <tr>
                    <th scope="row">Cost in Credits</th>
                    <td>{activeItem.properties.cost_in_credits}</td>
                  </tr>
                  <tr>
                    <th scope="row">Crew</th>
                    <td>{activeItem.properties.crew}</td>
                  </tr>
                  <tr>
                    <th scope="row">Manufacturer</th>
                    <td>{activeItem.properties.manufacturer}</td>
                  </tr>
                  <tr>
                    <th scope="row">Max Atmospheric Speed</th>
                    <td>{activeItem.properties.max_atmosphering_speed}</td>
                  </tr>
                  <tr>
                    <th scope="row">Model Name</th>
                    <td>{activeItem.properties.model}</td>
                  </tr>
                  <tr>
                    <th scope="row">Max Passengers</th>
                    <td>{activeItem.properties.passengers}</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      );
  }
};
