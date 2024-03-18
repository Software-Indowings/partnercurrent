import React, { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import AdminPage from "./AdminPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Addpartner from "./Components/Addpartner";
import Products from "./Components/products";
import Create_Products from "./Components/create_products";
import Read_products from "./Components/Read_products";
import Update_products from "./Components/Update_products";
import Invoices from "./Components/Invoices";
import Managepartner from "./Components/Managepartner";
import Announcements from "./Components/Announcements/Announcements";
import Create_announcement from "./Components/Announcements/Create_announcement";
import Read_announcement from "./Components/Announcements/Read_announcement";
import Update_announcement from "./Components/Announcements/Update_announcement";
import Orders from "./Components/Orders";
import Targets from "./Components/Targets";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import Loginpartner from "./Partnerportal/Loginpartner";
import Layout from "./Partnerportal/Layout";
import Sidebar from "./Partnerportal/Layout/Sidebar";
import Navbar from "./Partnerportal/Layout/Navbar";
import Home from "./Partnerportal/Layout/Home";
import Target from "./Partnerportal/Sidebar/Target";
import Store from "./Partnerportal/Sidebar/Store";
import Order from "./Partnerportal/Sidebar/Order";
import Profile from "./Partnerportal/Sidebar/Profile";
import Info from "./Partnerportal/Sidebar/Info";
import Docs from "./Partnerportal/Sidebar/Docs";
import Announce from "./Partnerportal/Sidebar/Announce";
import Support from "./Partnerportal/Sidebar/Support";
import Test from "./Partnerportal/Layout/Test";
import ProtectedRoute from "../utils/ProtectedRoute";
import AdminProtectedRoute from "../utils/AdminProtectedRoute";
import PartnerProfile from "./Partnerportal/Profile/PartnerProfile";
import Update_profile from "./Partnerportal/Profile/Update_profile";
import Admin_profile from "./Partnerportal/Profile/Admin_profile";
import ReadProfile from "./Partnerportal/Profile/Admin_readprofile";
import LegalInfo from "./Components/LegalInfo/LegalInfo";
import Create_Info from "./Components/LegalInfo/Create_Info";
import EditStatus from "./Components/EditStatus";

import HomePage from "./HomePage";

function App() {
  return (
    // <RouterProvider router={router}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/portal" element={<Loginpartner />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/adminPage"
          element={
            <AdminProtectedRoute>
              <AdminPage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/addpartner"
          element={
            <AdminProtectedRoute>
              <Addpartner />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <AdminProtectedRoute>
              <Products />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/invoices"
          element={
            <AdminProtectedRoute>
              <Invoices />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/managepartner"
          element={
            <AdminProtectedRoute>
              <Managepartner />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <AdminProtectedRoute>
              <Orders />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/targets"
          element={
            <AdminProtectedRoute>
              <Targets />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <AdminProtectedRoute>
              <Create />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/read/:id"
          element={
            <AdminProtectedRoute>
              <Read />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <AdminProtectedRoute>
              <Update />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/editstatus/:order_id"
          element={
            <AdminProtectedRoute>
              <EditStatus />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/layout"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partnerprofile"
          element={
            <ProtectedRoute>
              <PartnerProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update_profile"
          element={
            <ProtectedRoute>
              <Update_profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin_profile"
          element={
            <AdminProtectedRoute>
              <Admin_profile />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/read_profile/:profile_id"
          element={
            <AdminProtectedRoute>
              <ReadProfile />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/legalinfo"
          element={
            <AdminProtectedRoute>
              <LegalInfo />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/createinfo"
          element={
            <AdminProtectedRoute>
              <Create_Info />
            </AdminProtectedRoute>
          }
        />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/test" element={<Test />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/target" element={<Target />} />
        <Route path="/store" element={<Store />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info" element={<Info />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route
          path="/create_products"
          element={
            <AdminProtectedRoute>
              <Create_Products />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/read_products/:product_id"
          element={
            <AdminProtectedRoute>
              <Read_products />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/update_products/:product_id"
          element={
            <AdminProtectedRoute>
              <Update_products />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/announcements"
          element={
            <AdminProtectedRoute>
              <Announcements />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/create_announcement"
          element={
            <AdminProtectedRoute>
              <Create_announcement />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/read_announcement/:announce_id"
          element={
            <AdminProtectedRoute>
              <Read_announcement />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/update_announcement/:announce_id"
          element={
            <AdminProtectedRoute>
              <Update_announcement />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React, { useState } from "react";
// import Login from "./Login";
// import AdminPage from "./AdminPage";
// import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Addpartner from "./Components/Addpartner";
// import Inventory from "./Components/Inventory";
// import Invoices from "./Components/Invoices";
// import Managepartner from "./Components/Managepartner";
// import Orders from "./Components/Orders";
// import Targets from "./Components/Targets";

// function App() {
//   // const [isLoggedIn, setIsLoggedIn] = useState(
//   //   localStorage.getItem("isLoggedIn") === "true"
//   // );
//   // const [id, setId] = useState(localStorage.getItem("id") || "");

//   // const handleLoginSuccess = (id) => {
//   //   setIsLoggedIn(true);
//   //   setId(id);
//   //   localStorage.setItem("isLoggedIn", true);
//   //   localStorage.setItem("id", id);
//   // };

//   // const handleLogout = () => {
//   //   setIsLoggedIn(false);
//   //   setId("");
//   //   localStorage.setItem("isLoggedIn", false);
//   //   localStorage.setItem("id", "");
//   // };

//   return (
//     // <div>
//     //   {!isLoggedIn ? (
//     //     <Login onLoginSuccess={handleLoginSuccess} />
//     //   ) : (
//     //     <>
//     //       <AdminPage onLogout={handleLogout} id={id} />
//     //     </>
//     //   )}
//     // </div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/adminPage" element={<AdminPage />} />
//         <Route path="/addpartner" element={<Addpartner />} />
//         <Route path="/inventory" element={<Inventory />} />
//         <Route path="/invoices" element={<Invoices />} />
//         <Route path="/managepartner" element={<Managepartner />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/targets" element={<Targets />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
