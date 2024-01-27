import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="book">
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
