import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "./Select";
import { TextE2 } from "./TextE2";
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
const FormRenderer = ({ controls, onSave, onEdit, data, entity }) => {
  const navigate = useNavigate();
  let title = "Create";
  if (data) {
    controls.forEach((x) => {
      x.data = data[x.name];
    });
    title = "Update";
  }
  const onCancel = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  console.log("err:", errors);
  const save = async (formData) => {
    let result = false;
    if (title === "Create") {
      result = await onSave(formData);
    } else {
      result = await onEdit(data.id, formData);
    }
    if (result) {
      toast.success(`Data ${title} successfully`, toastoptions);
      navigate(-1);
    }
  };
  const setDate = (datealue) => {
    if (!datealue) {
      return null;
    }
    let date = new Date(datealue);
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    var formattedDate = year + "-" + month + "-" + day;
    console.log(formattedDate); // Prints: 04-05-2022

    return formattedDate;
  };
  return (
    <div>
      <div>
        <h3>
          {title} {entity}
        </h3>
      </div>
      <form onSubmit={handleSubmit(save)}>
        <div className="form">
          {controls.map((c) => {
            return (
              <div key={c.name}>
                <div>
                  {c.title && <label className="form-label">{c.title}</label>}
                  {c.type === "text" && (
                    <input
                      defaultValue={c.data}
                      {...register(`${c.name}`, c.validations)}
                      type="text"
                      className="form-control"
                    />
                  )}
                  {c.type === "check" && (
                    <input
                      defaultValue={c.data}
                      {...register(`${c.name}`, c.validations)}
                      type="checkbox"
                      className="form-check-input"
                    />
                  )}
                  {c.type === "textarea" && (
                    <textarea
                      defaultValue={c.data}
                      {...register(`${c.name}`, c.validations)}
                      rows="4"
                      type="text"
                      className="form-control"
                    />
                  )}
                  {c.type === "date" && (
                    <input
                      defaultValue={setDate(c.data)}
                      {...register(`${c.name}`, c.validations)}
                      type="date"
                      attern="\d{4}-\d{2}-\d{2}"
                      className="form-control"
                    />
                  )}

                  {c.type === "content" && (
                    <Controller
                      name={c.name}
                      defaultValue={c.data}
                      control={control}
                      render={({ field }) => <TextE2 {...field} />}
                    />
                  )}
                  {c.type === "select" && (
                    <select
                      defaultValue={c.data}
                      {...register(`${c.name}`, c.validations)}
                      type="text"
                      className="form-select"
                    >
                      {c.displayData &&
                        c.displayData.map((x) => (
                          <option key={x.value} value={x.value}>
                            {x.text}
                          </option>
                        ))}
                    </select>
                    // <Controller
                    //   name={c.name}
                    //   defaultValue={c.data}
                    //   control={control}
                    //   render={({ field }) => (
                    //     <Select {...field} dispalyData={c.displayData} />
                    //   )}
                    // <input
                    //   defaultValue={c.data}
                    //   {...register(`${c.name}`)}
                    //   type="hidden"
                    // />
                  )}
                  {c.type === "hidden" && (
                    <input
                      defaultValue={c.data}
                      {...register(`${c.name}`)}
                      type="hidden"
                    />
                  )}
                </div>
                {errors[`${c.name}`] && (
                  <div className="alert alert-danger">
                    {errors[`${c.name}`].message}
                  </div>
                )}
              </div>
            );
          })}

          <div className="buttons">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onCancel}
            >
              cancel
            </button>
            <button type="submit" className="primary">
              {title} <i className="fa-solid fa-wrench"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRenderer;
