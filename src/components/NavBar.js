import React, { Component } from "react";
import { Navbar, NavDropdown} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/solid";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  this.iconStyles = {
    color: "white",
    marginRight: "1rem",
  };
}

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" style={{height:"4rem"}} >
          <Link to="#" className="navbar-brand" style={{fontSize:"1.2rem"}} >
            <img
              src="https://www.kindpng.com/picc/m/247-2470636_letter-t-logo-png-transparent-png.png"
              width="30"
              height="30"
              alt="thoughtoftheday"
            />{" "}
            TOFD
          </Link>
          <Link to={""} style={{fontSize:"1.2rem"}} className="navbar-brand">
              Welcome
            </Link>
            <Link to={"explore"} style={{fontSize:"1.2rem"}} className="navbar-brand">
              Explore
            </Link>
          <Nav className="me-auto" style={{fontSize:"1.2rem"}} >
            <NavDropdown title="Post" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link
                  to={"post"}
                  style={{ color: "black" }}
                  className="nav-link"
                >
                  Post here
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to={"delete"}  style={{ color: "black" }} className="nav-link">
                  Delete Post
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Link to="#" className="nav-link">
              Feedback
            </Link> */}
          </Nav>
          <Link to={"feedback"} style={{fontSize:"1.2rem"}} className="navbar-brand">
             Feedback
            </Link>
          <BellIcon style={{...this.iconStyles}} width={20} height={20} ></BellIcon>
        </Navbar>
      </>
    );
  }
}
