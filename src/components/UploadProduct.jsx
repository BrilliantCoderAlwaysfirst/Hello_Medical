import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import { Link } from 'react-router-dom';

const UploadProduct = () => {
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);

  const userId = localStorage.getItem("dataId");

  // const handleImport = ($event) => {
  //     const files = $event.target.files;
  //     if (files.length) {
  //         const file = files[0];
  //         const reader = new FileReader();
  //         reader.onload = (event) => {
  //             const wb = read(event.target.result);
  //             const sheets = wb.SheetNames;

  //             if (sheets.length) {
  //                 const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
  //                 console.log('-----------Rows----------', rows)
  //                 setMovies(rows)
  //             }
  //         }
  //         reader.readAsArrayBuffer(file);
  //     }
  // }

  const handleImport = (e) => {
    console.log("--------Files--------", e.target.files[0]);
    setData(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("doc", data);
  formData.append("vendorid", userId);

  function uploadData() {

    console.log("-----vendor Id----", userId);

    const url = `http://pykro.com/phpexcel/index.php`;
    fetch(url, {
      method: "POST",

      body: formData,
    })
      .then((res) => console.log("result", res))
      .catch((err) => console.log(err));

      alert("Your File Inserted Successfully--!")
  }

  // const handleExport = () => {
  //     // const headings = [[
  //     //     'Product',
  //     //     'Category',
  //     //     'Director',
  //     //     'Rating'
  //     // ]];
  //     const wb = utils.book_new();
  //     const ws = utils.json_to_sheet([]);
  //     // utils.sheet_add_aoa(ws, headings);
  //     utils.sheet_add_json(ws, movies, { origin: 'A2', skipHeader: true });
  //     utils.book_append_sheet(wb, ws, 'Report');
  //     writeFile(wb, 'Movie Report.xlsx');
  // }

  return (
    <>
      <div className="container_upload">

        <div className="upload_top">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile"
              onChange={handleImport}
            />
          </div>

          <button className="button-bt" onClick={uploadData}>
            Import
          </button>
        </div>


        <div style={{marginTop: "30px"}}>
            <h3><b>Note :</b></h3>
            <p>Please Download The Sample File For Uploading the File.</p>
            <Link to="/files/file.csv" target="_blank" download>Download</Link>
        </div>

      </div>
    </>
  );
};

export default UploadProduct;

{
  /* <div className="col-md-6">
                                <button onClick={handleExport} className="btn btn-primary float-right">
                                    Export <i className="fa fa-download"></i>
                                </button>
                            </div> */
}

{
  /* <td>{ movie.FAST_SEARCH }</td>
                                                <td>{ movie.COLOR_TYPE }</td>
                                                <td>{ movie.COMPNAY }</td>
                                                <td>{ movie.SALT }</td>
                                                <td>{ movie.UNIT_1st }</td>
                                                <td>{ movie.HSN_SAC }</td>
                                                <td>{ movie.TYPE }</td>
                                                <td>{ movie.HIDE }</td>
                                                <td>{ movie.PACKING }</td>
                                                <td>{ movie.UNIT_2nd }</td>
                                                <td>{ movie.DECIMAL }</td>
                                                <td>{ movie.ITEM_TYPE }</td>
                                                <td>{ movie.LOCAL }</td>
                                                <td>{ movie.CENTRAL }</td>
                                                <td>{ movie.M_R_P }</td>
                                                <td>{ movie.RATE_A }</td>
                                                <td>{ movie.CONVERSION }</td>
                                                <td>{ movie.MINIMUM_QTY }</td>
                                                <td>{ movie.VOLUME_DISCOUNT }</td>
                                                <td>{ movie.ITEM_DISCOUNT }</td>
                                                <td>{ movie.MAXIMUM_DISCOUNT }</td>
                                                <td>{ movie.FREE_SCHEME }</td>
                                                <td>{ movie.SGST }</td>
                                                <td>{ movie.IGST }</td>
                                                <td>{ movie.C_S_R }</td>
                                                <td>{ movie.P_RATE }</td>
                                                <td>{ movie.Rate_B }</td>
                                                <td>{ movie.MAXIMUM_QTY }</td>
                                                <td>{ movie.BOX_QTY }</td>
                                                <td>{ movie.SPECIAL_DISCOUNT }</td>
                                                <td>{ movie.Purchase_Disc }</td>
                                                <td>{ movie.VALID_FROM }</td>
                                                <td>{ movie.MINIMUM_MARGIN }</td>
                                                <td>{ movie.CGST }</td>
                                                <td>{ movie.COST }</td>
                                                <td>{ movie.Rate_C }</td>
                                                <td>{ movie.NEGATIVE }</td>
                                                <td>{ movie.REORDER_QTY }</td>-<td>{ movie.DAYS }</td>
                                                <td>{ movie.Discount }</td>
                                                <td>{ movie.ON_QUANTITY }</td>
                                                <td>{ movie.Rate_Effect }</td>
                                                <td>{ movie.NARCOTIC }</td>
                                                <td>{ movie.BATCH_WISE_STOKE }</td>
                                                <td>{ movie.DISCOUNT_LESS }</td>
                                                 */
}
