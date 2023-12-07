import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ExerciseList from "./screens/ExerciseList";
import NavBar from "./component/NavBar";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers";

const reducer = combineReducers({
  exercise: exerciseReducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ExerciseList" element={<ExerciseList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
