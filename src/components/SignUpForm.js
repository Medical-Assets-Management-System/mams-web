import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./LoginForm/Login.css";
import * as Yup from "yup";
import AuthServices from "../services/AuthService";

const validationSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function SignUpForm() {
  return (
    <div className="form-cont">
      <Formik
        initialValues={{ email: "", password: "", role: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          AuthServices.signUp(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
          return (
            <Form className="form-container">
              <h2>Create an Account</h2>

              <div className="text-fieldcont">
                <Field
                  className="text-field"
                  placeholder="   Example@gmail.com"
                  type="email"
                  name="email"
                />
              </div>
              <ErrorMessage className="err-msg" name="email" component="div" />

              <div className="text-fieldcont">
                <select
                  className="text-field"
                  name="role"
                  value={values.color}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" label="Select a role">
                    Select a Role{" "}
                  </option>
                  <option value="admin" label="admin">
                    {" "}
                    admin
                  </option>
                  <option value="engineer" label="engineer">
                    engineer
                  </option>

                  <option value="nurse" label="nurse">
                    nurse
                  </option>
                </select>
              </div>
              <ErrorMessage className="err-msg" name="email" component="div" />

              <div className="text-fieldcont">
                <Field
                  className="text-field"
                  placeholder="   Password"
                  type="password"
                  name="password"
                />
              </div>
              <ErrorMessage
                className="err-msg"
                name="password"
                component="div"
              />

              <button
                className="login-btn"
                type="submit"
                onClick={handleSubmit}
              >
                SIGNUP
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
