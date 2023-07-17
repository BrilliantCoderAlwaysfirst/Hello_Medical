import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const DataDetails = () => {

  let arr = [];
  const location = useLocation();
  arr.push(location.state);


  const [one, setOne] = useState();
  const [mainQty, setMainQty] = useState(0);
  const [freeQty, setFreeQty] = useState();
  const [cashDiscount, setCashDiscount] = useState(0);
  const [two, setTwo] = useState([]);
  const [itemsDataAnother, setItemsDataAnother] = useState(arr[0].eight);
  console.log("-----itemsDataAnother-----", itemsDataAnother);
  
  
  const [itemsData, setItemsData] = useState(arr[0].eight);
  // console.log("-----ItemsData-----", itemsData);

  var newState = [...itemsData];
  const handleChange = (e, i) => {
    const { value, main_qnt } = e.target;
    newState[i] = {
      ...newState[i],
      [main_qnt]: value
    };
    setItemsData(newState);
  };

 var freeQtyState = [...itemsData];
  const handleChangeFreeQty = (e, i) => {
    const { value, freeQty } = e.target;
    freeQtyState[i] = {
      ...freeQtyState[i],
      [freeQty]: value
    };
    setItemsDataAnother(freeQtyState);
  };

  var totalMainQty = 0;
  for (let i = 0; i < newState.length; i++) {
    totalMainQty += (+(newState[i].undefined) * +arr[0].eight[i].cost)
  }
  console.log("totalMainQty", totalMainQty);


  let taxableAmount = Math.abs((totalMainQty * cashDiscount) / 100 - totalMainQty);








  let bigAmount = 0;
  for (let i = 0; i < arr[0].eight.length; i++) {
    bigAmount += +(arr[0].eight[i].quantity * +arr[0].eight[i].cost);
    // bigAmount += totalMainQty * (+arr[0].eight[i].cost);
  }

  let amount = bigAmount.toFixed(2);
  // let taxableAmount = Math.abs(
  //   (amount * arr[0].eight[0].special_discount) / 100 - amount
  // );
  const taxableAmount_Fixed = taxableAmount.toFixed(2);
  // let absAmount = Math.trunc(amount);
  let gstAmount = (taxableAmount * +arr[0].eight[0].sgst) / 100;
  let gst = gstAmount.toFixed(2);

  let gstPercent = arr[0].eight[0].sgst;
  let discount = arr[0].eight[0].special_discount;
  let sgstPercent = gst;
  let cgstPercent = gst;
  let totalGst = +gst + +gst;
  let totalAmount = taxableAmount + +cgstPercent + +sgstPercent;
  console.log("------Total Amount------", totalAmount);
  let totalAmount_Fixed = totalAmount.toFixed(2);
  console.log("------totalAmount_Fixed------", totalAmount_Fixed);
  let absAmount = Math.trunc(totalAmount_Fixed);

  const data = arr[0].seven;
  let date = data.substr(0, 10);

  const componentRef = useRef();
  const [select, setSelect] = useState(); 

  function fun() {
    fetch("http://pykro.com/medicalstore/public/api/OrderStatus", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_status: select,
        order_id: arr[0].six,
      }),
    })
      .then((data) => {
        alert("Status Change Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleParticularItemFun(id) {
    fetch("http://pykro.com/medicalstore/public/api/singleorderupdate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: arr[0].userId,
        pro_id: id,
        cancelByVender: "Cancel By Vender"
      }),
    })
      .then((data) => {
        console.log(data)
        if (data.status == "200") {
          arr[0].eight.filter((items) => items.pro_id !== id);
          // console.log(arr[0].eight.);
          alert("Cancel Item Successfully");
        }
        else {
          alert("Item Not Cancel");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    };

  // function handleCancelFun() {
  //   fetch("http://pykro.com/medicalstore/public/api/StokistOrderStatus", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       cancelled_by_stokist: "cancel",
  //       order_id: arr[0].six,
  //     }),
  //   })
  //     .then((data) => {
  //       alert("Cancel Order Successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function inWords(num) {
    if ((num = num.toString()).length > 9) return "overflow";
    let n = ("000000000" + num)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str +=
      n[1] != 0
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
        : "";
    str +=
      n[2] != 0
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
        : "";
    str +=
      n[3] != 0
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
        : "";
    str +=
      n[4] != 0
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
        : "";
    str +=
      n[5] != 0
        ? (str != "" ? "" : "") +
          (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
          "only "
        : "";
    return str;
  }

  let amountInWords = inWords(absAmount);
  let count = 1;

  const id = localStorage.getItem("dataId");

  useEffect(() => {
    const url = `http://pykro.com/medicalstore/public/api/userdata?user_id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTwo(data.data));
  }, []);




  return (
    <>
      <div className="container-fluid table-responsive py-5">
        <div className="container_Bill" ref={componentRef}>
          <div className="one">
            <div className="one_left">
              <h4>{two.shop_name}</h4>
              <p>
                {two.address}, {two.city}, {two.pincode}
              </p>
              <p>
                Phone: {two.land_line}, {two.contact}
              </p>
              <p>
                GST: {two.GST_NO}
              </p>
              <p>DL No: {two.drug_no}</p>
            </div>
            <div className="one_right">
              <h4>{arr[0].eleven}</h4>
              <p>
                {arr[0].address[0].landmark} <br /> {arr[0].address[0].state}
              </p>
              <p>GST : {arr[0].ten}</p>
              <p>Phone: {arr[0].five}</p>
              <p>D.I.No. : {arr[0].ten}</p>
              <p>GSTIN : {arr[0].nine}</p>
            </div>
          </div>

          <div className="two">
            <div className="two_left">
              
            </div>

            <div className="verticalLine"></div>
            <div className="two_center">
              <h2>CASH MEMO</h2>
            </div>
            <div className="verticalLine"></div>

            <div className="two_right">
              <div className="two_right_top">
                <p>Invoice No. : {arr[0].six}</p>
              </div>
              <div className="two_right_bottom">
                <p>Date : {date}</p>
              </div>
            </div>
          </div>

          <div className="three">
            <table>
              <thead>
                <tr style={{ border: "2px solid rgb(126, 124, 124)" }}>
                  <th>Sn.</th>
                  <th style={{ width: "30%" }}>Product</th>
                  <th>Pack</th>
                  <th> Qty.</th>
                  <th>Main Qty. - Free</th>
                  {/* <th>Free</th> */}
                  <th>Batch</th>
                  <th>Exp.</th>
                  <th>HSN</th>
                  <th>MRP</th>
                  <th>Rate</th>
                  <th>SGST</th>
                  <th>CGST</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>


                {itemsData.map((item, index) => (
                  <tr>
                    <td>{count++}</td>
                    <td>{item.product_name}</td>
                    <td>1*10</td>
                    <td>{item.quantity}</td>
                    <td className="inner_dataDetails_td">
                      <input type="number" value={item.main_qnt} onChange={(e) => handleChange(e, index)} /> - <input type="number" value={item.free_qnt} onChange={(e) => handleChangeFreeQty(e, index)} />
                    </td>
                    <td>{item.batch}</td>
                    <td>{item.expire_date}</td>
                    <td>{item.hns_sac}</td>
                    <td>{item.product_price}</td>
                    <td>{item.cost}</td>
                    <td>{item.sgst}</td>
                    <td>{item.cgst}</td>
                    <td>{(item.undefined * item.cost).toFixed(2)}</td>
                  </tr>
                ))}




                <tr>
                  <td></td>
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td style={{ borderRight: "none" }}></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td className="forBorderSetting"></td>
                  <td style={{ borderLeft: "1px solid #dddddd" }}>
                    <h5>{(totalMainQty).toFixed(2)}</h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space"></div>

          <div className="four">
            <table>
              <thead>
                <tr>
                  {/* <td style={{ height: "5px" }}>CLASS</td> */}
                  <td className="dataDetails_tdOne">SUB TOTAL</td>
                  <td className="dataDetails_tdTwo">CASH DISC %</td>
                  <td className="dataDetails_tdThree">TAXABLE AMT</td>
                  <td className="dataDetails_tdFour">SGST</td>
                  <td className="dataDetails_tdFive">CGST</td>
                  <td className="dataDetails_tdSix">OTHER(+-)</td>

                  <td className="dataDetails_tdSeven">NET BILL VALUE</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{(totalMainQty).toFixed(2)}</td>
                  <td className="inner_four_dataDetails_td"><input type="number" value={cashDiscount} onChange={(e) => setCashDiscount(e.target.value)} /></td>
                  <td>{taxableAmount_Fixed}</td>
                  <td>{sgstPercent}</td>
                  <td>{cgstPercent}</td>
                  <td>0.00</td>
                  <td
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                      border: "none!important",
                      height: "30px",
                      padding: "0px",
                      borderLeft: "none",
                      borderBottom: "none",
                    }}
                  >
                    <h5> {totalAmount_Fixed} </h5>
                  </td>
                </tr>

                {/* <tr>
                  <td>GST 5.00</td>
                  <td>{gstPercent == 5 ? amount : "0.00"}</td>
                  <td>{gstPercent == 5 ? "0.00" : "0.00"}</td>
                  <td>{gstPercent == 5 ? discount : "0.00"}</td>
                  <td>{gstPercent == 5 ? sgstPercent : "0.00"}</td>
                  <td>{gstPercent == 5 ? cgstPercent : "0.00"}</td>
                  <td>{gstPercent == 5 ? totalGst : "0.00"}</td>

                  <td>SGST PAYBLE</td>
                  <td>{gst}</td>
                </tr>
                <tr>
                  <td>GST 12.00</td>
                  <td>{gstPercent == 12 ? amount : "0.00"}</td>
                  <td>{gstPercent == 12 ? "0.00" : "0.00"}</td>
                  <td>{gstPercent == 12 ? discount : "0.00"}</td>
                  <td>{gstPercent == 12 ? sgstPercent : "0.00"}</td>
                  <td>{gstPercent == 12 ? cgstPercent : "0.00"}</td>
                  <td>{gstPercent == 12 ? totalGst : "0.00"}</td>

                  <td>CGST PAYBLE</td>
                  <td>{gst}</td>
                </tr>
                <tr>
                  <td>GST 18.00</td>
                  <td>{gstPercent == 18 ? amount : "0.00"}</td>
                  <td>{gstPercent == 18 ? "0.00" : "0.00"}</td>
                  <td>{gstPercent == 18 ? discount : "0.00"}</td>
                  <td>{gstPercent == 18 ? sgstPercent : "0.00"}</td>
                  <td>{gstPercent == 18 ? cgstPercent : "0.00"}</td>
                  <td>{gstPercent == 18 ? totalGst : "0.00"}</td>

                  <td>ADD/LESS</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>GST 28.00</td>
                  <td>{gstPercent == 28 ? amount : "0.00"}</td>
                  <td>{gstPercent == 28 ? "0.00" : "0.00"}</td>
                  <td>{gstPercent == 28 ? discount : "0.00"}</td>
                  <td>{gstPercent == 28 ? sgstPercent : "0.00"}</td>
                  <td>{gstPercent == 28 ? cgstPercent : "0.00"}</td>
                  <td>{gstPercent == 28 ? totalGst : "0.00"}</td>

                  <td>CR/DR NOTE</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>TOTAL</td>
                  <td>{amount}</td>
                  <td>0.00</td>
                  <td>{discount}</td>
                  <td>{sgstPercent}</td>
                  <td>{cgstPercent}</td>
                  <td>{totalGst}</td>

                  <th>GRAND TOTAL</th>
                  <td>{+amount + +gst + +gst}</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="five">
            <p>
              <h5>{amountInWords}</h5>
            </p>
          </div>

          <div className="six">
            <div className="six_left">
              <h4>Terms & Conditions</h4>
              <p>Goods once sold will not be taken back or exchanged.</p>
              <p>Bills not paid due date will attract 24% interest.</p>
            </div>

            <div className="verticalSecondLine"></div>
            <div className="six_center">
              <h4>Reciver</h4>
            </div>
            <div className="verticalSecondLine"></div>

            <div className="six_right">
              <p>{two.shop_name}</p>
            </div>
          </div>
        </div>
        {arr.map((data) => (
          <div className="bottomRightBox">
            <div className="left_bottomRightBox"></div>
            <div className="right_bottomRightBox">
              <div className="selectBox_div">

                <select
                  name=""
                  id=""
                  className="selectBox"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option selected disabled value="">
                    Choose Option
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="Process">Process</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Ready to Pickup">Ready to Pickup</option>
                  <option value="Deliver">Deliver</option>
                  <option value="Cancel">Cancel</option>
                </select>


                {/* <select
                  name=""
                  id=""
                  className="selectBox"
                  value={cancel}
                  onChange={(e) => setCancel(e.target.value)}
                >
                  <option selected disabled value="">
                    Choose Cancel
                  </option>
                  <option value="Cencel">Cancel</option>
                </select> */}

                {/* <button onClick={handleCancelFun}>Cancel</button> */}

              </div>

              <div className="twoButtons">
                <div className="left_button btn1">
                  {/* <ReactToPrint
                    trigger={() => {
                      return <button>Print</button>;
                    }}
                    content={() => componentRef.current}
                  />
                </div> */}
                  <button onClick={fun}>Update</button>
                </div>
                <div className="right_button btn1">
                  <ReactToPrint
                    trigger={() => {
                      return <button>Print</button>;
                    }}
                    content={() => componentRef.current}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default DataDetails;
