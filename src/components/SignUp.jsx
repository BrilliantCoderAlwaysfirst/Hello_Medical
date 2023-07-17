import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [cityData, setCityData] = useState([]);

  const [shopName, setShopName] = useState();
  const [ownerName, setOwnerName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [pinCode, setPinCode] = useState();
  const [mobile, setMobile] = useState();
  const [landLine, setLandLine] = useState();
  const [email, setEmail] = useState();
  const [gst, setGst] = useState();
  const [drugLicenseA, setDrugLicenseA] = useState();
  const [drugLicenseB, setDrugLicenseB] = useState();
  const [password, setPassword] = useState();

  const [image1, setImage1] = useState({
    image: undefined
  });
  const [image2, setImage2] = useState({
    image: undefined
  });

  const drugLicenseAFun1 = (e) => {
    const files = e.target.files;
    const file = files[0];
    setImage1(e.target.files[0]);
    getBase641(file);
  };
  const onLoad1 = (fileString) => {
    const string_file = fileString.slice(22);

    setDrugLicenseA(string_file);
  };
  const getBase641 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad1(reader.result);
    };
  };

  const drugLicenseAFun2 = (e) => {
    const files = e.target.files;
    const file = files[0];
    setImage2(e.target.files[0]);
    getBase642(file);
  };
  const onLoad2 = (fileString) => {
    const string_file = fileString.slice(22);
    setDrugLicenseB(string_file);
  };
  const getBase642 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad2(reader.result);
    };
  };


  useEffect(() => {
    const url = `http://pykro.com/medicalstore/public/api/city`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCityData(data.data));
  }, []);




  function fun() {
    fetch("http://pykro.com/medicalstore/public/api/user-create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_type: 1,
        shop_name: shopName,
        name: ownerName,
        address: address,
        city: city,
        pincode: pinCode,
        contact: mobile,
        land_line: landLine,
        email: email,
        GST_NO: gst,
        drug_licence_a: drugLicenseA,
        drug_licence_b: drugLicenseB,
        password: password,
      }),
    })
      .then((result) => {
        console.log("result", result.status);
        if (result.status == 200) {
          navigate("/login");
        } else {
          console.log("Repeate Again");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  console.log("---------City---------", city);

  return (
    <>
      <div className="login-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">Sign Up</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form action="" className="row g-4">
                        <div
                          className="col-6"
                          style={{ display: "flex", width: "100%" }}
                        >
                          <div className="shopName">
                            <label>
                              SHOP NAME<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-shop"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div
                            className="ownerName"
                            style={{ marginLeft: "10px" }}
                          >
                            <label>
                              OWNER NAME<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-person"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Address<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>

                        <div
                          className="col-6"
                          style={{ display: "flex", width: "100%" }}
                        >
                          <div className="cityName">
                            <label>
                              CITY<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-building"></i>
                              </div>

                              <select class="form-select" aria-label="Default select example" value={city}
                                onChange={(e) => setCity(e.target.value)}>
                                <option selected>Open this select menu</option>
                                {
                                  cityData.map((items) => (
                                    <option value={items.id} >{items.city}</option>
                                  ))
                                }
                              </select>

                              {/* <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              /> */}
                            </div>
                          </div>

                          <div
                            className="pinCode"
                            style={{ marginLeft: "10px" }}
                          >
                            <label>
                              PIN CODE<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-geo"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-6"
                          style={{ display: "flex", width: "100%" }}
                        >
                          <div className="mobileNo">
                            <label>
                              MOBILE NO.<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-phone"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                              />
                            </div>
                          </div>

                          <div
                            className="landlineNo"
                            style={{ marginLeft: "10px" }}
                          >
                            <label>
                              LANDLINE NO.<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-telephone"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={landLine}
                                onChange={(e) => setLandLine(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-6"
                          style={{ display: "flex", width: "100%" }}
                        >
                          <div className="email">
                            <label>
                              EMAIL<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-envelope"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="gstNo" style={{ marginLeft: "10px" }}>
                            <label>
                              GST NO.<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-clipboard-check"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Address"
                                value={gst}
                                onChange={(e) => setGst(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            DRUG LICENSE A<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="file"
                              className="form-control"
                              value={image1.image}
                              onChange={e => drugLicenseAFun1(e)}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            DRUG LICENSE B<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="file"
                              className="form-control"
                              value={image2.image}
                              onChange={e => drugLicenseAFun2(e)}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock"></i>
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

                        <div
                          className="col-sm-6"
                          style={{
                            marginTop: "9px",
                            paddingLeft: "0px",
                            display: "inlineFlex",
                          }}
                        >
                          <div
                            className="form-check"
                            style={{
                              paddingLeft: "12px",
                              display: "inline-grid",
                            }}
                          >
                            <p>
                              <Link to="/login" className="float-end text-primary">
                                Already SingUp! Please Login
                              </Link>
                            </p>
                          </div>
                        </div>

                        <div
                          className="col-12"
                          style={{ position: "relative", marginTop: "0px" }}
                        >
                          <Link to="#">
                            <button
                              style={{
                                position: "absolute",
                                top: "-65px",
                                left: "79%",
                              }}
                              type="submit"
                              className="btn btn-primary px-4 float-end mt-4"
                              onClick={fun}
                            >
                              Sign Up
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

export default SignUp;
