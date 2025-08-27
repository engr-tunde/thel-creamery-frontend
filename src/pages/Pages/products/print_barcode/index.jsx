import AppInputField from "../../../../component/form/AppInputField";
import { formDetails, papperSize, productSearch } from "../../../../utility/dataArr";
import AppSubmitButton from "../../../../component/form/AppSubmitButton"
import { useState } from "react";
import {  IoIosCheckmark,  } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";


const PrintBarcodePage = () => {
    const dropdownValue = "20 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 4 x 1, Label..."
        const [selectedValue, setSelectedValue] = useState(dropdownValue);

        const [count, setCount] = useState(0) //initialize state for the input number
        const [validate, setValidate] = useState(null)

        
        const toggleChecks = () => {
                setValidate(!validate)  
        }

        //handle change
        const handleChanges = (event) => {
            
            const newValue = parseInt(event.target.value, 10)
            setCount(isNaN(newValue) ? 0 : newValue)
        }
    

    return (
        <div className="w-full flex flex-col p-3 text-[rgb(94,88,115)] border-[2px] border-[rgb(229,229,229)] rounded-lg mr-12"> 
            <h1 className="font-bold text-3xl mb-4">Print Barcode</h1>
            <p className="text-sm mb-2">The field labels marked with * are required input fields.</p>
            <div className="flex flex-col gap-1 mb-12">
                <label htmlFor="" className="font-semibold text-[14px]">Add Product *</label>
                <div className=" flex h-[50px] border-[1px] gap-0 border-[rgb(229,229,229)] items-center">
                    <div className="bg-[rgb(94,88,115)] w-[6%] h-full">
                    </div>
                    <AppInputField name="add-product" placeholder="please type product code and select" className=" bg-[rgb(253,253,255)]" /> 
                </div>
            </div>
            <div className="w-full grid grid-cols-4 h-36 border-[rgb(229,229,229)] border-b-[1px]">
                {
                    productSearch?.map((item, i) => 
                        <div key={i} className="">{item.heading}</div>
                    )
                }
                <RiDeleteBinLine />
            </div>
            <div className="w-full flex flex-col gap-3 pt-4 border-b-1 border-b-[rgb(229,229,229)] pb-6">
                <h1 className="text-[rgb(94,88,115)] font-semibold text-sm">Information on Label *</h1>
                <div className="w-full grid grid-cols-3 justify-between item-center gap-y-5">
                    {
                        formDetails?.map((item, i) => {  
                            
                            return (
                            
                            <div key={i} className="flex flex-col gap-1 w-[250px]">
                                <div className="flex items-center gap-1">
                                    <span onClick={toggleChecks} className={`${item.className} border-1  size-4 items-center flex rounded-sm`}><IoIosCheckmark key={i}  className={ validate ? "bg-blue-800 text-white" : "hidden"} /></span>
                                    <label htmlFor="" className="font-semibold text-[rgb(94,88,115)]">{item.Name}</label>
                                </div>
                                <div className="flex gap-[2px]">
                                    <span>{item.size}:</span>
                                    <div className="border-[rgb(118,118,118)] border-1 rounded-sm relative">
                                        {/* <IoMdArrowDropup className="absolute top-[2px] right-1" onClick={handleIncreament}/> */}
                                        <AppInputField className={`${item.className}  h-full`} type="number" onChange={handleChanges}/>
                                        {/* <IoMdArrowDropdown className="absolute bottom-[2px] right-1" onClick={handleDecreament}/> */}
                                    </div>
                                    
                                </div>
                            </div>
                        )})
                    }
                    
                </div>
                <div className="w-full py-12 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="myDropdown" className="text-[rgb(94,88,115)] font-semibold text-sm">Paper Size *</label>
                        <select name="" id="myDropdown" value={selectedValue} className="border-[rgb(118,118,118)] h-10  w-[60%] text-blue-600 border-1 rounded-md" onChange={handleChanges}>
                            {
                                papperSize?.map((item, i) => (
                                    <option value={item.itemList} className="p-4 text-sm rounded-md bg-[rgb(248,249,250)]">{item.itemList}</option>
                                    
                                ))
                            }
                        </select>
                        <p>Selected value: {selectedValue}</p>
                    </div>
                    <div className="border-1 border-[rgb(118,118,118)] rounded-md w-[85px] flex justify-center bg-blue-800 text-white">
                        <AppSubmitButton title="submit" />
                    </div>  
                </div>

            </div>
        </div>
    )
}

export default PrintBarcodePage;