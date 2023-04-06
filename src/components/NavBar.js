import React, { Component } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
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
        </Navbar>
      </>
    );
  }
}
