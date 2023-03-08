import "./App.css";
import React, { useState, useContext, useEffect, Er } from "react";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { DashBoard } from "./components/dashBoard/Index";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-quill/dist/quill.snow.css";
export const LoginContext = React.createContext();
function App() {
  const [login, setLogin] = useState();
  useEffect(() => {
    const data = localStorage.getItem("loginData");
    if (data === null || data === "[object Object]") {
      return;
    }
    const time = localStorage.getItem("tokentime");
    const currenttime = new Date().toLocaleDateString();

    if (time === currenttime) {
      setLogin(JSON.parse(data));
    }
  }, []);

  const onLogin = (result) => {
    setLogin(result);
    localStorage.setItem("token", result.token);
    localStorage.setItem("loginData", JSON.stringify(result));
    localStorage.setItem("tokentime", new Date().toLocaleDateString());
  };
  const onLogout = () => {
    console.log("loging out ");
    setLogin(null);
    localStorage.removeItem("token");
    localStorage.removeItem("loginData");
  };
  return (
    // <ErrorBoundary>
    <BrowserRouter>
      <ToastContainer />
      <div>
        {login && (
          <LoginContext.Provider value={login}>
            <DashBoard onLogout={onLogout} />
          </LoginContext.Provider>
        )}
        {!login && (
          <div>
            <Login onLogin={onLogin} />
          </div>
        )}
      </div>
    </BrowserRouter>
    // </ErrorBoundary>
  );
}

export default App;
