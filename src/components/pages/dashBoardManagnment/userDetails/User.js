import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="form-group row">
      {/* User Detail  */}
      <div>
        <ul
          className="nav nav-tabs pull-right ui-sortable-handle"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <li className="pull-left header">
            <i style={{ fontSize: "20px", fontWeight: "bold" }}></i>
            <strong>
              <i className="fa fa-inbox"></i>&nbsp;&nbsp; User Details
            </strong>
          </li>
        </ul>
      </div>

      <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom text-center">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          ></a>
          {/* Add user Button */}

          <div className="col-md-3 text-end">
            <Link to="/admin/index/adduser" className="btn btn-info">
              <i className="fa fa-user-plus" aria-hidden="true"></i>Adduser{" "}
            </Link>
          </div>
        </header>
      </div>

      {/* Search  add navbar this line means  */}
      <div className="container mt-5">
        <div className="">
          <form>
            <div className="row">
              <div className="col">
                <label className="div.relative" style={{ display: "flex" }}>
                  Show
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    className="form-control input-sm"
                    style={{ width: "98px", marginTop: "-6px" }}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  entries
                </label>
              </div>
              <div
                className="col"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <div className="" style={{ width: "210px" }}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    // value={searchTerm}
                    // onChange={(e) => setSearchItem(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <br />

        {/* Table data this line start */}
        <form>
          <div className="">
            <div className="table -responsive">
              <table className="table table-responsive table-striped table-bordered table-hover">
                <thead className="thead-dark">
                  <tr
                    className="bg-info justify-center "
                    style={{ textAlign: "center" }}
                  >
                    <th>UserName</th>
                    <th>Designation of User</th>
                    <th>Personal Number</th>
                    <th>Organisation</th>
                    <th>Email ID</th>
                    <th>
                      Mobile Number <input type="checkbox" id="selectorAll" />
                    </th>
                    <th>User Type</th>
                    <th>Module Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: "center" }}>
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
                        Delete{" "}
                        <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                      </button>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
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
                        Delete{" "}
                        <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                      </button>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>Rohini mishara</td>
                    <td>robil</td>
                    <td>975231564</td>
                    <td>DCP</td>
                    <td>rohini@gmail.com</td>
                    <td>9752083716</td>
                    <td>developer</td>
                    <td>developer1</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        Edit<i className="fas fa-edit"></i>
                      </button>{" "}
                      <button className="btn btn-danger" type="button">
                        Delete{" "}
                        <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                      </button>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
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
                        Delete{" "}
                        <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                      </button>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
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
                        Delete{" "}
                        <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                      </button>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
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
                        Delete{" "}
                        <i className="fa fa-trash" aria-hidden="true"></i>{" "}
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
        </form>
      </div>
    </div>
  );
};

export default User;
