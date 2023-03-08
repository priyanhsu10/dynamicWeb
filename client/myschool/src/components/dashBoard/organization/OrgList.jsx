import React, { useEffect, useState } from "react";
import List from "../../common/List";
import { getAllOrgs } from "../../../services/dashboardService";
import { useNavigate } from "react-router-dom";

function OrgList() {
  const navigate = useNavigate();

  const [orgsList, setOrgList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllOrgs();
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
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "address",
      selector: (row) => row.address,
    },
  ];

  const onEdit = (row) => {
    navigate("/organization/create", { state: { ...row } });
  };
  const onCreate = () => {
    navigate("/organization/create");
  };
  return (
    <List
      header={header}
      data={orgsList}
      onEdit={onEdit}
      onCreate={onCreate}
      search="name"
    ></List>
  );
}

export default OrgList;
