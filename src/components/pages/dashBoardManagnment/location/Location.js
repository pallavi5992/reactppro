import React from 'react'
import "./style.css"
const Location = () => {
  return (
    <div className="updateUser">
      <div className="contentLocation">
<div className='moduleHeading'>

     <strong>  <p>Add Location</p> </strong>
</div>

        <div className="formUpdate">
          <form>
           <div class="form-group resizable-btn">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Add Location"
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

export default Location