import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import Header from '../../header/Header'
const Login = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if (isOpen) {
            navigate("/admin/index/user")
        }
    }, [isOpen])


    return (
        <div className='login hold-transition login-page'>
            {<Header/>}
            <div className='login-box'>
                <div className='login-logo'></div>
                <form >
                    <div className='login-box'>
                        <div className='login-box-body'>
                            <p className='login-box-msg'>Sign in</p>
                            <div className='form-group has-feedback'>
                                <input className='form-control' placeholder='Email Address' type='email' required></input>
                            </div>
                            <div className='form-group has-feedback' style={{ marginTop: "8px" }}>
                                <input className='form-control' placeholder='Password' type='password' required></input>
                            </div>
                            <div className="form-group has-feedback" style={{ marginTop: "8px" }}>
                                <div className='captcha' id='LoginCaptcha'>
                                    <img src='https://ddpdashboard.gov.in/Account/GetCaptchaImage' title='Captcha'></img>
                                    <br />
                                    <div>
                                        <a href='' style={{ color: "deepskyblue", textDecoration: "none" }}>Refresh</a><br />
                                        <input style={{ paddingLeft: "10px" }} type='text' required></input>
                                    </div>
                                </div>
                            </div>

                            <div className='text-center' style={{ marginTop: "8px" }}>
                                <button type='submit' className="btn btn-primary btn-block   btn-flat btnblue" id='LoginBtn'
                                    onClick={() => setIsOpen(true)}
                                >Sign In</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default Login