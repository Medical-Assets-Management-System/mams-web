import React from "react";
import "./Login.css";
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
const LoginFrom = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
          return (
            <Form className="form-container">
              <h2>Login</h2>

              <div className="text-fieldcont">
                <Field
                  className="text-field"
                  placeholder="Example@gmail.com"
                  type="email"
                  name="email"
                />
              </div>
              <ErrorMessage className="err-msg" name="email" component="div" />

              <div className="text-fieldcont">
                <Field
                  className="text-field"
                  placeholder="Password"
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
                LOGIN
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFrom;
