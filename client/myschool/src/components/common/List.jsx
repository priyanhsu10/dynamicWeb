import React from "react";

const List = (prop) => {
  const header = prop.header;
  const data = prop.data;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {header.map((x) => (
              <th key={x} scope="col">
                {x}
              </th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={Math.random().toString()}>
              {header.map((x) => (
                <td key={x} scope="col">
                  {d[x]}
                </td>
              ))}
              <td>action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
