import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import ProductsList from "./components/ProductsList";
import OrderDetails from "./components/OrderDetails";
import OrderList from "./components/OrderList";
import PurchaseEntry from "./components/PurchaseEntry";
import DataDetails from "./components/DataDetails";
import Dashboard from "./components/Dashboard";
import MyProfile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";
import EditPurchase from "./components/EditPurchase";
import UploadProduct from "./components/UploadProduct";
import UploadPurchase from "./components/UploadPurchase";
import PurchaseList from "./components/PurchaseList";
import EditProduct from "./components/EditProduct";
import Bill from "./components/Bill";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Sell from "./components/Sell";
import SellList from "./components/SellList";
import EditSell from "./components/EditSell";
import ForgotPage from "./components/ForgotPage";




function App() {
  
  const location = useLocation();


    return (

      <Container>
          { location.pathname === '/' ? <Login/> : location.pathname === '/signup' ? <SignUp/> : location.pathname === '/login' ? <Login/> : location.pathname == '/forgotPage' ? <ForgotPage/> : <Sidebar/> }

          
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/productlist" element={<ProductsList />} />
            <Route path="/orderdetails" element={<OrderDetails />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/purchaseentry" element={<PurchaseEntry />} />
            <Route path="/datadetail" element={<DataDetails />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/editpurchase" element={<EditPurchase />} />
            <Route path="/purchaselist" element={<PurchaseList />} />
            <Route path="/editproduct" element={<EditProduct />} />
            <Route path="/uploadproductbyexcel" element={<UploadProduct />} />
            <Route path="/uploadpurchase" element={<UploadPurchase />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/selllist" element={<SellList />} />
            <Route path="/editsell" element={<EditSell />} />

          </Routes>
      </Container>
    );
};




const Container = styled.div`
  display: flex;
  height: 97vh;
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
