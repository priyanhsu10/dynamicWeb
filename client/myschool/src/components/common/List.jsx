import React from "react";
import DataTable from "react-data-table-component";
const List = (prop) => {
  const header = prop.header;
  const data = prop.data;
  return (
    <div>
      <DataTable
        columns={header}
        data={data}
        pagination={true}
        defaultSortFieldId={1}
        title={prop.title}
      />
    </div>
  );
};

export default List;
