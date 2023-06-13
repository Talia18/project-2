import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createCard } from "../services/cardsService";
import { toast } from "react-toastify";
import formikValidateWithJoi from "../utils/formikValidateWithJoi";

const CardCreate = ({ redirect = "/my-cards" }) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateWithJoi({
      bizName: Joi.string().min(2).max(255).required().label("Business Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Business Description"),
      bizAddress: Joi.string()
        .min(2)
        .max(400)
        .required()
        .label("Business Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Business Phone"),
      bizImage: Joi.string()
        .min(11)
        .max(1024)
        .allow("")
        .label("Business Image"),
    }),
    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        await createCard(body);
        toast("A new Card Created 👏🏾");
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  return (
    <div className="row d-flex justify-content-center align-items-center h-100 my-4">
      <div
        style={{ backgroundColor: "#b2bFBE" }}
        className="col-12 col-md-6 col-lg-6 col-xl-4 border rounded px-3 pb-3">
        <PageHeader
          title="Create new Card"
          description="Now You can create a new Card"
        />

        <form onSubmit={form.handleSubmit} noValidate>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizName")}
              type="text"
              label="Name"
              required
              placeholder="bizName"
              error={form.touched.bizName && form.errors.bizName}
            />
          </div>

          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizDescription")}
              type="text"
              label="Description"
              required
              placeholder="bizDescription"
              error={form.touched.bizDescription && form.errors.bizDescription}
            />
          </div>

          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizAddress")}
              type="text"
              label="Address"
              required
              placeholder="bizAddress"
              error={form.touched.bizAddress && form.errors.bizAddress}
            />
          </div>

          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizPhone")}
              type="tel"
              label="Phone"
              required
              placeholder="bizPhone"
              error={form.touched.bizPhone && form.errors.bizPhone}
            />
          </div>

          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizImage")}
              type="text"
              label="Image"
              placeholder="bizImage"
              error={form.touched.bizImage && form.errors.bizImage}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              disabled={!form.isValid}
              type="submit"
              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
              Create Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardCreate;
