import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
  }

  var arr = [];

  function fun() {
    fetch("http://pykro.com/medicalstore/public/api/Email-Login-Stokist", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        arr.push(result.data);

        if (result.status == 200) {

          showAlert("Login Successfully", "success");

          localStorage.setItem("data", arr[0].name);
          localStorage.setItem("dataId", arr[0].id);
          localStorage.setItem("dataEmail", arr[0].email);
          localStorage.setItem("dataContact", arr[0].contact);
          localStorage.setItem("dataCity", arr[0].city);
          localStorage.setItem("dataAddress", arr[0].address);
          navigate("/dashboard");
        }
        else {

          showAlert("Wrong Credentials", "warning");
          console.log("Repeat Again");

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>

      <div className="login-page bg-light">
      <div className="forAlert">
        <Alert alert={alert} />
      </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">Login Now</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form action="" className="row g-4">
                        <div className="col-12">
                          <label>
                            Email<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineFormCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineFormCheck"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <Link
                            to="/forgotPage"
                            className="float-end text-primary"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <div className="col-sm-6">
                          <p>
                            Not a member?
                            <Link
                              to="/signup"
                              className="float-end text-primary"
                            >
                              Register Now
                            </Link>
                          </p>
                        </div>

                        <div className="col-12">
                          <Link to="#">
                            <button
                              type="submit"
                              className="btn btn-primary px-4 float-end mt-4"
                              onClick={fun}
                            >
                              login
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div
                      className="form-right h-100 text-white text-center pt-5"
                      style={{
                        backgroundColor: "rgb(73, 22, 42)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* <i className="bi bi-bootstrap"></i> */}
                      <h2 className="fs-1">Hello Medical</h2>
                      <h2 className="fs-1">Welcome Back!!!</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
