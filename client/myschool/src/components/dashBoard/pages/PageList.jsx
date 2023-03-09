import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPages } from "../../../services/dashboardService";
import List from "../../common/List";
import Viewer from "../../common/Viewer";

function PageList() {
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
      name: "content",
      selector: (row) => row.content,
      omit: true,
    },
    {
      name: "organizationId",
      selector: (row) => row.organizationId,
      omit: true,
    },
    {
      name: "organizationId",
      selector: (row) => row.organizationId,
      omit: true,
    },
    {
      cell: (row) => (
        <button className="btn btn-secondary" onClick={() => onview(row)}>
          <i class="fa-solid fa-eye"></i>
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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
}

export default PageList;
