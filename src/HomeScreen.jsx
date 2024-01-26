// HomeScreen.jsx
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Container, Row, Col, Button } from "reactstrap";
import blogPostsContent from "./Components/ContentManagement/blogPosts.json";
import BlogCard from "./Components/Lib/BlogCard";
import "./Components/Styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="custom-vh d-flex align-items-center justify-content-center flex-column">
          <h1 className="display-4">Welcome to Our Blog</h1>
          <p className="lead">
            Explore insightful articles and stay updated with the latest trends.
          </p>
          <hr className="my-2" />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            lectus vel justo commodo facilisis.
          </p>
          <Button color="primary" size="lg">
            Get Started
          </Button>
        </div>

        <Row>
          {blogPostsContent.map((post, index) => (
            <Col xs="12" sm="6" md="4" lg="3" key={index}>
              <BlogCard id={index + 1} {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
