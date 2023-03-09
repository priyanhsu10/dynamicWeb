import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import cssstyle from "./list.module.css";
const List = (prop) => {
  const [filterText, setFilterText] = useState("");
  const onCreate = () => {
    prop.onCreate();
  };
  const onEdit = (row) => {
    console.log("clicked");
    console.log(row);
    prop.onEdit(row);
  };
  const actions = {
    cell: (row) => (
      <button className="btn btn-secondary" onClick={() => onEdit(row)}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };

  const header = [...prop.header, actions];
  let data = prop.data || [];
  data = [...data.filter((x) => x[prop.search].indexOf(filterText) !== -1)];
  return (
    <div>
      <div className={cssstyle.toolbar}>
        <input
          type="text"
          placeholder="search"
          className={`form-control ${cssstyle.search}`}
          onChange={(e) => setFilterText(e.target.value)}
        />

        <button className="btn btn-secondary add" onClick={onCreate}>
          <i className="fa-solid fa-plus  fa-xl"></i>
        </button>
      </div>
      <div>
        <DataTable
          columns={header}
          data={data}
          pagination={true}
          defaultSortFieldId={1}
          title={prop.title}
          selectableRows
        />
      </div>
    </div>
  );
};

export default List;
