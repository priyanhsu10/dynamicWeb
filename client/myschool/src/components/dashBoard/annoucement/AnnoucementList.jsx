import React from "react";
import List from "../../common/List";

export const AnnoucementList = () => {
  const header = ["id", "name"];
  const data = [
    { id: 1, name: "abc" },
    { id: 2, name: "priyanshu" },
    { id: 3, name: "krunal" },
    { id: 4, name: "Anshu" },
  ];
  return <List header={header} data={data}></List>;
};
