import React from "react";
import { AnnoucementList } from "./AnnoucementList";

const Annoucement = () => {
  return (
    <div className="list">
      <section className="left">
        <h1>Annoucement</h1>
      </section>
      <section></section>
      <section>
        <AnnoucementList />
      </section>
    </div>
  );
};

export default Annoucement;
