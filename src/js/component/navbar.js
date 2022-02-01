import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

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
    <nav className="navbar navbar-light bg-light px-5 mb-3 d-flex justify-content-between">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Star Wars</span>
      </Link>
      <div className="">
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
      <div>
        <div className="d-flex justify-content-center">
          <Dropdown id="dropdown" isOpen={show} toggle={() => handleToggle()}>
            <DropdownToggle caret>Favorites</DropdownToggle>
            <DropdownMenu>
              {
              store.favorites[0] ? store.favorites.map((key,index) =>
              <DropdownItem
                key={index}
                index={index}
              ><Link to={`/${store.favorites[index].type}/${store.favorites[index].uid}`}>{store.favorites[index].name}</Link>
              <i onClick ={() => {actions.deleteFavorite(index)}}className="fas fa-backspace"></i></DropdownItem>
              ) : <DropdownItem>¡Go add your favorites!</DropdownItem>}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};
