import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";

const MoneyTransferRowTemplate = (item, i) => {
  const [actionOpen, setActionOpen] = useState(null);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <tr
      key={i}
      className={`text-xs text-gray-400 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      <td>{item?.date}</td>
      {/* <td className="p-4 table-cell text-start">
        <input type="checkbox" />
      </td>
      <td className="p-4 flex-row flex items-center gap-3 text-start">
        {item?.accountNumber}
      </td>
      <td className="p-4 table-cell text-start">
        <div className="">{item?.name}</div>
      </td>
      <td className="p-4 table-cell text-start">{item?.initialBalance}</td>
      <td className="p-4 flex-col table-cell text-start">
        <div className="text-[13px]">{item?.default}</div>
      </td>
      <td className="p-4 flex-col table-cell text-start">
        <div>{item?.note}</div>
      </td>

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
        </div>
      </td> */}
    </tr>
  );
};

export default MoneyTransferRowTemplate;
