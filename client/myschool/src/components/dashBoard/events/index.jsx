import React from "react";
import { EventList } from "./EventList";

const Event = () => {
  return (
    <div className="list">
      <section className="left">
        <h1>Event</h1>
      </section>
      <section></section>
      <section>
        <EventList />
      </section>
    </div>
  );
};

export default Event;
