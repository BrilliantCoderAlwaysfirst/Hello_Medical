import React, { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';

const EditSell = () => {

  const location = useLocation();
  console.log("---------Location State ----------", location.state);
  // console.log("---------Location State Name ----------", location.state.name);

  const Navigate = useNavigate();

  var precision = 100;
  var randomNum = Math.floor(Math.random() * (1000 - 100) + 100) * precision;

  const [name, setName] = useState(location.state != null ? location.state.name : "");
  const [entryNo, setEntryNo] = useState(location.state != null ? location.state.entryNo : "");
  const [partyNo, setPartyNo] = useState(location.state != null ? location.state.partyNo : "");
  const [dt, setDt] = useState(location.state != null ? location.state.dt : "");
  const [date1, setDate1] = useState(location.state != null ? location.state.date : "");
  const [type, setType] = useState(location.state != null ? location.state.type : "");

  const [product, setProduct] = useState(location.state != null ? location.state.productName : "");
  const [mfg, setMfg] = useState(location.state != null ? location.state.mfg : "");
  const [packing, setPacking] = useState(location.state != null ? location.state.packing : "");
  const [hsn, setHsn] = useState(location.state != null ? location.state.hsn : "");
  const [invoice, setInvoice] = useState(location.state != null ? location.state.invoice : "");
  const [mrp, setMrp] = useState(location.state != null ? location.state.mrp : "");
  const [rate, setRate] = useState(location.state != null ? location.state.rate : "");
  const [batch, setBatch] = useState(location.state != null ? location.state.batch : "");
  const [exp, setExp] = useState(location.state != null ? location.state.expire : "");
  const [quantity, setQuantity] = useState(location.state != null ? location.state.batch : "");
  const [discount1, setDiscount1] = useState(location.state != null ? location.state.discount : "");
  const [sgst, setSgst] = useState(location.state != null ? location.state.sgst : "");
  const [cgst, setCgst] = useState(location.state != null ? location.state.cgst : "");
  const [amount, setAmount] = useState(location.state != null ? location.state.amount : "");

  const [goods, setGoods] = useState(location.state != null ? location.state.goods : "");
  const [discount, setDiscount] = useState(location.state != null ? location.state.discount : "");
  const [gst, setGst] = useState(location.state != null ? location.state.gst : "");
  const [item2, setItem2] = useState(location.state != null ? location.state.items : "");
  const [batch2, setBatch2] = useState(location.state != null ? location.state.batchs : "");
  const [exp1, setExp1] = useState(location.state != null ? location.state.expiry : "");
  const [search, setSearch] = useState([]);
  const [getItems, setGetItems] = useState([]);
  const [productId, setProductId] = useState();
  const [autoFill, setAutoFill] = useState([]);

  let arr = [];

  if (typeof productId == "string") {
    var productIdNum = JSON.parse(productId);
  }
  else {
    var productIdNum = productId;
  }

    const userId = localStorage.getItem("dataId");

    function fun() {
        fetch(`http://pykro.com/medicalstore/public/api/EditSaleEntry?id=${location.state.id}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userId,
              invoice_no: invoice,
              name: name,
              entry_no: entryNo,
              party_no: partyNo,
              dt: dt,
              date: date1,
              type: type,
              value_of_goods: goods,
              discount: discount,
              gst: gst,
              items: item2,
              batchs: batch2,
              expiryes: exp1,
            }),
          })
            .then((result) => console.log("Result", result))
            .catch((err) => {
              console.log(err);
            });
  
      alert("Purchase Update Successfully");
    //   setInvoice(invoice + 1);
    }
  
    function fun1() {
      alert("Sell Update Successfully---!");
    }
  
    function fun2() {
      fetch(`http://pykro.com/medicalstore/public/api/EditSaleItemss?id=${location.state.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
          invoiceno: invoice,
          mfg: mfg,
          packing: packing,
          hsn: hsn,
          batch_no: batch,
          expiredate: exp,
          quantity: quantity,
          mrp: mrp,
          rate: rate,
          discount: discount1,
          sgst: sgst,
          cgst: cgst,
          total_amount: amount,
        }),
      })
        .then((result) => {

        if (result.status == 200) {
          Navigate("/sell")
        }
      })
        .catch((err) => {
          console.log(err);
        });
  
      alert("Sell Items Update Successfully");
  
      setProduct("");
      setMfg("");
      setPacking("");
      setHsn("");
      setMrp("");
      setRate("");
      setBatch("");
      setExp("");
      setQuantity("");
      setDiscount1("");
      setSgst("");
      setCgst("");
      setAmount("");
  
      // getAllData();
    }
  
    // function searchFun() {
    //   fetch(
    //     `http://pykro.com/medicalstore/public/api/searchsaleproductdata?keyword=${product}`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => setSearch(data.data));
  
    //   arr.push(autoFill);
    //   arr = JSON.parse(arr);
  
    //   setProductId(arr.id);
    //   setMrp(arr.product_price);
    //   setRate(arr.cost);
    //   setBatch(arr.batch);
    //   setExp(arr.expire_date);
    //   setQuantity(arr.on_quantity);
    // }
  
    // function getAllData() {
    //   fetch(
    //     `http://pykro.com/medicalstore/public/api/SaleItemsList?invoiceno=${invoice}`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => setGetItems(data.data));
    // }

  return (
    <>
      <div className="container-fluid forWidth purchaseList">
        <div className="row">
          <div className=""></div>
          <div className="line4">
            <div className="row">
              <div className="entry d-flex">
                <div>
                  <h3 className="heading1">SELL ENTRY</h3>
                </div>
              </div>
            </div>

            <div className="row firstLine_PurchaseEntry">
              <div className="col-md-4 mt-2 p-0">
                <div>
                  <label htmlFor="" style={{ paddingLeft: "29px" }}>
                    NAME:
                  </label>
                  <label htmlFor="">
                    <input
                      style={{ marginLeft: "21px!important" }}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input1"
                    />
                  </label>
                </div>
                <div className="mt-2" style={{ paddingLeft: "29px" }}>
                  <label htmlFor="">ENTRY NO:</label>
                  <label htmlFor="">
                    <input
                      type="number"
                      value={entryNo}
                      onChange={(e) => setEntryNo(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div className="col-md-3 mt-2 p-0">
                <div>
                  <label htmlFor="">PARTY NO:</label>
                  <label htmlFor="">
                    <input
                      type="text"
                      value={partyNo}
                      onChange={(e) => setPartyNo(e.target.value)}
                      className="input2"
                    />
                  </label>
                </div>
              </div>
              <div className="col-md-3 mt-2 p-0">
                <div>
                  <label htmlFor="">DT:</label>
                  <label htmlFor="">
                    <input
                      type="text"
                      value={dt}
                      onChange={(e) => setDt(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="col-md-2 mt-2 p-0 ">
                <div>
                  <label htmlFor="">DATE:</label>
                  <label htmlFor="">
                    <input
                      type="date"
                      value={date1}
                      onChange={(e) => setDate1(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mt-2">
                  <label htmlFor="">TYPE:</label>
                  <label className="label1" htmlFor="">
                    <input
                      type="text"
                      className="input3"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="row forPadding">
              <table className="mt-3">
                <tr>
                  <th>PRODUCT NAME</th>
                  <th>MFG</th>
                  <th>Packing</th>
                  <th>HSN</th>
                  <th>Invoice</th>
                  <th>MRP.</th>
                  <th>Rate</th>
                  <th>BATCH</th>
                  <th>EXP</th>
                  <th>QUANTITY</th>
                  <th>DISCOUNT%</th>
                  <th>SGST</th>
                  <th>CGST</th>
                  <th>AMOUNT</th>
                </tr>

                <tr>
                  <td className="purchaseList_firstInput">
                    <Autocomplete
                      style={{ padding: "10px 0px", width: "132px" }}
                      id="grouped-demo"
                      freeSolo
                      disableClearable
                      options={search}
                      // getOptionLabel={(option) => option.product_name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="With categories"
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                        />
                      )}
                      // onKeyUp={searchFun}
                      // onChange={(event, newValue) => {
                      //   setAutoFill(JSON.stringify(newValue, null, ""));
                      // }}
                    />
                  </td>

                  <td>
                    <input
                      className="input3 uniqueTd1_input1"
                      type="text"
                      value={mfg}
                      onChange={(e) => setMfg(e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      className="input3 uniqueTd1_input1"
                      type="text"
                      value={packing}
                      onChange={(e) => setPacking(e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      className="input3 uniqueTd1_input2"
                      type="text"
                      value={hsn}
                      onChange={(e) => setHsn(e.target.value)}
                    />
                  </td>

                  <td className="purchaseList_fouthInput">
                    <input className="input3" type="password" value={invoice} />
                  </td>

                  <td>
                    <input
                      className="input3 uniqueTd1_input2"
                      type="text"
                      value={mrp}
                      onChange={(e) => setMrp(e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      className="input3 uniqueTd1_input2"
                      type="text"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                  </td>

                  <td>
                    <input
                      className="input3 uniqueTd1_input2"
                      type="text"
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                    />
                  </td>
                  <td className="purchaseList_fouthInput">
                    <input
                      className="input3"
                      type="text"
                      value={exp}
                      onChange={(e) => setExp(e.target.value)}
                    />
                  </td>
                  <td className="purchaseList_fouthInput">
                    <input
                      className="input3"
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="purchaseList_fiveInput">
                    <input
                      className="input3"
                      type="text"
                      value={discount1}
                      onChange={(e) => setDiscount1(e.target.value)}
                    />
                  </td>
                  <td className="purchaseList_sixInput">
                    <input
                      className="input3"
                      type="text"
                      value={sgst}
                      onChange={(e) => setSgst(e.target.value)}
                    />
                  </td>
                  <td className="purchaseList_sevenInput">
                    <input
                      className="input3"
                      type="text"
                      value={cgst}
                      onChange={(e) => setCgst(e.target.value)}
                    />
                  </td>
                  <td className="purchaseList_eightInput">
                    <input
                      className="input3"
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </td>
                </tr>

                <tbody className="sell_tbody">
                  {getItems.map((items) => (
                    <tr key={items.id}>
                      <td style={{ width: "146px" }}>{items.product_name}</td>
                      <td>{items.mfg}</td>
                      <td>{items.packing}</td>
                      <td>{items.hsn}</td>
                      <td>{items.invoiceno}</td>
                      <td>{items.mrp}</td>
                      <td>{items.rate}</td>
                      <td>{items.batch_no}</td>
                      <td>{items.expiredate}</td>
                      <td>{items.quantity}</td>
                      <td>{items.discount}</td>
                      <td>{items.sgst}</td>
                      <td>{items.cgst}</td>
                      <td>{items.total_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="button_sell"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "9px",
              }}
            >
              <button
                style={{ width: "29%", height: "34px" }}
                onKeyUp={search}
                className="purchaseList_Button"
                onClick={fun2}
              >
                Add Items
              </button>
            </div>

            <div className="row forPadding forPositionParent ">
              <div className="line5 forPositionChild_Sell">
                <div className="mt-2">
                  <label htmlFor="">VALUE OF GOODS:</label>
                  <label className="label6" htmlFor="">
                    <input
                      className="input3"
                      type="text"
                      value={goods}
                      onChange={(e) => setGoods(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mt-2">
                  <label htmlFor="">DISCOUNT</label>
                  <label htmlFor="" className="label7">
                    <input
                      className="input3"
                      type="text"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </label>
                </div>

                <div className="mt-2">
                  <label htmlFor="">GST:</label>
                  <label htmlFor="" className="label8">
                    <input
                      className="input3"
                      type="text"
                      value={gst}
                      onChange={(e) => setGst(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mt-2">
                  <label htmlFor="">ITEM:</label>
                  <label htmlFor="" className="label9">
                    <input
                      type="text"
                      className="input3"
                      value={item2}
                      onChange={(e) => setItem2(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mt-2">
                  <label htmlFor="">BATCH:</label>
                  <label htmlFor="" className="label10">
                    <input
                      type="text"
                      className="input3"
                      value={batch2}
                      onChange={(e) => setBatch2(e.target.value)}
                    />
                  </label>
                </div>

                <div className="mt-2">
                  <label htmlFor="">EXPIRY :</label>
                  <label htmlFor="" className="label11">
                    <input
                      type="text "
                      className="input3"
                      value={exp1}
                      onChange={(e) => setExp1(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="button">
              <button onClick={fun}>Update Sell</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditSell