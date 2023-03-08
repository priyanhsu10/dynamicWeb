import React, { useContext } from "react";
import { Menubar } from "./menubar/Menubar";
import "./org.css";
import { Organization } from "./organization/Index";
import { Sidebar } from "./sidbar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Event from "./events";
import Annoucement from "./annoucement/Index";
import { Pages } from "./pages/Index";
import User from "./user";
import CreateOrg from "./organization/create/CreateOrg";
import CreateEvent from "./events/create/CreateEvent";
import { CreateAnnouncement } from "./annoucement/create/CreateAnnouncement";
import CreatePage from "./pages/create/CreatePage";
import Viewer from "../common/Viewer";
import PageViewer from "./pages/PageViewer";
export const DashBoard = ({ onLogout }) => {
  return (
    <>
      <div className="menu">
        <Menubar onLogout={onLogout} />
      </div>
      <div className="list">
        <div>
          <Routes>
            <Route path="/organization">
              <Route index element={<Organization />}></Route>
              <Route path="create" element={<CreateOrg />}></Route>
            </Route>

            <Route path="/events">
              <Route index element={<Event />}></Route>
              <Route path="create" element={<CreateEvent />}></Route>
            </Route>
            <Route path="/annoucements">
              <Route index element={<Annoucement />}></Route>
              <Route path="create" element={<CreateAnnouncement />}></Route>
            </Route>
            <Route path="/pages">
              <Route index element={<Pages />}></Route>
              <Route path="create" element={<CreatePage />}></Route>
              <Route path="view" element={<PageViewer />}></Route>
            </Route>
            <Route path="/users" element={<User />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
