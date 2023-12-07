import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>
          Ready to <strong>level up</strong> your fitness game?
        </h1>
        <p className="p-homepage">
          Dive into a world of workouts that will turn your 'maybe later' into
          <strong>'let's do this!'</strong>
        </p>
        <Link to="/ExerciseList">
          {" "}
          <button className="iamready-btn">I AM READY!</button>
        </Link>
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default Home;
