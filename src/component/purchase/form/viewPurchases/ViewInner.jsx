import { FaPrint } from "react-icons/fa";
import { viewDatas, viewRecords } from "../../../../data/purchases";
import Table from "../../../global/Table";
const ViewInner = () => {

    const tableColumn = [
        {
            title: "#",
            className: "w-[2px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "Product",
            className: "w-[220px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "Batch No.",
            className: "w-[100px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "Qty",
            className: "w-[60px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "Returned",
            className: "w-[120px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "UnitCost",
            className: "w-[100px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "Task",
            className: "w-[150px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "Discount",
            className: "w-[70px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        },
        {
            title: "Subtotal",
            className: "w-[70px] border-l-[1px] border-[rgb(228,230,252)] px-[15px] py-[8px]"
        }
    ]

    const rowTemplate = (item,i) => {
        return (
            <tr key={i} className=" text-[rgb(94,88,133)] border-b-[1px] border-[rgb(228,230,252)]">
                <td className={item.count? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.count}:</td>
                <td className={item.product ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.product}</td>
                <td className={item.batchNo ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.batchNo}</td>
                <td className={item.qty ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.qty}</td>
                <td className={item.returns ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.returns}</td>
                <td className={item.unitCost ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.unitCost}</td>
                <td className={item.task ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.task}</td>
                <td className={item.discount ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.discount}</td>
                <td className={item.subTotal ? "border-l-[1px] border-[rgb(228,230,252)] px-[20px] py-[15px]" : null}>{item.subTotal}</td>
            </tr>)
    }

return (<div>
    <div className=" border-b-[1px] border-[rgb(222,226,230)] p-2 ">
        <div className="flex flex-col justify-center items-center text-[rgb(132,127,148)] mt-[50px]">
            <div className="text-lg font-semibold">SalePro</div>
            <p className="">Purchase Details</p>
        </div>
        <div className="flex gap-[1px] items-center p-1 justify-center text-[rgb(124,92,196)] border-[1px] rounded-sm border-[rgb(124,92,196)] absolute top-[12px] left-[16px]">
            <FaPrint/>
            <p>Print</p>
        </div>
    </div>
    <div className="mt-4 p-1 flex flex-col gap-1 text-[rgb(150,146,164)] text-[16px] px-4">
            {
                    viewRecords.map((item, i)=> 
                    <div key={i} className="flex">
                        <div>
                            {item.title}:
                        </div>
                        <div key={i} className={item.className}></div>   
                    </div> )
            }
    </div>
    <div className=" flex justify-between px-4 text-[rgb(150,146,164)] text-[16px] mt-4 mb-4">
        <div className=" flex flex-col">
            <div>From:</div>
            <div></div>
        </div>
        <div className=" flex flex-col px-10">
            <div>To:</div>
            <div className="w-[30px]">Shop 97090998 london</div>
        </div>
    </div>
    <Table
        tableColumn={tableColumn}
        view="on"
        rowData={viewDatas}
        rowTemplate={rowTemplate}
    /> 
    <div className="mt-6 flex flex-col p-4 text-[rgb(150,146,164)] text-[16px]">
        <div className="mb-2">Note</div>
        <div className="flex flex-col gap-1">
            <div>Created By :</div>
            <p>admin</p>
            <p>ashfaqdev.php@gmail.com</p>
        </div>
    </div>

</div>)
}
export default ViewInner;