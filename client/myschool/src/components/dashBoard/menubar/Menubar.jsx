import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./menubar.css";
import { LoginContext } from "../../../App";

export const Menubar = ({ onLogout }) => {
  const loginData = useContext(LoginContext);

  const logout = () => {
    onLogout();
  };
  return (
    <div>
      <nav>
        <ul className=" menu ">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active">
              <span className="alert alert-danger">My School</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/organization" className="nav-link active">
              Organization
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/events" className="nav-link active">
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/annoucements" className="nav-link active">
              Annoucements
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages" className="nav-link active">
              pages
            </NavLink>
          </li>
          <li className="nav-item"></li>
          wellcome - {loginData.userDto.username}
          <li>
            <a to="/pages" className="nav-link active" onClick={logout}>
              log out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
