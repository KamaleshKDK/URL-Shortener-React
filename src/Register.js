import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import './registration.css';


function Register() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://my-url-shortener-react.herokuapp.com/register", values)

                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (
        <> <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div class="text-center my-5">
                    </div>
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h1 style={{ textAlign: "center" }} class="register-heading">Register</h1>
                            <form onSubmit={formik.handleSubmit} >
                                <div class="mb-3">
                                    <label class="mb-2 text-muted">First Name</label>
                                    <input type="text" class="form-control" onChange={formik.handleChange}
                                        value={formik.values.firstname} name="firstname" required autofocus />
                                    <div class="invalid-feedback">
                                        Name is required
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="mb-2 text-muted">Last Name</label>
                                    <input type="text" class="form-control" onChange={formik.handleChange}
                                        value={formik.values.lastname} name="lastname" required autofocus />
                                    <div class="invalid-feedback">
                                        Name is required
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="email">E-Mail Address</label>
                                    <input id="email" type="email" class="form-control" onChange={formik.handleChange}
                                        value={formik.values.email} name="email" required />
                                    <div class="invalid-feedback">
                                        Email is invalid
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="password">Password</label>
                                    <input id="password" type="password" class="form-control" onChange={formik.handleChange}
                                        value={formik.values.password} name="password" required />
                                    <div class="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>


                                <div class="align-items-center d-flex">
                                    <button type="submit" class="btn btn-primary ms-auto">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer py-3 border-0">
                            <div class="text-center">
                                Already have an account? <Link to={"/"}><a class="login-btn">Login</a></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Register
