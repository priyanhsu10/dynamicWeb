import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { DashBoard } from "./components/dashBoard/Index";
export const LoginContext = React.createContext();
function App() {
  const [login, setLogin] = useState();
  useEffect(() => {
    const data = localStorage.getItem("loginData");
    if (data === null || data === "[object Object]") {
      return;
    }
    setLogin(JSON.parse(data));
  }, []);

  const onLogin = (result) => {
    setLogin(result);
    localStorage.setItem("token", result.token);
    localStorage.setItem("loginData", JSON.stringify(result));
  };
  const onLogout = () => {
    console.log("loging out ");
    setLogin(null);
    localStorage.removeItem("token");
    localStorage.removeItem("loginData");
  };
  return (
    <BrowserRouter>
      <div className="App">
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
  );
}

export default App;
