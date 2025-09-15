import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { MdLocalPrintshop, MdNotes } from "react-icons/md";
import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";
import FormModal from "../form/FormModal";

function ProductRowTemplate(item, i) {
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
      <td className="p-4 pr-2 text-start">
        <input type="checkbox" />
      </td>
      <td className="p-4 pr-3 flex-row flex items-center gap-3 text-start">
        <img
          src={`/images/product-img/${item?.image}`}
          alt="product"
          className="w-8 h-8 object-cover"
        />
        {item?.productName}
      </td>
      <td className="p-4 pr-3 table-cell text-start">
        <div className="">{item?.productCode}</div>
      </td>
      <td className="p-4 pr-3 table-cell text-start">{item?.brand}</td>
      <td className="p-4 pr-3 table-cell text-start">{item?.category}</td>
      <td className="p-4 pr-3 table-cell text-start">{item.alertQuantity}</td>
      <td className="p-4 pr-3 table-cell text-start">{item?.productUnit}</td>
      <td className="p-4 pr-3 table-cell text-start">{item?.price}</td>
      <td className="p-4 pr-3 table-cell text-start">{item?.productCost}</td>
      <td className="p-4 pr-3 table-cell text-start">{item?.wholesalePrice}</td>
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
                  {/* <AiFillEdit /> */}
                  {/* <span>Edit</span> */}
                  <FormModal
                    table="product"
                    id={item?.id}
                    type="update"
                    title="Edit"
                    data={item}
                  />
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
                  {/* <RiDeleteBin6Line />
                  <span>Delete</span> */}
                  <FormModal type="delete" id={item?.id} table="product" title="Delete"/>
                </div>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ProductRowTemplate;
