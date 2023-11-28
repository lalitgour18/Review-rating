import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './review&rattingapp/components/auth/Login';
import Signup from './review&rattingapp/components/auth/Signup';
import Error404 from './review&rattingapp/components/Error404';
import { ResetPassword } from './review&rattingapp/components/auth/ResetPassword';
import CreateCompony from './review&rattingapp/components/company/CreateCompony';
import Company_list from './review&rattingapp/components/company/Company_list';
import AddNewReview from './review&rattingapp/components/company/AddNewReview';
import CompanyDetails from './review&rattingapp/components/company/CompanyDetails';
import ForgetPassword from './review&rattingapp/components/auth/ForgetPassword';


function App() {
  return (
    <>
  
     
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<Company_list/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          
          <Route path='/Company_list' element={<Company_list/>}></Route>
          <Route path='/Create company' element={<CreateCompony/>}></Route>
          <Route path='/companydetails/:id' element={<CompanyDetails/>}></Route>
          <Route path='/addcompanyreview/:id' element={<AddNewReview/>}></Route>
          <Route path='/reset' element={ <ResetPassword/>}></Route>
         
          {/* <Route path='/  ' element={<AddNewReview/>}></Route> */}
          <Route path='/Forget' element={<ForgetPassword/>}></Route>
          <Route path='/*' element={<Error404/>}></Route>
        

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
