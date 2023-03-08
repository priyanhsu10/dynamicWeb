import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEvets } from "../../../services/dashboardService";
import List from "../../common/List";

export const EventList = () => {
  const navigate = useNavigate();

  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getEvets();
      setEventList(data);
    }
    fetchData();
  }, []);
  const header = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      format: (row, index) => new Date(row.startDate).toLocaleDateString(),
    },

    {
      name: "End Date",
      selector: (row) => row.endDate,
      format: (row, index) => new Date(row.startDate).toLocaleDateString(),
    },
    {
      name: "organizationId",
      selector: (row) => row.organizationId,
      omit: true,
    },
  ];

  const onEdit = (row) => {
    navigate("/events/create", { state: { ...row } });
  };
  const onCreate = () => {
    navigate("/events/create");
  };
  return (
    <List
      header={header}
      data={eventList}
      onEdit={onEdit}
      onCreate={onCreate}
      search="title"
    ></List>
  );
};
