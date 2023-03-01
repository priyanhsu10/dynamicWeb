import React from "react";
import List from "../../common/List";

export const EventList = () => {
  const header = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
  ];
  const data = [
    { id: 1, name: "abc" },
    { id: 2, name: "priyanshu" },
    { id: 3, name: "krunal" },
    { id: 4, name: "Anshu" },
    { id: 5, name: "abc" },
    { id: 6, name: "priyanshu" },
    { id: 7, name: "krunal" },
    { id: 8, name: "Anshu" },
    { id: 9, name: "abc" },
    { id: 10, name: "priyanshu" },
    { id: 11, name: "krunal" },
    { id: 12, name: "Anshu" },
    { id: 13, name: "abc" },
    { id: 14, name: "priyanshu" },
    { id: 15, name: "krunal" },
    { id: 16, name: "Anshu" },
  ];

  return <List title="Event list" header={header} data={data}></List>;
};
