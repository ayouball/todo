import {FaFacebook, FaGoogle, FaLinkedin, FaWindowClose} from "react-icons/fa";
import React from "react";

function SignUp({ handleSignUpClose }) {

    return <>
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content" >
                    <div className="modal-header d-flex justify-content-between align-items-center">
                        <h5 className="modal-title">Sign Up to Keep Track of Your To-Dos</h5>
                        <FaWindowClose  onClick={handleSignUpClose}></FaWindowClose>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group text-center mt-2">
                                <label htmlFor="firstName" className="font-weight-bold">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                            </div>
                            <div className="form-group text-center mt-3">
                                <label htmlFor="lastName" className="font-weight-bold">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                            </div>
                            <div className="form-group text-center mt-3">
                                <label htmlFor="email" className="font-weight-bold">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group text-center mt-3">
                                <label htmlFor="password" className="font-weight-bold">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group text-center mt-3">
                                <label htmlFor="confirmPassword" className="font-weight-bold">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <p>Or Sign up with:</p>
                            <a href={'#'}><FaGoogle className="m-3" /></a>
                            <a href={'#'}><FaFacebook className="m-3" /></a>
                            <a href={'#'}><FaLinkedin className="m-3" /></a>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleSignUpClose}>Close</button>
                        <button type="button" className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignUp