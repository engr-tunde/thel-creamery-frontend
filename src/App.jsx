import { useState } from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import AuthLayout from "./layouts/AuthLayout";
import DashboardPage from "./Pages/dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductPageList from "./pages/products/productListPage";
import PrintBarcodePage from "./pages/products/print_barcode"
import { PrintBarcodeLayout } from "./layouts/PrintBarcodeLayout";
import { AddAdjustmentLayout } from "./layouts/AddAdjustmentLayout";
import AddAdjustmentPage from "./pages/products/add-adjustment";
import CategoryPage from './pages/products/category/index.jsx'
import ProductListPageLayout from "./layouts/ProductListPageLayout.jsx";
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
          <Route path="/category" element={<CategoryPage />} />
        </Route>

        <Route element={<PrintBarcodeLayout />}>
          <Route path="/products/print_barcode" element={<PrintBarcodePage />} />
        </Route>

        <Route element={<ProductListPageLayout />}>
          <Route path="/product-list" element={<ProductPageList />} />
        </Route>
        <Route element={<AddAdjustmentLayout />}>
          <Route path="/product/add_adjustment" element={<AddAdjustmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
