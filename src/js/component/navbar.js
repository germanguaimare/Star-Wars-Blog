import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

export const Navbar = () => {

	const [show, setShow] = useState(false);
	const handleToggle = () => {setShow(!show)};

  return (
    <nav className="navbar navbar-light bg-light px-5 mb-3 d-flex justify-content-between">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Star Wars</span>
      </Link>
      <div className="">
        <Link to="/characters">
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
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem text>Dropdown Item Text</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};
