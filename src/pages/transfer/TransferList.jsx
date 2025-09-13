import { useState } from "react";
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
    transferListRowData,
    transferListTableCol,
} from "../../data/transferData";

import TransferListTable from "../../component/global/TransferListTable";
import AddExpenseModal from "../../component/expense/AddExpenseFormModal";

const TransferList = () => {
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
            className={`text-xs text-gray-700 border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
                }`}
        >
            {/* Checkbox column */}
            <td className="py-3 pr-2 text-start">
                <input type="checkbox" />
            </td>

            {/* Date */}
            <td className="py-3 pr-3 text-start">{item.Date}</td>

            {/* Reference No */}
            <td className="py-3 pr-3 text-start">{item.ReferenceNo}</td>

            {/* Warehouse From */}
            <td className="py-3 pr-3 text-start">{item.WarehouseFrom}</td>

            {/* Warehouse To */}
            <td className="py-3 pr-3 text-start">{item.WarehouseTo}</td>

            {/* Product Cost */}
            <td className="py-3 pr-3 text-start">{item.ProductCost}</td>

            {/* Product Tax */}
            <td className="py-3 pr-3 text-start">{item.ProductTax}</td>

            {/* Grand Total */}
            <td className="py-3 pr-3 text-start">{item.GrandTotal}</td>

            {/* Status */}
            <td className="py-3 pr-3 text-start">
                <span
                    className={`px-2 py-1 rounded-sm text-white text-xs ${item.Status === "Completed" ? "bg-[#28a745]" : "bg-[#ffc107]"
                        }`}
                >
                    {item.Status}
                </span>
            </td>

            {/* Email Sent */}
            <td className="py-3 pr-3 text-start">
                <span
                    className={`px-2 py-1 rounded-sm text-white text-xs ${item.EmailSent === "Yes" ? "bg-[#28a745]" : "bg-[#ff7588]"
                        }`}
                >
                    {item.EmailSent}
                </span>
            </td>

            {/* Action */}
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
            {/* Filter Section */}
            <div className="w-full border mb-10 border-gray-300 p-6 rounded-md">
                <h1 className="text-center mb-6 font-semibold text-[18px]">
                    Transfer List
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-6">
                    {/* Date Filter */}
                    <div className="flex flex-row gap-2">
                        <label className="mb-1 text-sm text-gray-700">Date</label>
                        <p className="border border-gray-400 px-3 py-2 rounded-sm">
                            2024-09-13 To 2025-09-01
                        </p>
                    </div>

                    {/* From Warehouse */}
                    <div className="flex flex-row gap-2">
                        <label className="mb-1 text-sm text-gray-700">From Warehouse</label>
                        <div className="flex border border-gray-400 px-3 py-2 gap-2 items-center rounded-sm cursor-pointer">
                            <span>All Warehouse</span>
                            <FaArrowDown />
                        </div>
                    </div>

                    {/* To Warehouse */}
                    <div className="flex flex-row gap-2">
                        <label className="mb-1 text-sm text-gray-700">To Warehouse</label>
                        <div className="flex border border-gray-400 px-3 py-2 gap-2 items-center rounded-sm cursor-pointer">
                            <span>All Warehouse</span>
                            <FaArrowDown />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="h-fit px-6 py-2 bg-purple-700 text-white rounded-sm hover:bg-purple-900">
                        Submit
                    </button>
                </div>
            </div>


            {/* Add Transfer Buttons */}
            <div className="flex gap-4">
                <div
                    className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-white cursor-pointer"
                    onClick={() => {
                        setModalType("category");
                        setShowModal(true);
                    }}
                >
                    <FaPlus />
                    <span>Add Transfer </span>
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
                                <span>Warehouse(from)</span>
                                <span>Warehouse(to)</span>
                                <span>Product Cost</span>
                                <span>Product Tax</span>
                                <span>Grand Total</span>
                                <span>Status</span>
                                <span>Email Sent</span>
                                <span>action</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <TransferListTable
                transferListTableCol={transferListTableCol}
                transferListRowData={transferListRowData}
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

export default TransferList;
