import { useState } from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AuthLayout from "./layouts/AuthLayout";
import DashboardPage from "./pages/dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import PrintBarcodePage from "./pages/products/printBarcodePage";
// import ProductPageList from "./pages/products";
import ProductPagesLayout from "./layouts/ProductPagesLayout";
// import PurchasePagesLayout from "./layouts/PurchaseLayout";
// import PurchaseListPage from "./pages/purchase/purchaseListpage";
import CategoryPage from "./pages/products/category";
import StockCountPage from "./pages/products/stockCountPage";
import ProductPageList from "./pages/products";
import AdjustmentListPage from "./pages/products/adjustmentListPage";
import AddAdjustmentPage from "./pages/products/add-adjustment";
import { ToastContainer } from "react-toastify";

// import LoginPage from "./Pages/auth/Login";
// import { ProductPage } from "./Pages/products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget-password" element={<null />} />
          <Route path="/reset-password" element={<null />} />
        </Route> */}

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/products" element={<ProductPageList />} />
            <Route path="/products/category" element={<CategoryPage />} />
            <Route
              path="/products/adjustment-list"
              element={<AdjustmentListPage />}
            />
          </Route>

          <Route element={<ProductPagesLayout />}>
            <Route
              path="/products/print_barcode"
              element={<PrintBarcodePage />}
            />
            <Route
              path="/products/add_adjustment"
              element={<AddAdjustmentPage />}
            />
            <Route
              path="/products/product-list"
              element={<ProductPageList />}
            />
            <Route
              path="/products/adjustment-list"
              element={<AdjustmentListPage />}
            />
            <Route path="/products/stock-count" element={<StockCountPage />} />
            <Route path="/products/category" element={<CategoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
