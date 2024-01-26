import React from "react";

const Blog = ({ blog }) => {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <p>Date: {blog.date}</p>
    </div>
  );
};

export default Blog;
