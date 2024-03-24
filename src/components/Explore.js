import React, { Component} from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { ShareIcon } from "@heroicons/react/24/solid";
import { RWebShare } from "react-web-share";
import Button from "react-bootstrap/Button";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
// import { Form } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import $, { post } from 'jquery';
import { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";


export default class Explore extends Component {
  // const [list, setList] = useState([])
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
    handleShow = () => this.setState({show: true});

  componentDidMount() {
    axios
      .get("https://zygn0zvv79.execute-api.us-east-2.amazonaws.com/scan/")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ posts: data });
      });

      
    
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchData()
  //   }, 5000)
  // }, []);

    
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


let ind = document.getElementsByTagName('button')
$('button').on("click", function() {
  console.log($('button').index(this.closest("button")));
  axios
       .get("https://acgld0qc6i.execute-api.us-east-2.amazonaws.com/dev/")
        .then((response) => {
        let id = response.data[$('button').index(this.closest("button"))].id;
        let message = response.data[$('button').index(this.closest("button"))].message;
        let name = response.data[$('button').index(this.closest("button"))].name;
        let title = response.data[$('button').index(this.closest("button"))].title;
        let like_count = response.data[$('button').index(this.closest("button"))].like_count + 1;
        

  axios.put(
    "https://chidvg8h2m.execute-api.us-east-2.amazonaws.com/update/update?id=" +
    id +
    "&like_count=" + 
    like_count +
    "&name=" +
    name +
    "&title=" +
    title +
    "&message=" +
    message, 
  
  )
 
});
});



    
    const url = window.location.href;
    return this.state.posts.map((post) => (
      
      <Card id="card"
        style={{ ...this.styles }}
        className={"boder border-dark bg-dark"}
      >

       
         <RWebShare
          data={{
            text: "Check this out!",
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
