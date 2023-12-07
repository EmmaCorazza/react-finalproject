import { FETCH_EXERCISES_SUCCESS } from "./actions";

const initialState = {
  exercises: [],
};

const exerciseReducer = (state = initialState, action) => {
  if (action.type === FETCH_EXERCISES_SUCCESS) {
    return {
      ...state,
      exercises: action.payload,
    };
  }

  return state;
};

export default exerciseReducer;
