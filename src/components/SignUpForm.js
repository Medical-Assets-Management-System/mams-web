import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <div>
      <Formik
        initialValues={{ email: "", password: "", role: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
          return (
            <Form className="form-container">
              <h2>SignUP</h2>
              <div className="unvalid-msg-cont">
                {/* <p className="unvalid-msg">{wrong}</p> */}
              </div>
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
                  name="roles"
                  value={values.color}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" label="Select a role">
                    Select a color{" "}
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
