import React from "react";
import "./index.css";

const HomeScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 main-box">
      <div className="container file-upload-box">
        <button className="leave-button">X</button>
        <div className="file-upload-box-form">
          <h1 className="title underline">Document Upload</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
