import React, { useState } from "react";
import DataTable from "react-data-table-component";

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
        Edit
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
      <div className="toolbar">
        <input
          type="text"
          placeholder="search"
          className="form-control search"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={onCreate}>
          add +
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
