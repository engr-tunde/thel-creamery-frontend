import { useState } from "react";
import { FaPlus, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DELETE_ACCOUNTING } from "../../constants/constants";
import AddAccountForm from "./addAccountForm/AddAccountForm";
import MoneyTransferForm from "./moneyTransferForm/MoneyTransferForm";
import AccountStatementForm from "./accountStatement/AccountStatementForm";

const AccountFormModal = ({ table, type, id, data, title }) => {
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
    account: (type, data) =>
      type == "update" ? (
        data && <AddAccountForm type={type} data={data} setopen={setopen} />
      ) : (
        <AddAccountForm type={type} data={data} setopen={setopen} />
      ),
    moneyTransfer: (type, data) =>
      type == "update" ? (
        data && <MoneyTransferForm type={type} data={data} setopen={setopen} />
      ) : (
        <MoneyTransferForm type={type} data={data} setopen={setopen} />
      ),
    accountStatement: (type, data) =>
      type == "update" ? (
        data && (
          <AccountStatementForm type={type} data={data} setopen={setopen} />
        )
      ) : (
        <AccountStatementForm type={type} data={data} setopen={setopen} />
      ),
  };

  const handleDelete = async () => {
    const res =
      table === "account"
        ? await axios.delete(`${DELETE_ACCOUNTING}/${id}`)
        : table === "moneyTransfer"
        ? await axios.delete(`${DELETE_ACCOUNTING}/${id}`)
        : table === "accountStatement"
        ? await axios.delete(`${DELETE_}/${id}`)
        : null;
    if (res.status.toString().includes("20")) {
      successMessage("Successfully deleted data");
      setopen(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      errorMessage("Unable to delete data");
    }
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
      {/* <button
        onClick={() => setopen(true)}
        className={`${bgColor} h-7 w-7 flex items-center justify-center rounded-full cursor-pointer`}
      > */}
      <button
        onClick={() => setopen(true)}
        className={
          type == "create"
            ? "flex items-center gap-2 py-2 px-3 rounded-sm bg-[#17a2b8] text-[15px] text-white cursor-pNointer`"
            : "flex items-center gap-1"
        }
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
        <div className="w-screen h-screen bg-black/65 absolute top-0 left-0 z-50 flex items-center justify-center">
          <div className="bg-white  w-[75%] p-5 relative ">
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

export default AccountFormModal;
