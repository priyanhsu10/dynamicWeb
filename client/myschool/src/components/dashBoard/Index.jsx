import React from "react";
import { Menubar } from "./menubar/Menubar";
import "./org.css";
import { Organization } from "./organization/Index";
import { Sidebar } from "./sidbar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Event from "./events";
import Annoucement from "./annoucement/Index";
import { Pages } from "./pages/Index";
import User from "./user";
export const DashBoard = () => {
  return (
    <>
      <div className="menu">
        <Menubar />
      </div>
      <div className="parent">
        <div className="data">
          <Routes>
            <Route path="/organization" element={<Organization />}></Route>

            <Route path="/events" element={<Event />}></Route>
            <Route path="/annoucements" element={<Annoucement />}></Route>
            <Route path="/pages" element={<Pages />}></Route>
            <Route path="/users" element={<User />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
