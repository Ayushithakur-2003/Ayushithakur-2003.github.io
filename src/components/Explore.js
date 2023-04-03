import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { ShareIcon } from '@heroicons/react/24/solid'
import { RWebShare } from "react-web-share";
import Button from "react-bootstrap/Button";

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      display: "flex",
      float: "left",
      width : "26rem",
      height: "16rem",
      marginBottom: "1rem",
      marginLeft: "1rem",
    };

    this.iconStyles = {
      color:"white",
      marginLeft: "1rem",
      marginTop: "1rem",
      fontSize: "24px",
    }

    this.buttonStyle = {
      background: "none",
      border: "none",
      width: "24px",
    }

    this.state = {
      posts: [],
    };
  }

  

  componentDidMount() {
    axios
      .get("https://zygn0zvv79.execute-api.us-east-2.amazonaws.com/scan/")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ posts: data });
      });

      // axios
      // .get("https://zygn0zvv79.execute-api.us-east-2.amazonaws.com/scan/")
      // .then((response) => {
      //   this.name = response.data[2].name;
      //   this.message = response.data[2].message;
      //   console.log(this.name);
      // })
  }

  idx = (e) => {
    var ind = document.getElementById('btn');
    for (var i = 0; i < ind.length; i++) {
      (function(index){
        ind[i].onclick = function(){
              alert(index);
        }    
    })(i);

   }
  }

  render() {
    const url = window.location.href;
    return this.state.posts.map((post) => (
      <Card style={{ ...this.styles }} className={"boder border-dark bg-dark"}>
         <RWebShare
        data={{
          text: "Hello Guys, check out this post ",
          url: url,
          
        }}
        onClick={() => console.log("shared successfully!")}
      >
      <Button id="btn" onClick={this.idx} style={{...this.buttonStyle}} ><ShareIcon style={{...this.iconStyles}} width={20} height={20} /></Button>  
       </RWebShare>
        <Card.Header style={{ textAlign: "center" }} className="text-white">
          {post.name}
        </Card.Header>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }} className="text-white">
            {post.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }} className="text-white">
            {post.message}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }} className="text-muted">
          1 share
        </Card.Footer>
      </Card>
    ));
  }
}
