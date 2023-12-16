import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExercises = createAsyncThunk(
  "exercise/fetchExercises",
  async ({ category, muscle }) => {
    let apiUrl = "https://api.api-ninjas.com/v1/exercises";

    if (category) {
      apiUrl += `?type=${category}`;
    }

    if (muscle) {
      apiUrl += `&muscle=${muscle}`;
    }

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "kKfp8a2yikVgetF39s8pow==SppwU5UkHueEQaA3",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch exercises");
    }

    const data = await response.json();
    return data;
  }
);

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    exercises: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExercises.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.exercises = action.payload;
        state.error = null;
      })
      .addCase(fetchExercises.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default exerciseSlice.reducer;
