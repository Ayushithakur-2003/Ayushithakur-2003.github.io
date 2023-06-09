import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", title: "", message: "" };
    this.changePost = this.changePost.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.styles = {
      display: "flex",
      justifyContent: "center",
      marginLeft: "15rem",
      marginRight: "20rem",
      marginTop: "8rem",
      // alignItems: "center",
      // height: "100vh",
      width: "50rem",
    };

    this.moreStyle = {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      padding: "0.8rem",
    };
  }
  submitPost = (e) => {
    e.preventDefault();

    const post = {
      Title: this.state.title,
      Name: this.state.name,
      Message: this.state.message,
    };

    let myuuid = uuidv4();
    const uniqueId = myuuid.toString();
    axios
      .put(
        "https://chidvg8h2m.execute-api.us-east-2.amazonaws.com/update/update?id=" +
          uniqueId +
          "&like_count=0&name=" +
          this.state.name +
          "&title=" +
          this.state.title +
          "&message=" +
          this.state.message,
        post
      )
      .then((response) => {
        if (response.data != null) {
          this.setState(this.initialState);
          alert("Post saved successfully");
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
        <Form onSubmit={this.submitPost} id="TofdId">
          <Card.Header style={{ ...this.moreStyle }} className="text-white">
            Post here
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form.Group
                  as={Col}
                  className={"boder border-dark bg-dark"}
                  controlId="formGridName"
                >
                  <Form.Label className="text-white">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name or alias"
                    name="name"
                    value={this.state.name}
                    onChange={this.changePost}
                  />
                  <Form.Text
                    style={{ marginBottom: "1rem" }}
                    className="text-muted"
                  >
                    Use your real name or an alias
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  as={Col}
                  className={"boder border-dark bg-dark"}
                  controlId="formGridTitle"
                >
                  <Form.Label className="text-white">Title</Form.Label>
                  <Form.Control
                    style={{ marginBottom: "2rem" }}
                    required
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.changePost}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              as={Col}
              className={"boder border-dark bg-dark"}
              controlId="formGridMessage"
            >
              <Form.Label className="text-white">Message</Form.Label>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                required
                type="text"
                placeholder="Message"
                name="message"
                value={this.state.message}
                onChange={this.changePost}
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button style={{ float: "right" }} variant="primary" type="reset">
              Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
