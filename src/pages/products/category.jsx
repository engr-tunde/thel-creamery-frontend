import { useState } from "react";
import Table from "../../component/global/Table";
import { categoryDataArr, categoryTableColumn } from "../../data/categoryData";
import CategoryRowTemplate from "../../component/products/category/CategoryRowTemplate";
import CategoryHeader from "../../component/products/category/CategoryHeader";

const CategoryPage = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
      <CategoryHeader />

      <div className="overflow-x-auto">
        <Table
          tableColumn={categoryTableColumn}
          rowTemplate={CategoryRowTemplate}
          rowData={categoryDataArr}
          checkAll={true}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
