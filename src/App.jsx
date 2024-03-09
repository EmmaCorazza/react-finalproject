import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ExerciseList from "./screens/ExerciseList";
import NavBar from "./component/NavBar";
import { Provider } from "react-redux";
import { store } from "./store";
import ExerciseDetails from "./screens/ExerciseDetails";
import Inspo from "./screens/Inspo";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Inspo" element={<Inspo />} />
            <Route path="/ExerciseList" element={<ExerciseList />} />
            <Route
              path="/ExerciseList/:exerciseId"
              element={<ExerciseDetails />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
