import { useState } from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import AuthLayout from "./layouts/AuthLayout";
import DashboardPage from "./pages/dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import PrintBarcodePage from "./pages/products/printBarcodePage"
import ProductPageList from "./pages/products/productListPage";
import AddProductPage from "./pages/products/addProductPage";
import ProductPagesLayout from "./layouts/ProductPagesLayout"
import AddAdjustmentPage from "./pages/products/adjustmentListPage"
import PurchasePagesLayout from "./layouts/PurchaseLayout";
import PurchaseListPage from "./pages/purchase/purchaseListpage";
import AdjustmentListPage from "./pages/products/adjustmentListPage";
import CategoryPage from "./pages/products/category";
import StockCountPage from "./pages/products/stockCountPage";


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
          <Route path="/product-list" element={<ProductPageList />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/add_adjustment" element={<AddAdjustmentPage />} />
          <Route path="/print_barcode" element={<PrintBarcodePage />} />
          <Route path="/adjustment-list" element={<AdjustmentListPage />} />
          <Route path="/category" element={<CategoryPage/>} />
          <Route path="/stock-count" element={<StockCountPage/>} />


        </Route>
        <Route element={<PurchasePagesLayout/>}>
           <Route path="/purchase-list" element={<PurchaseListPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
