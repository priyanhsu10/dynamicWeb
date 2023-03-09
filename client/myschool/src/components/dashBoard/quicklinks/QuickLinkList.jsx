import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPages } from "../../../services/dashboardService";
import List from "../../common/List";

const QuickLinkList = () => {
  const navigate = useNavigate();

  const [orgsList, setOrgList] = useState([]);
  const [page, setPage] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await getPages();
      setOrgList(data);
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
      cell: (row) => (
        <a className="link" target="_blank" href={row.title}>
          {row.title}
        </a>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "organizationId",
      selector: (row) => row.organizationId,
      omit: true,
    },
  ];

  const onEdit = (row) => {
    navigate("/pages/create", { state: { ...row } });
  };
  const onview = (row) => {
    navigate("view", { state: row.content });
    setPage((pre) => (pre = row.content));
  };
  const onCreate = () => {
    navigate("/pages/create");
  };
  return (
    <>
      <List
        header={header}
        data={orgsList}
        onEdit={onEdit}
        onCreate={onCreate}
        search="title"
      ></List>
    </>
  );
};

export default QuickLinkList;
