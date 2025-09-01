import { AiFillPrinter } from "react-icons/ai";
import {
  FaPlus,
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  stockCountRowData,
  stockCountTableCol,
} from "../../../utility/dataArr";
import { useState } from "react";
import StockCountTable from "../../../component/global/StockCountTable";
import { ImFilesEmpty } from "react-icons/im";

const StockCountPage = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(null);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

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
        <td className="flex flex-col gap-1 justify-center py-3 pr-3 text-start">
          <span>{item?.date?.day}</span>
          <span>{item?.date?.time}</span>
        </td>
        <td className="py-3 pr-3 table-cell text-start">
          <div className="">{item?.reference}</div>
        </td>
        <td className="py-3 pr-3 table-cell text-start">{item?.warehouse}</td>
        <td className="py-3 pr-3 table-cell text-start">{item?.category}</td>
        <td className="py-3 pr-3 table-cell text-start">{item?.brand}</td>
        <td className="py-3 pr-3 table-cell text-start">
          <span className="text-white bg-[#7c5cc4] py-1 px-2 rounded-sm">
            {item?.type}
          </span>
        </td>
        <td className="py-3 pr-3 table-cell text-start">{item?.initialFile}</td>
        <td className="py-3 pr-3 table-cell text-start">
          <ImFilesEmpty />
        </td>
        <td className="">
          <div
            className="border-[1px] text-white bg-[#7c5cc4] py-1 px-2 rounded-sm w-fit"
            onClick={() => handleActionClick(i)}
          >
            <span>{item?.action}</span>

            <div>
              {actionOpen === i && (
                <div className="w-full h-full absolute top-0 left-0 z-20 bg-black/40">
                  <div className="w-[55%] py-5 mx-auto mt-10 bg-white rounded-md flex flex-col items-center justify-center gap-5 shadow-2xl">
                    <div className="w-full px-3 pb-5 border-[#8d5ccd1f] border-b-[1px] flex justify-between">
                      <span className="text-[15px] text-stone-900 text-extrabold">
                        Finalize Stock Count
                      </span>
                      <span onClick={() => handleActionClick()}>
                        <LiaTimesSolid className="text-stone-500 text-2xl trigger_times cursor-pointer" />
                      </span>
                    </div>
                    <div className="w-full px-3 flex flex-col gap-3 text-stone-500">
                      <span className="text-xs italic">
                        The field labels marked with * are required input
                        fields.{" "}
                        <span className="font-bold">
                          You just need to update the Counted column in the
                          initial file
                        </span>
                      </span>

                      <div className="flex flex-col gap-1  p-2 w-full">
                        <span>Upload File *</span>
                        <input
                          type="file"
                          className="text-sm border-[1px] border-[#858c85] rounded-sm p-3"
                        />
                      </div>
                      <div className="flex flex-col gap-1  p-2 w-full">
                        <span>Note</span>
                        <textarea
                          name="text"
                          id=""
                          className="border-[1px] border-[#858c85] rounded-sm p-3 h-20"
                        ></textarea>
                      </div>

                      <button className="bg-[#7c5cc4] px-3 py-2 w-fit text-white rounded-sm">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="w-full">
      {/* The count stock form modal buttons */}
      <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-[15px] text-white cursor-pointer w-fit mt-10">
        <span>
          <FaPlus />
        </span>
        <span>Count Stock</span>
      </div>

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

      {/* Table section */}
      <StockCountTable
        stockCountTableCol={stockCountTableCol}
        stockCountRowData={stockCountRowData}
        rowTemplate={rowTemplate}
      />

      <div className="flex items-center justify-between w-full mt-10">
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

export default StockCountPage;
