import React, { useEffect } from "react";
import "./Company_list.css";
import men from "../../assets/men1.jpg";
import listimage1 from "../../assets/companylist1.jpg";
import listimage2 from "../../assets/companylist2.jpg";
import star from "../../assets/bg3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../features/company/Company.Slice";
import Navbar_new from "../../navbar/Navbar_new";

function Company_list() {
  const companies = useSelector((state) => state.company);
  const { cmplist_msg, company_data, error, loading, count } = companies;
  console.log(company_data);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCompanies());
  }, []);
 

  return (
    <div>
      <div className="companylist-container">
        <Navbar_new />
        <div className="Add-company">
          <button className="add-companybutton">
            {" "}
            <Link to="/Create company">Add Company</Link>
          </button>
        </div>
        {company_data &&
          company_data.map(
            ({ _id, companyName, company_logo, location, city }) => {
              {/* console.log(_id, companyName, company_logo, location, city); */}
              return (
                
                <div>
                <Link to={`/companydetails/${_id}`}>
                  <div className="company-list1">
                    <img
                      className="list-image"
                      src={`http://localhost:9000${company_logo}`}
                    ></img>
                  
                
                    <p className="list-h3">{companyName}</p><br/>
                    <p>{location}</p><br/>
                    <br />
                    <p>{city}</p>
                  </div>
                  </Link>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

export default Company_list;
