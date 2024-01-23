import React, { useState } from 'react'
import "./style.css"
import "bootstrap/dist/js/bootstrap.js";
import { Link } from 'react-router-dom';

const ModuleConfig = () => {
  const [inputEle, setInputEle] = useState([{ target: "" }]);
  const handleAddClick = () => {

    setInputEle([...inputEle, { target: "" }])
  }
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputEle];
    list[index][name] = value;
    setInputEle(list)
  }
  const handleRemoveClick = (index) => {
    const list = [...inputEle];
    list.splice(index, 1)
    setInputEle(list)

  }


  return (
    <div className="configContainer">
      <div className="Configcontent">
        <div className="logoAccesss">
          <div style={{ display: "flex" }}>
            <b><i className="fa fa-inbox" style={{ padding: "8px" }}></i></b>
            <h4>Module Configuration</h4>
          </div>
        </div>
        <div className="accessline"></div>
        <div className="configForm">
          <div style={{ width: "92%" }}>

            <form  >

              <div className="form-horizontal">
                <hr />
              </div>
              <div>
                <div className="row">
                  <div className="">


                    <div className="boxModule"
                      style={{
                        background: "#0abae5",
                        marginBottom: "10px",
                        height: "88px",
                        boxShadow: "-6px 1px 0px 0 #0dcaf0, 5px 8px 19px 0 rgba(0, 0, 0, 0.075)"
                      }}
                    >
                      <div className="callout callout-info">
                        <div className="form-group selus">
                          <label><b>Select Module Name</b></label>
                          <select id="ModuleID" name="ModuleID" className="form-control" style={{ width: "50%" }}>
                            <option value="0">--Select--</option>
                            <option value="1">Defence Export</option>
                            <option value="2">Defence Offset</option>
                            <option value="3">Defence Production</option>
                            <option value="4">Mission Raksha Gyan Shakti</option>
                            <option value="5">Make Project</option>
                            <option value="6">Startups In Defence</option>
                            <option value="7">Uttar Pradesh Defence Corridor</option>
                            <option value="8">Tamil Nadu Defence Corridor</option>
                            <option value="9">AI In Defence</option>
                          </select>
                        </div>

                      </div>
                    </div>

                    <div className="box box-warning assdivw">
                      <div className="box-body">

                        <div className="form-group">
                          <label>Data Year (Current)</label>
                          <select name="DataYearID" className="form-control">

                            <option selected="" value="0">--Select Year--</option>
                            <option value="1">2016-17</option>
                            <option value="2">2017-18</option>
                            <option value="3">2018-19</option>
                            <option value="4">2019-20</option>
                            <option value="5">2020-21</option>
                            <option value="6">2021-22</option>
                            <option value="7">2022-23</option>
                            <option value="8">2023-24</option>
                            <option value="11">2024-25</option>
                          </select>
                          <span id="TxtDateYearID" ></span>
                        </div>

                        <div className="row template" id="txtRow">
                          <div className="dynamic">
                            <div className="col-md-6">
                              <div className="form-group" id="divCont">
                                <label>Target Year</label>
                                <select name="TargetYearID" className="form-control">

                                  <option selected="" value="0">--Select Year--</option>
                                  <option value="1">2016-17</option>
                                  <option value="2">2017-18</option>
                                  <option value="3">2018-19</option>
                                  <option value="4">2019-20</option>
                                  <option value="5">2020-21</option>
                                  <option value="6">2021-22</option>
                                  <option value="7">2022-23</option>
                                  <option value="8">2023-24</option>
                                  <option value="11">2024-25</option>
                                </select>
                                <span id="TxtTargetYearId" ></span>
                              </div>
                            </div>


                            {
                              inputEle.map((x, i) => {
                                return (
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Target</label>
                                      <input type="text" className="form-control" id='clone_area' placeholder="Target" onChange={e => handleInputChange(e, i)} />
                                      <span id="TxtTargetId" ></span>
                                    </div>

                                  </div>
                                )

                              }
                             )}
                            
                          </div>
                        </div>
                        {
                          inputEle.length !== 0 &&

                          <input id="btnAdd" type="button" style={{ marginLeft: "0px" }} value="+" className="button-add plus" onClick={handleAddClick} />
                        }
                        {
                          inputEle.length &&
                          <button className="delete_btn plus" style={{ width: "20px" }} type="button" value="-" onClick={() => inputEle.length > 1 ? handleRemoveClick() : ""} >-</button>
                        }


                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Data Refresh Frequency</label>
                              <select name="DataRefeshFrequency" className="form-control">
                                <option>--Select--</option>
                                <option value="1">Monthly</option>
                                <option value="2">Quarterly</option>
                                <option value="3">Weekly</option>
                              </select>
                              <span id="TxtDataRefeshFrequencyid" ></span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="exampleInputEmail1">As on Date</label>
                              <input name="As_On_Date" type="date" className="form-control" placeholder="As on Date" />
                              <span className="field-validation-valid text-danger" data-valmsg-for="As_On_Date" data-valmsg-replace="true"></span>
                              <span id="TxtIssueDate" ></span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6" id="divStartupEngaged" style={{ display: "none" }}>
                            <div className="form-group">
                              <label>Startups/MSME/Individual Innovators Engaged</label>
                              <input type="text" name="StartupEngaged" value="" className="form-control" placeholder="Startups Engaged" />
                              <span id="StartupsEngagedspn" ></span>
                            </div>
                          </div>
                          <div className="col-md-6" id="divContractsSigned" style={{ display: "none" }}>
                            <div className="form-group">
                              <label>Contracts Signed</label>
                              <input type="text" name="ContractsSigned" value="" className="form-control" placeholder="Contracts Signed" />
                              <span id="ContractsSignedSpn" ></span>
                            </div>
                          </div>

                        </div>

                        <div>
                        </div>
                        <div className="text-center" style={{ marginTop: "20px", display: "flex", gap: "9px", justifyContent: "center" }}>
                          <span className="text-danger"></span>
                          <button type="submit" className="btn btn-primary" id="btnCreSub" >Save</button>
                          <a ><button type="button" className="btn btn-primary" name="btnCancel" id="btnCreSub">Cancel</button></a>

                        </div>
                      </div>
                      <div className="text-center">

                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
      <br />
      {/* user deatals table data */}
      <div className="accessContainer">
        <div class=" content">
          <div className="accessline">
            <div className="assUserData">
              <h5 >History of Module Configuration</h5>
              <a href="#demo" class="btn btn-primary" data-bs-toggle="collapse">Click Here</a>
              <div id="demo" class="collapse">
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
                          <Link to="/update/user" class="btn btn-success">
                            Edit<i class="fas fa-edit"></i>
                          </Link>{" "}
                          <button class="btn btn-danger" type="button">
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
                          <button type="button" class="btn btn-success">
                            Edit<i class="fas fa-edit"></i>
                          </button>{" "}
                          <button class="btn btn-danger" type="button">
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
                          <Link to="/user" class="btn btn-success">
                            Edit<i class="fas fa-edit"></i>
                          </Link>{" "}
                          <button class="btn btn-danger" type="button">
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
                          <button type="button" class="btn btn-success">
                            Edit<i class="fas fa-edit"></i>
                          </button>{" "}
                          <button class="btn btn-danger" type="button">
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
                          <button type="button" class="btn btn-success">
                            Edit<i class="fas fa-edit"></i>
                          </button>{" "}
                          <button class="btn btn-danger" type="button">
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
                          <button type="button" class="btn btn-success">
                            Edit<i class="fas fa-edit"></i>
                          </button>{" "}
                          <button class="btn btn-danger" type="button">
                            Delete <i className="fa fa-trash" aria-hidden="true"></i>{" "}
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
          </div>
        </div>

      </div>





    </div>
  );
}

export default ModuleConfig