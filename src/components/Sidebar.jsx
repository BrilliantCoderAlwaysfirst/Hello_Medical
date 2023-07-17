import React from "react";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import AvatarImage from "../assets/ProfileImage.png";
import { Link } from "react-router-dom";

function Sidebar() {

  const newData = localStorage.getItem("data");

  return (
    <div className="container_sideBar">
      <Link to="/myprofile">
        <div className="profile_container">
          <img className="image" src={AvatarImage} alt="profile_Image" />
          <h1 className="name">{newData}</h1>
          <Badge content="Your Health Is Our First Priority" />
        </div>
      </Link>

      <div className="linksContainer">
        <ul className="links">
          <Link to="/dashboard">
            <li className="tag">
              <RiFileCopyLine />
              <h3>Home</h3>
            </li>
          </Link>

          <div className="dropdown" style={{ float: "left" }}>
            <div className="top_icon">
              <span>
                <FaWallet />
              </span>
              <button className="dropbtn">Product</button>
              <span className="downArrow">
                <IoIosArrowDown />
              </span>
            </div>
            <div className="dropdown-content" style={{ left: "0" }}>
              <Link to="/addproducts">
                <RiFileCopyLine />
                <h3>Add New Products</h3>
              </Link>
              <Link to="/productlist">
                <FaWallet />
                <h3>Product List</h3>
              </Link>
              <Link to="/uploadproductbyexcel">
                <AiOutlinePieChart />
                <h3>Upload Product</h3>
              </Link>
            </div>
          </div>

          <Link to="/orderdetails">
            <li className="tag">
              <AiOutlinePieChart />
              <h3>Order Details</h3>
            </li>
          </Link>

          <Link to="/orderlist">
            <li className="tag">
              <AiOutlinePieChart />
              <h3>Order List</h3>
            </li>
          </Link>

          <div className="dropdown" style={{ float: "left" }}>
            <div className="top_icon">
              <span>
                <FaWallet />
              </span>
              <button className="dropbtn">Purchase</button>
              <span className="downArrow">
                <IoIosArrowDown />
              </span>
            </div>
            <div className="dropdown-content" style={{ left: "0" }}>
              
              <Link to="/purchaseentry">
                <FaWallet />
                <h3>Purchase Entry</h3>
              </Link>

              <Link to="/purchaselist">
                <FaWallet />
                <h3>Purchase List</h3>
              </Link>

              <Link to="/uploadpurchase">
                <FaWallet />
                <h3>Add Purchase By Excel</h3>
              </Link>
            </div>
          </div>

          {/* <Link to="/bill" >
            <li className="tag">
              <FaWallet />
              <h3>Bills</h3>
            </li>
          </Link> */}

          <div className="dropdown" style={{ float: "left" }}>
            <div className="top_icon">
              <span>
                <FaWallet />
              </span>
              <button className="dropbtn">Sell</button>
              <span className="downArrow">
                <IoIosArrowDown />
              </span>
            </div>
            <div className="dropdown-content" style={{ left: "0" }}>
              <Link to="/sell">
                <FaWallet />
                <h3>Sell Entry</h3>
              </Link>

              <Link to="/selllist">
                <FaWallet />
                <h3>Sell List</h3>
              </Link>
            </div>
          </div>
        </ul>

        <div className="contactContainer">
          <span>Having troubles</span>
          <a href="#">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

// const Container = styled.div`
//   width: 400px;
//   height: 915px !important;
//   border-radius: 2rem;
//   background-color: #220915;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 3rem;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     width: 100%;
//     height: max-content !important;
//   }
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const Avatar = styled.img`
//   height: 7rem;
//   border-radius: 6rem;
//   margin-top: 20%;
//   object-fit: cover;
// `;

// const Name = styled.h1`
//   color: white;
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin: 0.8rem 0 0.5rem 0;
// `;

// const LinksContainer = styled.div`
//   background-color: ${darkThemeColor};
//     height: 100%;
//     width: 100%;
//     border-radius: 2rem;
//     // border: 2px solid red;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-decoration: none;
// `;

// const BigDiv = styled.div`
//   position: relative;
//   display: inline-block;

//   .BigDiv:hover .DivElement {display: block;}
//   .BigDiv:hover .Button {background-color: #3e8e41;}

// `;
// const Button = styled.button`
//   background-color: #04AA6D;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;

//   .dropbtn {background-color: #3e8e41;}

// `;
// const DivElement = styled.div`
//   display: none;
//   position: absolute;
//   right: 0;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;

//   .dropdown-content {display: block;}

// `;
// const A = styled.a`
// color: black;
// padding: 12px 16px;
// text-decoration: none;
// display: block;

// a:hover {background-color: #f1f1f1;}

// `;

// const Links = styled.ul`
//   list-style-type: none;
//   display: flex;
//   flex-direction: column;
//   padding-top: 2rem;
//   height: 60%;
//   list-style: none;
// `;

// const Tag = styled.li`
//   // margin-left: 25%;
//   margin-bottom: 2rem;
//   display: flex;
//   gap: 1rem;
//   color: #e4e4e4;
//   cursor: pointer;
//   h3 {
//     font-weight: 300;
//   }
//   svg {
//     font-size: 1.1rem;
//     margin-top: 3%;
//   }
// `;

// const ContactContainer = styled.div`
//   width: 60%;
//   background-color: #091322;
//   color: #c4c4c4;
//   height: 15%;
//   margin: auto auto;
//   border-radius: 1rem;
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;

//   a {
//     color: white;
//     text-decoration: none;
//   }

//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     margin-bottom: 2rem;
//   }
// `;
