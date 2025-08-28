import { useState } from "react";
import AppInputField from "../../../component/form/AppInputField";
import AppSubmitButton from "../../../component/form/AppSubmitButton";
import { availableSearch, tableTitle } from "../../../utility/dataArr";
import { RiDeleteBinLine } from "react-icons/ri";

const AddAdjustmentPage = () => {

    const [avilable, setAvailable]= useState()

    const handleChanges = (event) => {
        setAvailable(event.target.value)
    }

    return (
        <div className="w-full flex flex-col p-3 text-[rgb(94,88,115)] border-[2px] border-[rgb(229,229,229)] rounded-lg mr-12">
            <h1 className="font-semibold text-xl mb-12">Add Adjustment</h1>
            <p className="text-sm mb-6">The field labels marked with * are required input fields.</p>
            <div className="w-[70%] flex justify-between items-center mb-8">
                <div className="flex flex-col gap-2  w-[40%]">
                    <label htmlFor="" className="text-[14px] font-medium">Store *</label>
                    <select name="" id="myDropdown" value={avilable} className="border-[rgb(118,118,118)] h-10  w-full text-[rgb(211,178,153)] border-1 rounded-md p-[4px]" onChange={handleChanges}>
                        {
                            availableSearch?.map((item, i) => (
                                <option value={item.itemList} className="p-4 text-sm rounded-md bg-[rgb(253,253,255)]">{item.title}</option>
                            ))
                        }
                    </select>
                    
                </div>
                <div className="flex flex-col gap-2 w-[40%]">
                    <label htmlFor="" className="text-[14px] font-medium">Attach Document</label>
                    <div className="border-[rgb(217,216,246)] border-[1px] rounded-md w-full p-[4px]">
                        <AppInputField type="file" className=""/>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col gap-1 mb-12">
                    <label htmlFor="" className="font-bold text-[14px]">Select Product</label>
                    <div className=" flex h-[50px] border-[1px] gap-0 border-[rgb(229,229,229)] items-center">
                        <div className="bg-[rgb(94,88,115)] w-[6%] h-full">
                        </div>
                        <AppInputField name="add-product" placeholder="please type product code and select" className=" bg-[rgb(253,253,255)]" /> 
                    </div>
            </div>
            <div className="flex w-full flex-col mb-10">
                <h2 className="font-medium text-[16px] mb-4">Order Table *</h2>
                <table className="w-full h-[90px] overflow-y-scroll">
                    <thead className="mb-3  text-gray-400 border-b-1 border-[rgb(222,226,230)]" >
                        <tr className="">
                            {
                                tableTitle?.map((item, i) => (
                                <th key={i} className={`${item.className} text-start`}>
                                    {item.title}
                                </th>
                                ))
                            }
                            <th>
                                <RiDeleteBinLine />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="mt-20 overflow-y-scroll">
                        <tr>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-bold text-[14px]">Name</label>
                <div className="w-full border-1 border-[rgb(222,226,230)] rounded-md">
                    <textarea name="" id="" className="w-full"></textarea>
                </div>
                <div className="w-[70px] bg-blue-800 text-white">
                     <AppSubmitButton title="Submit"/>
                </div>
            </div>
        </div>
    )
}

export default AddAdjustmentPage;