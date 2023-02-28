import "./App.css";
import { useState } from "react";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { DashBoard } from "./components/dashBoard/Index";
function App() {
  const [login, setLogin] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        {login && <DashBoard />}
        {!login && (
          <div>
            <Login onLogin />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
