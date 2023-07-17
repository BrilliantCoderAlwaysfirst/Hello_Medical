import React, { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';

const Sell = () => {

  var precision = 100;
  var randomNum = Math.floor(Math.random() * (1000 - 100) + 100) * precision;

  const [name, setName] = useState();
  const [entryNo, setEntryNo] = useState();
  const [partyNo, setPartyNo] = useState();
  const [dt, setDt] = useState();
  const [date1, setDate1] = useState();
  const [type, setType] = useState();

  const [product, setProduct] = useState();
  const [mfg, setMfg] = useState();
  const [packing, setPacking] = useState();
  const [hsn, setHsn] = useState();
  const [invoice, setInvoice] = useState(randomNum);
  const [mrp, setMrp] = useState();
  const [rate, setRate] = useState();
  const [batch, setBatch] = useState();
  const [exp, setExp] = useState();
  const [quantity, setQuantity] = useState();
  const [discount1, setDiscount1] = useState();
  const [sgst, setSgst] = useState();
  const [cgst, setCgst] = useState();
  const [amount, setAmount] = useState();

  const [goods, setGoods] = useState();
  const [discount, setDiscount] = useState();
  const [gst, setGst] = useState();
  const [item2, setItem2] = useState();
  const [batch2, setBatch2] = useState();
  const [exp1, setExp1] = useState();
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
    fetch("http://pykro.com/medicalstore/public/api/SaleEntry", {
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

    alert("Purchase Add Successfully");
    setInvoice(invoice + 1);

    setName("");
    setEntryNo("");
    setPartyNo("");
    setDt("");
    setDate1("");
    setType("");
    setGoods("");
    setDiscount("");
    setGst("");
    setItem2("");
    setBatch2("");
    setExp1("");
    
    setGetItems([]);
    
  }

  function fun1() {
    alert("Sell Add Successfully---!");
  }

  function fun2() {
    fetch("http://pykro.com/medicalstore/public/api/AddSaleItemss", {
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
        getAllData();
  })
      .catch((err) => {
        console.log(err);
      });

      console.log("----------Run Sell Items----------");

    alert("Sell Items Add Successfully");

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

    getAllData();
  }

  // console.log()

  function searchFun() {
    fetch(
      `http://pykro.com/medicalstore/public/api/searchsaleproductdata?keyword=${product}`
    )
      .then((res) => res.json())
      .then((data) => setSearch(data.data));

    arr.push(autoFill);
    if (typeof(arr) != 0) {
      arr = JSON.parse(arr);
    }
    console.log("-----------AutoFill------------", autoFill);
    console.log("-----------arr json------------", arr);

    setProductId(arr.id);
    setMrp(arr.product_price);
    setRate(arr.cost);
    setBatch(arr.batch);
    setExp(arr.expire_date);
    setQuantity(arr.on_quantity);
  }

  function getAllData() {
    fetch(
      `http://pykro.com/medicalstore/public/api/SaleItemsList?invoiceno=${invoice}`
    )
      .then((res) => res.json())
      .then((data) => setGetItems(data.data));
  }

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
                      getOptionLabel={(option) => option.product_name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="With categories"
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                        />
                      )}
                      onKeyUp={searchFun}
                      // {console.log("-----------SearchFun-----------", searchFun)}
                      onChange={(event, newValue) => {
                        setAutoFill(JSON.stringify(newValue, null, ""));
                      }}
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
                      <td><Link to={'/editSell'} state={{id: items.id, productName: items.product_name, mfg: items.mfg, packing: items.packing, hsn: items.hsn, invoice: items.invoiceno, mrp: items.mrp, rate: items.rate, batch: items.batch_no, expire: items.expiredate, quantity: items.quantity, discount: items.discount, sgst: items.sgst, cgst: items.cgst, amount: items.total_amount}} ><button style={{border: "2px solid red", width: "89px", color: "red", margin: "0px", top: "0px", left: "62px", outline: "none", border: "none", color: "white", fontSize: "15px", fontWeight: "700", cursor: "pointer", background: "#49162a", borderRadius: "10px",     height: "38px"}}>Edit</button></Link></td>
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
              <button onClick={fun}>Add Product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
