import React from "react";
import DataTable from "react-data-table-component";

const List = (prop) => {
  const handleButtonClick = (row) => {
    console.log("clicked");
    console.log(row);
  };
  const actions = {
    cell: (row) => (
      <button
        className="btn btn-secondary"
        onClick={() => handleButtonClick(row)}
      >
        Edit
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };
  const header = [...prop.header, actions];
  const data = prop.data;
  return (
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
  );
};

export default List;
