import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

// Row template for rendering each row in the table
export const ReturnSaleRowTemplate = (
  item,
  i,
  handleActionClick,
  actionOpen
) => (
  <tr
    key={i}
    className={`text-xs text-gray-700 border-t border-gray-200 ${
      i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
    }`}
  >
    {/* Checkbox */}
    <td className="py-3 px-4 text-start">
      <input type="checkbox" />
    </td>

    {/* Data columns */}
    <td className="py-3 px-4 text-start">{item.Date}</td>
    <td className="py-3 px-4 text-start">{item.Reference}</td>
    <td className="py-3 px-4 text-start">{item["Sale Reference"]}</td>
    <td className="py-3 px-4 text-start">{item.Warehouse}</td>
    <td className="py-3 px-4 text-start">{item.Biller}</td>
    <td className="py-3 px-4 text-start">{item.Customer}</td>
    <td className="py-3 px-4 text-start">{item["Grand Total"]}</td>

    {/* Action column */}
    <td className="text-start">
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
