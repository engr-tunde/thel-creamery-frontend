import { act } from "react";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: "FaHouseUser",
    link: "/dashboard",
  },

  {
    title: "Products",
    icon: "FaHouseUser",
    link: "/products",
    children: [
      {
        title: "Products",
        link: "/products",
      },
      {
        title: "Category",
        link: "/products/category",
      },
      {
        title: "Add Product",
        link: "/products/add-product",
      },
      {
        title: "Print Barcode",
        link: "/print_barcode",
      },
      {
        title: "Adjustment List",
        link: "/adjustment-list",
      },
      {
        title: "Add Adjustment",
        link: "/add_adjustment",
      },
      {
        title: "Stock Count",
        link: "/stock-count",
      },
    ],
  },
  {
    title: "Purchase",
    icon: "FaHouseUser",
    link: "/purchase",
    children: [
      {
        title: "Purchase List",
        link: "/purchase-list",
      },
      {
        title: "Add Purchase",
        link: "/add-purchase",
      },
      {
        title: "Import Purchase By CVS",
        link: "/import-purchase-by-cvs",
      },
    ],
  },
  {
    title: "Sale",
    icon: "FaHouseUser",
    link: "/sale",
    children: [
      {
        title: "Sale List",
        link: "/sales/sale-list",
      },
      {
        title: "Pos",
        link: "/sales/pos",
      },
      {
        title: "Add Sale",
        link: "/sales/add-sale",
      },
      {
        title: "Import Sale By CVS",
        link: "/sales/import-sale-by-cvs",
      },
      {
        title: "Packing Slip List",
        link: "/sales/packing-slip-list",
      },
      {
        title: "Challan List",
        link: "/sales/challan-list",
      },
      {
        title: "Delivery List",
        link: "/sales/delivery-list",
      },
      {
        title: "Gift Card List",
        link: "/sales/gift-card-list",
      },
      {
        title: "Coupon List",
        link: "/sales/coupon-list",
      },
      {
        title: "Courier List",
        link: "/sales/courier-list",
      },
    ],
  },
  {
    title: "Expense",
    icon: "FaHouseUser",
    link: "/expense",
    children: [
      {
        title: "Expense Category",
        link: "/expense-category",
      },
      {
        title: "Expense List",
        link: "/expense-list",
      },
      {
        title: "Add Expense",
        link: "/add-expense",
      },
    ],
  },
  {
    title: "Income",
    icon: "FaHouseUser",
    link: "/income",
    children: [
      {
        title: "Income Category",
        link: "/income-category",
      },
      {
        title: "Income List",
        link: "/income-list",
      },
      {
        title: "Add Income",
        link: "/add-income",
      },
    ],
  },
  {
    title: "Quotation",
    icon: "FaQuoteLeft",
    link: "/quotation",
    children: [
      {
        title: "Quotation List",
        link: "/quotation",
      },
      {
        title: "Add Quotation",
        link: "/add-quotation",
      },
    ],
  },
  {
    title: "Transfer",
    icon: "FaQuoteLeft",
    link: "/transfer",
    children: [
      {
        title: "Transfer List",
        link: "/transfer-list",
      },
      {
        title: "Add Transfer",
        link: "/add-transfer",
      },
      {
        title: "import Transfer By CSV",
        link: "/import-transfer-by-CSV",
      },
    ],
  },
  {
    title: "Return",
    icon: "FaUndoAlt",
    link: "/Return",
    children: [
      {
        title: "Sale",
        link: "/sale",
      },
      {
        title: "Purchase",
        link: "/purchase",
      },
    ],
  },
  {
    title: "Accounting",
    icon: "FaMoneyCheckAlt",
    link: "/accounting",
    children: [
      {
        title: "Account List",
        link: "/account-list",
      },
      {
        title: "Account List",
        link: "/account-list",
      },
      {
        title: "Add Account",
        link: "/add-account",
      },
      {
        title: "Money Transfer",
        link: "/money-transfer",
      },
      {
        title: "Balance Sheet",
        link: "/balance-sheet",
      },
      {
        title: "Account Statement",
        link: "/account-statement",
      },
    ],
  },
  {
    title: "HRM",
    icon: "FaUserTie",
    link: "/HRM",
    children: [
      {
        title: "Department",
        link: "department",
      },
      {
        title: "Employee",
        link: "/employee",
      },
      {
        title: "Attendance",
        link: "/attendance",
      },
      {
        title: "Payroll",
        link: "/payroll",
      },
      {
        title: "Holiday",
        link: "/holiday",
      },
    ],
  },
  {
    title: "People",
    icon: "FaUsers",
    link: "/people",
    children: [
      {
        title: "User List",
        link: "/user-list",
      },
      {
        title: " Adc User",
        link: "/add-user",
      },
      {
        title: "Customer List",
        link: "/customer-list",
      },
      {
        title: "Add Customer",
        link: "/add-customer",
      },
      {
        title: "Biller List",
        link: "/biller-list",
      },
      {
        title: "Add Biller",
        link: "/add-biller",
      },
    ],
  },
  {
    title: "Reports",
    icon: "FaChartBar",
    link: "/reports",
    children: [
      {
        title: "Summary Report",
        link: "summary-report",
      },
      {
        title: "Best Seller",
        link: "/best-seller",
      },
      {
        title: "Product Report",
        link: "/product-report",
      },
      {
        title: "Daily Sale",
        link: "/daily-sale",
      },
      {
        title: "Monthly Sale",
        link: "/monthly-sale",
      },
      {
        title: "Daily Purchase",
        link: "/daily-purchase",
      },
      {
        title: "Monthly Purchase",
        link: "/monthly-purchase",
      },
      {
        title: "Sale Report",
        link: "/sale-report",
      },
      {
        title: "Challan Report",
        link: "/challan-report",
      },
      {
        title: "Sale Report Chart",
        link: "/sale-report-chart",
      },
      {
        title: "Payment Report",
        link: "/payment-report",
      },
      {
        title: "Customer Report",
        link: "/customer-report",
      },
      {
        title: "Customer Group Report",
        link: "/customer-group-report",
      },
      {
        title: "Customer Due Report",
        link: "/customer-due-report",
      },
      {
        title: "Supplier Report",
        link: "/supplier-report",
      },
      {
        title: "Supplier Due Report",
        link: "/supplier-due-report",
      },
      {
        title: "Warehouse Report",
        link: "/warehouse-report",
      },
      {
        title: "Warehouse Stock Report",
        link: "/warehouse-stock-report",
      },
      {
        title: "Product Expiry Report",
        link: "/product-expiry-report",
      },
      {
        title: "Product Expiry Report",
        link: "/product-expiry-report",
      },
      {
        title: "Product Quantity Alert",
        link: "/product-quantity-alert",
      },
      {
        title: "Daily Sale Objective Report",
        link: "/daily-sale-objective-report",
      },
      {
        title: "User Report",
        link: "/user-report",
      },
      {
        title: "Biller Report",
        link: "/biller-report",
      },
    ],
  },
  {
    title: "Reports",
    icon: "FaFileInvoiceDollar",
    link: "/reports",
  },
  {
    title: "Manufacturing",
    icon: "FaIndustry",
    link: "/manufacturing",
    children: [
      {
        title: "Production List",
        link: "/production-list",
      },
      {
        title: " Add production",
        link: "/add-production",
      },
      {
        title: "Db.Recipe",
        link: "/db-recipe",
      },
    ],
  },
  {
    title: "Settings",
    icon: "FaCog",
    link: "/settings",
    children: [
      {
        title: "Invoice Settings",
        link: "/invoice-settings",
      },
      {
        title: " Role Permisssion",
        link: "/role-permission",
      },
      {
        title: "SMS Tamplate",
        link: "/sms-tamplate",
      },
      {
        title: "Custom Field List",
        link: "/custom-field-list",
      },
      {
        title: "Discount Plan",
        link: "/discount-plan",
      },
      {
        title: "Discount",
        link: "/discount",
      },
      {
        title: "All Notification",
        link: "/all-notification",
      },
      {
        title: "Send Notification",
        link: "/send-notification",
      },
      {
        title: "Warehouse",
        link: "/warehouse",
      },
      {
        title: "Tables",
        link: "/tables",
      },
      {
        title: "Customer Group",
        link: "/customer-group",
      },
      {
        title: "Brand",
        link: "/brand",
      },
      {
        title: "Unit",
        link: "/unit",
      },
      {
        title: "Currency",
        link: "/currency",
      },
      {
        title: "Tax",
        link: "/tax",
      },
      {
        title: "User Profile",
        link: "/user-profile",
      },
      {
        title: "Create SMS",
        link: "/create-sms",
      },
      {
        title: "Backup Database",
        link: "/backup-database",
      },
      {
        title: "General Settings",
        link: "/general-settings",
      },
      {
        title: "Mail Settings",
        link: "/mail-settings",
      },
      {
        title: "Reward Point Settings",
        link: "/reward-point-settings",
      },
      {
        title: "SMS Settings",
        link: "/sms-settings",
      },
      {
        title: "Payment Gateway",
        link: "/payment-gateway",
      },
      {
        title: "POS Settings",
        link: "/pos-settings",
      },
      {
        title: "HRM Settings",
        link: "/hrm-settings",
      },
      {
        title: "Barcode Settings",
        link: "/barcode-settings",
      },
    ],
  },
];

export const plusMenu = [
  {
    title: "Add Product",
    link: "/add-product",
  },
  {
    title: "Add Category",
    link: "/add-category",
  },
  {
    title: "Add User",
    link: "/add-user",
  },
];

// for dashboard page

export const productSearch = [
  { heading: "Name" },
  { heading: "Code" },
  { heading: "Quantity" },
];

//for print-barcodeb page
export const formDetails = [
  {
    id: "0",
    Name: "Product Name",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "1",
    Name: "Price",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "2",
    Name: "Promotional Price",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "3",
    Name: "Business Name",
    size: "Size",
    checked: false,
    className: "bg-white",
  },
  {
    id: "4",
    Name: "Brand",
    size: "Size",
    checked: false,
  },
];

//print-barcode page
export const papperSize = [
  {
    itemList:
      "20 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 4 x 1, Label... ",
  },
  {
    itemList:
      "30 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 2.625 x 1, Label per sheet: 30 ",
  },
  {
    itemList:
      "42 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 2 x 1, Label per sheet: 32 ",
  },
  {
    itemList:
      "40 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 1.5 x 1, Label per sheet: 40 ",
  },
  {
    itemList:
      "continious rolls - 31.75mm x 24.5mm label size:31.75mm x 24.5mm  gap:3.18mm ",
  },
];

//for product list page

export const productListInputData = [
  {
    legendTag: "Warehouse",
    placeholder: "All Warehouse",
  },
  {
    legendTag: "Product Type",
    placeholder: "All Types",
  },
  {
    legendTag: "Brand",
    placeholder: "All Brands",
  },
  {
    legendTag: "Category",
    placeholder: "All Categories",
  },
  {
    legendTag: "Unit",
    placeholder: "All Unit",
  },
  {
    legendTag: "Tax",
    placeholder: "All Tax",
  },
  {
    legendTag: "Product with",
    placeholder: "Select IMEI/Variant",
  },
  {
    legendTag: "",
    placeholder: "Submit",
  },
];

// for adjustment list page
export const adjustListTableCol = [
  {
    accessor: "input",
    title: "checkbox",
    className: "font-semibold",
    maxWidth: "150px",
  },
  {
    accessor: "Date",
    title: "Date",
    className: "font-semibold",
  },
  {
    accessor: "Reference",
    title: "Reference",
    className: "font-semibold",
  },
  {
    accessor: "Warehouse",
    title: "Warehouse",
    className: "font-semibold",
  },
  {
    accessor: "Products",
    title: "Products",
    className: "font-semibold",
  },
  {
    accessor: "Note",
    title: "Note",
    className: "font-semibold",
  },
  {
    accessor: "Action",
    title: "Action",
    className: "font-semibold",
  },
];

export const adjustListRowData = [
  {
    date: "04-06-2025 05:15:51",
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    product: {
      title: "2bc",
      dimension: "10 x 10",
    },
    note: "",
  },
  {
    date: "04-06-2025 05:15:51",
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    product: {
      title: "2bc",
      dimension: "10 x 10",
    },
    note: "",
  },
];

//for add adjustment page
export const tableTitle = [
  {
    title: "Name",
  },
  {
    title: "Code",
  },
  {
    title: "Unit",
  },
  {
    title: "Cost",
  },
  {
    title: "Quantity",
  },
  {
    title: "action",
  },
];

export const availableSearch = [
  {
    title: "Shop1",
  },
  {
    title: "Shop2",
  },
];

export const availableSearchFilter = [
  {
    title: "All Warehouse",
  },
  {
    title: "Shop1",
  },
  {
    title: "Shop2",
  },
];
export const purchaseStatus = [
  {
    title: "All",
  },
  {
    title: "Received",
  },
  {
    title: "Patial",
  },
  {
    title: "Pending",
  },
  {
    title: "Order",
  },
];
export const paymentStatus = [
  {
    title: "All",
  },
  {
    title: "Due",
  },
  {
    title: "Paid",
  },
];

// Category Data

//Stock count page
export const stockCountTableCol = [
  {
    accessor: "input",
    title: "checkbox",
    className: "font-semibold",
    maxWidth: "150px",
  },
  {
    accessor: "Date",
    title: "Date",
    className: "font-semibold",
    icon: "GoArrowDown",
  },
  {
    accessor: "Reference",
    title: "Reference",
    className: "font-semibold",
  },
  {
    accessor: "warehouse",
    title: "warehouse",
    className: "font-semibold",
  },
  {
    accessor: "Category",
    title: "Category",
    className: "font-semibold",
  },
  {
    accessor: "Brand",
    title: "Brand",
    className: "font-semibold",
  },
  {
    accessor: "Type",
    title: "Type",
    className: "font-semibold",
  },
  {
    accessor: "Initial File",
    title: "Initial File",
    className: "font-semibold",
  },
  {
    accessor: "Final File",
    title: "Final File",
    className: "font-semibold",
  },
  {
    accessor: "Action",
    title: "Action",
    className: "font-semibold",
  },
];

export const stockCountRowData = [
  {
    date: { day: "04-06-2025", time: "05:15:51" },
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    category: "",
    brand: "",
    type: "Full",
    initialFile: "",
    finalFile: "",
    action: "Finalize",
  },
  {
    date: { day: "04-06-2025", time: "05:15:51" },
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    category: "",
    brand: "",
    type: "Full",
    initialFile: "",
    finalFile: "",
    action: "Finalize",
  },
  {
    date: { day: "04-06-2025", time: "05:15:51" },
    reference: "adr-20250604-111551",
    warehouse: "Shop 2",
    category: "",
    brand: "",
    type: "Full",
    initialFile: "",
    finalFile: "",
    action: "Finalize",
  },
];
