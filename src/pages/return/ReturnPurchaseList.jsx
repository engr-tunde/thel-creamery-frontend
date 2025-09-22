import { LiaTimesSolid } from "react-icons/lia";
import Table from "../../component/global/Table";
import { ReturnPurchaseRowTemplate } from "../../pages/return/ReturnPurchaseRowTemplate";
import {
  returnPurchaseTableCol,
  returnPurchaseRowData,
} from "../../data/returnPurchaseData";
import ReturnPurchaseFormModal from "../../component/return/return-form/purchase/ReturnPurchaseFormModal";
import ReturnPurchaseForm from "../../component/return/return-form/purchase/ReturnPurchaseForm";

import { useState } from "react";
import {
  FaArrowDown,
  FaPlus,
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

const ReturnPurchaseList = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Handler for action dropdowns in the table rows
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  // Pre-bound row template for this page
  const boundRowTemplate = (item, i) =>
    ReturnPurchaseRowTemplate(item, i, handleActionClick, actionOpen);

  return (
    <div className="w-full p-6">
      {/* Header filter */}
      <div className="w-full border-[1px] mb-10 border-gray-300 p-10">
        <h1 className="text-center mb-6 font-semibold text-[18px]">
          Purchase Return List
        </h1>
        <div className="flex justify-between">
          {/* Date range */}
          <div>
            <p>Date</p>
            <p className="border-[1px] border-gray-400 p-2">
              2024-09-11 To 2025-09-01
            </p>
          </div>

          {/* Warehouse */}
          <div className="flex gap-6 items-center">
            <p>Warehouse</p>
            <p className="flex border-[1px] border-gray-400 p-2 gap-2 items-center">
              All Warehouse
              <FaArrowDown />
            </p>
            <button className="px-6 py-2 bg-purple-700 hover:bg-purple-950 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Add button */}
      <div className="flex gap-4 mb-6">
        <div
          className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-white cursor-pointer"
          onClick={() => setOpenModal(true)} // ✅ opens modal
        >
          <FaPlus />
          <span>Add Return</span>
        </div>
      </div>

      {/* Form Modal */}
      <ReturnPurchaseFormModal open={openModal} setOpen={setOpenModal}>
        <ReturnPurchaseForm setopen={setOpenModal} />
      </ReturnPurchaseFormModal>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        {/* Records per page */}
        <div className="flex items-center gap-1">
          <select className="border border-[#858c85] rounded-sm px-2 py-1">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="all">All</option>
          </select>
          <span className="text-[#858c85]">records per page</span>
        </div>

        {/* Search */}
        <div>
          <span>Search</span>
          <input
            type="text"
            className="border border-[#858c85] rounded-sm px-2 py-1 ml-2 focus:border-[#7c5cc4]"
          />
        </div>

        {/* Export + eye button */}
        <div className="flex items-center gap-1">
          <div className="p-2 bg-[#ff7588] text-white rounded-sm cursor-pointer hover:bg-gray-600">
            <FaRegFilePdf />
          </div>
          <div className="p-2 bg-[#868e96] text-white rounded-sm cursor-pointer">
            <FaRegFile />
          </div>
          <div className="p-2 bg-[#ffc107] text-white rounded-sm cursor-pointer hover:bg-gray-600">
            <FaRegFileAlt />
          </div>
          <div className="p-2 bg-[#2196f3] text-white rounded-sm cursor-pointer hover:bg-gray-600">
            <AiFillPrinter />
          </div>
          <div className="p-2 bg-[#eb543a] text-white rounded-sm cursor-pointer hover:bg-gray-600">
            <LiaTimesSolid />
          </div>
          <div
            className="relative p-2 bg-[#7c5cc4] text-white rounded-sm cursor-pointer flex items-center"
            onClick={() => setEyeBtnOpen(!eyeBtnOpen)}
          >
            <FaRegEye />
            <RiArrowDownSFill />
            {eyeBtnOpen && (
              <div className="absolute z-10 w-52 text-sm rounded-md flex flex-col py-3 px-4 gap-3 top-9 right-0 bg-[#7c5cc4] text-white">
                <span>Date</span>
                <span>Reference</span>
                <span>Sale Reference</span>
                <span>Warehouse</span>
                <span>Biller</span>
                <span>Customer</span>
                <span>Grand Total</span>
                <span>Action</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sale Return Table */}
      <Table
        tableColumn={returnPurchaseTableCol} // pass full objects for headers
        rowData={returnPurchaseRowData}
        rowTemplate={boundRowTemplate} // pre-bound
        checkAll={true}
      />

      {/* Pagination */}
      <div className="flex items-center justify-between w-full mt-10">
        <div>Showing 1 - 1 (1)</div>
        <div className="flex items-center border border-[#7b5cc468]">
          <button className="px-3 py-4 border-r border-[#7b5cc468] hover:bg-[#7b5cc451]">
            <MdKeyboardArrowLeft />
          </button>
          <button className="px-3 py-3 bg-[#7c5cc4] text-white">1</button>
          <button className="px-3 py-3 border-r-[1px] border-[#7b5cc468] hover:bg-[#7b5cc451]">
            2
          </button>
          <button className="px-3 py-4 hover:bg-[#7b5cc451] h-full">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnPurchaseList;
