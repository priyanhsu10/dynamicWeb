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
              <i className="fa-solid fa-school fa-lg"> </i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/organization" className="nav-link active">
              <i className="fa-solid "> Organization</i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/events" className="nav-link active">
              <i className="fa-solid "> Events</i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/annoucements" className="nav-link active">
              <i className="fa-solid "> Annoucements</i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/pages" className="nav-link active">
              <i className="fa-solid "> pages</i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/quicklinks" className="nav-link active">
              <i className="fa-solid "> Quick links</i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/menu" className="nav-link active">
              <i className="fa-solid "> Menu</i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}>
            <NavLink to="/gallary" className="nav-link active">
              <i className="fa-solid "> Gallary</i>
            </NavLink>
          </li>
          <li className={cssstyle.navitem}></li>
          <li className="nav-link active">
            <a className={cssstyle.navitem} onClick={logout}>
              <i className="fa-sharp fa-solid fa-power-off fa-xl"></i>{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
