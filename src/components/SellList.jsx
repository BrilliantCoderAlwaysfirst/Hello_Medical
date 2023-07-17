import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SellList() {
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("dataId");

  useEffect(() => {
    sellList();
  }, []);

  function sellList() {
    fetch(
        `http://pykro.com/medicalstore/public/api/ListSaleEntry?userId=${userId}`
      )
        .then((res) => res.json(res))
        .then((data) => setData(data.data));
  }

  function deleteSell(id) {
    console.log("----------Delete Id-----------", id);
    fetch(`http://pykro.com/medicalstore/public/api/DeleteSaleEntry?id=${id}`)
    .then((res) => res.json())
    // .then((data) => console.log(data.status));
    sellList();
  }

  let count = 1;

  return (
    <>
      <div className="container-fluid table-responsive py-5 product_list">
        <table className="table table-bordered table-hover overflow-auto text-center">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col" className="productList_table_thead">
                S.No.
              </th>
              <th scope="col">NAME </th>
              <th scope="col">ENTRY NO</th>
              <th scope="col">PARTY NO</th>
              <th scope="col" className="productList_table_thead">
                DT
              </th>
              <th scope="col" className="productList_table_thead_second">
                DATE
              </th>
              <th scope="col" className="productList_table_thead">
                TYPE
              </th>
              <th scope="col">VALUE OF GOODS</th>
              <th scope="col">DISCOUNT</th>
              <th scope="col">GST</th>
              <th scope="col">ITEM</th>
              <th scope="col">BATCH</th>
              <th scope="colfast_search">EXPIRY</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data ? (data.map((data) => (
              <tr>
                <th scope="row">{count++}</th>
                <td>{data.name}</td>
                <td>{data.entry_no}</td>
                <td>{data.party_no}</td>
                <td>{data.dt}</td>
                <td>{data.date}</td>
                <td>{data.type}</td>
                <td>{data.value_of_goods}</td>
                <td>{data.discount}</td>
                <td>{data.gst}</td>
                <td>{data.items}</td>
                <td>{data.batchs}</td>
                <td>{data.expiryes}</td>
                <td style={{display: "flex", justifyContent: "space-evenly"}}>
                <Link
                      to={"/editSell"}
                      state={{
                        id: data.id,
                        invoice: data.invoice_no,
                        name: data.name,
                        entryNo: data.entry_no,
                        partyNo: data.party_no,
                        dt: data.dt,
                        date: data.date,
                        type: data.type,
                        goods: data.value_of_goods,
                        discount: data.discount,
                        gst: data.gst,
                        items: data.items,
                        batchs: data.batchs,
                        expiry: data.expiryes,
                      }}
                    >
                  <button>
                    
                      Edit
                  </button>
                    </Link>

                  <button onClick={() => deleteSell(data.id)}>Delete</button>
                </td>
              </tr>

              // console.log("--------------Sell List data---------------", item )
              ))) : (
                <h3 style={{textAlign: "center", paddingTop: "20px"}}>Data Not Found!</h3>
                // console.log("--------------Sell List unData---------------")
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SellList;
