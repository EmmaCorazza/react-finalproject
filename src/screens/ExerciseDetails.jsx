import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ExerciseDetails.css";

const ExerciseDetails = () => {
  const { exerciseId } = useParams();
  const exercises = useSelector((state) => state.exercise.exercises);
  const exercise = exercises[exerciseId];

  return (
    <div className="card">
      <div className="container2">
        <h3>{exercise.name}</h3>
        <p>This is from the category {exercise.type}</p>
        <p>{exercise.instructions}</p>
        <Link to={`/ExerciseList`} className="details-btn">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ExerciseDetails;
