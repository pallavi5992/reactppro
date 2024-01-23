import React from 'react'
import "./style.css"
const DiscMaster = () => {
  return (
    <div className="updateUser">
      <div className="contentMaster">
        <div className='moduleHeading'>
          <strong>  <p>DicsMaster</p> </strong>
        </div>

        <div className="formUpdate">
          <form>
            <div class="form-group resizable-btn">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Disc master"
              />
              <br />
            </div>

            <button type="submit" class="btn btn-info btn-lg btn-block resizable-btn custom-padding1 btn-spacing1">
              Save
            </button>

            <button to="/privatesector" class="btn btn-danger btn-lg btn-block resizable-btn custom-padding1 btn-spacing1">
              Close
            </button>
          </form>
        </div>
        <br />
      </div>
    </div>

  )
}

export default DiscMaster