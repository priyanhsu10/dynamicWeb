import React from "react";
import OrgList from "./OrgList";
import { Toolbar } from "./toolbar/Toolbar";

export const Organization = () => {
  return (
    <div>
      <section>
        <h1>Organization</h1>
      </section>

      <section>
        <OrgList />
      </section>
    </div>
  );
};
