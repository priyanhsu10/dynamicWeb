import React from "react";
import { useLocation } from "react-router-dom";
import {
  createAnnouncenent,
  updateAnnouncenent,
} from "../../../../services/dashboardService";
import FormRenderer from "../../../common/FormRender";

export const CreateAnnouncement = () => {
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
        required: { value: true, message: "Title is required" },
        minLength: { value: 4, message: "Minimun length is 4" },
      },
    },
    {
      name: "description",
      title: "Enter description",
      data: null,
      type: "textarea",
      validations: {
        required: { value: true, message: "Description is required" },
        minLength: { value: 4, message: "Minimun length is 4" },
      },
    },
    {
      name: "startDate",
      title: "Enter startDate",
      data: null,
      type: "date",
      validations: {
        required: { value: true, message: "StartDate is required" },
      },
    },
    {
      name: "endDate",
      title: "Enter End Date",
      data: null,
      type: "date",
      validations: {
        required: { value: true, message: "EndDate is required" },
      },
    },
    {
      name: "organizationId",
      data: null,
      title: null,
      type: "hidden",
      validations: {},
    },
  ];
  return (
    <div>
      {/* <Form></Form> */}
      <FormRenderer
        controls={controls}
        data={data}
        onEdit={updateAnnouncenent}
        onSave={createAnnouncenent}
        entity="Announcement"
      />
    </div>
  );
};

export default CreateAnnouncement;
