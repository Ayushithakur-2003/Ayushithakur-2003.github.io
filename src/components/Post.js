import React, { Component} from "react";
import { Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import swal from "@sweetalert/with-react";

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
      marginBottom: "15rem",
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

    this.buttonStyle = {
      background: "none",
      border: "none",
    };

  }

   downloadFile(file) {
    // Create a link and set the URL using `createObjectURL`
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = URL.createObjectURL(file);
    link.download = file.name;

    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);
    link.click();

    // To make this work on Firefox we need to wait
    // a little while before removing it.
    setTimeout(() => {
        URL.revokeObjectURL(link.href);
        link.parentNode.removeChild(link);
    }, 0);
    
}

  submitPost = (e) => {
    e.preventDefault();

    const post = {
      Title: this.state.title,
      Name: this.state.name,
      Message: this.state.message,
    };

    // const image = this.getImage.value;
    // localStorage.setItem('image', image);
    // this.getImage.src = '';

    let myuuid = uuidv4();
    const uniqueId = myuuid.toString();
    const myFile = new File([`Your Post ID for ${this.state.message} is : ${uniqueId}`], this.state.title + '.txt');
 
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
          this.setState(this.reset);
          swal(
            <div>
              <h1>Hello!</h1><p>Congrats! Your Post have been added.</p>
              <p>Please download your PID, It will be very important for the deletion of your post.</p>
               </div>   
              );
              this.downloadFile(myFile);
         
          // alert("Please copy your post ID here..." + uniqueId);
        }

        axios.get(
          "https://8e4k7r32gl.execute-api.us-east-2.amazonaws.com/analysis/?id=" + uniqueId
        ).then((response) => {
          console.log(response);
        });
      });

  };


  changePost = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  reset = () => {
    this.setState ({
        name : "",
        title : "",
        message : ""
    })
}

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

             {/* <input required type="text" 
                 placeholder="Paste your image url here"
                  ref={(input) => this.getImage = input}
                /> */}

           {/* <button onClick={this.color} style={{...this.buttonStyle}} > <img id="mood" style={{borderRadius: "50%"}} src = "https://c4.wallpaperflare.com/wallpaper/284/97/129/sad-blue-gradation-blur-wallpaper-preview.jpg"  width={"30px"} height={"30px"} ref={this.getImage} alt="xxx" /> </button>  
           <button style={{...this.buttonStyle}} > <img id="mood" style={{borderRadius: "50%"}} src = "https://img.freepik.com/premium-vector/yellow-background-with-design-free-vector_612827-16.jpg" width={"30px"} height={"30px"} alt = "xxx" /> </button>  
           <button style={{...this.buttonStyle}} >  <img id="mood" style={{borderRadius: "50%"}} src = "https://upload.wikimedia.org/wikipedia/commons/f/f5/Rose-pink.jpg" width = {"30px"} height = {"30px"} /> </button>  
           <button style={{...this.buttonStyle}} > <img id="mood" style={{borderRadius: "50%"}} src = "https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png" width = {"30px"} height = {"30px"} /> </button>  
           <button style={{...this.buttonStyle}} >  <img id="mood" style={{borderRadius: "50%"}} src = "https://wallpaperaccess.com/full/1152525.jpg" width = {"30px"} height = {"30px"} /> </button>   */}

            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={this.reset} style={{ float: "right" }} variant="primary" type="reset">
              Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
