import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';

export default class Feedback extends Component {
    constructor(props) {
      super(props);
      this.state = { show: false };
    }

    handleClose = () => this.setState({show: false}); 
    handleShow = () =>this.setState({show: true});

render(){
    return (
    <><Button onClick={this.handleShow} style={{float:"left"}} variant="primary">
      Launch
    </Button><Offcanvas show={this.state.show} onHide={this.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas></>
    )
 }
}