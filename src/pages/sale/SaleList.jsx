import { useState } from "react";
import Table from "../../component/global/Table";
import {saleListTableColumn, saleListDataArr } from "../../data/saleListData.js";
import SaleListRowTemplate from "../../component/sale/saleList/SaleListRowTemplate.jsx";
import SaleListHeader from "../../component/sale/saleList/SaleListHeader.jsx";

const SaleListPage = () => {
//   const [sales, setSales] = useState(categoryDataArr);
//   const [saleSearch, setSaleSearch] = useState("");

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
      <SaleListHeader />

      <div className="overflow-x-auto">
        <Table
          tableColumn={saleListTableColumn}
          rowTemplate={SaleListRowTemplate}
          rowData={saleListDataArr}
          checkAll={true}
        />
      </div>
    </div>
  );
};

export default SaleListPage;
