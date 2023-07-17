import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MyProfile = () => {

  const [data, setData] = useState([]);

  const name = localStorage.getItem("data");
  const id = localStorage.getItem("dataId");
  const email = localStorage.getItem("dataEmail");
  const contact = localStorage.getItem("dataContact");
  const city = localStorage.getItem("dataCity");
  const address = localStorage.getItem("dataAddress");

  useEffect(() => {
    const url = `http://pykro.com/medicalstore/public/api/stokistuser?user_id=${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data.data[0]))
    .catch((err) => console.log(err));
  }, []);

  console.log("------------Data-----------", data);


  return (
    <>
      <div className="login-page mt-5 loginPage" style={{ width: "100%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">My Profile</h3>
              <div className="bg-white shadow rounded">

                
                <div className="row " style={{ justifyContent: "center" }}>
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form action="" className="row g-4">

                        <div className="col-12">
                          <h4 className="firstH4">Shop Name : </h4>
                          <h4 className="secondH4 equal_distance1">{data.shop_name}</h4>
                        </div>

                        <div className="col-12">
                          <h4 className="firstH4">Owner Name : </h4>
                          <h4 className="secondH4 equal_distance1_1 extraSpace">{data.name}</h4>
                        </div>

                        <div className="col-12">
                          <h4 className="firstH4">Email : </h4>
                          <h4 className="secondH4 equal_distance2">{data.email}</h4>
                        </div>


                        <div className="col-12" style={{display: "flex"}}>
                          <h4 className="firstH4" style={{paddingRight: "123px"}}>Address: </h4>
                          <h4 >{data.address},  {data.city}, ({data.pincode})</h4>
                        </div>

                        <div className="col-12">
                          <h4 className="firstH4">Contact : </h4>
                          <h4 className="secondH5">{data.contact}</h4>
                        </div>

                        <div className="col-12">
                          <h4 className="firstH4">Land Line : </h4>
                          <h4 className="secondH4 equal_distance4">{data.land_line}</h4>
                        </div>

                        <div className="col-12">
                          <h4 className="firstH4">GST No. : </h4>
                          <h4 className="secondH6">{data.GST_NO}</h4>
                        </div>

                        <div className="col-12">
                          <h4 className="firstH4">Drug License A : &nbsp;</h4>
                          <img className="equal_distance7" src={data.image_one} alt="" />
                        </div>

                        <div className="col-12">
                          <h4 className="firstH4">Drug License B : &nbsp;</h4>
                          <img className="equal_distance7" src={data.image_two} alt="" />
                        </div>

                        
                      </form>
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

export default MyProfile;