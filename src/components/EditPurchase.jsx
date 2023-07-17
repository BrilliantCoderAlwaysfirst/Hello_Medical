import React, { useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';

const EditPurchase = () => {

    const location = useLocation();
    console.log("---------Data--------", location.state);

    const Navigate = useNavigate();
//   var precision = 100;
//   var randomNum = Math.floor(Math.random() * (1000 - 100) + 100) * precision;

  const userId = localStorage.getItem("dataId");

  const [name, setName] = useState(location.state != null ? location.state.name : "");
  const [entryNo, setEntryNo] = useState(location.state != null ? location.state.entryNo : "");
  const [partyNo, setPartyNo] = useState(location.state != null ? location.state.partyNo : "");
  const [dt, setDt] = useState(location.state != null ? location.state.dt : "");
  const [date1, setDate1] = useState(location.state != null ? location.state.date : "");
  const [type, setType] = useState(location.state != null ? location.state.type : "");

  const [product, setProduct] = useState(location.state != null ? location.state.productName : "");
  const [sale_deal, setSaleDeal] = useState(location.state != null ? location.state.sales_deal : "");
  const [sate_free, setSaleFree] = useState(location.state != null ? location.state.sales_free : "");
  const [purchase_deal, setPurchaseDeal] = useState(location.state != null ? location.state.purchase_deal : "");
  const [purchase_free, setPurchaseFree] = useState(location.state != null ? location.state.purchase_free : "");
  const [costPrice, setCostPrice] = useState(location.state != null ? location.state.cost : "");
  const [invoice, setInvoice] = useState(location.state != null ? location.state.invoiceno : "");
  const [mrp, setMrp] = useState(location.state != null ? location.state.mrp : "");
  const [sales_price, setSalesPrice] = useState(location.state != null ? location.state.sale_price : "");
  const [batch, setBatch] = useState(location.state != null ? location.state.batch : "");
  const [exp, setExp] = useState(location.state != null ? location.state.expire_date : "");
  const [quantity, setQuantity] = useState(location.state != null ? location.state.on_quantity : "");

  const [goods, setGoods] = useState(location.state != null ? location.state.goods : "");
  const [discount, setDiscount] = useState(location.state != null ? location.state.discount : "");
  const [gst, setGst] = useState(location.state != null ? location.state.gst : "");
  const [item2, setItem2] = useState(location.state != null ? location.state.items : "");
  const [batch2, setBatch2] = useState(location.state != null ? location.state.batchs : "");
  const [exp1, setExp1] = useState(location.state != null ? location.state.expiry : "");
  const [search, setSearch] = useState([]);
  const [getItems, setGetItems] = useState([]);
  const [productId, setProductId] = useState();

    console.log("-----------Id------------", location.state.id);

  if (typeof productId == "string") {
    var productIdNum = JSON.parse(productId);
  }
  else {
    var productIdNum = productId;
  }

  function fun() {
    fetch(`http://pykro.com/medicalstore/public/api/EditPurchaseEntry?id=${location.state.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // id: location.state.id,
        userId: userId,
        invoiceno: invoice,
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
    

    setInvoice(invoice + 1);
  }

  function fun1() {
    alert("Purchase Update Successfully---!");
  }

  function fun2() {
    fetch(`http://pykro.com/medicalstore/public/api/EditPurchaseItems?id=${location.state.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        product_id: +productIdNum,
        invoiceno: invoice,
        mrp: mrp,
        cost: costPrice,
        sale_price: sales_price,
        batch: batch,
        expire_date: exp,
        on_quantity: quantity,
        sales_deal: sale_deal,
        sales_free: sate_free,
        purchase_deal: purchase_deal,
        purchase_free: purchase_free,
      }),
    })
      .then((result) => {
        
        if (result.status == 200) {
          Navigate("/purchaseEntry")
        }
      })
      .catch((err) => {
        console.log(err);
      });

    alert("Purchase Items Update Successfully");

    setSaleDeal("");
    setSaleFree("");
    setPurchaseDeal("");
    setPurchaseFree("");
    setCostPrice("");
    setMrp("");
    setSalesPrice("");
    setBatch("");
    setExp("");
    setQuantity("");
    getAllData();
  }

  function searchFun() {
    fetch(
      `http://pykro.com/medicalstore/public/api/searchproductdata?keyword=${product}`
    )
      .then((res) => res.json())
      .then((data) => setSearch(data.data));
  }

  function getAllData() {
    fetch(
      `http://pykro.com/medicalstore/public/api/Purchase-Items-List?invoiceno=${invoice}`
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
                <h3 className="heading1">EDIT PURCHASE ENTRY</h3>
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
                <th className="uniqueTh1">
                  <p>SALES</p>
                  <div className="twoPara1">
                    <p>Deal</p>
                    <p>Free</p>
                  </div>
                </th>
                <th className="uniqueTh2">
                  <p>PURCHASE</p>
                  <div className="twoPara2">
                    <p>Deal</p>
                    <p>Free</p>
                  </div>
                </th>
                <th>COST PRICE</th>
                <th>Invoice</th>
                <th>MRP.</th>
                <th>SALES PRICE</th>
                <th>BATCH</th>
                <th>EXP</th>
                <th>QUANTITY</th>
                <th>Action</th>
              </tr>

              <tr>
                <td className="purchaseList_firstInput">
                  <Autocomplete
                    style={{ padding: "10px 0px", width: "188px" }}
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
                    onChange={(event, newValue) => {
                      setProductId(JSON.stringify(newValue.id, null, ""));
                    }}
                  />
                </td>

                <td className="uniqueTd1">
                  <input
                    className="input3 uniqueTd1_input1"
                    type="text"
                    value={sale_deal}
                    onChange={(e) => setSaleDeal(e.target.value)}
                  />
                  <input
                    className="input3 uniqueTd1_input2"
                    type="text"
                    value={sate_free}
                    onChange={(e) => setSaleFree(e.target.value)}
                  />
                </td>
                <td className="uniqueTd2">
                  <input
                    className="input3 uniqueTd2_input1"
                    type="text"
                    value={purchase_deal}
                    onChange={(e) => setPurchaseDeal(e.target.value)}
                  />
                  <input
                    className="input3 uniqueTd2_input2"
                    type="text"
                    value={purchase_free}
                    onChange={(e) => setPurchaseFree(e.target.value)}
                  />
                </td>
                <td className="purchaseList_fouthInput">
                  <input
                    className="input3"
                    type="text"
                    value={costPrice}
                    onChange={(e) => setCostPrice(e.target.value)}
                  />
                </td>
                <td className="purchaseList_fouthInput">
                  <input className="input3" type="text" value={invoice} />
                </td>
                <td className="purchaseList_fouthInput">
                  <input
                    className="input3"
                    type="text"
                    value={mrp}
                    onChange={(e) => setMrp(e.target.value)}
                  />
                </td>
                <td className="purchaseList_fiveInput">
                  <input
                    className="input3"
                    type="text"
                    value={sales_price}
                    onChange={(e) => setSalesPrice(e.target.value)}
                  />
                </td>
                <td className="purchaseList_sixInput">
                  <input
                    className="input3"
                    type="text"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                  />
                </td>
                <td className="purchaseList_sevenInput">
                  <input
                    className="input3"
                    type="text"
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                  />
                </td>
                <td className="purchaseList_eightInput">
                  <input
                    className="input3"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </td>
                <td className="purchaseList_tenInput">
                  <button
                    onKeyUp={search}
                    className="purchaseList_Button"
                    onClick={fun2}
                  >
                    Add
                  </button>
                </td>
              </tr>

              <tbody>
                {getItems.map((items) => (
                  <tr key={items.id}>
                    <td style={{ width: "146px" }}>{items.product_name}</td>
                    <td>
                      {items.sales_deal} - {items.sales_free}
                    </td>
                    <td>
                      {items.purchase_deal} - {items.purchase_free}
                    </td>
                    <td>{items.cost}</td>
                    <td>{items.invoiceno}</td>
                    <td>{items.mrp}</td>
                    <td>{items.sale_price}</td>
                    <td>{items.batch}</td>
                    <td>{items.expire_date}</td>
                    <td>{items.on_quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row forPadding forPositionParent">
            <div className="line5 forPositionChild">
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
            <button onClick={fun}>Update Product</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default EditPurchase;

