// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// const PaginationProductList = ({ data }) => {

//     // const [data, setData] = useState([]);

//     // const userId = localStorage.getItem("dataId");


//     // useEffect(() => {
//     //     ProductList();
//     //   }, []);



//     // function ProductList() {
//     //     const url = `http://pykro.com/medicalstore/public/api/product-list?userid=${userId}`;
//     //     fetch(url)
//     //       .then((res) => res.json())
//     //       .then((res) => setData(res.data));
//     //   }


//     function deletePurchase(id) {
//         fetch(`http://pykro.com/medicalstore/public/api/productListDelete?id=${id}`)
//         .then((res) => res.json())
//         // ProductList();
//       }


//   return (
//     <>

//       <table className="table table-bordered table-hover overflow-auto text-center">
//         <thead className="bg-dark text-white">
//           <tr>
//             <th scope="col" className="productList_table_thead">
//               #
//             </th>
//             <th scope="col">STATUS </th>
//             <th scope="col">CODE</th>
//             <th scope="col">PRODUCT</th>
//             <th scope="col" className="productList_table_thead">
//               FAST SEARCH{" "}
//             </th>
//             <th scope="col" className="productList_table_thead_second">
//               COLOR TYPE{" "}
//             </th>
//             <th scope="col" className="productList_table_thead">
//               COMPNAY
//             </th>
//             <th scope="col">SALT</th>
//             <th scope="col">UNIT 1st</th>
//             <th scope="col">HSN /SAC</th>
//             <th scope="col">TYPE </th>
//             <th scope="col">HIDE </th>
//             <th scope="col">PACKING</th>
//             <th scope="col">UNIT 2nd</th>
//             <th scope="col">DECIMAL</th>
//             <th scope="col">ITEM TYPE </th>
//             <th scope="col">LOCAL</th>
//             <th scope="col">CENTRAL</th>
//             <th scope="col">M.R.P </th>
//             <th scope="col">RATE-A</th>
//             <th scope="col">CONVERSION</th>
//             <th scope="col">MINIMUM QTY</th>
//             <th scope="col">VOLUME DISCOUNT</th>
//             <th scope="col">ITEM DISCOUNT</th>
//             <th scope="col">MAXIMUM DISCOUNT</th>
//             <th scope="col">FREE SCHEME</th>
//             <th scope="col">SGST %</th>
//             <th scope="col">IGST %</th>
//             <th scope="col">C.S.R</th>
//             <th scope="col">P-RATE </th>
//             <th scope="col">Rate-B</th>
//             <th scope="col">MAXIMUM QTY:</th>
//             <th scope="col">BOX QTY</th>
//             <th scope="col">SPECIAL DISCOUNT</th>
//             <th scope="col">Purchase Disc</th>
//             <th scope="col">VALID FROM</th>
//             <th scope="col">MINIMUM MARGIN %</th>
//             <th scope="col">CGST</th>
//             <th scope="col">COST /</th>
//             <th scope="col">Rate-C</th>
//             <th scope="col">NEGATIVE</th>
//             <th scope="col">REORDER QTY - DAYS</th>
//             <th scope="col">Discount</th>
//             <th scope="col">ON QUANTITY</th>
//             <th scope="col">Rate Effect</th>
//             <th scope="col">NARCOTIC</th>
//             <th scope="col">BATCH WISE STOKE</th>
//             <th scope="col">DISCOUNT LESS</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((data) => (
//             <tr>
//               <th scope="row">{1}</th>
//               <td>{data.status}</td>
//               <td>{data.code}</td>
//               <td>{data.product_name}</td>
//               <td>{data.fast_search}</td>
//               <td>{data.color_type}</td>
//               <td>{data.company}</td>
//               <td>{data.salt}</td>
//               <td>{data.unit_first}</td>
//               <td>{data.hns_sac}</td>
//               <td>{data.type}</td>
//               <td>{data.hide}</td>
//               <td>{data.packing}</td>
//               <td>{data.unit_second}</td>
//               <td>{data.decimal}</td>
//               <td>{data.item_type}</td>
//               <td>{data.local}</td>
//               <td>{data.central}</td>
//               <td>{data.mrp}</td>
//               <td>{data.rate_a}</td>
//               <td>{data.conv_stri}</td>
//               <td>{data.mini_qnt}</td>
//               <td>{data.volume_dst}</td>
//               <td>{data.item_dst}</td>
//               <td>{data.max_dst}</td>
//               <td>{data.free_scheme}</td>
//               <td>{data.sgst}</td>
//               <td>{data.igst}</td>
//               <td>{data.c_s_r}</td>
//               <td>{data.p_rate}</td>
//               <td>{data.rate_b}</td>
//               <td>{data.max_quant}</td>
//               <td>{data.box_qnt}</td>
//               <td>{data.special_discount}</td>
//               <td>{data.purchase_dst}</td>
//               <td>{data.valid_from}</td>
//               <td>{data.maximum_margin}%</td>
//               <td>{data.cgst}</td>
//               <td>{data.cost}</td>
//               <td>{data.rate_c}</td>
//               <td>{data.negative}</td>
//               <td>
//                 {data.reorder_qnt} - {data.days}
//               </td>
//               <td>{data.discount}</td>
//               <td>{data.on_quantity}</td>
//               <td>{data.rate_effect}</td>
//               <td>{data.narcotic}</td>
//               <td>{data.batch_wise_stock}</td>
//               <td>{data.less_dst}</td>

//               <td
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "256px",
//                 }}
//               >
//                 <Link
//                   to={"/editProduct"}
//                   state={{
//                     id: data.id,
//                     status: data.status,
//                     code: data.code,
//                     product_name: data.product_name,
//                     fast_search: data.fast_search,
//                     color_type: data.color_type,
//                     company: data.company,
//                     salt: data.salt,
//                     unit_first: data.unit_first,
//                     hsn: data.hns_sac,
//                     type: data.type,
//                     hide: data.hide,
//                     packing: data.packing,
//                     unit_second: data.unit_second,
//                     decimal: data.decimal,
//                     item_type: data.item_type,
//                     local: data.local,
//                     central: data.central,
//                     mrp: data.mrp,
//                     rate_a: data.rate_a,
//                     conversion: data.conv_stri,
//                     minimumQty: data.mini_qnt,
//                     volume_dst: data.volume_dst,
//                     item_dst: data.item_dst,
//                     maximum_dst: data.max_dst,
//                     free_scheme: data.free_scheme,
//                     sgst: data.sgst,
//                     igst: data.igst,
//                     csr: data.c_s_r,
//                     p_rate: data.p_rate,
//                     rate_b: data.rate_b,
//                     max_qnt: data.max_quant,
//                     box_qnt: data.box_qnt,
//                     special_disc: data.special_discount,
//                     purchase_disc: data.purchase_dst,
//                     valid_Form: data.valid_from,
//                     maximum_margin: data.maximum_margin,
//                     cgst: data.cgst,
//                     cost: data.cost,
//                     rate_c: data.rate_c,
//                     negative: data.negative,
//                     reorder_qnt: data.reorder_qnt,
//                     days: data.days,
//                     discount: data.discount,
//                     on_qnt: data.on_quantity,
//                     rate_effect: data.rate_effect,
//                     narcotic: data.narcotic,
//                     batchwisestock: data.batchwisestock,
//                     discount_less: data.less_dst,
//                     gst: data.gst,
//                   }}
//                 >
//                   <button>Edit</button>
//                 </Link>

//                 <button
//                   onClick={() => {
//                     deletePurchase(data.id);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//     </>
//   );
// };

// export default PaginationProductList;
