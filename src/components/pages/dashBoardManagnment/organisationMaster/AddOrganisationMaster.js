import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AddOrganisationMaster = () => {
  return (

    <div className="updateusermaster">
      <div className="contentUserAddmaster">
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ color: "#0dc5f1" }}>Create Organization</h4>
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <div className="formAddUser" style={{ width: "90%" }}>
            <form  className="paddingmastertop">
            <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Name:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              <br/>
              
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Code:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the code"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              <br/>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label"><b> Sector:-</b>  </label>
                <div className="col-sm-10">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>--Select sectore--</option>
                  <option>Private sectore</option>
                  <option>Public sector</option>
                
                </select>
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Action:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Action"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br/>

              <div className="d-flex justify-content-center"> 
               
               <button type="submit" className="btn btn-primary btn-spacingaddusermaster ">
                Submit
              </button>
              <Link to="/admin/index/organisationmaster" className="btn btn-primary  btn-spacingaddusermaster ">
                cancel
              </Link>
              </div>
            </form>
        
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default AddOrganisationMaster;
