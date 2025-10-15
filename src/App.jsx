import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import Header from "./components/common/Header";
import CreateQuizPage from "./pages/CreateQuizPage";
import QuizRunnerPage from "./pages/QuizRunnerPage";
import PageWrapper from "./assets/PageWrapper"; // Make sure this path is correct
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const showHeader = location.pathname === "/";

  return (
    <div>
      {showHeader && <Header />}
      <main>
        <AnimatePresence mode="wait">
          {/* --- ADD THE location AND key PROPS HERE --- */}
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/create"
              element={
                <PageWrapper>
                  <CreateQuizPage />
                </PageWrapper>
              }
            />
            <Route
              path="/quiz/run/:quizId"
              element={
                <PageWrapper>
                  <QuizRunnerPage />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;