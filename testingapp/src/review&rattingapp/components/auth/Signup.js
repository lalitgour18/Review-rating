import React, { useEffect, useState } from "react";
import "./Signup.css";
import img from "../../assets/bg3.jpg";
import { Link } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from "react-redux";
import { SignUpUser } from "../../features/auth/AuthSlice";

export default function Signup() {
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.user);
  let {error,message,loading} = data;
  useEffect(()=>{
    if (error) {
      toast.error(error,{position: toast.POSITION.TOP_CENTER});
    }
    if (message) {
      toast.success(message,{position: toast.POSITION.TOP_CENTER});
    }
  },[error,message]);
  const [pic, setPic] = useState("");

  const initialstate = {
    name: "",
    email: "",
    number: "",
    city: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your name "),
    email: yup.string().required().email("please enter your email "),
    number: yup.string().required("please enter your number"),
    city: yup.string().required("please enter your city "),
    password: yup.string().required("please enter your password"),
  });

  // const handleSubmit = () => {};
  function picselect(e) {
    setPic(e.target.files[0]);
  }

  function handleSubmit(values){
   let obj = {
    profilepic: pic,
    ...values,
   };
   console.log("this is image",obj);
   dispatch(SignUpUser(obj));

  }
  return (
    <div>
    <ToastContainer/>
      <div className="signup-container">
        <div className="left-signup-wel">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
          <br />
          <br />
          <div className="left-signup-logo"></div>
        </div>
        <div className="right-signup">
          <div className="signup-star">
            <h2 className="signup-h2">Sign up</h2>
            <img src={img} className="signup-img"></img>
          </div>
          <br />
          <Formik
            initialValues={initialstate}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="signup-form">
              <Field
                className="signup-input"
                type="text"
                name="name"
                placeholder="Full Name"
              ></Field>
              <br />
              <br />
              <ErrorMessage name="name"></ErrorMessage>
              <Field
                className="signup-input"
                name="email"
                type="email"
                placeholder=" &#x2709; Email ID"
              ></Field>
              <br />
              <br />
              <ErrorMessage name="email"></ErrorMessage>
              <Field
                className="signup-input"
                name="number"
                type="text"
                placeholder="Phone Number"
              ></Field>
              <br />
              <br />
              <ErrorMessage name="number"></ErrorMessage>
              <Field
                className="signup-input"
                name="city"
                type="city"
                placeholder="City"
              ></Field>
              <br />
              <br />
              <ErrorMessage name="city"></ErrorMessage>
              <Field
                className="signup-input"
                name="password"
                type="state"
                placeholder="password"
              ></Field><br/>
              <ErrorMessage name="password"></ErrorMessage>
              <input type="file" onChange={picselect}></input>
              <button className="signup-btn">Sign Up</button>
              <hr />
              <p className="signup-p1">
                I already have an account <Link to="/">Login</Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
