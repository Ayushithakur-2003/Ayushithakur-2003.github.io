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
      .get("https://acgld0qc6i.execute-api.us-east-2.amazonaws.com/dev/")
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
    const transformDynamoDBItem = (item) => {
      const transformedItem = {};
      for (let key in item) {
        const valueType = Object.keys(item[key])[0]; // This gets the type descriptor (S, N, etc.)
        transformedItem[key] = item[key][valueType]; // Assigns the actual value to the key
      }
      return transformedItem;
    };

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

// const updateLikeCount = (postId) => {
//   // Find the post in your state
//   console.log(postId);
//   const postIndex = this.state.posts.findIndex(posts => posts.id === postId);
//   console.log(postIndex);
//   if (postIndex >= -1) {
//     const newPosts = [...this.state.posts];
//     const post = {...newPosts[postIndex]};
//     console.log(newPosts);
//     console.log(post)
//     console.log(post.like_count);
//     post.like_count += 1; // Assuming you want to increment the count
//     newPosts[postIndex] = post;


//     // Update the state
//     this.setState({posts: newPosts}, () => {
//       // Make PUT request to update like_count in the database
//       axios.put(
//         `https://5xoqmkaqw6.execute-api.us-east-2.amazonaws.com/dev/update?id=${postId}`,
//         { like_count: post.like_count }
//       )
//       .then(response => {
//         // Handle successful response if needed
//         console.log('Like count updated successfully:', response.data);
//       })
//       .catch(error => {
//         // Handle error if PUT request fails
//         console.error('Error updating like count:', error);
//       });
//     });
//   }
// };

const updateLikeCount = async (postId, likes, name, title, message, Tag) => {
  try {
    let inc = Number(likes) + 1
    console.log(postId)
    console.log(inc)
    // Send a PUT request to your server's API endpoint
    const response = await axios.put("https://5xoqmkaqw6.execute-api.us-east-2.amazonaws.com/dev/update?id=" + postId + "&like_count=" + inc + "&name=" + name + "&message=" + message + "&title=" + title + "&Tag=" + Tag);
    
    // Check if the request was successful
    if (response.status === 200) {
      console.log('Share count updated successfully!');
    } else {
      console.error('Failed to update share count.');
    }
  } catch (error) {
    console.error('An error occurred while updating share count:', error);
  }
};




    
    const url = window.location.href;
    const transformedPosts = this.state.posts.map(transformDynamoDBItem);
    return transformedPosts.map((post) => (
      
      <Card id="card"
        style={{ ...this.styles }}
        className={"boder border-dark bg-dark"}
      >

       
         <RWebShare
          data={{
            text: "Check this out!",
            url: url,
          }}
          onClick={() => updateLikeCount(post.id, post.like_count, post.message, post.title, post.name, post.Tag)}
        >
          <button onClick={() => updateLikeCount(post.id, post.like_count)} style={{ ...this.buttonStyle }}>
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
