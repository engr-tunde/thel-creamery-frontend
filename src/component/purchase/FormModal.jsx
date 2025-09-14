import { useState } from "react";
import ProductForm from "./form/addPurchaseForm/ProductForm";
import { IoAddSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import ImportForm from "./form/importPurchases/ImportForm";
import { BiSolidFileImport } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteInner from "./form/deletepurchase/DeleteInner";
// import { errorMessage, successMessage } from "../../utility/helpers";

const FormModal = ({type,  table, id,  data = null}) => {

const [open, setOpen] = useState(false)

const bgColor = 
type == "Add" 
? "bg-[rgb(23,162,184)]" 
: type == "import"
? "bg-[rgb(113,82,184)]" 
: type == "Delete" 
? "bg-[rgb(134,142,150)]"
: "bg-[#d8d5ff]"

const forms = {
    product: (type, data) => 
        type == "Add"
        ? (<ProductForm type={type} data={data} setopen={setOpen}/>
        ) : type == "Import"
        ? (   <ImportForm type={type} data={data} setopen={setOpen}/>
        ) :type == "Delete" ? ( <DeleteInner type={type} data={data} setopen={setOpen}/>
        ) : null   
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
        <form action="" className="p-4 flex flex-col items-center gap-4 bg-black my-auto">
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
    ) : type == "Add" || type == "Import" || type == "Delete"?
    (forms[table](type, data))
    : null

}
return(
<>
    <button 
        onClick={() => setOpen(true)}
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
                
                : <div className="bg-[rgb(200,35,51)]  w-[170px] font-md text-[14px] text-center flex gap-2 items-center justify-center text-white font-md p-2 font-semibold rounded-sm cursor-pointer">
                    
                    <div className="">Delete Permanently</div>
                </div>
            }
    </button>
    { 
        open && (
            <div className="w-screen h-screen bg-black/35 absolute top-0 left-0 z-50 flex items-center justify-center rounded-md">
                <div className="bg-white w-[75%] p-8 relative z-50 h-screen overflow-y-scroll">
                    <div
                    className="absolute top-4 right-4 cursor-pointer p-2 rounded-full"
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