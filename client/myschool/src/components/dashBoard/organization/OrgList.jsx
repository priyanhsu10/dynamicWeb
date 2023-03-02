import React, { useEffect, useState } from "react";
import List from "../../common/List";
import { getAllOrgs } from "../../../services/dashboardService";

function OrgList() {
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

  return <List header={header} data={orgsList}></List>;
}

export default OrgList;
