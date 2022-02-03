import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import logo from "../../img/logo.png";

import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <nav className="navbar px-5 mb-3 d-flex justify-content-between row">
      <div className="col-sm">
        <Link to="/">
          <img
            id="logo"
            className="navbar-brand mb-0 h1 img-fluid"
            src={logo}
            alt="Star Wars"
          />
        </Link>
      </div>
      <div className="col-lg d-flex justify-content-center">
        <Link to="/people">
          <button className="btn btn-primary categories">Characters</button>
        </Link>
        <Link to="/planets">
          <button className="btn btn-primary categories">Planets</button>
        </Link>
        <Link to="/vehicles">
          <button className="btn btn-primary categories">Vehicles</button>
        </Link>
      </div>
      <div className="col-sm">
        <div className="d-flex justify-content-end">
          <Dropdown id="dropdown" isOpen={show} toggle={() => handleToggle()}>
            <DropdownToggle caret id="dropButton">
              Favorites <i className="far fa-heart"></i>
            </DropdownToggle>
            <DropdownMenu id="dropMenu">
              {store.favorites[0] ? (
                store.favorites.map((key, index) => (
                  <DropdownItem key={index} index={index} className="row d-flex flex-nowrap justify-content-between item-container">
                    <Link
                      className="dropItem col"
                      to={`/${store.favorites[index].type}/${store.favorites[index].uid}`}
                    >
                      {store.favorites[index].name}
                    </Link>
                    <div className="col-1"></div>
                    <i
                      onClick={() => {
                        actions.deleteFavorite(index);
                      }}
                      className="fas fa-backspace dropDelete col-1 d-flex justify-content-end"
                    ></i>
                  </DropdownItem>
                ))
              ) : (
                <DropdownItem id="dropDefault">
                  ¡Go add your favorites!
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};
