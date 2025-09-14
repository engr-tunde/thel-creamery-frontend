import { Link } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { AiOutlineFilePdf, AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";
import { TfiPrinter } from "react-icons/tfi";
import { RiChatDeleteLine } from "react-icons/ri";

import AppInputField from "../../component/form/AppInputField";
import { useState } from "react";
import {
  availableSearchFilter,
  paymentStatus,
  purchaseStatus,
} from "../../utility/dataArr";
import AppSubmitButton from "../../component/form/AppSubmitButton";
import Table2 from "../../component/purchase/Table2";
import { purchaserowData } from "../../utility/purchaseData";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import FormModal from "../../component/purchase/FormModal";

const PurchaseListPage = () => {
  const [selectedValue, setSelectedValue] = useState("All Warehouse");
  const [filterForm, setFilterform] = useState(false);

  //handle change
  const handleChanges = (event) => {
    setSelectedValue(event.target.value);
  };

  //hndle filter form pening and closing
  const handlefilterToggle = () => {
    setFilterform(!filterForm);
  };

  const tableColumn = [
    {
      accessor: "input",
      title: "checkbox",
      className: "font-semibold",
    },
    {
      accessor: "Date",
      title: "Date",
      className: "font-semibold",
    },
    {
      accessor: "Refrence",
      title: "Refrence",
      className: "font-semibold",
    },
    {
      accessor: "Brand",
      title: "Supplier",
      className: "font-semibold",
    },
    {
      accessor: "Purchase Status",
      title: "Purchase Status",
      className: "font-semibold",
    },
    {
      accessor: "Grand Total",
      title: "Grand Total",
      className: "font-semibold",
    },
    {
      accessor: "Returned Amount",
      title: "Returned Amount",
      className: "font-semibold",
    },
    {
      accessor: "Paid",
      title: "Paid",
      className: "font-semibold",
    },
    {
      accessor: "Due",
      title: "Due",
      className: "font-semibold",
    },
    {
      accessor: "Payment Status",
      title: "Payment Status",
      className: "font-semibold",
    },
    {
      accessor: "Action",
      title: "Action",
      className: "font-semibold",
    },
  ];

  const rowTemplate = (item, i) => {
    const [validate, setValidate] = useState(item); //original data
    const [action, setAction] = useState(false);

    const checkValidate = () => {
      setValidate(!validate);
    };

    const toggleAction = (i) => {
      if (i) {
        setAction(!action);
      }
    };

    return (
      <tr
        key={i}
        className="text-[rgb(177,117,115)] pb-4 cursor-pointer item  text-[15px] p-1 border-b-[rgb(222,226,230)] border-b-[1px]"
      >
        <td className="table-cell p-3">
          <span
            key={i}
            onClick={checkValidate}
            className={`${item.className} border-1  size-5 items-center flex rounded-sm`}
          >
            <IoIosCheckmark
              className={
                validate ?  "bg-blue-800 text-white size-full" : "hidden"
              }
            />
          </span>
        </td>
        <td className="text-[rgb(177,117,115)] p-3 w-[60px]">{item.date}</td>
        <td className="p-3 w-[140px] ">{item.reference}</td>
        <td className="p-3  ">{item.supplier}</td>
        <td className="p-3 table-cell">
          <div className="text-white bg-[rgb(22,211,154)] rounded-sm w-[50px] px-[3px] text-[11px]">
            {item.purchaseStatus}
          </div>
        </td>
        <td className="p-3">{item.grandTotal}</td>
        <td className="p-3">{item.returnedAmount}</td>
        <td className="p-3 ">{item.paid}</td>
        <td className="p-3">{item.due}</td>
         <td className="p-3 table-cell">
          <div className="text-white text-[11px] bg-[rgb(255,117,136)] rounded-sm w-[30px] px-[3px]">
            {item.paymentStatus}
          </div>
        </td>
        <td className="p-3 table-cell text-start">
          <div className="flex flex-col relative">
            <div
              onClick={(i) => {
                toggleAction(i);
              }}
              className=" flex items-center justify-center gap-2 border-[1px] border-[rgb(124,92,196)] rounded-sm p-1 w-[70px]"
            >
              <div>{item.action}</div>
              <div className={item.className}>
                <IoMdArrowDropdown />
              </div>
            </div>
            <div
              className={
                action
                  ? "text-blue-800 bg-white w-[120px] z-1 rounded-sm p-8 absolute top-[35px] right-[40px] flex flex-col gap-2 item-center"
                  : "hidden"
              }
            >
              <div className="flex gap-2 items-center justify-center">
                <eye />
                <span>View</span>
              </div>
              <div>
                <eye />
                <span>Duplicate</span>
              </div>
              <div>
                <eye />
                <span>Edit</span>
              </div>
              <div>
                <eye />
                <span>View Payment</span>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="mt-8 w-full flex flex-col">
      {/* main first section */}
      <div className="flex flex-col">
        <div className="flex gap-2 pb-5">
          <FormModal type="Add" table="product" />
          {/* <Link
            to=""
            className="w-[150px] h-[40px] rounded-sm bg-[rgb(124,92,196)] text-white font-md text-[14px] text-center flex gap-2 items-center justify-center"
          >
            {<BiSolidFileImport />}
            <span>Imported Purchase</span>
          </Link> */}
          <FormModal type="Import" table="product" />
          {/* <Link
            to=""
            className="w-[150px] h-[40px] rounded-sm bg-[rgb(134,142,150)] text-white font-md text-[14px] text-center flex gap-2 items-center justify-center"
          >
            <RiDeleteBin6Line />
            <span> Deleted Purchases</span>
          </Link> */}
          <FormModal type="Delete" table="product" />
          <div
            onClick={handlefilterToggle}
            className="w-[150px] h-[40px] rounded-sm bg-[rgb(255,193,7))] text-black font-md text-[14px] text-center flex gap-2 items-center justify-center"
          >
            <FiFilter />
            <span>Filtered Purchase</span>
          </div>
        </div>
        {/* hidden filter notifier */}
        {/* */}
        <div
          className={
            filterForm ? "hidden" : "w-full h-[2px] bg-[rgb(228,230,252)]"
          }
        ></div>
        {/* filter form section */}

        <div
          className={
            filterForm
              ? "w-full border-[1px] border-[rgb(228,230,252)] rounded-md h-[200px] py-11 px-6  flex flex-col gap-10"
              : "hidden"
          }
        >
          <div className="grid grid-cols-4 justify-between w-full">
            <div className="w-[200px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,   230,252)] rounded-md relative">
              <label
                htmlFor="myDropdown"
                className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]"
              >
                Date
              </label>
              <AppInputField type="date" />
            </div>
            <div className="w-[240px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,230,252)] rounded-sm relative">
              <label
                htmlFor="myDropdown"
                className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]"
              >
                Warehouse
              </label>
              <select
                name=""
                id="myDropdown"
                value={selectedValue}
                className="px-2 rounded-sm border-[rgb(228,230,252)] h-10 text-[rgb(161,92,200)]  w-full"
                onChange={handleChanges}
              >
                {availableSearchFilter?.map((item, i) => (
                  <option
                    key={i}
                    value={item.title}
                    className="p-4 text-sm rounded-md]"
                  >
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[240px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,230,252)] rounded-sm relative">
              <label
                htmlFor="myDropdown"
                className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]"
              >
                Purchase Status
              </label>
              <select
                name=""
                id="myDropdown"
                value={selectedValue}
                className="px-2 rounded-sm border-[rgb(228,230,252)] h-10 text-[rgb(161,92,200)]  w-full"
                onChange={handleChanges}
              >
                {purchaseStatus?.map((item, i) => (
                  <option
                    key={i}
                    value={item.title}
                    className="p-4 text-sm rounded-md]"
                  >
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[240px] h-[40px] text-[rgb(72,79,86)] text-[12px] border-[1px] border-[rgb(228,230,252)] rounded-sm relative">
              <label
                htmlFor="myDropdown"
                className="text-[rgb(94,88,115)] font-semibold absolute left-[10px] bg-white px-[3px] top-[-9px]"
              >
                Payment Status
              </label>
              <select
                name=""
                id="myDropdown"
                value={selectedValue}
                className="px-2 rounded-sm border-[rgb(228,230,252)] h-10 text-[rgb(161,92,200)]  w-full"
                onChange={handleChanges}
              >
                {paymentStatus?.map((item, i) => (
                  <option
                    key={i}
                    value={item.title}
                    className="p-4 text-sm rounded-md]"
                  >
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="bg-[rgb(124,92,196)] text-white flex item-center justify-center rounded-sm w-[80px] ">
            <AppSubmitButton title="submit" />
          </div>
        </div>
      </div>
      {/* main second section */}
      <div className="flex w-full justify-between items-center mt-10">
        <div className="flex gap-2 item-center justify-center ">
          <div className="w-[80px] h-[35px] rounded-sm border-[rgb(228,230,252)] border-[1px]">
            <input type="number" className="w-full" />
          </div>
          <span>record per page</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <label htmlFor="">Search</label>
          <div className="w-[180px] h-[35px] rounded-sm border-[rgb(228,230,252)] border-[1px]">
            <input type="text" className="w-full" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[4px]">
          <div className=" flex item-center justify-center p-3 bg-[rgb(255,117,136)] hover:bg-[rgb(113,122,131)] rounded-l-sm cursor-pointer">
            <AiOutlineFilePdf className="text-white " />
          </div>
          <div className=" flex item-center justify-center p-3 bg-[rgb(134,142,150)] hover:bg-[rgb(113,122,131)]  cursor-pointer">
            <AiOutlineFileExcel className="text-white " />
          </div>
          <div className="flex item-center justify-center p-3 bg-[rgb(255,193,7)] hover:bg-[rgb(113,122,131)]  cursor-pointer">
            <BsFiletypeCsv className="text-white " />
          </div>
          <div className=" flex item-center justify-center p-3 bg-[rgb(33,150,243)] hover:bg-[rgb(113,122,131)]  cursor-pointer">
            <TfiPrinter className="text-white " />
          </div>
          <div className="flex item-center justify-center p-3 bg-[rgb(235,84,58)] hover:bg-[rgb(113,122,131)]  font-semibold text[14px] cursor-pointer text-white">
            <RiChatDeleteLine className="text-white " />
          </div>
          <div className="flex item-center justify-center p-3 bg-[rgb(124,92,196)] hover:bg-[rgb(113,122,131)] cursor-pointer rounded-l-s rounded-r-md">
            <MdOutlineVisibility className="text-white " />
          </div>
        </div>
      </div>
      {/* main table */}
      <Table2
        tableColumn={tableColumn}
        rowData={purchaserowData}
        rowTemplate={rowTemplate}
      />
    </div>
  );
};

export default PurchaseListPage;
