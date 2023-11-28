import React from 'react'
import "./ForgetPassword.css"
import image2 from "../../assets/bg3.jpg"
import { Field, Formik,Form } from 'formik'
import * as yup from "yup"
import { forgetPassword } from '../../features/auth/AuthSlice'
import { useDispatch } from 'react-redux'
// import * as yup from "yup"   



function ForgetPassword() {
    const dispatch = useDispatch();
 const initialvalue ={

 };
 const  validationSchema = yup.object().shape(
    {email: yup.string().required().email("Please enter your subject"),
    
  });

 function handleSubmit(values){
console.log("values",values)
;
dispatch(forgetPassword(values));
 }


 

  return (
    <div>
    <Formik
    initialValues={initialvalue}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}>
    <Form>
      <div className='reset-password'>
        <div className='reset-star'>
          <h2 className='reset-h2'>Forget Password</h2>
          <img src={image2} className='reset-img'></img>
        </div>
        <form>
            <Field 	name="email" type='text' className='reset-input' placeholder='&#x2709; Enter Email'></Field>
        </form><br/><br/>
        <button className='reset-btn' type='submit'>Forget</button>
        <hr/>
        </div>
        </Form>
        </Formik>
    </div>
  )
}

export default ForgetPassword
