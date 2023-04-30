import React, {Component} from "react";
import { Navbar, Container, Col } from "react-bootstrap";

export default class Footer extends Component{
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar fixed="left" bg="dark" variant="dark">
              <Container >
                <Col lg={12} className="text-center text-muted">
                    <div>{fullYear}-{fullYear + 1}, All rights reserved by Ayushi Thakur</div>
                </Col>
              </Container>
            </Navbar>
        );
    }
}
