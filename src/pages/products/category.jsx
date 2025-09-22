import { useState } from "react";
import Table from "../../component/global/Table";
import { categoryDataArr, categoryTableColumn } from "../../data/categoryData";
import CategoryRowTemplate from "../../component/products/category/CategoryRowTemplate";
import CategoryHeader from "../../component/products/category/CategoryHeader";

const CategoryPage = () => {
  return (
    <div className=" w-full h-full bg-white pt-2 rounded-lg shadow-sm">
      <CategoryHeader />

      <div className="w-full">
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
