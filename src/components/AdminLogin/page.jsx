import React from 'react'

export default function page(props) {
    return (
        <>
            <div className="signdocx-login">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="login-div">
                                <h1>Login</h1>
                                <p>Please fill this form to confirm your details</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="login-form-div">
                                <img src="assets/img/signdocx-logo.svg" alt="Signdocx" />
                                <div className="form-md admin-login">
                                    <div className="form-group">
                                        <input
                                            id="form_name1"
                                            className={`form-control ${props.userNameErr || props.validUserNameErr ? "err-fil" : ""}`}
                                            type="text"
                                            value={props.userName}
                                            onChange={(e) => { props.getUserName(e.target.value) }}
                                        />
                                        <label htmlFor="form_name1">User ID<span className="gl-form-asterisk"></span></label>
                                        {
                                            props.userNameErr ? <span className='err-text'>User Id required</span> : null
                                        }
                                        {
                                            props.validUserNameErr ? <span className='err-text'>Valid user id required</span> : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input
                                            id="form_name2"
                                            className={`form-control ${props.passwordErr ? "err-fil" : ""}`}
                                            type="password"
                                            value={props.password}
                                            onChange={(e) => { props.getPassword(e.target.value) }}
                                            autoComplete='off'
                                        />
                                        <label htmlFor="form_name2">Password<span className="gl-form-asterisk"></span></label>
                                        {
                                            props.passwordErr ? <span className='err-text'>Password required</span> : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-login" onClick={() => {props.onLogin()}}>Login</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
