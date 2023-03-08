import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../../App";
import cssstyle from "./menubar.module.css";

export const Menubar = ({ onLogout }) => {
  const loginData = useContext(LoginContext);

  const logout = () => {
    onLogout();
  };
  return (
    <div>
      <nav>
        <ul className={cssstyle.menu}>
          <li className={cssstyle.navitem}>
            <NavLink to="/" className="nav-link active">
              <span className="alert alert-danger">My School</span>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/organization" className="nav-link active">
              Organization
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/events" className="nav-link active">
              Events
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/annoucements" className="nav-link active">
              Annoucements
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/pages" className="nav-link active">
              pages
            </NavLink>
          </li>
          <li className={cssstyle.navitem}></li>
          wellcome - {loginData.userDto.username}
          <li>
            <a to="/pages" className={cssstyle.navitem} onClick={logout}>
              log out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
