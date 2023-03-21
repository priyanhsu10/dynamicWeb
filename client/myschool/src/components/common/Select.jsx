import React from "react";

const Select = React.forwardRef(
  ({ onChange, name, value, displayData }, ref) => {
    return (
      <select onChange={onChange} name={name} id="" value={value}>
          {displayData &&
            displayData.map((x) => (
              <option key={x.value} value={x.value}>
                {x.text}
              </option>
            ))}
      </select>
    );
  }
);

export default Select;
