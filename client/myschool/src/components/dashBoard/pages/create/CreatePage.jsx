import React from "react";
import FormRenderer from "../../../common/FormRender";
import { useLocation } from "react-router-dom";
import { createPage, updatePage } from "../../../../services/dashboardService";

const CreatePage = () => {
  const loc = useLocation();
  const data = loc.state;
  console.log(loc);

  const controls = [
    {
      name: "title",
      title: "Enter title",
      data: null,
      type: "text",
      validations: {
        required: { value: true, message: "name is required" },
        minLength: { value: 4, message: "minimun length is 4" },
      },
    },
    {
      name: "content",
      data: null,
      title: "Enter content",
      type: "content",
      validations: {
        required: { value: true, message: "content is required" },
        minLength: { value: 4, message: "minimun length is 4" },
      },
    },
  ];
  return (
    <div>
      {/* <Form></Form> */}
      <FormRenderer
        controls={controls}
        data={data}
        onEdit={updatePage}
        onSave={createPage}
        entity="Pages"
      />
    </div>
  );
};

export default CreatePage;
