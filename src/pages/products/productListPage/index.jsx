import { AiFillPrinter } from "react-icons/ai";
import {
  FaPlus,
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import Table from "../../../component/global/Table";
import { rowData, tableColumn } from "../../../utility/dataArr";
import { useState } from "react";

const ProductListPage = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);

  // setInterval(() => {
  //   setEyeBtnOpen(false);
  // }, 5000);

  const rowTemplate = (item, i) => {
    return (
      <tr
        key={i}
        className={`text-xs text-gray-400 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer ${
          i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
        }`}
      >
        <td className="py-3 pr-2 text-start">
          <input type="checkbox" />
        </td>
        <td className="py-3 pr-3 flex-row flex items-center gap-3 text-start">
          <img
            src={`/images/product-img/${item?.image}`}
            alt="product"
            className="w-8 h-8 object-cover"
          />
          {item?.productTitle}
        </td>
        <td className="py-3 pr-3 table-cell text-start">
          <div className="">{item?.code}</div>
        </td>
        <td className="py-3 pr-3 table-cell text-start">{item?.brand}</td>
        <td className="py-3 pr-3 table-cell text-start">{item?.category}</td>
        <td className="py-3 pr-3 table-cell text-start">{item.quantity}</td>
        <td className="py-3 pr-3 table-cell text-start">{item?.unit}</td>
        <td className="py-3 pr-3 table-cell text-start">{item?.price}</td>
        <td className="py-3 pr-3 table-cell text-start">{item?.cost}</td>
        <td className="py-3 pr-3 table-cell text-start">{item?.stockWorth}</td>
        <td className="">
          <div className="flex gap-2 items-center border-[1px] text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit">
            <span>action</span>
            <RiArrowDownSFill />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="w-full p">
      {/* The three form modals buttons */}
      <div className="flex items-center gap-2 w-full mt-9">
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-[15px] text-white cursor-pointer">
          <span>
            <FaPlus />
          </span>
          <span>Add Product</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#7c5cc4] text-lg text-[15px] text-white cursor-pointer">
          <span>
            <FaRegFileAlt />
          </span>
          <span>Import Product</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#ffc107] text-lg text-[15px] cursor-pointer">
          <span>
            <MdOutlineFilterAlt />
          </span>
          <span>Filter Product</span>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="border-[#8d5ccd1f] border-[1px] w-full mt-5"></div>

      {/* Records per page */}
      <div className="flex items-center justify-between mt-10">
        {/* {left side */}
        <div className="flex items-center gap-1">
          <select className="border border-[#858c85] rounded-sm outline-none px-2 py-1">
            <option value="10">10</option>
            <option value="20">25</option>
            <option value="30">50</option>
            <option value="40">All</option>
          </select>
          <span className="text-[#858c85]">records per page</span>
        </div>

        {/* middle side */}
        <div>
          <span>Search</span>
          <input
            type="text"
            className="border border-[#858c85] rounded-sm outline-none px-2 py-1 ml-2 focus:border-[#7c5cc4]"
          />
        </div>

        {/* right side */}
        <div className="flex items-center gap-1">
          <div className="p-2 bg-[#ff7588] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFilePdf />
          </div>
          <div className="p-2 bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFile />
          </div>
          <div className="p-2 bg-[#ffc107] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFileAlt />
          </div>
          <div className="p-2 bg-[#2196f3] text-[18px] text-white rounded-sm cursor-pointer">
            <AiFillPrinter />
          </div>
          <div className="p-2 bg-[#eb543a] text-[18px] text-white rounded-sm cursor-pointer">
            <LiaTimesSolid />
          </div>
          <div
            className="relative p-2 bg-[#7c5cc4] text-[18px] text-white rounded-sm cursor-pointer flex items-center"
            onClick={() => setEyeBtnOpen(!eyeBtnOpen)}
          >
            <FaRegEye />
            <RiArrowDownSFill />

            {eyeBtnOpen ? (
              <div className="absolute text-sm rounded-md flex flex-col p-3 gap-1 top-9 right-0 bg-[#7c5cc4] transition-transform ease-in duration-700">
                <span>Product</span>
                <span>Code</span>
                <span>Brand</span>
                <span>Categories</span>
                <span>Quantity</span>
                <span>Unit</span>
                <span>Price</span>
                <span>Stock Worth (Price/Cost)</span>
                <span>Action</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Table section */}
      <Table
        tableColumn={tableColumn}
        rowData={rowData}
        rowTemplate={rowTemplate}
      />
    </div>
  );
};

export default ProductListPage;
