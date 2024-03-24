import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

// value={this.state.id} onChange={this.deletePost}
export default class DeletePost extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
    this.changePost = this.changePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.styles = {
      display: "flex",
      justifyContent: "center",
      marginLeft: "20rem",
      marginRight: "20rem",
      marginTop: "8rem",
      marginBottom: "20rem",
      // alignItems: "center",
      // height: "100vh",
      width: "40rem",
      
    };

    this.moreStyle = {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      padding: "0.8rem",
    };
  }
  deletePost = (e) => {
    e.preventDefault();

    const del = {
      id : this.state.id,
    };
    axios
      .delete(
        "https://ybwzv08m2d.execute-api.us-east-2.amazonaws.com/del?id=" +
          this.state.id,
        del
      )
      .then((response) => {
        if (response.statusCode === 200) {
          console.log(response.status);
          this.setState(this.initialState);
          alert("Post deleted successfully");
        } else {
          alert("error");
        }
      });
  };

  changePost = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Card style={{ ...this.styles }} className={"boder border-dark bg-dark"}>
        <Form onSubmit={this.deletePost} id="TofdId">
          <Card.Header style={{...this.moreStyle}} className="text-white">
            Delete The Post
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form.Group
                  as={Col}
                  className={"boder border-dark bg-dark"}
                  controlId="formGridID"
                >
                  <Form.Label className="text-white">Post ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Post ID"
                    name="id"
                    value={this.state.id}
                    onChange={this.changePost}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit" style={{marginBottom:"0.5rem"}} >
              Submit
            </Button>
            <Button style={{ float: "right" }} variant="primary" type="reset" >
              Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
