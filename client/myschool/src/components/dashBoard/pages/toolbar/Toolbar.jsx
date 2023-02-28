import React from "react";
import Search from "./Search";

export const Toolbar = () => {
  return (
    <div className="d-flex p-2 justify-content-evenly">
      <Search />
      <button type="button">create</button>
    </div>
  );
};
