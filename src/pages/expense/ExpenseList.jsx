import React, { useState } from "react";
import {
  FaArrowDown,
  FaPlus,
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { AiFillEdit, AiFillPrinter } from "react-icons/ai";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdLocalPrintshop,
  MdNotes,
} from "react-icons/md";
import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";

import {
  expenseListRowData,
  expenseListTableCol,
} from "../../data/expenseData";

import ExpenseListTable from "../../component/global/ExpenseListTable";
import AddExpenseModal from "../../component/expense/AddExpenseFormModal";

const ExpenseList = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("category");

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  const rowTemplate = (item, i) => (
    <tr
      key={i}
      className={`text-xs text-gray-700 border-t border-gray-200 ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      {/* Checkbox column */}
      <td className="py-3 pr-2 text-start">
        <input type="checkbox" />
      </td>

      {/* Date column */}
      <td className="py-3 pr-3 text-start">{item.Date}</td>

      {/* Reference column */}
      <td className="py-3 pr-3 text-start">{item.Reference}</td>

      {/* warehouse column */}
      <td className="py-3 pr-3 text-start">{item.Warehouse}</td>

      {/* category column */}
      <td className="py-3 pr-3 text-start">{item.Category}</td>

      {/* amount column */}
      <td className="py-3 pr-3 text-start">{item.Amount}</td>

      {/* note column */}
      <td className="py-3 pr-3 text-start">{item.Note}</td>

      {/* Action column */}
      <td className="py-3 pr-3 text-start">
        <div
          className="relative flex gap-2 items-center border text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit cursor-pointer"
          onClick={() => handleActionClick(i)}
        >
          <span>Action</span>
          <RiArrowDownSFill />
          {actionOpen === i && (
            <div className="absolute z-10 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-9 right-0 bg-white shadow-2xl text-[#7c5cc4]">
              <div className="flex items-center gap-1">
                <AiFillEdit />
                <span>Edit</span>
              </div>

              <div className="flex items-center gap-1">
                <RiDeleteBin6Line />
                <span>Delete</span>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="w-full p-6">
      {/* expense */}
      <div className="w-full border-[1px] mb-10 border-gray-500 p-10">
        <h1 className="text-center mb-6 font-semibold text-[18px]">
          Expense List
        </h1>
        <div className="flex justify-between">
          <div className="1">
            <p>Choose Your Date</p>
            <p className="border-[1px] border-gray-400 p-2">
              2024-09-01 To 2025-09-0
            </p>
          </div>
          <div className="2 flex gap-6 items-center">
            <p>Choose Warehouse</p>
            <p
              className="flex border-[1px] border-gray-400 p-2 gap-2 items-center text-center
            "
            >
              Warehouse
              <span>
                <FaArrowDown />
              </span>
            </p>

            <button className="px-6 py-2 bg-purple-700 hover:bg-purple-950">
              submit
            </button>
          </div>
        </div>
      </div>

      {/* Add Expense Buttons */}
      <div className="flex gap-4">
        <div
          className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-white cursor-pointer"
          onClick={() => {
            setModalType("category");
            setShowModal(true);
          }}
        >
          <FaPlus />
          <span>Add Expense </span>
        </div>
      </div>

      {/* Records per page and search */}
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-1">
          <select className="border border-[#858c85] rounded-sm px-2 py-1">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="all">All</option>
          </select>
          <span className="text-[#858c85]">records per page</span>
        </div>
        <div>
          <span>Search</span>
          <input
            type="text"
            className="border border-[#858c85] rounded-sm px-2 py-1 ml-2 focus:border-[#7c5cc4]"
          />
        </div>
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
                <span>Reference No</span>
                <span>Warehouse</span>
                <span>Category</span>
                <span>Amount</span>
                <span>Note</span>
                <span>Action</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <ExpenseListTable
        expenseListTableCol={expenseListTableCol}
        expenseListRowData={expenseListRowData}
        rowTemplate={rowTemplate}
      />

      {/* Pagination */}
      <div className="flex items-center justify-between w-full mt-10">
        <div>Showing 1 - 10 (51)</div>
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

      {/* Pagination */}
      {/* ... (unchanged UI code) */}

      {/* Modal */}
      <AddExpenseModal
        show={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
      />
    </div>
  );
};

export default ExpenseList;
