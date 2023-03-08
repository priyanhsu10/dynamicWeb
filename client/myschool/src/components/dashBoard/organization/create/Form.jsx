import React from "react";
import "./create.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createOrg, udpateOrg } from "../../../../services/dashboardService";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const toastoptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};
function Form() {
  let name;
  let address;
  let id;
  let title = "Create";

  const param = useLocation();
  const navigate = useNavigate();
  if (param.state) {
    title = "Edit";
    name = param.state.name;
    address = param.state.address;
    id = +param.state.id;
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onCancel = (e) => {
    e.preventDefault();

    //check form is dirty and ask for cofirmation
    navigate(-1);
  };

  const onSave = (data) => {
    if (title === "Create") createOrg(data);
    else {
      udpateOrg(id, data);
    }
    toast.success(`Data ${title} successfully`, toastoptions);
    navigate(-1);
  };
  console.log("errors", errors);
  return (
    <>
      <div>
        <h3>{title} Organization</h3>{" "}
      </div>
      <form onSubmit={handleSubmit(onSave)}>
        <div className="form">
          <div>
            <label className="form-label">name</label>
            <input
              defaultValue={name}
              {...register("name", {
                required: { message: "test 1233434", value: true },
              })}
              type="text"
              className="form-control"
            />
          </div>
          {errors.name && (
            <div className="alert alert-danger">Name is required </div>
          )}

          <div>
            <label className="form-label">Address</label>
            <textarea
              defaultValue={address}
              {...register("address", { required: true })}
              rows="4"
              type="text"
              className="form-control"
            />
          </div>
          {errors.address && (
            <div className="alert alert-danger">Address is requried</div>
          )}
          <div className="buttons">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onCancel}
            >
              cancel
            </button>
            <button type="submit" className=" btn btn-primary">
              {title}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
