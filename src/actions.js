export const FETCH_EXERCISES_SUCCESS = "FETCH_EXERCISES_SUCCESS";

export const fetchExercises = (category, muscle) => {
  return async (dispatch) => {
    try {
      let apiUrl = "https://api.api-ninjas.com/v1/exercises";

      // Check category and add it to the API URL
      if (category) {
        apiUrl += `?type=${category}`;
      }

      // Check muscle and add it to the API URL
      if (muscle) {
        apiUrl += `&muscle=${muscle}`;
      }

      // Fetch the data from the API
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "kKfp8a2yikVgetF39s8pow==SppwU5UkHueEQaA3",
        },
      });

      //Convert the respond & dispatch the data from the Redux store
      const data = await response.json();

      dispatch({
        type: FETCH_EXERCISES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      //Handle errors
      console.error("Error fetching exercises:", error.message);
    }
  };
};
