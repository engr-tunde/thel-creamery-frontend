import Table from "../../component/global/Table";
import { categoryDataArr, categoryTableColumn } from "../../data/categoryData";
import CategoryRowTemplate from "../../component/products/category/CategoryRowTemplate";
import CategoryHeader from "../../component/products/category/CategoryHeader";

const CategoryPage = () => {
  return (
    <div className=" w-full h-full bg-white rounded-lg shadow-sm p-5 flex flex-col gap-5">
      <CategoryHeader />

      <Table
        tableColumn={categoryTableColumn}
        rowTemplate={CategoryRowTemplate}
        rowData={categoryDataArr}
        checkAll={true}
      />
    </div>
  );
};

export default CategoryPage;
