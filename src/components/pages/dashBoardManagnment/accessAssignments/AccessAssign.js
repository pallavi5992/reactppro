import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
const AccessAssign = () => {
  return (
    <div className="accessContainer">
      <div className="content">
        <div className="logoAccesss">
          <div style={{ display: "flex" }}>
            <i className="fa fa-inbox" style={{ padding: "8px" }}></i>
            <h4>Access Assignment</h4>
          </div>
        </div>
        <div className="accessline"></div>
        <div className="accessForm">
          <form action="" style={{ marginTop: "32px" }}>
            <div className="form-group col">
              <label for="exampleFormControlSelect1">Select User</label><br />

              <select className="form-control" id="exampleFormControlSelect1"><br />
                <option>--Select User Role--</option>
                <option>Super Admin</option>
                <option>Module Admin</option>
                <option>Restricted User-AI</option>
                <option>Restricted User-offset & AI</option>
              </select>
            </div>
            <br></br>
            <label for="exampleFormControlSelect1">Select User</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
               Defence Export
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
              Defence Offset
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
              Defence Production
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
                Mission Raksha Gyan Sakti
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
                Make Project
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
                Startups in Defence
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
                Uttar Pradesh Defence Corridor
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
                Tamilnadhu Defence Corridor
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" for="flexCheckChecked">
                AI in Defence
              </label>
            </div>
            <br />
            <div>
              <div style={{display:"flex",justifyContent:"space-around"}} >
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link  to="/accessassign" className="btn btn-primary">Cancel</Link>
              </div>
            </div>
            <br />

          </form>
        </div>

      </div>
      <br/>
 {/* user deatals table data */}
 <div className="accessContainer">
 <div className=" content">
  <div className="accessline">
<div className="assUserData">
  <h5>User Details</h5>
  <a href="#demo" className="btn btn-primary" data-bs-toggle="collapse">Click Here</a>
  <div id="demo" className="collapse">
  <div>

</div>
        <div className="table -responsive">
          <table className="table table-responsive table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr className="bg-info justify-center ">
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  UserName
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  Designation of User
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  Personal Number
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                   Organisation
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  Email ID
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  Mobile No <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  User Type
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  Module Name
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>
                  {" "}
                  <span className="custom-checkbox" />
                  Action
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ajay yadav</td>
                <td>robil</td>
                <td>975231564</td>
                <td>DCP</td>
                <td>ajay@gmail.com</td>
                <td>9752083716</td>
                <td>developer</td>
                <td>developer1</td>
                <td>
                <Link to="/update/user" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </Link>{" "}
                  <button className="btn btn-danger" type="button">
                    Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr>
              <td> dipali yadav</td>
                <td>robil</td>
                <td>975231564</td>
                <td>DCP</td>
                <td>ajay@gmail.com</td>
                <td>9752083716</td>
                <td>developer</td>
                <td>developer1</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-danger" type="button">
                    Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr>
              <td>Rohini mishara</td>
                <td>robil</td>
                <td>975231564</td>
                <td>DCP</td>
                <td>rohini@gmail.com</td>
                <td>9752083716</td>
                <td>developer</td>
                <td>developer1</td>
                <td>
                  <Link to="/user" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </Link>{" "}
                  <button className="btn btn-danger" type="button">
                    Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr>
              <td>sonam</td>
                <td>robil</td>
                <td>975231564</td>
                <td>DCP</td>
                <td>ajay@gmail.com</td>
                <td>9752083716</td>
                <td>developer</td>
                <td>developer1</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-danger" type="button">
                    Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr>
              <td>Ajay yadav</td>
                <td>robil</td>
                <td>975231564</td>
                <td>DCP</td>
                <td>ajay@gmail.com</td>
                <td>9752083716</td>
                <td>developer</td>
                <td>developer1</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-danger" type="button">
                    Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr>
              <td>Rohan sharma</td>
                <td>masho</td>
                <td>975231564</td>
                <td>BPC</td>
                <td>Rohan@gmail.com</td>
                <td>9752083716</td>
                <td>Dp devopes</td>
                <td>developer1</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-danger" type="button">
                    Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* pagination line  */}
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
  </div>
</div>

 </div>





    </div>
  );
};

export default AccessAssign;
