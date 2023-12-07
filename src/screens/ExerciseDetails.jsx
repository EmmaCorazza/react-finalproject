import "./ExerciseDetails.css";

const ExerciseDetails = ({ exercise, onGoBack }) => {
  return (
    <div className="card">
      <div className="container2">
        <h3>{exercise.name}</h3>
        <p>This is from the category {exercise.type}</p>
        <p> {exercise.instructions}</p>
        <button className="details-btn" onClick={onGoBack}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
