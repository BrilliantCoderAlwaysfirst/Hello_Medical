import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([]);
  const [pickup, setPickup] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pendingOrder, setPendingOrder] = useState([]);
  const [deliverOrder, setDeliverOrder] = useState([]);
  const [todayOrder, setTodayOrder] = useState([]);
  const [monthCountData, setMonthCountData] = useState([]);
  const userId = localStorage.getItem("dataId");

  let totalPendingOrder = pendingOrder.length;
  let totalDeliverOrder = deliverOrder.length;
  let totalTodayOrder = todayOrder.length;
  let totalMonthOrder = monthCountData.length;

  let listCount = 1;

  useEffect(() => {
    setLoading(true);
    const url = `http://pykro.com/medicalstore/public/api/getOrderdetailspending?stokistId=${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  }, []);

  let count = 0;
  for (let i = 0; i < data.length; i++) {
    count++;
  }

  useEffect(() => {
    const url = "http://pykro.com/medicalstore/public/api/getOrderdet";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setOrder(res.data));
  }, []);

  let deliverCount = 0;
  let secondCount = 0;
  let monthCount = 0;
  order.map((item) => {
    if (item.order_status == "Deliver") {
      deliverCount++;
    }

    var todayDate1 = new Date().toISOString().slice(0, 10);
    const splitDate = todayDate1.split("-");

    const data = item.created_at;
    let date = data.substr(0, 10);
    const splitDate1 = date.split("-");

    if (
      splitDate[0] == splitDate1[0] &&
      splitDate[1] == splitDate1[1] &&
      splitDate[2] == splitDate1[2]
    ) {
      secondCount++;
    }

    if (splitDate[0] == splitDate1[0] && splitDate[1] == splitDate1[1]) {
      monthCount++;
    }
  });

  useEffect(() => {
    const url = `http://pykro.com/medicalstore/public/api/getOrderdetailspending?stokistId=${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPickup(res.data);
      });

    pendingOrderFun();
    orderDeliveryFun();
    orderDeliveryFun();
    monthOrderFun();
  }, []);

  let pickUpCount = 0;
  pickup.map((data) => {
    pickUpCount++;
  });

  function pendingOrderFun() {
    console.log("Pending Order");
    setData([]);
    const url = `http://pykro.com/medicalstore/public/api/getOrderdetailspending?stokistId=${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPendingOrder(res.data);
        setData(res.data);
      });
    console.log("-----Data in Pending Order----", data);
  }

  function orderDeliveryFun() {
    console.log("Order Delivery");
    setData([]);
    const url = `http://pykro.com/medicalstore/public/api/getOrderdetailsPickup?stokistId=${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDeliverOrder(res.data);
        setData(res.data);
      });
    console.log("-----Data in Order-Deliver Order----", data);
  }

  function todayOrderFun() {
    console.log("Today Order");
    setData([]);
    const url = `http://pykro.com/medicalstore/public/api/getTodayorder?stokistId=${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setTodayOrder(res.data);
        setData(res.data);
      });
    console.log("-----Data in Today Order----", data);
  }

  function monthOrderFun() {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    console.log("Month Order or month", month);
    setData([]);
    const url = `http://pykro.com/medicalstore/public/api/getMonthorder?stokistId=${userId}&month=${month}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMonthCountData(res.data);
        setData(res.data);
      });
    console.log("-----Data in Month Order----", data);
  }

  return (
    <>
      <div className="dashboard_Container">
        <div className="boxs">
          <div className="box" onClick={() => pendingOrderFun()}>
            <h1>{totalPendingOrder}</h1>
            <p>Orders Pending</p>
          </div>
          <div className="box" onClick={() => orderDeliveryFun()}>
            <h1>{totalDeliverOrder}</h1>
            <p>Order Ready</p>
          </div>
          <div className="box upComingBox" style={{ backgroundColor: "green" }}>
            <p>Upcoming...</p>
          </div>
          <div className="box" onClick={() => todayOrderFun()}>
            <h1>{totalTodayOrder}</h1>
            <p>Orders Today</p>
          </div>
          <div className="box" onClick={() => monthOrderFun()}>
            <h1>{totalMonthOrder}</h1>
            <p>Orders This Month</p>
          </div>
        </div>

        <div className="dashboard_tabs">
          <p>Pending Orders</p>
        </div>

        <div className="table_first">
          <table style={{ height: "300px!important" }}>
            <thead>
              <tr>
                <th className="first_TableHead">#</th>
                <th>
                  <FontAwesomeIcon icon={faSort} className="sortIcon" /> Order
                </th>
                <th>
                  <FontAwesomeIcon icon={faSort} className="sortIcon" />
                  Retailer
                </th>
                <th>
                  <FontAwesomeIcon icon={faSort} className="sortIcon" /> Bill
                  Amount
                </th>
                <th>
                  <FontAwesomeIcon icon={faSort} className="sortIcon" /> MOP
                </th>
                <th>
                  <FontAwesomeIcon icon={faSort} className="sortIcon" /> Order
                  Date & Time
                </th>
                <th>
                  <FontAwesomeIcon icon={faSort} className="sortIcon" /> Process
                </th>
              </tr>
            </thead>

            {loading ? (
              <div className="loader-container">
                <div className="spinner"></div>
              </div>
            ) : (
              <tbody
                style={{
                  
                  overflow: "scroll",
                  border: "2px solid #dddddd",
                  width: "1315px",
                }}
              >
                {data.length !== 0 ? (
                  data.map((item) => (
                    <tr>
                      <td style={{ width: "40px" }}>{listCount++}</td>
                      <td style={{ width: "143px" }}>{`${item.order_id}`}</td>
                      <td style={{ width: "179px" }}>{`${item.name}`}</td>
                      <td
                        style={{ width: "246px" }}
                      >{`${item.total_amount}`}</td>
                      <td style={{ width: "126px" }}>{`${item.mop}`}</td>
                      <td>{`${item.created_at.substr(0, 10)}`}</td>
                      <td className="ForWidth">
                        <Link
                          to={"/dataDetail"}
                          state={{
                            // one: item.cart_data[0],
                            two: item.total_amount,
                            three: item.name,
                            four: item.email,
                            five: item.conatct,
                            six: item.order_id,
                            seven: item.created_at,
                            eight: item.dilevery_address[0],
                            eight: item.cart_data,
                            nine: item.gst_no,
                            ten: item.dl_no,
                            eleven: item.shope_name,
                            address: item.dilevery_address,
                          }}
                        >
                          <button>Processed To Bill</button>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
                    Data Not Found!
                  </h3>
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
