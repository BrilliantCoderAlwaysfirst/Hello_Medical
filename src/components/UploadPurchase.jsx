import React, { useState } from "react";  
import { read, utils, writeFile } from 'xlsx';


const UploadPurchase = () => {

    const [movies, setMovies] = useState([]);

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;
                
                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    console.log('-----------Rows----------', rows)
                    setMovies(rows)
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }


  return (
    <>
            <div className="container_upload">
                {/* <div className="row mb-2 mt-5 upload_top">
                    <div className="col-sm-6 offset-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div> */}

                <div className="upload_top">
                    <div className="custom-file">
                        <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                        {/* <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label> */}
                    </div>
                </div>

                <div className="upload_table">
                        <table className="table">

                            <thead>
                                <tr>
                                    {/* <th scope="col">Id</th>
                                    <th scope="col">Movie</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Director</th>
                                    <th scope="col">Rating</th> */}




                                    <th scope="col" className='productList_table_thead'>#</th>
                                    <th scope="col">CODE</th>
                                    <th scope="col">PRODUCT</th>
                                    {/* <th >STATUS </th> */}
                                    <th  className='productList_table_thead'>FAST SEARCH </th>
                                    <th  className='productList_table_thead_second'>COLOR TYPE </th>
                                    <th  className='productList_table_thead'>COMPNAY</th>
                                    <th scope="col">SALT</th>
                                    <th scope="col">UNIT 1st</th>
                                    <th scope="col">HSN /SAC</th>
                                    <th scope="col">TYPE </th>
                                    <th scope="col">HIDE </th>
                                    <th scope="col">PACKING</th>
                                    <th scope="col">UNIT 2nd</th>
                                    <th scope="col">DECIMAL</th>
                                    <th scope="col">ITEM TYPE </th>
                                    <th scope="col">LOCAL</th>
                                    <th scope="col">CENTRAL</th>
                                    <th scope="col">M.R.P </th>
                                    <th scope="col">RATE-A</th>
                                    <th scope="col">CONVERSION</th>
                                    <th scope="col">MINIMUM QTY</th>
                                    <th scope="col">VOLUME DISCOUNT</th>
                                    <th scope="col">ITEM DISCOUNT</th>
                                    <th scope="col">MAXIMUM DISCOUNT</th>
                                    <th scope="col">FREE SCHEME</th>



                                    
                                    

                                    <th scope="col">SGST %</th>
                                    <th scope="col">IGST %</th>
                                    <th scope="col">C.S.R</th>
                                    <th scope="col">P-RATE </th>
                                    <th scope="col">Rate-B</th>
                                    <th scope="col">MAXIMUM QTY</th>
                                    <th scope="col">BOX QTY</th>

                                    <th scope="col">SPECIAL DISCOUNT</th>
                                    <th scope="col">Purchase Disc</th>
                                    <th scope="col">VALID FROM</th>
                                    <th scope="col">MINIMUM MARGIN %</th>

                                    <th scope="col">CGST</th>
                                    <th scope="col">COST /</th>
                                    <th scope="col">Rate-C</th>
                                    <th scope="col">NEGATIVE</th>

                                    <th scope="col">REORDER QTY - DAYS</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">ON QUANTITY</th>
                                    <th scope="col">Rate Effect</th>

                                    <th scope="col">NARCOTIC</th>
                                    <th scope="col">BATCH WISE STOKE</th>
                                    <th scope="col">DISCOUNT LESS</th>
                                </tr>
                            </thead>

                            <tbody> 
                                    {
                                        movies.length
                                        ?
                                        movies.map((movie, index) => (
                                            // <tr key={index}>
                                            //     <th scope="row">{ index + 1 }</th>
                                            //     <td>{ movie.Movie }</td>
                                            //     <td>{ movie.Category }</td>
                                            //     <td>{ movie.Director }</td>
                                            //     <td><span className="badge bg-warning text-dark">{ movie.Rating }</span></td>
                                            // </tr> 

                                            // console.log('---------movie--------', movie)

                                            <tr key={index}>
                                                <th scope="row">{ index + 1 }</th>
                                                <td>{ movie.Code }</td>
                                                <td>{ movie.Product }</td>
                                                {/* <td>{ movie.Status }</td> */}
                                                
                                            </tr> 
                                        ))
                                        :
                                        <tr>
                                            <td colSpan="5" className="text-center">Please Upload File</td>
                                        </tr> 
                                    }
                            </tbody>
                        </table>
                </div>
            </div>
        </>
  )
}

export default UploadPurchase;