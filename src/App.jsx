import { useState } from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AuthLayout from "./layouts/AuthLayout";
import DashboardPage from "./pages/dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import PrintBarcodePage from "./pages/products/printBarcodePage";
// import ProductPageList from "./pages/products";
import ProductPagesLayout from "./layouts/ProductPagesLayout";
import PurchasePagesLayout from "./layouts/PurchaseLayout";
// import PurchaseListPage from "./pages/purchase/purchaseListpage";
import CategoryPage from "./pages/products/category";
import StockCountPage from "./pages/products/stockCountPage";
import ProductPageList from "./pages/products";
import AdjustmentListPage from "./pages/products/adjustmentListPage";
import AddAdjustmentPage from "./pages/products/add-adjustment";
import ExpenseLayout from "./layouts/ExpenseLayout";
import ExpenseCategory from "./pages/expense/ExpenseCategory";
import ExpenseList from "./pages/expense/ExpenseList";
import AddExpenseFormModal from "./component/expense/AddExpenseFormModal";
import IncomeCategory from "./pages/income/IncomeCategory";
import IncomeList from "./pages/income/IncomeList";

// import LoginPage from "./Pages/auth/Login";
// import { ProductPage } from "./Pages/products";

// Sale Imports 
import SalePagesLayout from './layouts/SalePagesLayout.jsx'
import SaleListPage from "./pages/sale/SaleList.jsx";
import TransferList from "./pages/transfer/TransferList.jsx";
import AddTransfer from "./pages/transfer/AddTransfer.jsx";



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
          <Route path="/products" element={<ProductPageList />} />
          <Route path="/products/category" element={<CategoryPage />} />
          <Route
            path="/products/adjustment-list"
            element={<AdjustmentListPage />}
          />
          <Route path="/expense-category" element={<ExpenseCategory />} />
          <Route path="/expense-list" element={<ExpenseList />} />
          <Route path="/" element={<AddExpenseFormModal />} />
          <Route path="/income-category" element={<IncomeCategory />} />
          <Route path="/income-list" element={<IncomeList />} />
          <Route path="/transfer-list" element={<TransferList />} />
          <Route path="/add-transfer" element={<AddTransfer />} />
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
          <Route path="/products/product-list" element={<ProductPageList />} />
          <Route
            path="/products/adjustment-list"
            element={<AdjustmentListPage />}
          />
          <Route path="/products/stock-count" element={<StockCountPage />} />
          <Route path="/products/category" element={<CategoryPage />} />
        </Route>
        <Route element={<SalePagesLayout />}>
          <Route path="/sales/sale-list" element={<SaleListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
