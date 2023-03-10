import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLinks } from "../../../services/dashboardService";
import List from "../../common/List";

const QuickLinkList = () => {
  const navigate = useNavigate();

  const [linkList, setLinkList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getLinks();
      setLinkList(data);
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
      name: "Link",
      cell: (row) => (
        <a className="link" target="_blank" href={row.link} rel="noreferrer">
          {row.title} <i class="fa-solid fa-link"></i>
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
    navigate("/quicklinks/create", { state: { ...row } });
  };

  const onCreate = () => {
    navigate("/quicklinks/create");
  };
  return (
    <>
      <List
        header={header}
        data={linkList}
        onEdit={onEdit}
        onCreate={onCreate}
        search="title"
      ></List>
    </>
  );
};

export default QuickLinkList;
