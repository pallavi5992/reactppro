import React from 'react'
import { Link } from 'react-router-dom';

const AddupDefenceData = () => {
    return (
        <div className="updateUser">
            <div className="contentAddTl">
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <h5 style={{ color: "#0dc5f1" }}>UP Defence Corridor Project</h5>
                </div>
                <div
                    className="addUserContainer"
                    style={{ display: "flex", justifyContent: "center" ,marginTop:"78px"}}
                >
                    <div className="formAddUser" style={{ width: "90%" }}>
                        <form>

                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label" >
                                    <b>Investment Target:-</b>
                                </label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <br />

                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                    <b>Investment made so far:-</b>
                                </label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" id="staticEmail"  />
                                </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-center">

                                <button type="submit" class="btn btn-primary btn-spacingadduser btn_tl">
                                    Submit
                                </button>
                                <Link to="/admin/index/uttarpradeshdefence" class="btn btn-primary  btn-spacingadduser btn_tl">
                                    cancel
                                </Link></div>
                        </form>
                    </div>
                </div>
                <br />
            </div>


        </div>
    );
}

export default AddupDefenceData
