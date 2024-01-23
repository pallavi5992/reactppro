import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./style.css"
const Navbar = ({ isOpen ,toggle}) => {
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    if (isLogout) {
      navigate("/")
    }
  }, [isLogout])
  return (
    <div>
      {/* style={{ marginLeft: isOpen ? "347px" : "35px" }} */}
      
      <div className='col-sm-12  main-header' >
      {/* style={{ display: "flex",  padding: "10px",justifyContent: "space-between" }} */}
        <nav className="navbar" >
        <div className="top_section">
                        <div className="bars">
                            <i className='fa fa-bars' onClick={toggle}></i>
                        </div>
                    </div>
          <div className="dropdown" style={{}} >
            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1"
              style={{ backgroundColor: "rgb(14 5 98)", padding: "7px", borderRadius: "1px solid white", color: "white" }}
              data-bs-toggle="dropdown" aria-expanded="false">
              User Name
            </button>
            <ul className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li><Link className="dropdown-item" to="/admin/index/update/user">Upadte Profile</Link></li>
              <li><Link className="dropdown-item" onClick={() => setIsLogout(true)}>Logout</Link></li>
            </ul>
          </div>
        </nav>
      </div>
   
    </div>
  )
}

export default Navbar