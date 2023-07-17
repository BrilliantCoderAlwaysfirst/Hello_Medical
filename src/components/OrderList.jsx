import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const OrderList = () => {

  const userId = localStorage.getItem("dataId");


  const [loading, setLoading] = useState(false);
  const [item, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    try {
      const url = `http://pykro.com/medicalstore/public/api/getOrderdet?stokist_id=${userId}`;
      fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setItems(res.data)}
        );
    }
    catch(err) {
       console.log("--------------error-------------------",err);
    }
  }, []);

  let count = 1;


  return (
    <>
      <div className="container-fluid table-responsive py-5">
        <table className="table table-bordered table-hover overflow-auto text-center ">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order Id</th>
              <th scope="col">User Id</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Order Status</th>
              <th scope="col">Created At</th>
              <th scope="col" className="table_Thead">Action</th>
            </tr>
          </thead>
          {
            loading ?(
              <div className="loader-container-OrderList">
                <div className="spinner-OrderList"></div>
              </div>
            ) : (
          <tbody>
              {item ? (item.map((data) => (
  
                <tr>
                  <th scope="row">{count++}</th>
                  <td>{data.order_id}</td>
                  <td>{data.user_id}</td>
                  <td>{data.total_amount}</td>
                  <td>{data.order_status}</td>
                  <td>{data.created_at.substr(0, 10)}</td>
                  
                  <Link className="orderList_Link" to={"/dataDetail"} state={{userId: data.id, one: data.cart_data[0], two: data.total_amount, three: data.name, four: data.email, five: data.conatct, six: data.order_id, seven: data.created_at, eight: data.dilevery_address[0], eight:data.cart_data, nine: data.gst_no, ten: data.dl_no, eleven:data.shope_name, address: data.dilevery_address}}>
                    <td class="orderList_Button">
                      <button>Processed To Bill</button>
                    </td>
                  </Link>
  
                </tr>
              ))) : (
                <h3 style={{textAlign: "center", paddingTop: "20px"}}>Data Not Found!</h3>
              )}
            </tbody>
            )}
          

        </table>
      </div>
    </>
  );
};

export default OrderList;
