import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import {
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { RiArrowDownSFill } from "react-icons/ri";
import Table from "../../component/global/Table";
import {
  accountListRowData,
  accountListTableColumn,
} from "../../data/accountingData";
import { AccountingRowTemplate } from "../../component/accounting/addAccountForm/AccountingRowTemplate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AccountFormModal from "../../component/accounting/AccountFormModal";

const AccountListPage = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex gap-4 items-center">
        <AccountFormModal title="Add Account" table="account" type="create" />
        <AccountFormModal title="Add Account Statement" table="accountStatement" type="create" />
      </div>

      <div className="flex items-center justify-between mt-10 mb-10">
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
          <div className="p-2 bg-[#ff7588] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFilePdf />
          </div>
          <div className="p-2 bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFile />
          </div>
          <div className="p-2 bg-[#ffc107] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFileAlt />
          </div>
          <div className="p-2 bg-[#2196f3] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <AiFillPrinter />
          </div>
          <div className="p-2 bg-[#eb543a] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <LiaTimesSolid />
          </div>
          <div
            className="relative p-2 bg-[#7c5cc4] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer flex items-center"
            onClick={() => setEyeBtnOpen(!eyeBtnOpen)}
          >
            <FaRegEye />
            <RiArrowDownSFill />

            {eyeBtnOpen ? (
              <div className="absolute z-10 w-52 text-sm rounded-md flex flex-col py-3 px-4 gap-3 top-9 right-0 bg-[#7c5cc4] transition-transform ease-in duration-700">
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

      <Table
        tableColumn={accountListTableColumn}
        rowData={accountListRowData}
        rowTemplate={AccountingRowTemplate}
        checkAll={true}
      />

      <div className="flex items-center justify-between w-full  p-5">
        <div>Showing 1 - 10 (51)</div>
        <div className="flex items-center border-[1px] border-[#7b5cc468]">
          <button className="px-3 py-4 border-r-[1px] border-[#7b5cc468] hover:bg-[#7b5cc451] h-full">
            <MdKeyboardArrowLeft />
          </button>
          <button className="px-3 py-3 border-r-[1px] bg-[#7c5cc4] border-[#7b5cc468]">
            1
          </button>
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

export default AccountListPage;
