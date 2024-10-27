import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/user/pages/homePage";
import ShopPage from "./pages/user/pages/shopPage";
import CustomizePage from "./pages/user/pages/customizePage";
import ContactPage from "./pages/user/pages/contactPage";
import AboutShoe from "./pages/user/pages/aboutShoe";
import AboutusPage from "./pages/user/pages/aboutusPage";
import AddProduct from "./pages/admin/pages/addProduct";
import AllProducts from "./pages/admin/pages/allProducts";
import OrdersList from "./pages/admin/pages/ordersList";
import Dashboard from "./pages/admin/pages/dashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/customize" element={<CustomizePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/aboutshoe" element={<AboutShoe />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/orderslist" element={<OrdersList />} />
        <Route path="/shop/:productId" element={<AboutShoe />}  />
      </Routes>
    </Router>
  </StrictMode>
);
