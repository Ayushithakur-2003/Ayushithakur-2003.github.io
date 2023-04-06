import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import DeletePost from "./components/DeletePost";
import Post from "./components/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Row>
          <Col lg={12} style={{ marginTop: "2vh" }}>
            <Routes>
              <Route path="/" exact Component={Welcome} />
              <Route path="/explore" exact Component={Explore} />
              <Route path="/post" exact Component={Post} />
              <Route path="/delete" exact Component={DeletePost} />
            </Routes>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
