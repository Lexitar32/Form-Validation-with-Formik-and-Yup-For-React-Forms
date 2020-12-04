import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const ModalLogin = () => {
  return (
    <Formik
      // Initial Values of the props
      initialValues={{ email: "", password: "" }}
      // When Submittting
      onSubmit={(values) => {
        console.log(
          `Logging in the Email: ${values.email} with Password: ${values.password}`
        );
      }}
      // Validation Defination Goes Here
      validationSchema={yup.object().shape({
        email: yup.string().email().required("Enter a valid Email Address"),
        password: yup
          .string()
          .required("No Password Provided")
          .min(8, "Password is too short")
          .matches(/(?=.*[0-9])/, "Password should contain a number"),
      })}
    >
      {(props) => {
        const {
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        } = props;
        return (
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              Login as a fellow of TIIDELab
            </button>

            <div
              className="modal fade"
              id="staticBackdrop"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Login to your account
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  {/* Modal Body */}
                  <div className="modal-body">
                    <Form>
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Email Address"
                        className={errors.email && touched.email && "error"}
                      />
                      {errors.email && touched.email && (
                        <div className="input-feedback">
                          <i className="fas fa-exclamation-circle"></i>
                          {errors.email}
                        </div>
                      )}
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your Password"
                        className={
                          errors.password && touched.password && "error"
                        }
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">
                          <i className="fas fa-exclamation-triangle"></i>
                          {errors.password}
                        </div>
                      )}
                      <button type="submit" disabled={isSubmitting}>
                        Login
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ModalLogin;
