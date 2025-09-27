import { useEffect, useState } from "react";
import { FaPlus, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  DELETE_ADJUSTMENT,
  DELETE_STOCKCOUNT,
} from "../../constants/constants";
import StockCountForm from "../products/stockCount/StockCountForm";
import AdjustmentForm from "../products/adjustment/AdjustmentForm";
import CategoryForm from "../form-modals/CategoryForm";
import { deleteCategory, deleteProduct } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import ProductForm from "../form-modals/ProductForm";

const FormModal = ({
  table,
  type,
  id,
  data,
  title,
  closeAction,
  actionOpen,
}) => {
  const [open, setopen] = useState(false);
  const bgColor =
    type == "create"
      ? "bg-green-500"
      : type == "cancel"
      ? "bg-red-500"
      : type == "update"
      ? "bg-green-500"
      : "bg-[#d8d5ff]";

  const forms = {
    product: (type, data) => (
      <ProductForm type={type} data={data} setopen={setopen} />
    ),
    category: (type, data) => (
      <CategoryForm type={type} data={data} setopen={setopen} />
    ),
    // ),
    stockcount: (type, data) =>
      type == "update" ? (
        data && <StockCountForm type={type} data={data} setopen={setopen} />
      ) : (
        <StockCountForm type={type} data={data} setopen={setopen} />
      ),
    adjustment: (type, data) =>
      type == "update" ? (
        data && <AdjustmentForm type={type} data={data} setopen={setopen} />
      ) : (
        <AdjustmentForm type={type} data={data} setopen={setopen} />
      ),
  };

  const handleDelete = async () => {
    const res =
      table === "product"
        ? await deleteProduct(id)
        : table === "category"
        ? await deleteCategory(id)
        : table === "stockcount"
        ? await axios.delete(`${DELETE_STOCKCOUNT}/${id}`)
        : table === "adjustment"
        ? await axios.delete(`${DELETE_ADJUSTMENT}/${id}`)
        : null;
    console.log("res", res);
    if (res.status === 200) {
      successMessage(res?.data?.message);
      setopen(false);
      window.location.reload();
    } else {
      errorMessage(res?.data?.error);
    }
  };

  const Form = () => {
    return type == "delete" && id ? (
      <div className="p-10 flex flex-col items-center gap-4">
        <div className="text-center font-medium">
          All data will be deleted upon the compltion of this action. Are you
          sure you want to continue
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white py-2 px-6 font-semibold rounded-md w-max cursor-pointer hover:scale-110 ease-in duration-200"
        >
          Delete
        </button>
      </div>
    ) : type == "create" || type == "update" ? (
      forms[table](type, data)
    ) : null;
  };

  // useEffect(() => {
  //   if (open) {
  //     closeAction();
  //   }
  // }, [actionOpen]);

  return (
    <>
      {/* <button
        onClick={() => setopen(true)}
        className={`${bgColor} h-7 w-7 flex items-center justify-center rounded-full cursor-pointer`}
      > */}
      <button
        onClick={() => setopen(true)}
        className={`flex items-center rounded-sm text-[15px] cursor-pointer ${
          type == "create" ? "gap-2 bg-[#17a2b8] text-white py-2 px-3" : "gap-1"
        }`}
      >
        <span>
          {type == "create" ? (
            <FaPlus />
          ) : type == "update" ? (
            <AiFillEdit />
          ) : type == "delete" ? (
            <RiDeleteBin6Line />
          ) : null}
        </span>
        <span>{title}</span>
      </button>

      {/* <img src={`/images/${type}.png`} className="h-[16px]" alt="" />
      </button> */}

      {open && (
        <div className="w-screen h-screen bg-black/65 fixed top-0 left-0 z-50 flex items-center justify-center">
          <div className="bg-white w-[75%] p-5 relative ">
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setopen(false)}
            >
              <FaTimesCircle size={30} />
            </div>
            <div className="max-h-[80vh] overflow-y-scroll">
              <Form />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
