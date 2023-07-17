import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AddProducts = () => {
  const [status, setStatus] = useState();
  const [code, setCode] = useState("0.00");
  const [product, setProduct] = useState();
  const [unt1, setUnit1] = useState();
  // const [fastSearch, setFastSearch] = useState();
  // const [colorType, setColorType] = useState();
  const [company, setCompany] = useState();
  const [salt, setSalt] = useState();
  const [hsn, setHsn] = useState();
  const [type, setType] = useState();
  const [Unit2, setUnit2] = useState();
  const [hide, setHide] = useState();
  const [packing, setPacking] = useState();
  const [decimal, setDecimal] = useState();
  const [item_type, setItemType] = useState();

  const [local, setLocal] = useState();
  const [central, setCentral] = useState();
  const [mrp, setMrp] = useState("0.00");
  const [rateA, setRateA] = useState("0.00");
  const [conversion, setConversion] = useState("0.00");
  const [minimumQty, setMinimumQty] = useState("0");
  // const [volumeDiscount, setVolumeDiscount] = useState("0.00");
  // const [itemDiscount, setItemDiscount] = useState("0.00");
  const [maximumDiscount, setMaximumDiscount] = useState("0.00");
  const [freeScheme, setFreeScheme] = useState();
  // const [minimumMargin, setMinimumMargin] = useState("0");
  // const [narcotic, setNarcotic] = useState();
  // const [batchWiseStoke, setBatchWiseStoke] = useState();
  const [sgst, setSgst] = useState("0.00");
  const [igst, setIgst] = useState("0.00");
  const [csr, setCsr] = useState("0.00");
  // const [prate, setPrate] = useState("0.00");
  // const [rateB, setRateB] = useState("0.00");
  // const [maximumQty, setMaximumQty] = useState("0.00");
  // const [boxQty, setBoxQty] = useState("0.00");

  const [cgst, setCgst] = useState("0.00");
  const [batch, setBatch] = useState("0.00");
  const [exp, setExp] = useState("0.00");
  // const [cost, setCost] = useState("0.00");
  // const [rateC, setRateC] = useState("0.00");
  // const [negative, setNegative] = useState();
  // const [validForm, setValidForm] = useState();

  // const [specialDiscount, setSpecialDiscount] = useState("0.00");
  // const [purchaseDisc, setPurchaseDisc] = useState("0.00");
  const [onQuantity, setOnQuantity] = useState("0.00");
  // const [reOrderQty, setReOrderQty] = useState("0");
  // const [days, setDays] = useState("0");
  // const [discountLess, setDiscountLess] = useState("0.00");
  const [discount, setDiscount] = useState("0.00");
  const [gst, setGst] = useState("0.00");
  const [currentStock, setCurrentStock] = useState("0.00");

  const location = useLocation();

  // console.log("----------discountLess----------", discountLess);

  const userId = localStorage.getItem("dataId");

  function fun(e) {



    console.log(userId)
    console.log(product)
    console.log(mrp)
    console.log(gst)
    console.log(status)
    console.log(code)
    // console.log(colorType)
    console.log(company)
    console.log(salt)
    console.log(unt1)
    console.log(Unit2)
    console.log(hsn)
    console.log(type)
    console.log(hide)
    console.log(packing)
    console.log(decimal)
    console.log(item_type)
    console.log(local)
    console.log(central)
    console.log(rateA)
    console.log(conversion)
    console.log(minimumQty)
    // console.log(volumeDiscount)
    // console.log(itemDiscount)
    console.log(maximumDiscount)
    console.log(freeScheme)
    console.log(sgst)
    console.log(cgst)
    console.log(igst)
    console.log(discount)
    console.log(onQuantity)
    console.log(currentStock)

    fetch("http://pykro.com/medicalstore/public/api/addMedicine", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vendor_id: userId,
        product_name: product,
        product_price: mrp,
        gst: gst,
        product_status: status,
        product_code: code,
        company: company,
        salt: salt,
        unit_one: unt1,
        unit_two: Unit2,
        hsn_sac: hsn,
        product_type: type,
        hide_status: hide,
        packing: packing,
        decimal: decimal,
        item_type: item_type,
        local_tax: local,
        central_tax: central,
        retail_price: rateA,
        product_conversion: conversion,
        minimum_qnt_alert: minimumQty,
        maximum_discount: maximumDiscount,
        free_scheme: freeScheme,
        sgst: sgst,
        cgst: cgst,
        igst: igst,
        csr: csr,
        discount_applicable: discount,
        disc_on_quantity: onQuantity,
        current_stock: currentStock,
        batch: batch,
        exp: exp


        // fast_search: fastSearch,
        // maximum_margin: minimumMargin,
        // narcotic: narcotic,
        // batchwisestock: batchWiseStoke,
        // p_rate: prate,
        // rate_b: rateB,
        // box_qnt: boxQty,
        // cost: cost,
        // rate_c: rateC,
        // negative: negative,
        // max_quant: maximumQty,
        // special_discount: specialDiscount,
        // purchase_dst: purchaseDisc,
        // valid_from: validForm,
        // days: days,
        // reorder_qnt: reOrderQty,
        // less_dst: discountLess,
      }),
    })
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {
        console.log(err);
      });

    alert("Product Add Successfully");

    // setStatus("");
    // setCode("0.00");
    // setProduct("");
    // setUnit1("");
    // setFastSearch("");
    // setColorType("");
    // setCompany("");
    // setSalt("");
    // setHsn("");
    // setType("");
    // setUnit2("");
    // setHide("");
    // setPacking("");
    // setDecimal("");
    // setItemType("");
    // setLocal("");
    // setCentral("");
    // setMrp("0.00");
    // setRateA("0.00");
    // setConversion("0.00");
    // setMinimumQty("0");
    // setVolumeDiscount("0.00");
    // setItemDiscount("0.00");
    // setMaximumDiscount("0.00");
    // setFreeScheme("");
    // setMinimumMargin("0");
    // setNarcotic("");
    // setBatchWiseStoke("");
    // setSgst("0.00");
    // setIgst("0.00");
    // setCsr("0.00");
    // setPrate("0.00");
    // setRateB("0.00");
    // setMaximumQty("0.00");
    // setBoxQty("0.00");
    // setCgst("0.00");
    // setCost("0.00");
    // setRateC("0.00");
    // setNegative("");
    // setValidForm("");
    // setSpecialDiscount("0.00");
    // setPurchaseDisc("0.00");
    // setOnQuantity("0.00");
    // setReOrderQty("0");
    // setDays("0");
    // setDiscountLess("0.00");
    // setDiscount("0.00");
    // setGst("0");
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className=" line4">
            <div className="row link2">
              <div>
                <h3 className="heading1">ADD PRODUCT</h3>
              </div>
            </div>

            <div className="row line1">
              <div className="col-md-4">
                <div className="d-flex ">
                  <span className="form1">STATUS :</span>
                  <span>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="from-control form2 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="CONTINUE">CONTINUE</option>
                      <option value="DISCONTINUE">DISCONTINUE</option>
                    </select>
                  </span>
                </div>

                <div className="d-flex mt-3">
                  <span className="form1">CODE:</span>
                  <span className="form1 form9 codeClass sameStyleForInput">
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3">
                  <span className="form1">PRODUCT :</span>
                  <span className="form1 form9 productClass sameStyleForInput">
                    <input
                      type="text"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                    />
                  </span>
                  {/* <span>
                    <select value={product} onChange={e=>setProduct(e.target.value)}
                      className="from-control form3 "
                      aria-label="Default select example"
                    >
                      <option selected>CONTINUE</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </span> */}
                </div>

                {/* <div className="mt-3 fastSearchClass">
                  <label className="form1">FAST SEARCH :</label>
                  <span className="form1 form9 fastSearchInput sameStyleForInput">
                    <input type="text" value={fastSearch} onChange={e=>setFastSearch(e.target.value)}  />
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3">
                  <span className="form1">COLOR TYPE :</span>
                  <span>
                    <select value={colorType} onChange={e=>setColorType(e.target.value)}
                      className="from-control form5 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>Choose Option</option>
                      <option value="NORMAL" >NORMAL</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </span>
                </div> */}

                <div className="d-flex mt-3">
                    <span className="form1">COMPNAY:</span>
                    <span className="form1 form9 companyName sameStyleForInput">
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                  </span>
                  {/* <span>
                    <select value={company} onChange={e=>setCompany(e.target.value)}
                      className="from-control form6 "
                      aria-label="Default select example"
                    >
                      <option selected>YES</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </span>
                  <span className="ms-2">OTHER</span> */}
                </div>

                <div className="d-flex mt-3">
                  <span className="form1">SALT:</span>
                  <span className="form1 form9 salt sameStyleForInput">
                    <input
                      type="text"
                      value={salt}
                      onChange={(e) => setSalt(e.target.value)}
                    />
                  </span>
                  {/* <span>
                    <select value={salt} onChange={e=>setSalt(e.target.value)}
                      className="from-control form7 saltClass"
                      aria-label="Default select example"
                    >
                      <option selected>YES</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </span>
                  <span className="ms-2">OTHER</span> */}
                </div>

              </div>




              <div className="col-md-3 ">

                <div className="d-flex mt-3">
                  <span className="form1">UNIT1st:</span>
                  <span className="form1 form9 unit1St sameStyleForInput">
                    <input
                      type="text"
                      value={unt1}
                      onChange={(e) => setUnit1(e.target.value)}
                    />
                  </span>

                  {/* <span>
                    <select value={unt1} onChange={e=>setUnit1(e.target.value)}
                      className="from-control form4 "
                      aria-label="Default select example"
                    >
                      <option selected>CONTINUE</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </span> */}
                </div>

                <div className="d-flex mt-3">
                  <span className="form1 hsnSacClass">HSN/SAC:</span>
                  <span className="form1 form9 hsn sameStyleForInput">
                    <input
                      type="text"
                      value={hsn}
                      onChange={(e) => setHsn(e.target.value)}
                    />
                  </span>
                  {/* <span>
                    <select value={hsn} onChange={e=>setHsn(e.target.value)}
                      className="from-control form8 "
                      aria-label="Default select example"
                    >
                      <option selected>YES</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </span>
                  <span className="ms-2">OTHER</span> */}
                </div>

                <div className="d-flex mt-3">
                  <span className="form1">TYPE:</span>
                  <span>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="from-control form8 typeClass"
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="NORMAL">NRX</option>
                      <option value="One">Non-NRX</option>
                      {/* <option value="Two">Two</option>
                      <option value="Three">Three</option> */}
                    </select>
                  </span>
                </div>

                <div className="d-flex mt-3">
                  <span className="form1">HIDE :</span>
                  <span>
                    <select
                      value={hide}
                      onChange={(e) => setHide(e.target.value)}
                      className="from-control form10 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="NO">NO</option>
                      <option value="YES">YES</option>
                    </select>
                  </span>
                </div>

              </div>

              <div className="col-md-4 firstRowThirdColumn">
                

                <div className="d-flex mt-3">
                  <span className="form1">PACKING :</span>
                  <span className="form1 form9 sameStyleForInput">
                    <input
                      type="text"
                      value={packing}
                      onChange={(e) => setPacking(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 mainUnitSecondClass">
                  <span className="form1">UNIT2nd:</span>
                  <span className="form1 form9 unitSecondClass sameStyleForInput">
                    <input
                      type="text"
                      value={Unit2}
                      onChange={(e) => setUnit2(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3">
                  <span className="form1">DECIMAL:</span>
                  <span>
                    <select
                      value={decimal}
                      onChange={(e) => setDecimal(e.target.value)}
                      className="from-control form11 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="NO">NO</option>
                      <option value="YES">YES</option>
                    </select>
                  </span>
                </div>

                <div className="d-flex mt-3">
                  <span className="form1">ITEM TYPE :</span>
                  <span className="form1 form9 itemType sameStyleForInput">
                    <input
                      type="text"
                      value={item_type}
                      onChange={(e) => setItemType(e.target.value)}
                    />
                  </span>
                  {/* <span>
                    <select value={item_type} onChange={e=>setItemType(e.target.value)}
                      className="from-control form12 "
                      aria-label="Default select example"
                    >
                      <option selected>NORMAL</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                    </select>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 line2">
                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">LOCAL :</span>
                  <span>
                    <select
                      value={local}
                      onChange={(e) => setLocal(e.target.value)}
                      className="from-control form13 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="TAXABLE">TAXABLE</option>
                      <option value="Tax Paid">Tax Paid</option>
                      <option value="Exempted">Exempted</option>
                    </select>
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">CENTRAL :</span>
                  <span>
                    <select
                      value={central}
                      onChange={(e) => setCentral(e.target.value)}
                      className="from-control form14"
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="TAXABLE">TAXABLE</option>
                      <option value="NON_TAXABLE">NON-TAXABLE</option>
                    </select>
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">M.R.P :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={mrp}
                      onChange={(e) => setMrp(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">RATE-A :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={rateA}
                      onChange={(e) => setRateA(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1 ">CONVERSION :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={conversion}
                      onChange={(e) => setConversion(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">CURRENT STOCK :</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={currentStock} onChange={e=>setCurrentStock(e.target.value)} />
                  </span>
                </div>

                

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">VOLUME DISCOUNT :</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={volumeDiscount} onChange={e=>setVolumeDiscount(e.target.value)} />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between ">
                  <span className="form1">ITEM DISCOUNT:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={itemDiscount} onChange={e=>setItemDiscount(e.target.value)} />
                  </span>
                </div> */}

                

                
              </div>

              <div className="col-md-4 line2" style={{paddinTop: "35px"}}>
                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">SGST % :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={sgst}
                      onChange={(e) => setSgst(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">IGST % :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={igst}
                      onChange={(e) => setIgst(e.target.value)}
                    />
                  </span>
                </div>


                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">MINIMUM QTY :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={minimumQty}
                      onChange={(e) => setMinimumQty(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">MAXIMUM DISCOUNT (%) :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={maximumDiscount}
                      onChange={(e) => setMaximumDiscount(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1"> FREE SCHEME :</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={freeScheme}
                      onChange={(e) => setFreeScheme(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">C.S.R:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={csr} onChange={e=>setCsr(e.target.value)} />
                  </span>
                </div>

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">P-RATE :</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={prate} onChange={e=>setPrate(e.target.value)} />
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">Rate-B :</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={rateB} onChange={e=>setRateB(e.target.value)} />
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">MAXIMUM QTY:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={maximumQty} onChange={e=>setMaximumQty(e.target.value)} />
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">BOX QTY:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={boxQty} onChange={e=>setBoxQty(e.target.value)} />
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">SPECIAL DISCOUNT:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={specialDiscount} onChange={e=>setSpecialDiscount(e.target.value)} />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">Purchase Disc:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={purchaseDisc} onChange={e=>setPurchaseDisc(e.target.value)} />
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">VALID FROM</span>
                  <span>
                    <select value={validForm} onChange={e=>setValidForm(e.target.value)}
                      className="from-control form13 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>Choose Option</option>
                      <option value="Full Scheme">Full Scheme</option>
                      <option value="NO">NO</option>
                    </select>
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">MINIMUM MARGIN %:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={minimumMargin} onChange={e=>setMinimumMargin(e.target.value)} />
                  </span>
                </div> */}
              </div>

              <div className="col-md-4">
                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">CGST:</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={cgst}
                      onChange={(e) => setCgst(e.target.value)}
                    />
                  </span>
                </div>

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">COST / :</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={cost} onChange={e=>setCost(e.target.value)} />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">Rate-C :</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={rateC} onChange={e=>setRateC(e.target.value)} />
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">NEGATIVE :</span>
                  <span>
                    <select value={negative} onChange={e=>setNegative(e.target.value)}
                      className="from-control form14"
                      aria-label="Default select example"
                    >
                      <option selected disabled>Choose Option</option>
                      <option value="NO">NO</option>
                      <option value="YES">YES</option>
                    </select>
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">REORDER QTY:</span>
                  <span className="form15 minimumHeight sameStyleForInput">
                    <input className="minimumWidthSpecial" type="text" value={reOrderQty} onChange={e=>setReOrderQty(e.target.value)} />
                  </span>
                  <span className="form1">DAYS</span>
                  <span className="form15 minimumHeight sameStyleForInput">
                    <input className="minimumWidthSpecial" type="text" value={days} onChange={e=>setDays(e.target.value)} />
                  </span>
                </div> */}

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">Discount:</span>
                  <span>
                    <select
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      className="from-control form13 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="Applicable">Applicable</option>
                      <option value="YES">YES</option>
                    </select>
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">ON QUANTITY:</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={onQuantity}
                      onChange={(e) => setOnQuantity(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">Batch:</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                    />
                  </span>
                </div>

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">Exp:</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={exp}
                      onChange={(e) => setExp(e.target.value)}
                    />
                  </span>
                </div>

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">Rate Effect:</span>
                  <span>
                    <select
                      value={"Discount"}
                      onChange={(e) => console.log(e.target.value)}
                      className="from-control form13 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Choose Option
                      </option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </select>
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">NARCOTIC:</span>
                  <span>
                    <select value={narcotic} onChange={e=>setNarcotic(e.target.value)}
                      className="from-control form13 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>Choose Option</option>
                      <option value="NO">NO</option>
                      <option value="YES">YES</option>
                    </select>
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">BATCH WISE STOKE :</span>
                  <span>
                    <select value={batchWiseStoke} onChange={e=>setBatchWiseStoke(e.target.value)}
                      className="from-control form13 "
                      aria-label="Default select example"
                    >
                      <option selected disabled>Choose Option</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </select>
                  </span>
                </div> */}

                {/* <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">DISCOUNT LESS:</span>
                  <span className="form15 sameStyleForInput">
                    <input className="minimumWidth" type="text" value={discountLess} onChange={e=>setDiscountLess(e.target.value)} />
                  </span>
                </div> */}

                <div className="d-flex mt-3 justify-content-between">
                  <span className="form1">GST:</span>
                  <span className="form15 sameStyleForInput">
                    <input
                      className="minimumWidth"
                      type="text"
                      value={gst}
                      onChange={(e) => setGst(e.target.value)}
                    />
                  </span>
                </div>

              </div>
            </div>


            <div className="button">
              <button type="Submit" onClick={fun}>
                    Add Product
              </button>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
