import React from "react";
import FormRenderer from "../../../common/FormRender";
import Form from "./Form";
import { useLocation } from "react-router-dom";
import { createOrg, udpateOrg } from "../../../../services/dashboardService";

const CreateOrg = () => {
  const loc = useLocation();
  const data = loc.state;
  console.log(loc);

  const controls = [
    {
      name: "name",
      title: "entier name",
      data: null,
      type: "text",
      validations: {
        required: { value: true, message: "name is required" },
        minLength: { value: 4, message: "minimun length is 4" },
      },
    },
    {
      name: "address",
      data: null,
      title: "entier Address",
      type: "textarea",
      validations: {
        required: { value: true, message: "Address is required" },
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
        onEdit={udpateOrg}
        onSave={createOrg}
        entity="Organization"
      />
    </div>
  );
};

export default CreateOrg;
