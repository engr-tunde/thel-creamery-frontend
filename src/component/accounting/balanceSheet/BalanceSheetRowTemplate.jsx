import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";

const BalanceSheetRowTemplate = (item, i) => {
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
      <td className="p-4 table-cell text-start">
        <input type="checkbox" />
      </td>
      <td className="p-4 flex-row flex items-center gap-3 text-start">
        {item?.date}
      </td>
      <td className="p-4 table-cell text-start">
        <div className="">{item?.date}</div>
      </td>
      <td className="p-4 table-cell text-start">{item?.date}</td>
      <td className="p-4 flex-col table-cell text-start">
        <div className="text-[13px]">{item?.date}</div>
      </td>

      <td className="p-4 flex-col table-cell text-start">
        <div>{item?.date}</div>
      </td>
    </tr>
  );
};

export default BalanceSheetRowTemplate;
