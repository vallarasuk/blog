import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <h2>Welcome to My Blog</h2>
      </div>
      <p className="App-intro">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ad
        sequi sit consectetur pariatur eum. Nisi, maxime enim possimus magnam
        obcaecati sint deleniti esse voluptas non quaerat harum, doloremque
        quas!
      </p>
    </div>
  );
};

export default App;
