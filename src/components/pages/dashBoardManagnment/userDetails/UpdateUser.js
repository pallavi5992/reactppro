import React from 'react'
import { Link } from 'react-router-dom'

const UpdateUser = ({isOpen}) => {
    return (
       
        <div className="updateUser">
        <div className="contentUserAdd">
          <div style={{ display: "flex", justifyContent: "center" }}>
          <strong>
                <h3 style={{color:"#0dc5f1"}}>Update user</h3>
              </strong>
          </div>
  
          <div
            className="addUserContainer"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="formAddUser" style={{ width: "90%" }}>
              <form>
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label"><b>Role:-</b>  </label>
                  <div className="col-sm-10">
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>--Select User Role--</option>
                    <option>Super Admin</option>
                    <option>Module Admin</option>
                    <option>Restricted User-AI</option>
                    <option>Restricted User-offset & AI</option>
                  </select>
                  </div>
                </div>
                <br />
  
  
  
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label" >
                    <b>Name of User:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input type="text"  placeholder="Name of user" className="form-control" id="staticEmail" />
                  </div>
                </div>
                 <br />
  
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Designation of user:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="staticEmail"  placeholder="Designation of user" />
                  </div>
                </div>
                <br />
  
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Personal Number:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="staticEmail"  placeholder=" Enter the Personal Number"/>
                  </div>
                </div>
                <br />
  
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label" >
                    <b>Organisation:-</b>
                  </label>
                  <div className="col-sm-10">
                    
                    <input
                      type="text"
                      className="form-control"
                      id="staticEmail"
                      placeholder=" Organisation"
                    />
                  </div>
                </div>
                <br />
                <br />
  
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label" >
                    <b>Email ID:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="staticEmail"
                      placeholder="Enter the email ID"
                    />
                  </div>
                </div>
                <br />
  
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">
                    <b>Mobile Number:- </b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter the Mobile Number"
                    />
                  </div>
                </div>
                <br />
  
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">
                    <b>User Type:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter the user type"
                    />
                  </div>
                </div>
                <br />
        
  
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">
                    {" "}
                    <b>Module Name:- </b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter the module name"
                    />
                  </div>
                </div>
                <br/>
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">
                    <b>Password:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter the Password"
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">
                    <b>Conform Password:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter the conform Password"
                    />
                  </div>
                </div>
                <br />
  
                <div className="form-group has-feedback" style={{ marginTop: "8px" }}>
                  <div className="captcha text-center" id="LoginCaptcha">
                    <img
                      src="https://ddpdashboard.gov.in/Account/GetCaptchaImage"
                      title="Captcha"
                    ></img>
                    <br />
                    <div>
                      <a
                        href=""
                        style={{ color: "deepskyblue", textDecoration: "none" }}
                      >
                        Refresh
                      </a>
                      <br />
                      <input
                        style={{ paddingLeft: "10px" }}
                        type="text"
                        required
                        placeholder="The Answer is: "
                      ></input>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
  
  
                 <div className="d-flex justify-content-center"> 
                 
                 <button type="submit" className="btn btn-primary btn-spacingadduser">
                  Submit
                </button>
                <Link to="/user" className="btn btn-primary  btn-spacingadduser">
                  cancel
                </Link></div>
            
  
              </form>
            </div>
          </div>
          <br />
        </div>
  
  
      </div>
    )
}

export default UpdateUser