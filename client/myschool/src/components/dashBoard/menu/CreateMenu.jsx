import React, { useEffect, useState } from "react";
import FormRenderer from "../../common/FormRender";
import { useLocation } from "react-router-dom";
import {
  createMenu,
  updateMenu,
  getPages,
  getLinks,
} from "../../../services/dashboardService";
const select = { value: "", text: "--select---" };
const CreateMenu = () => {
  const loc = useLocation();
  const data = loc.state;
  console.log(loc);

  const [links, setLinks] = useState([]);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    async function getData() {
      //   Promise.all([getPages, getLinks]).then((presult) => {

      //   });
      // }
      // getData().then(() => console.log("resolve data"));
      const pagedata = await getPages();
      const linkdata = await getLinks();
      console.log(pagedata);
      console.log(linkdata);
      const pageOptions = pagedata.map((x) => {
        return { value: x.id, text: x.title };
      });
      const linkOptions = linkdata.map((x) => {
        return { value: x.id, text: x.title };
      });
      setPages((pre) => [select, ...pageOptions]);
      setLinks((prev) => [select, ...linkOptions]);
    }
    getData();
  }, []);

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
      name: "description",
      data: null,
      title: "Enter Description",
      type: "textarea",
      validations: {
        required: { value: true, message: "content is required" },
        // validate:validLink
      },
    },
    {
      name: "isRoot",
      data: null,
      title: "is Root Menu ",
      type: "check",
      validations: {
        // required: { value: true, message: "content is required" },
      },
    },
    {
      name: "pageId",
      displayData: [...pages],
      data: null,
      title: "Select Page",
      type: "select",
      validations: {
        // required: { value: true, message: "content is required" },
        // minLength: { value: 4, message: "minimun length is 4" },
      },
    },
    {
      name: "linkId",
      displayData: [...links],
      data: null,
      title: "Select link",
      type: "select",
      validations: {
        // required: { value: true, message: "content is required" },
      },
    },
  ];
  return (
    <div>
      {/* <Form></Form> */}
      <FormRenderer
        controls={controls}
        data={data}
        onEdit={updateMenu}
        onSave={createMenu}
        entity="Menu"
      />
    </div>
  );
};

export default CreateMenu;
