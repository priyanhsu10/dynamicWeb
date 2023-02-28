import React from "react";
import OrgList from "./OrgList";
import { Toolbar } from "./toolbar/Toolbar";

export const Organization = () => {
  return (
    <div className="list">
      <section className="left">
        <h1>Organization</h1>
      </section>
      <section>
        <Toolbar />
      </section>
      <section>
        <OrgList />
      </section>
    </div>
  );
};
