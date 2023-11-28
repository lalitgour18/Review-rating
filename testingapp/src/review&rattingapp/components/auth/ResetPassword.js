import React from "react";
import star from "../../assets/bg3.jpg";
import "./Reset.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export const ResetPassword = () => {
  const initialState = {
    newPassword: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object().shape({
    newPassword: yup.string().required("Please enter your subject"),
    confirmPassword: yup.string().required("please enter your confirmed password "),
  });
  function handleSubmit(values) {
    console.log("values", values);
   
  }
  return (
    <>
      <h1>nnnnnnnnn</h1>
      <div className="resetPass-container">
        <div className="reset-password">
          <div className="reset-star">
            <h2 className="reset-h2">Reset Password</h2>
            <img src={star} className="reset-img"></img>
          </div>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field
                type="password"
                name="newPassword"
                className="reset-input"
                placeholder="&#x2709; Enter your new password"
              />
              <br />
              <ErrorMessage name="newPassword"></ErrorMessage>
              <Field
                type="password"
                name="confirmPassword"
                className="reset-input"
                placeholder="&#x2709; Enter confirm password"
              />
              <br />
              <ErrorMessage name="confirmPassword"></ErrorMessage>

              <button className="reset-btn" type="Submit">
                Reset
              </button>
            </Form>
          </Formik>
          <br />

          <hr />
        </div>
      </div>
    </>
  );
};
