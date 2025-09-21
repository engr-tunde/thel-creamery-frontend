import { deletedPurchases } from "../../../../data/purchases"
import Table from "../../../global/Table"
import { useState } from "react"
import { IoIosCheckmark } from "react-icons/io";
import FormModal from "../../FormModal";

const DeleteInner = () => {

const tableColumn = [
    // {
    // title: "Checkbox",
    // className: "flex justify-between bg-[rgb(248,249,250)] p-12"
    // },
    {
    title: "Date",
    },
    {
      title: "Refrence ID"
    },
    {
      title: "Created by"
    },
    {
      title: "Supplier"
    },
    {
      title: "Warehouse"
    },
    {
      title: "Payment Status"
    },
    {
      title: "Amount"
    },
    {
      title: "Due"
    },
    {
      title: "Deleted By"
    },
    {
      title: "Deleted At"
    }
    
]
 
// const [validate, setValidate] = useState(item); //original data
//     const checkValidate = () => {
//     setValidate(!validate);
//     };
const rowTemplate = (item, i) => {
    const [validate, setValidate] = useState(item); //original data
    const checkValidate = () => {
    setValidate(!validate);
    };
    
        return (
            <tr
                key={i}
                className="text-[rgb(177,117,115)] even:bg-[rgb(236,236,236)] pb-4 cursor-pointer item  text-[15px] 
                p-1 border-b-[rgb(222,226,230)] border-b-[1px]"
            >
                <td className="table-cell p-3">
                    <span
                        key={i}
                        onClick={checkValidate}
                        className={`${item.className} border-1  size-5 items-center flex rounded-sm`}
                >
                        <IoIosCheckmark
                            className={
                            validate ?  "bg-blue-800 text-white size-full" : "hidden"
                            }
                        />
                    </span>
                </td>
                <td className="text-[rgb(177,117,115)] p-3 w-[60px]">{item.date}</td>
                <td className="p-3 w-[140px] ">{item.referenceId}</td>
                <td className="p-3  ">{item.createdBy}</td>
                <td className="p-3  ">{item.supplier}</td>
                <td className="p-3  ">{item.warehouse}</td>
                <td className="p-3">{item.paymentStatus}</td>
                <td className="p-3  ">{item.amount}</td>
                <td className="p-3  ">{item.due}</td>
                <td className="p-3  ">{item.deletedBy}</td>
                <td className="p-3  ">{item.deletedAt}</td>
            </tr>
        )
        
}
    return (
        <div className="flex flex-col border-[1px] border-[rgb(228,230,252)] rounded-sm p-9">
            <div className="flex w-full justify-between bg-[rgb(248,249,250)] p-3 items-center">
                <div>Deleted Purchases</div>
                <div><FormModal  type = "delete" /></div>
            </div>
            <Table 
                tableColumn={tableColumn}
                checkAll="box"
                rowData={deletedPurchases}
                rowTemplate={rowTemplate}
                // deleIcon = "icon"
            />
        </div>
    )
}
export default DeleteInner