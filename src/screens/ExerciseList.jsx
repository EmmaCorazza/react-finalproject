import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../actions";
import ExerciseDetails from "./ExerciseDetails";
import "./ExerciseList.css";

const ExerciseList = () => {
  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state.exercise);
  const [category, setCategory] = useState(undefined);
  const [muscle, setMuscle] = useState(undefined);
  const [exeriseDetailsIndex, setExeriseDetailsIndex] = useState(undefined);

  useEffect(() => {
    if (category) {
      dispatch(fetchExercises(category, muscle));
    }
  }, [dispatch, category, muscle]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMuscleChange = (event) => {
    setMuscle(event.target.value);
  };

  const handleGoBack = () => {
    setExeriseDetailsIndex(undefined);
  };

  if (exeriseDetailsIndex !== undefined) {
    return (
      <ExerciseDetails
        exercise={exercises[exeriseDetailsIndex]}
        onGoBack={handleGoBack}
      />
    );
  }

  return (
    <div>
      <h2>Let's find your next exercises! </h2>
      <div>
        <label>
          <p> What do you want to exercise today?</p>
          <select value={category} onChange={handleCategoryChange}>
            <option value={undefined}>Select Category</option>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
            <option value="stretching">Stretch</option>
            <option value="powerlifting">Powerlift</option>
            <option value="olympic_weightlifting">Olympic weightlift</option>
            <option value="strongman">Strongman</option>
            <option value="plyometrics">Plyometrics</option>
          </select>
        </label>
      </div>

      {category === "strength" && (
        <div>
          <label>
            <p>Which muscle group do you want to target?</p>
            <select value={muscle} onChange={handleMuscleChange}>
              <option value={undefined}>Select Muscle</option>
              <option value="abdominals">Abdominals</option>
              <option value="glutes">Glutes</option>
              <option value="hamstrings">Hamstrings</option>
              <option value="lats">Lats</option>
              <option value="lower_back">Lower back</option>
              <option value="middle_back">Middle back</option>
              <option value="chest">Chest</option>
              <option value="hamstrings">Hamstrings</option>
              <option value="biceps">Biceps</option>
              <option value="triceps">Triceps</option>
            </select>
          </label>
        </div>
      )}
      <ul>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-box">
            <h3>{exercise.name}</h3>
            <p>Difficulty level: {exercise.difficulty}</p>
            <button
              onClick={() => setExeriseDetailsIndex(index)}
              className="choose-btn"
            >
              Excercise details
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
