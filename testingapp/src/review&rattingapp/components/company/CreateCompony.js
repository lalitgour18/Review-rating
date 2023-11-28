import React, { useEffect }  from "react";
import "./CreateCompany.css";
import * as yup from "yup";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { clearState, createCompany } from "../../features/company/Company.Slice";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function CreateCompony() {
  // const navigate = useNavigate();
    const dispatch = useDispatch();
    const companyData = useSelector((state)=> state.company);
    let { error , cmpcreate_msg, loading } = companyData;
    const [pic,setPic] = useState("");
    useEffect(() => {
        if(cmpcreate_msg) {
          toast.success(cmpcreate_msg, { position: toast.POSITION.TOP_CENTER });
        }
        if(error) {
          toast.error(error, {position: toast.POSITION.TOP_CENTER});
        }
        
      }, [cmpcreate_msg, error]);
    const initialState = {
        companyName: "",
        location: "",
        city: "",
        Date: "",
      };
      const validationSchema = yup.object().shape({
        companyName: yup.string().required("Please enter company name"),
        location: yup.string().required("Please enter company location"),
        city: yup.string().required("Please enter city"),
        founded: yup.string().required("Please enter company founded date"),
      });
    
      function handleSubmit(values) {
      
        const user = JSON.parse(localStorage.getItem("user"));
      
        let obj = {
            ...values,
            company_logo:pic,
            userId: user._id,
        }
       console.log(obj)
       dispatch(createCompany(obj))      
      }
    function addCompanyPic(e){
        setPic(e.target.files[0])
    }
  return (
    <div>
    <ToastContainer/>
      <div className="main">
        <div className="company">
          <div className="textinputs">
            <h1>Add company</h1>
            <br />
            <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
             >
             <Form>
            <label className="company-label">Company name </label>
            <br />
            <Field type="text" placeholder="Enter" name="companyName"></Field>
            <br />
            <ErrorMessage name="companyName"></ErrorMessage>
            <br />
            <label className="company-label2">Location </label> <br />
            <Field type="Location" placeholder="Select location" name="location"></Field> <br />
            <br /><ErrorMessage name="location"></ErrorMessage>
            <label className="company-label3">City</label>
            <br />
            <Field type="text" placeholder="Select city" name="city"></Field>
            <br />
            <ErrorMessage name="city"></ErrorMessage>
            <br />
            <label className="company-label4">Founded on </label>
            <br />
            <Field className="dateinput" type="text" name="founded"></Field>
            <br />
            <ErrorMessage name="founded"></ErrorMessage>
            <br />
            <input type="file" name="compony_logo" onChange={addCompanyPic}></input>
            <button className="company-button" type="submit">Save</button>
            <br/>
            
            </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCompony;

