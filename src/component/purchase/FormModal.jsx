import { useEffect, useState } from "react";
import ProductForm from "./form/addPurchaseForm/ProductForm";
import { IoAddSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import ImportForm from "./form/importPurchases/ImportForm";
import { BiSolidFileImport } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteInner from "./form/deletepurchase/DeleteInner";
import ViewInner from "./form/viewPurchases/ViewInner";
import { FaEye, FaRegMoneyBillAlt, FaEdit } from "react-icons/fa";
import DuplicateForm from "./form/addDuplicate/DuplicateForm";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
// import { errorMessage, successMessage } from "../../utility/helpers";

const FormModal = ({type,  table, id,  data = null}) => {

const [open, setOpen] = useState()
 
const forms =  {
    product: (type, data) =>
         type == "Add"
        ? (<ProductForm type={type} data={data} setopen={setOpen}/>
        ) : type == "Import"
        ? (   <ImportForm type={type} data={data} setopen={setOpen}/>
        ) :type == "Delete" 
        ? ( <DeleteInner type={type} data={data} setopen={setOpen}/>
        ) : type == "View" 
        ? ( <ViewInner type={type} data={data} setopen={setOpen}/>   
        ) : type == "Duplicate" 
        ? ( <DuplicateForm type={type} data={data} setopen={setOpen}/>   
        )  
        : null  
    
        
}
const [validate, setValidate] = useState(false)
const handleDelete  = async () => {
    const res =
    type == "delete" 
    ? [setValidate(!validate)] 
    : null
     if(res.toString().includes("20")){
        successMessage("product successfully deleted")
        setOpen(false)
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }else {
        errorMessage("unable to delete product")
    }
}

const Form = () => {
    return type == "delete"  ? (
        <form action="" className="p-4 flex flex-col items-center gap-4 bg-black">
            <div className="text-center font-medium text-white p-2">
                All data will be deleted upon the compltion of this action. Are you
                sure you want to continue
            </div>
            <button
            onClick={handleDelete}
            className="bg-red-600 text-white py-2 px-6 font-semibold rounded-md w-max cursor-pointer hover:scale-110 ease-in duration-200"
            >
            Delete Permanently
            </button>
        </form>
    ) : type == "Add" || type == "Import" || type == "Delete" || type == "View"|| type == "Duplicate"  ?
    (forms[table](type, data))
    : null

}


return(
<>  
    <button 
        onClick={() => 
          setOpen(true)
        }
        // className="w-[150px] h-[40px] rounded-sm bg-[rgb(23,162,184)] text-white font-md text-[14px] text-center flex gap-2 items-center justify-center"
          >
            {
                type == "Add" 
                ? <div className="w-[150px] h-[40px] rounded-sm bg-[rgb(23,162,184)] text-white font-md text-[14px] text-center flex gap-2 items-center justify-center">
                    <IoAddSharp />
                    <div className="">Add Purchase</div>
                </div> 
                : type == "Import" 
                ? <div className="w-[150px] h-[40px] rounded-sm bg-[rgb(124,92,196)] text-white font-md text-[14px] text-center flex gap-2 items-center justify-center">
                    <BiSolidFileImport />
                    <div className="">Import Purchase</div>
                </div>
                : type == "Delete" 
                ? <div className="w-[150px] h-[40px] rounded-sm bg-[rgb(134,142,150)] text-white font-md text-[14px] text-center flex gap-2 items-center justify-center">
                    <RiDeleteBin6Line />
                    <div className="">Deleted Purchase</div>
                </div>
                : type == "View" 
                ? <div className="flex gap-2 items-center justify-start">
                    <FaEye />
                    <span>View</span>
                </div>
                : type == "Duplicate" 
                ? <div className="flex gap-2 items-center justify-start">
                    <HiOutlineDocumentDuplicate />
                    <span>Duplicate</span>
                </div>
                : <div className="bg-[rgb(200,35,51)]  w-[170px] font-md text-[14px] text-center flex gap-2 items-center justify-center text-white font-md p-2 font-semibold rounded-sm cursor-pointer">
                    
                    <div className="">Delete Permanently</div>
                </div>
            }
    </button>
    { 

        open && (
            <div className={type == "Add" || type == "Import" || type == "Delete"  ? "w-screen p-2 top-0 left-0 bg-black/35 absolute z-50 flex items-center justify-center rounded-md " : "w-screen pt-64 pb-8 bg-black/35 absolute -right-12 -top-[430px] z-50 flex items-center justify-center rounded-md overflow-hidden"}>
                
                <div className={ type == "Add" || type == "Import" || type == "Delete" ? "bg-white w-[75%]  relative z-50" : "bg-white w-[70%]  relative z-50"}>
                    <div className="absolute top-4 right-4 cursor-pointer p-2 rounded-full"
                        onClick={() => setOpen(false)}>
                        <div className="w-[14px] h-[14px] hover:scale-110 ease-in duration-200">
                            <IoCloseSharp />
                        </div>
                     </div>
                    <Form className=""/>
                </div>
            </div>
        )
    }
</>)
}
export default FormModal;