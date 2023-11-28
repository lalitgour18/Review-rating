import React, { useEffect } from "react";
import "./AddNewReview.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { companyReview,clearState } from "../../features/review/ReviewSlice";
function AddNewReview() {
   
  const navigate = useNavigate();
  const param = useParams();
  const {id} = param
let user = JSON.parse(localStorage.getItem("user"));
const dispatch =useDispatch();

  const initialState = {
    subject: "",
    review: "",
    rating: "",
  };

  const validationSchema = yup.object().shape({
    subject: yup.string().required("Please enter your subject"),
    rating: yup.string().required("Please enter description"),
    review: yup.string().required("Please enter rating"),
  });

  function handleSubmit(values) {
    console.log("Values", values);
    let obj = {
      ...values,
      company_id: id,
      user_id: user._id
    };
    dispatch(companyReview(obj));
  }
  const review = useSelector((state)=>state.review);

  const { review_msg, loading,error}=review;

  useEffect(()=>{
    if (review_msg) {
      toast.success(review_msg,{ position:toast.POSITION.TOP_CENTER});
      setTimeout(()=>{
        dispatch(clearState());
        navigate(`/companydetails/${id}`)
      },1000);
    }
    if (error){
      toast.error(error,{position: toast.POSITION.TOP_CENTER});
    }
  },[review_msg,error])

  return (
    <div>
    <ToastContainer/>
      <div className="maincontainer">
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
        <Form>
          <div className="formdetails">
            <h1>Add review</h1>
            <br />
            <label>Subject</label>
            <br />
            <Field
              className="input1"
              type="text"
              placeholder="Enter"
              name="subject"
            ></Field>
            <br />
            <ErrorMessage name="subject"></ErrorMessage>
            <br />
            <label>Rating</label>
            <Field
              className="input3"
              type="text"
              placeholder="Give your rating"
              name="rating"
            ></Field>
            <br />
            <ErrorMessage name="rating"></ErrorMessage>
            <br /> 
            <label className="label2">Enter your review</label>
            <br />
            <Field
              className="input2"
              type="text"
              placeholder="Description"
              name="review"
            ></Field>
            <br />
            <ErrorMessage name="review"></ErrorMessage>
            <br />
            <div>
              <br />
              <br />
            </div>
            <button className="addreview-butons" type="submit" >ADD</button>
          </div>
        </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddNewReview;
