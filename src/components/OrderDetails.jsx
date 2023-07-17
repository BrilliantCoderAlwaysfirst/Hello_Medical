import React, { useState } from "react";

const OrderDetails = () => {
  return (
    <>
        <div className="container-fluid forOrderWidth">

          <div className="center">
            <h4>Payment History</h4>
          </div>


          <div className="orderDetails_OneOne">
            <div className="orderDetails_First">
              <div className="orderDetails_Second">
                <h1>Coming Soon... :)</h1>
              </div>
            </div>
          </div>


          {/* <div className="upload_top">
                    <div className="custom-file">
                    </div>
                </div> */}

          {/* <div className="row">
            <div className="col-md-3"></div>
            <div className=" line4 mainOrderDetails">
              <div className="row">
                <div className="entry d-flex">
                  <div>
                    <h3 className="heading1">Order Details</h3>
                  </div>
                </div>
              </div>

              <div className="row forPadding">
                <div className="col-md-6 mt-2 p-0">
                  <div>
                    <label for="">NAME :</label>
                    <label for="">
                      <input type="text" className="input1" />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label for="">BILL NO :</label>
                    <label for="" className="label12">
                      <input type="number" />
                    </label>
                  </div>
                </div>

                <div className="col-md-6 mt-2 p-0 ">
                  <div>
                    <label for="">DATE :</label>
                    <label for="">
                      <input type="date" />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label for="">TYPE :</label>
                    <label className="label1" for="">
                      <input type="text" className="input3 " />
                    </label>
                  </div>
                </div>
              </div>

              <div className="row forPadding">
                <table className="mt-3">
                  <tr>
                    <th>PRODUCT</th>
                    <th>MRP</th>
                    <th>QTY</th>
                    <th>FREE</th>
                    <th>RATE.</th>
                    <th>AMOUNT</th>
                  </tr>
                  <tr>
                    <td>
                      <input className="w-100" type="text" />
                    </td>
                    <td>
                      <input className="input3" type="text" />
                    </td>
                    <td>
                      <input className="input3" type="text" />
                    </td>
                    <td>
                      <input className="input3" type="text" />
                    </td>
                    <td>
                      <input className="input3" type="text" />
                    </td>
                    <td>
                      <input className="input3" type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                </table>
              </div>

              <div className="row forPadding">
                <div className="col-md-3 line5">
                  <div className="mt-2">
                    <label for="">ITEM :</label>
                    <label for="" className="label2">
                      <input type="text" />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label for="">MRP :</label>
                    <label for="" className="label3">
                      <input type="text" />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label for="">M.R.P. :</label>
                    <label for="">
                      <input type="text" />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label for="">CHALL :</label>
                    <label for="">
                      <input type="text" />
                    </label>
                  </div>
                </div>
                <div className="col-md-3 line5 link">
                  <div className="mt-2">
                    <label for="">STOCK :</label>
                    <label for="" className="label2">
                      <input type="text" />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label for="">DATE :</label>
                    <label for="" className="label5">
                      {" "}
                      <input type="date" />
                    </label>
                  </div>
                </div>

                <div className="col-md-3 line5 link"></div>
                <div className="col-md-3 line5">
                  <div className="mt-2">
                    <label for="">VALUE OF GOODS :</label>
                    <label className="label6" for="">
                      <input className="input3" type="text" />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label for="">DISCOUNT</label>
                    <label for="" className="label7">
                      <input className="input3" type="text" />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label for="">GST :</label>
                    <label for="" className="label8">
                      <input className="input3" type="text" />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label for="">ITEM :</label>
                    <label for="" className="label9">
                      <input type="text" className="input3" />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label for="">BATCH :</label>
                    <label for="" className="label10">
                      <input type="text" className="input3" />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label for="">EXPIRY :</label>
                    <label for="" className="label11">
                      <input type="text " className="input3" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="button">
                <button>Add Product</button>
              </div>
            </div>
          </div> */}
        </div>
    </>
  );
};

export default OrderDetails;
