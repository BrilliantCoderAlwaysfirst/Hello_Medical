import React from 'react';

const Bill = () => {
  return (
    <>
    
        <div className="container_Bill">

            <div className="one">
                <div className="one_left">
                    <h4>NEW BALAJI MEDICAL AGENCIES</h4>
                    <p>Pharmaceutical Distributors</p>
                    <p>DAWABAZAR, HUZRAT ROAD, LASHKAR, 23-MADHYA PRADE <br /> GWALIOR(M.P.)</p>
                    <p>Phone: 0751-4085060, 9301103868</p>
                </div>
                <div className="one_right">
                    <h4>M/s SHATAYU MEDICAL STORE GWALIOR</h4>
                    <p>TANSAN ROAD <br /> 23-MADHYA PRADE</p>
                    <p>Phone: 0751-4085060, 9301103868</p>
                    <p>GST : D.L.No.: 20/618/57/2017-21/619/57/2017</p>
                </div>
            </div>

            <div className="two">
                <div className="two_left">
                    <p>D.I.No. : 20/618/57/2017-21/619/57/2017</p>
                    <p>GSTIN : 23ABTPB4331PIZG</p>
                </div>

                <div className="verticalLine"></div>
                <div className="two_center">
                    <h2>CASH MEMO</h2>
                </div>
                <div className="verticalLine"></div>

                <div className="two_right">
                    <div className="two_right_top">
                        <p>Invoice No. : C-A000296</p>
                        <p>Date : 02-05-2022</p>
                    </div>
                    <div className="two_right_bottom">
                        <p>Sales Man : C-A000296</p>
                        <p>Due Date : 02-05-2022</p>
                    </div>
                </div>
            </div>


            <div className="three">
                <table>
                    <thead>
                        <tr style={{border: "2px solid rgb(126, 124, 124)"}}>
                            <th>Sn.</th>
                            <th>Qty.</th>
                            <th>Pack</th>
                            <th style={{width: "30%"}}>Product</th>
                            <th>Batch</th>
                            <th>Exp.</th>
                            <th>HSN</th>
                            <th>MRP</th>
                            <th>Rate</th>
                            <th>Dis</th>
                            <th>SGST</th>
                            <th>CGST</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>1*10</td>
                            <td>NERVIJEN CAP</td>
                            <td>NNP052142</td>
                            <td>2/23</td>
                            <td>3004</td>
                            <td>171.75</td>
                            <td>122.68</td>
                            <td>0.00</td>
                            <td>6.00</td>
                            <td>6.00</td>
                            <td>245.36</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>1*10</td>
                            <td>NERVIJEN CAP</td>
                            <td>NNP052142</td>
                            <td>2/23</td>
                            <td>3004</td>
                            <td>171.75</td>
                            <td>122.68</td>
                            <td>0.00</td>
                            <td>6.00</td>
                            <td>6.00</td>
                            <td>245.36</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="space"></div>

            <div className="four">
                <table>
                    <thead>
                        <tr>
                            <td style={{height: "5px"}}>CLASS</td>
                            <td>TOTAL</td>
                            <td>SCH.</td>
                            <td>DISC.</td>
                            <td>SGST</td>
                            <td>CGST</td>
                            <td>TOTAL GST</td>

                            <td style={{width: "35%"}}>SUB TOTAL</td>
                            <td>245.36</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GST 5.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            
                            <td>SGST PAYBLE</td>
                            <td>14.28</td>
                        </tr>
                        <tr>
                            <td>GST 12.00</td>
                            <td>245.36</td>
                            <td>0.00</td>
                            <td>7.36</td>
                            <td>14.28</td>
                            <td>14.28</td>
                            <td>28.56</td>

                            <td>COST PAYBLE</td>
                            <td>14.28</td>
                        </tr>
                        <tr>
                            <td>GST 18.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                            <td>ADD/LESS</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>GST 28.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                            <td>CR/DR NOTE</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>TOTAL</td>
                            <td>245.36</td>
                            <td>0.00</td>
                            <td>7.36</td>
                            <td>14.28</td>
                            <td>14.28</td>
                            <td>28.56</td>

                            <th>GRAND TOTAL</th>
                            <td>267.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="five">
                <p>Rs. Two Hundred Sixty Seven Only</p>
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
                    <p>For NEW BALAJI MEDICAL AGENCIES</p>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Bill