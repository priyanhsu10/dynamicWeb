import React from "react";
import PageLIst from "./PageList";
import { Toolbar } from "./toolbar/Toolbar";

export const Pages = () => {
  return (
    <div className="list">
      <section className="left">
        <h1>Pages</h1>
      </section>
      <section>
        <Toolbar />
      </section>
      <section>
        <PageLIst />
      </section>
    </div>
  );
};
