import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./utils/theme";
import ApiProvider from "./contexts/ApiContext";
import AuthProvider from "./contexts/AuthContext";
import PrevFilterProvider from "./contexts/PrevFilterContext";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {

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
