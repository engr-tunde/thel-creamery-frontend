import { useState } from "react";
import ProductForm from "./ProductForm";

const FormModal = ({ table, type, id, data }) => {
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
  };

  const handleDelete = () => {
    console.log("deleting an item");
  };

  const Form = () => {
    return type == "delete" && id ? (
      <form action="" className="p-4 flex flex-col items-center gap-4">
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
      </form>
    ) : type == "create" || type == "update" ? (
      forms[table](type, data)
    ) : null;
  };

  return (
    <>
      <button
        onClick={() => setopen(true)}
        className={`${bgColor} h-7 w-7 flex items-center justify-center rounded-full cursor-pointer`}
      >
        <img src={`/images/${type}.png`} className="h-[16px]" alt="" />
      </button>

      {open && (
        <div className="w-screen h-screen bg-black/65 absolute top-0 left-0 z-50 flex items-center justify-center">
          <div className="bg-black w-[50%] p-5 relative">
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setopen(false)}
            >
              <img
                src="/images/close.png"
                alt=""
                className="w-[14px] h-[14px] hover:scale-110 ease-in duration-200"
              />
            </div>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
