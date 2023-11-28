import React, { useEffect } from "react";
import men from "../../assets/men1.jpg";
import star from "../../assets/bg.jpg";
import listimage1 from "../../assets/companylist1.jpg";
import "./CompanyDetails.css";
import Navbar_new from "../../navbar/Navbar_new";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyDetails } from "../../features/company/Company.Slice";

function CompanyDetails() {
  const param = useParams();
  const { id } = param;
  const companyData = useSelector((state) => state.company);

  const { company_details, compDetail_msg } = companyData;
  const { companyDetails, comments } = company_details;
  const { companyName, company_logo, city, founded, location } = {
    ...companyDetails,
  };

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getCompanyDetails(id));
  }, []);
  return (
    <div>
      <div className="companylist-container">
        <Navbar_new />

        <div className="company-list">
          <div className="company-list1">
            <img className="list-image" src={`http://localhost:9000${company_logo}`}></img>
            <p>
              <b>
                {companyName}
                <button className="addreview-btn"><Link to={`/addcompanyreview/${id}`}> add review </Link></button>
                <br />
                {city}
                <br />
                {location}
                <br/>
                {founded}
              </b>
              
            </p>
          </div>
          <br />
          <hr />
          {comments && 
          comments.map((value)=>(
            

          
          <div className="company-list2">
            <div className="review-company1">
              <img className="review-image" src={`http://localhost:9000${value.user_id.profilepic}`}></img>
            </div>
            <div className="review-company2">
              <h2>{value.user_id.name}</h2>
              <p>{value.createdAt.slice(0,10)}</p>
              <p>
               {value.review}<br/>
                {value.rating}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
