import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Main from "./Main";
import About from "./Components/Pages/About";
import HomeScreen from "./HomeScreen";
import LoadingScreen from "./Components/Helper/LoadingScreen";

const AppMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay of 2000ms
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={isLoading ? <LoadingScreen /> : <HomeScreen />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default AppMain;
