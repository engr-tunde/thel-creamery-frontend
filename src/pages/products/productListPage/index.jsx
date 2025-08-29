import { AiFillEdit, AiFillPrinter } from "react-icons/ai";
import {
  FaPlus,
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import {
  MdLocalPrintshop,
  MdNotes,
  MdOutlineFileDownload,
  MdOutlineFilterAlt,
} from "react-icons/md";
import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";
import {
  productListInputData,
  rowData,
  tableColumn,
} from "../../../utility/dataArr";
import ProductListFilterInput from "../../../component/form/ProductListFilterInput";
import Table from "../../../component/global/Table";
import { useState } from "react";

const ProductPageList = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(null);
  const [filterOpen, setfilterOpen] = useState(false);
  const [importOpen, setimportOpen] = useState(false);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  const handleImportClick = () => {
    setimportOpen(!importOpen);
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
          <div
            className="relative flex gap-2 items-center border-[1px] text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit"
            onClick={() => handleActionClick(i)}
          >
            <span>action</span>
            <RiArrowDownSFill />

            <div>
              {actionOpen === i && (
                <div className="absolute z-10 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-9 right-0 bg-white shadow-2xl text-[#7c5cc4] transition-transform ease-in duration-700">
                  <div className="flex items-center gap-1">
                    <FaRegEye />
                    <span>view</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiFillEdit />
                    <span>Edit</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdNotes />
                    <span>Product History</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdLocalPrintshop />
                    <span>Print Barcode</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RiDeleteBin6Line />
                    <span>Delete</span>
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
      {/* The three form modals buttons */}
      <div className="flex items-center gap-2 w-full mt-9">
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-[15px] text-white cursor-pointer">
          <span>
            <FaPlus />
          </span>
          <span>Add Product</span>
        </div>
        <div
          onClick={() => handleImportClick()}
          className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#7c5cc4] text-lg text-[15px] text-white cursor-pointer trigger_import"
        >
          <span>
            <FaRegFileAlt />
          </span>
          <span>Import Product</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#ffc107] text-lg text-[15px] cursor-pointer">
          <span>
            <MdOutlineFilterAlt />
          </span>
          <span onClick={() => setfilterOpen(!filterOpen)}>Filter Product</span>
        </div>
      </div>

      {/* Filter by category modal section*/}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-linear ${
          filterOpen ? "max-h-[1000px]" : "max-h-[100px]"
        }`}
      >
        {filterOpen && (
          <div className="border-[#8d5ccd1f] border-[1px] rounded-sm w-full grid grid-cols-4 items-center mt-5 gap-3 px-3 py-7">
            {productListInputData?.map((item, i) => (
              <div key={i}>
                {item && item?.placeholder === "Submit" ? (
                  <div className="text-sm rounded-sm text-white bg-[#7c5cc4] w-fit py-2 px-3">
                    {item?.placeholder}
                  </div>
                ) : (
                  <ProductListFilterInput
                    placeholder={item?.placeholder}
                    legendTag={item?.legendTag}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* import modal section */}
      <div>
        {importOpen && (
          <div
            className="w-full h-full absolute top-0 left-0 z-20 bg-black/40"
            onClick={() => handleImportClick()}
          >
            <div className="w-[55%] py-5 mx-auto mt-10 bg-white rounded-md flex flex-col items-center justify-center gap-5 shadow-2xl">
              <div className="w-full px-3 pb-5 border-[#8d5ccd1f] border-b-[1px] flex justify-between">
                <span className="text-[15px] text-stone-900 text-extrabold">
                  Import Product
                </span>
                <LiaTimesSolid
                  onClick={() => handleImportClick()}
                  className="text-stone-500 text-2xl trigger_times cursor-pointer"
                />
              </div>
              <div className="w-full px-3 flex flex-col gap-3 text-stone-500">
                <span className="text-xs italic">
                  The field labels marked with * are required input fields.
                </span>
                <span>
                  The correct column order is (image, name*, code*, type*,
                  brand, category*, unit_code*, cost*, profit_margin(%), price,
                  product_details, variant_name, item_code, additional_price)
                  and you must follow this.
                </span>
                <span>
                  If you provide profit_margin, then price will be calculated
                  based on profit_margin:{" "}
                  <span className="text-stone-900 text-extrabold">
                    price = cost * (1 + profit_margin / 100)
                  </span>
                </span>
                <span>
                  To display Image it must be stored in images/product
                  directory. Image name must be same as product name
                </span>

                <div className="flex gap-3 items-center w-full">
                  <div className="flex flex-col gap-1  p-2 w-[50%]">
                    <span>Upload CSV File *</span>
                    <input
                      type="file"
                      className="text-sm border-[1px] border-[#858c85] rounded-sm p-3"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1 w-[50%]">
                    <span>Sample File</span>
                    <div className="py-3 bg-[#17a2b8] flex items-center justify-center gap-1 text-sm text-white rounded-sm cursor-pointer w-full">
                      <MdOutlineFileDownload />
                      <span>Download</span>
                    </div>
                  </div>
                </div>

                <button className="bg-[#7c5cc4] px-3 py-2 w-fit text-white rounded-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
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
      <Table
        tableColumn={tableColumn}
        rowData={rowData}
        rowTemplate={rowTemplate}
      />
    </div>
  );
};

export default ProductPageList;
