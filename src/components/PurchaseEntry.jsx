import React, { useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const PurchaseEntry = () => {
  var precision = 100;
  var randomNum = Math.floor(Math.random() * (1000 - 100) + 100) * precision;

  const userId = localStorage.getItem("dataId");

  const [name, setName] = useState();
  const [entryNo, setEntryNo] = useState();
  const [partyNo, setPartyNo] = useState();
  const [dt, setDt] = useState();
  const [date1, setDate1] = useState();
  const [type, setType] = useState();

  const [product, setProduct] = useState();
  const [sale_deal, setSaleDeal] = useState();
  const [sate_free, setSaleFree] = useState();
  const [purchase_deal, setPurchaseDeal] = useState();
  const [purchase_free, setPurchaseFree] = useState();
  const [costPrice, setCostPrice] = useState();
  const [invoice, setInvoice] = useState(randomNum);
  const [mrp, setMrp] = useState();
  const [sales_price, setSalesPrice] = useState();
  const [batch, setBatch] = useState();
  const [exp, setExp] = useState();
  const [quantity, setQuantity] = useState();

  const [goods, setGoods] = useState();
  const [discount, setDiscount] = useState();
  const [gst, setGst] = useState();
  const [item2, setItem2] = useState();
  const [batch2, setBatch2] = useState();
  const [exp1, setExp1] = useState();
  const [search, setSearch] = useState([]);
  const [getItems, setGetItems] = useState([]);
  const [productId, setProductId] = useState();

  if (typeof productId == "string") {
    var productIdNum = JSON.parse(productId);
  } else {
    var productIdNum = productId;
  }

  function fun() {
    fetch("http://pykro.com/medicalstore/public/api/PurchaseEntry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

    alert("Purchase Add Successfully");

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
    setGetItems([]);
  }

  function fun1() {
    alert("Add Successfully---!");
  }

  function fun2() {
    fetch("http://pykro.com/medicalstore/public/api/Add-Purchase-Items", {
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
      .then((result) => console.log("Result", result))
      .catch((err) => {
        console.log(err);
      });

    alert("Purchase Add Successfully");

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
      `http://pykro.com/medicalstore/public/api/searchproductdata?keyword=${product}&vendor_id=${userId}`
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
                  <h3 className="heading1">PURCHASE ENTRY</h3>
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
                    <input className="input3" type="password" value={invoice} />
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
                      <td>
                        <Link
                          to={"/editpurchase"}
                          state={{
                            id: items.id,
                            productName: items.product_name,
                            sales_deal: items.sales_deal,
                            sales_free: items.sales_free,
                            purchase_deal: items.purchase_deal,
                            purchase_free: items.purchase_free,
                            cost: items.cost,
                            invoiceno: items.invoiceno,
                            mrp: items.mrp,
                            sale_price: items.sale_price,
                            batch: items.batch,
                            expire_date: items.expire_date,
                            on_quantity: items.on_quantity,
                          }}
                        >
                          <button
                            style={{
                              border: "2px solid red",
                              width: "89px",
                              color: "red",
                              margin: "0px",
                              top: "0px",
                              left: "62px",
                              outline: "none",
                              border: "none",
                              color: "white",
                              fontSize: "15px",
                              fontWeight: "700",
                              cursor: "pointer",
                              background: "#49162a",
                              borderRadius: "10px",
                              height: "38px",
                            }}
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
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
              <button onClick={fun}>Add Product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseEntry;
