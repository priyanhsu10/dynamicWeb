import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAnnouncenent } from "../../../services/dashboardService";
import List from "../../common/List";

export const AnnoucementList = () => {
  const navigate = useNavigate();

  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getAnnouncenent();
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
    navigate("/annoucements/create", { state: { ...row } });
  };
  const onCreate = () => {
    navigate("/annoucements/create");
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
