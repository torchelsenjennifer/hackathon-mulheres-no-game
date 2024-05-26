import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/landingPage.jsx';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} component={LandingPage} />
      </Routes>
    </>
  );
};

export default App;
