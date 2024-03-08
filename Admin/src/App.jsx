import React, { useState } from "react";
import Login from "./Login";
import AdminPage from "./AdminPage";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Addpartner from "./Components/Addpartner";
import Products from "./Components/products";
import Create_Products from "./Components/create_products";
import Read_products from "./Components/Read_products";
import Update_products from "./Components/Update_products";
import Invoices from "./Components/Invoices";
import Managepartner from "./Components/Managepartner";
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
import Targetlayout from "./Partnerportal/Sidebar/Targetlayout";
import Store from "./Partnerportal/Sidebar/Store";
import Storelayout from "./Partnerportal/Sidebar/Storelayout";
import Order from "./Partnerportal/Sidebar/Order";
import Orderlayout from "./Partnerportal/Sidebar/Orderlayout";
import Profile from "./Partnerportal/Sidebar/Profile";
import Profilelayout from "./Partnerportal/Sidebar/Profilelayout";
import Info from "./Partnerportal/Sidebar/Info";
import Infolayout from "./Partnerportal/Sidebar/Infolayout";
import Docs from "./Partnerportal/Sidebar/Docs";
import Docslayout from "./Partnerportal/Sidebar/Docslayout";
import Announce from "./Partnerportal/Sidebar/Announce";
import Announcelayout from "./Partnerportal/Sidebar/Announcelayout";
import Support from "./Partnerportal/Sidebar/Support";
import Supportlayout from "./Partnerportal/Sidebar/Supportlayout";


function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpartner />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/addpartner" element={<Addpartner />} />
        <Route path="/products" element={<Products />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/managepartner" element={<Managepartner />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/targets" element={<Targets />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/target" element={<Target />} />
        <Route path="/targetlayout" element={<Targetlayout />} />
        <Route path="/store" element={<Store />} />
        <Route path="/storelayout" element={<Storelayout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderlayout" element={<Orderlayout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilelayout" element={<Profilelayout />} />
        <Route path="/info" element={<Info />} />
        <Route path="/infolayout" element={<Infolayout />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docslayout" element={<Docslayout />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/announcelayout" element={<Announcelayout />} />
        <Route path="/support" element={<Support />} />
        <Route path="/supportlayout" element={<Supportlayout />} />
        <Route path="/create_products" element={<Create_Products />} />
        <Route path="/read_products/:product_id" element={<Read_products />}  />
        <Route path="/update_products/:product_id" element={<Update_products />}  />
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
