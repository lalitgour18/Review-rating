import React, { useEffect } from "react";
import image from "../../assets/bg3.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { SignInUser, clearState} from "../../features/auth/AuthSlice";
import { ToastContainer,toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom";

export default function Login() { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  let {error, message, loading} = data
  useEffect(()=>{
    if (error) {
      toast.error(error,{position: toast.POSITION.TOP_CENTER});
      setTimeout(()=>{
        dispatch(clearState())
        navigate("/");
      },2000);
    }
    if (message) {
      toast.success(message,{position: toast.POSITION.TOP_CENTER});
      setTimeout(()=>{
        dispatch(clearState())
        navigate('/Company_list/');
      },2000);
    }
  },[error,message]);
  const initialstate = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    
    email: yup.string().required().email("please enter your email "),
    password: yup.string().required("please enter your password"),

  });
 const handleSubmit= async(values)=>{

  console.log("values",values);
  const result = await dispatch(SignInUser(values));
  // if (result.payload.message == "Login success") {
  //   navigate('/Company_list/');
  // }
 }


  return (
    <div className="login-container">
    <ToastContainer/>
      <div className="login-main">
        <div className="left-page">
          <h1>Welcome</h1>
          <p>
            lorem ipsum dolor sit amet, consecutor
            <br /> adipiscing edit.
          </p>
          <br />
          <div className="img"></div>
        </div>
        <div className="right-page">
          <div className="login-container2">
            <div className="left-login-logo"></div>
            <div className="right-login">
              <br />
              <div className="login-star">
                <h2 className="login-h2">Login</h2>
                <img src={image} className="login-img"></img>
              </div>
              <br />
              <p className="login-p">
                Hello! please enter your details for login
              </p>
              <br />
              <br />
              <Formik
                initialValues={initialstate}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="login-form">
                  <Field
                    className="login-input"
                    type="text"
                    placeholder="Email"
                    name="email"
                  ></Field>
                  <br />
                  <ErrorMessage name="email"></ErrorMessage>
                  <br />
                  <Field
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    name ="password"
                  ></Field>
                  <br />
                  <ErrorMessage name="password"></ErrorMessage>
                  <br />

                  <p className="login-p1">
                    {" "}
                    <Link to="forget">Reset password ?</Link>
                  </p>
                  <br />
                  <button  className="login-btn">Login</button>
                  <br />
                  <br />
                  <hr />
                  <br />

                  <p className="login-p2">
                    I don't have an account on Review & Rate
                  </p>
                </Form>
              </Formik>
              <Link className="login-register" to="signup">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
