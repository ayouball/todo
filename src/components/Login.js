import React from "react";

function Login({setShowSignUp }) {
    return <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card login-form" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Login to Keep Track of Your To-Dos</h3>
                            <form>
                                <div className="form-group text-center">
                                    <label htmlFor="username" className="font-weight-bold">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                </div>
                                <div className="form-group text-center">
                                    <label htmlFor="password" className="font-weight-bold">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group text-center mt-3">
                                    <button type="submit" className="btn btn-light btn-block mb-3">Login</button>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="mr-3">Forgot Password ?</a>
                                    <span> | </span>
                                    <a href="#" onClick={() => setShowSignUp(true)}>Sign Up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login