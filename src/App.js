import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./utils/theme";
import ApiProvider from "./contexts/ApiContext";
import AuthProvider from "./contexts/AuthContext";
import PrevFilterProvider from "./contexts/PrevFilterContext";
import Routes from "./routes/Routes";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.config({
    force3D: true,
  });

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <AuthProvider>
          <PrevFilterProvider>
            <ApiProvider>
              <Header />
              <Routes />
            </ApiProvider>
          </PrevFilterProvider>
        </AuthProvider>
      </Router>
      <ScrollButton />
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
