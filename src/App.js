import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./components/quizz/Result";
import Review from "./components/quizz/Review";
import Home from "./components/pages/Home";
import QuizState from "./context/quizz/QuizState";
import Login from "./components/pages/Login";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <QuizState>
      <React.Fragment>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </Router>
      </React.Fragment>
    </QuizState>
  );
}

export default App;
