import { AiFillEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { MdLocalPrintshop, MdNotes } from "react-icons/md";
import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";

function AdjustmentRowTemplate(item, i) {
  return (
    <tr
      key={i}
      className={`text-xs text-gray-400 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      <td className="py-3 pr-3 flex-row flex items-center gap-3 text-start font-bold">
        {item?.name}
      </td>
      <td className="py-3 pr-3 table-cell text-start">i{item?.code}</td>
      <td className="py-3 pr-3 table-cell text-start">{item?.code}</td>
      <td className="py-3 pr-3 table-cell text-start">{item?.code}</td>
      <td className="py-3 pr-3 table-cell text-start">{item?.code}</td>

      <td className="">
        <RiDeleteBin6Line />
      </td>
    </tr>
  );
}

export default AdjustmentRowTemplate;
