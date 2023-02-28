import React from "react";
import { NavLink } from "react-router-dom";
import "./menubar.css";
export const Menubar = () => {
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
          <li>
            <NavLink to="/pages" className="nav-link active">
              log out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
