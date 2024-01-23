import React from 'react'
import { Link} from "react-router-dom"
const PrivateSectore = () => {
  return (
    <div className="form-group row">
    {/* //  <div className="form-group row"> */}
    {/* // <div className="userDiv"></div> */}
    {/* User Detail  */}
    <div>
      <ul
        className="nav nav-tabs pull-right ui-sortable-handle"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <li className="pull-left header">
          <i style={{ fontSize: "20px", fontWeight: "bold" }}></i>
          <strong>
              <h3><strong><i className="fa fa-inbox"></i>Organisation List</strong></h3>
            </strong>
          {/* <hr/> */}
        </li>
      </ul>
    </div>

    {/* Hearde Private sector and Public sector Add user */}

    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom text-center">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          {/* <p>Front add Data </p> */}
        </a>

        {/* Public sector and Private sector */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
          <Link
            to="/admin/index/organisationmaster"
            className="btn btn-outline-success btn-lg btn-block resizable-btn custom-padding btn-spacing"
          >
            <i aria-hidden="true"></i>Public sector
          </Link>
          <Link
            to="/addorganisationmaster"
            className="btn btn-success btn-lg btn-block resizable-btn custom-padding"
          >
            <i aria-hidden="true"></i>Private sector
          </Link>
          </li>
        </ul>

        {/* Add user Button */}
        <div className="col-md-3 text-end">
        <Link to="/addorganisationmaster" className="btn btn-info"  ><i class="fa fa-user-plus" aria-hidden="true"></i>Add Organisation</Link>
        </div>
      </header>
    </div>

    {/* Search  add navbar this line means  */}

    <div className="d-flex justify-content-end">
      <form>
        <input class="form-control me-2" type="text" placeholder="Search" />
      </form>
    </div>

    {/* Table data this line start */}
    <div className="container mt-5">
      <div className="table -responsive">
        <table className="table table-responsive table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr className="bg-info justify-center ">
              <th>
                <span className="custom-checkbox" />
                Name
                <input type="checkbox" id="selectorAll" />
                <label for="selectAll"></label>
              </th>
              <th>Code</th>
              <th>Sector</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rohan sharma</td>
              <td>ajay@gmail.com</td>
              <td>developer</td>
              <td>
                <button type="button" class="btn btn-success">
                  Edit<i class="fas fa-edit"></i>
                </button>{" "}
                <button class="btn btn-danger" type="button">
                  Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td> lokehs</td>
              <td> LOkesh@gmail.com</td>
              <td>developer mode</td>
              <td>
                <button type="button" class="btn btn-success">
                  Edit <i class="fas fa-edit"></i>
                </button>{" "}
                <button class="btn btn-danger" type="button">
                  Delete <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>diksha</td>
              <td> diksha01@gmail.com</td>
              <td>defence</td>
              <td>
                <button type="button" class="btn btn-success">
                  Edit<i class="fas fa-edit"></i>
                </button>{" "}
                <button class="btn btn-danger" type="button">
                  Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td>raksha</td>
              <td> dinesh@gmail.com</td>
              <td>Development production</td>
              <td>
                <button type="button" class="btn btn-success">
                  Edit <i class="fas fa-edit"></i>
                </button>{" "}
                <button class="btn btn-danger" type="button">
                  Delete <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>DIksha </td>
              <td> yadav@gmail.com</td>
              <td>Production</td>
              <td>
                <button type="button" class="btn btn-success">
                  Edit<i class="fas fa-edit"></i>
                </button>{" "}
                <button class="btn btn-danger" type="button">
                  Delete <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>rakha </td>
              <td> Pal@gmail.com</td>
              <td>email</td>

              <td>
                <button type="button" class="btn btn-success">
                  Edit <i class="fas fa-edit"></i>
                </button>{" "}
                <button class="btn btn-danger" type="button">
                  Delete <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* pagination line  */}
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default PrivateSectore