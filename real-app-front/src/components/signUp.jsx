import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import formikValidateWithJoi from "../utils/formikValidateWithJoi";
import Joi from "joi";
import { useAuth } from "../context/auth.context";
import Checkbox from "./common/checkBox";
import { GREY } from ".";

const SignUp = () => {
  const [error, setError] = useState("");

  const { createUser, login } = useAuth();

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_])(?=(.*\d){4,})[a-zA-Z!@%$#^&*\-_\d]{8,}$/;

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
      biz: false,
    },
    validate: formikValidateWithJoi({
      email: Joi.string()
        .min(6)
        .max(225)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string()
        .min(6)
        .max(225)
        .required()
        .regex(passwordRegex)
        .label("Password")
        .messages({
          "string.pattern.base": `The "Password" must contain at least 8 Characters, and include 1 Upper-Case letter, 1 Lower-Case letter, 1 Special Symbol(!@%$#^&*-_) and 4 digits(0-9).`,
        }),
      name: Joi.string().min(2).max(1024).required().label("Name"),
      biz: Joi.boolean(),
    }),
    async onSubmit(values) {
      try {
        await createUser(values);
        await login({ email: values.email, password: values.password });
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) setError(response.data);
      }
    },
  });

  return (
    <div className="row d-flex justify-content-center align-items-center h-100 my-4">
      <div
        style={{ backgroundColor: GREY }}
        className="col-12 col-md-6 col-lg-6 col-xl-4 border rounded px-3 pb-3">
        <PageHeader
          title="Sign Up with Your Biz Cards"
          description="Open a new account, it's free!!!"
        />

        <form onSubmit={form.handleSubmit} noValidate>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("email")}
              type="email"
              label="Email"
              required
              placeholder="email"
              error={form.touched.email && form.errors.email}
            />
          </div>

          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("password")}
              type="password"
              label="Password"
              required
              placeholder="password"
              error={form.touched.password && form.errors.password}
            />
          </div>

          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("name")}
              type="name"
              label="Name"
              required
              placeholder="name"
              error={form.touched.name && form.errors.name}
            />
          </div>

          <div className="form-outline mb-4">
            <Checkbox
              {...form.getFieldProps("biz")}
              label="Sign up as business ?"
              error={form.touched.biz && form.errors.biz}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              disabled={!form.isValid}
              type="submit"
              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
              Sign Up
            </button>
          </div>

          <p className="text-center mt-2 mb-0">
            Have an account?{" "}
            <NavLink to="/sign-in" className="fw-bold">
              Sign In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
