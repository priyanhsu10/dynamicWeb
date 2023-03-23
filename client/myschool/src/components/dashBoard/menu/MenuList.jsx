import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../../../services/dashboardService";
import List from "../../common/List";

const MenuList = () => {
  const navigate = useNavigate();

  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getMenu();
      setMenuList(data);
    }
    fetchData();
  }, []);
  const onview = (row) => {
    console.log(row);
  };
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
      name: "Is root",
      selector: (row) => row.root,
    },
    {
      name: "page",
      selector: (row) => row.page?.title,
      // format: (row, index) => new Date(row.startDate).toLocaleDateString(),
    },
    {
      name: "page",
      selector: (row) => row.page?.title,
      // format: (row, index) => new Date(row.startDate).toLocaleDateString(),
    },
    {
      name: "link",
      selector: (row) => row.link?.title,
      // format: (row, index) => new Date(row.startDate).toLocaleDateString(),
    },
    {
      name: "organizationId",
      selector: (row) => row.organizationId,
      omit: true,
    },
    {
      name: "Children",
      cell: (row) => {
        if (row.root && row.menuItemList.length > 0) {
          return (
            <button className="btn btn-secondary" onClick={() => onview(row)}>
              <i class="fa-solid fa-eye"></i>
            </button>
          );
        } else {
          return "";
        }
      },
    },
  ];

  const onEdit = (row) => {
    navigate("/menu/create", { state: { ...row } });
  };
  const onCreate = () => {
    navigate("/menu/create");
  };
  return (
    <List
      header={header}
      data={menuList}
      onEdit={onEdit}
      onCreate={onCreate}
      search="title"
    ></List>
  );
};

export default MenuList;
