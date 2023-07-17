import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const EditProduct = () => {


    const location = useLocation();
    console.log("---------Main Data--------", location.state);

    const userId = localStorage.getItem("dataId");





  const [status, setStatus] = useState(location.state.product_status);
  const [code, setCode] = useState(location.state.product_code);
  const [product, setProduct] = useState(location.state.product_name);
  
  // const [fastSearch, setFastSearch] = useState(location.state.fast_search);
  // const [colorType, setColorType] = useState(location.state.color_type);
  const [company, setCompany] = useState(location.state.company);
  const [salt, setSalt] = useState(location.state.salt);
  const [unt1, setUnit1] = useState(location.state.unit_one);
  const [hsn, setHsn] = useState(location.state.hsn_sac);
  const [type, setType] = useState(location.state.product_type);
  const [Unit2, setUnit2] = useState(location.state.unit_two);
  const [hide, setHide] = useState(location.state.hide_status);
  const [packing, setPacking] = useState(location.state.packing);
  const [decimal, setDecimal] = useState(location.state.decimal);
  const [item_type, setItemType] = useState(location.state.item_type);
  const [local, setLocal] = useState(location.state.local_tax);
  const [central, setCentral] = useState(location.state.central_tax);
  const [mrp, setMrp] = useState(location.state.product_price);

  const [rateA, setRateA] = useState(location.state.retail_price);
  const [conversion, setConversion] = useState(location.state.product_conversion);
  const [minimumQty, setMinimumQty] = useState(location.state.minimum_qnt_alert);
  // const [volumeDiscount, setVolumeDiscount] = useState(location.state.volume_dst);
  // const [itemDiscount, setItemDiscount] = useState(location.state.item_dst);
  const [maximumDiscount, setMaximumDiscount] = useState(location.state.maximum_discount);
  const [freeScheme, setFreeScheme] = useState(location.state.free_scheme);
  // const [minimumMargin, setMinimumMargin] = useState(location.state.maximum_margin);
  // const [narcotic, setNarcotic] = useState(location.state.narcotic);
  // const [batchWiseStoke, setBatchWiseStoke] = useState(location.state.batchwisestock);
  const [cgst, setCgst] = useState(location.state.cgst);
  const [sgst, setSgst] = useState(location.state.sgst);
  const [igst, setIgst] = useState(location.state.igst);
  const [csr, setCsr] = useState(location.state.csr);
  const [batch, setBatch] = useState(location.state.batch);
  const [exp, setExp] = useState(location.state.exp);
  // const [prate, setPrate] = useState(location.state.p_rate);
  // const [rateB, setRateB] = useState(location.state.rate_b);
  // const [maximumQty, setMaximumQty] = useState(location.state.max_qnt);
  // const [boxQty, setBoxQty] = useState(location.state.box_qnt);
  // const [cost, setCost] = useState(location.state.cost);
  // const [rateC, setRateC] = useState(location.state.rate_c);
  // const [negative, setNegative] = useState(location.state.negative);
  // const [validForm, setValidForm] = useState(location.state.valid_Form);
  // const [specialDiscount, setSpecialDiscount] = useState(location.state.special_disc);
  // const [purchaseDisc, setPurchaseDisc] = useState(location.state.purchase_disc);
  const [onQuantity, setOnQuantity] = useState(location.state.disc_on_quantity);
  // const [reOrderQty, setReOrderQty] = useState(location.state.reorder_qnt);
  // const [days, setDays] = useState(location.state.days);
  // const [discountLess, setDiscountLess] = useState(location.state.discount_less);

  const [discount, setDiscount] = useState(location.state.discount_applicable);
  const [currentStock, setCurrentStock] = useState(location.state.current_stock);
  const [gst, setGst] = useState(location.state.gst);



  console.log("------------------OOOOOO----------------", status)


  function fun() {

    fetch(`http://pykro.com/medicalstore/public/api/UpdateMedicine?id=${location.state.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
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

      })
    }).then((result) => {console.log("result", result)})
    .catch((err) => {
      console.log(err);
    });

    alert("Edit Product Successfully");
  }



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className=" line4">
            <div className="row link2">
              <div>
                <h3 className="heading1">UPDATE PRODUCT</h3>
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
                    Edit Product
              </button>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct