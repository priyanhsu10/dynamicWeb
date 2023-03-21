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
import QuickLinks from "./quicklinks";
import SaveLink from "./quicklinks/SaveLink";
import { MenuPage } from "./menu/Index";
import CreateMenu from "./menu/CreateMenu";
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
            <Route path="/quicklinks">
              <Route index element={<QuickLinks />}></Route>
              <Route path="create" element={<SaveLink />}></Route>
            </Route>
            <Route path="/pages">
              <Route index element={<Pages />}></Route>
              <Route path="create" element={<CreatePage />}></Route>
              <Route path="view" element={<PageViewer />}></Route>
            </Route>
            <Route path="/menu">
              <Route index element={<MenuPage />}></Route>
              <Route path="create" element={<CreateMenu />}></Route>
            </Route>
            <Route path="/users" element={<User />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
