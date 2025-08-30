import { useState } from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import AuthLayout from "./layouts/AuthLayout";
import DashboardPage from "./Pages/dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import PrintBarcodePage from "./pages/products/printBarcodePage";
import ProductListPage from "./pages/products/productListPage";
import AddAdjustmentPage from "./pages/products/add-adjustment";
import { ProductPagesLayout } from "./layouts/ProductsPagesLayout";
// import LoginPage from "./Pages/auth/Login";
// import { ProductPage } from "./Pages/products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget-password" element={<null />} />
          <Route path="/reset-password" element={<null />} />
        </Route> */}

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route element={<ProductPagesLayout />}>
          <Route path="/products/print_barcode" element={<PrintBarcodePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product/add_adjustment" element={<AddAdjustmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
