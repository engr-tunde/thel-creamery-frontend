import { FaPlus, FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";

const ProductListPage = () => {
  return (
    <div className="w-full p">
      {/* The three form modals buttons */}
      <div className="flex items-center gap-2 w-full mt-9">
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-[15px]">
          <span>
            <FaPlus />
          </span>
          <span>Add Product</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#7c5cc4] text-lg text-[15px]">
          <span>
            <FaRegFileAlt />
          </span>
          <span>Import Product</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#ffc107] text-lg text-[15px]">
          <span>
            <MdOutlineFilterAlt />
          </span>
          <span>Filter Product</span>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="border-[#8d5ccd] border-[1px] w-full mt-5"></div>
    </div>
  );
};

export default ProductListPage;
