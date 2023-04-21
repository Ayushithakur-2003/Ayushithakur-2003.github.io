import React, { Component} from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { ShareIcon } from "@heroicons/react/24/solid";
import { RWebShare } from "react-web-share";
import Button from "react-bootstrap/Button";
// import { Form } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
// import TextField from "@mui/material/TextField";


export default class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };

    this.styles = {
      display: "flex",
      float: "left",
      width: "26rem",
      height: "16rem",
      marginBottom: "1rem",
      marginLeft: "1rem",
    };

    this.iconStyles = {
      color: "white",
      marginLeft: "1rem",
      marginTop: "1rem",
      fontSize: "24px",
    };

    this.buttonStyle = {
      background: "none",
      border: "none",
      width: "24px",
    };

    this.state = {
      posts: [],
    };
  }

  handleClose = () => this.setState({show: false}); 
    handleShow = () =>this.setState({show: true});

  componentDidMount() {
    axios
      .get("https://zygn0zvv79.execute-api.us-east-2.amazonaws.com/scan/")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ posts: data });
      });

      
    
  }

  




   idx = (e) => {
       var ind = document.getElementById('btn');
      for (let i = 0; i < ind.length; i++) {
        ind[i].addEventListener('click', function(i) {
          console.log('You clicked element #' + i);
      }.bind(null, i));

     }
    };


  render() {

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

    // <div className="main">
    // <div className="search">
    //   <TextField
    //     id="outlined-basic"
    //     variant="outlined"
    //     fullWidth
    //     label="Search"
    //   />
    // </div>
    // </div>
  


  //   let ind = document.getElementsByTagName('button');
  //   var Name = null;

  //   for (let i = 0; i < ind.length; i++) {
  //     ind[i].addEventListener('click', function(i) {
  //       console.log('You clicked element #' + i);
  //       axios
  //     .get("https://zygn0zvv79.execute-api.us-east-2.amazonaws.com/scan/")
  //      .then((response) => {
  //      Name = null + response.data[i].name;
  //      let message = response.data[i].message;
  //      console.log(message);
  //      console.log(Name);
  //     })
  //   }.bind(null, i));
   
  //  }
  // var dummy;
  // let ind = document.getElementsByTagName('button');

  //   for (let i = 0; i < ind.length; i++) {
  //       ind[i].addEventListener('click', function(i) {
  //   dummy = axios.get('https://zygn0zvv79.execute-api.us-east-2.amazonaws.com/scan/').then((response) => response.json())
  //   .then((user) => {
  //     return user.data.title;
  //   })
  //   });
  // }
  

// console.log(dummy);
{/* <Form  className="d-flex">
<Form.Control
  type="search"
  placeholder="Search"
  className="me-2"
  aria-label="Search"
/>
<Button variant="outline-success">Search</Button>
</Form> */}


    const url = window.location.href;
    return this.state.posts.map((post) => (
      
      <Card
        style={{ ...this.styles }}
        className={"boder border-dark bg-dark"}
      >

       
         <RWebShare
          data={{
            text: "msg : " ,
            url: url,
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button id="btn"  style={{ ...this.buttonStyle }}>
            <ShareIcon style={{ ...this.iconStyles }} width={20} height={20} />
          </button>
        </RWebShare> 
       
        <Card.Header style={{ textAlign: "center" }} className="text-white">
          {post.name}
        </Card.Header>
        {/* <img src={localStorage.getItem('image')} 
      alt={'C - language'}
      /> */}
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }} className="text-white">
            {post.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }} className="text-white">
            {post.message}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }} className="text-muted">
          {post.like_count} share
        </Card.Footer>
      </Card>
    ));
  }
}
