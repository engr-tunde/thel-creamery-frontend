import CustomFormik from "../../../global/CustomFormik"
import AppInputField from "../AppInputField"
import AppSubmitButton from "../../AppSubmitButton";
import { currency, duplicateData, orderTax, paymentStatus, purchaseStatus, supplier, warehouse } from "../../../../data/purchases";
import Table from "../../../global/Table";
import { RiDeleteBin6Line } from "react-icons/ri";


const DuplicateInner = ({
    options,
    type,
    handleSubmit,
    initialValues,
    validationSchema,
    disabled,
    itemData,
}) => {

  const tableColumn = [
    // {
    //   className: "text-start text-[13px]  w-full"
    // },
    {
    title: "Name",
    className: "px-2 bg-red-700 w-[150px]"
    },
    {
    title: "Code",
    className: "px-2"
    },
    {
      title: "Quantity",
      className: "px-2 w-[30px]"
    },
    {
    title: "Batch No",
    className: "px-2"
    },
    {
    title: "Expired Date",
    className: "px-2 ml-2"
    },
    {
      title: "Net Unit Cost",
      className: "px-2"
    },
    {
      title: "Discount",
      className: "px-2"
    },
    {
      title: "Tax",
      className: "px-2"
    },
    {
      title: "SubTotal",
      className: "px-2"
    },
]

const rowTemplate = (item, i) => {
        return (
            <tr key={i} className=" text-[rgb(94,88,133)] border-b-[1px] border-[rgb(222,226,230)] p-4">
             
            </tr>
        )
        
    }
    return (
        <CustomFormik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
          <div className="w-full flex flex-col gap-10 p-8">
            <div className="w-full flex flex-col gap-5 p-5 text-[rgb(136,136,136)] border-[1px] border-[rgb(228,230,252)] rounded-sm">
              <div className="flex flex-col gap-4">
                <div>Add Duplicate Purchase</div>
                <div>The field labels marked with * are required input fields.</div>
              </div>
              <div className="grid grid-cols-3 gap-3 justify-center">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Date
                  </label>
                  <AppInputField name="date" type="date" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Reference No.
                  </label>
                  <div>pr-data from the databased, when product is added</div> 
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Warehouse *
                  </label>
                  <AppInputField name="warehouse" options={warehouse}/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Supplier
                  </label>
                  <AppInputField name="supplier" options={supplier}/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Purchase Status
                  </label>
                  <AppInputField name="purchaseStatus" options={purchaseStatus}/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-gray-400 text-sm">
                  Attach Document
                  </label>
                <AppInputField name="attachDocument" type="file"/>
                </div> 
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="" className="text-[#785873] text-sm">
                Select Product
                </label>
                <div className="flex h-[40px] border-[1px] gap-0 border-[rgb(229,229,229)] items-center">
                  <div className="bg-[rgb(94,88,115)] w-[6%] h-full"></div>
                  <AppInputField
                    name="add-product"
                    placeholder="please type product code and select"
                    className=" bg-[rgb(253,253,255)]"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg p-1 w-full mb-3 flex flex-col">
                <label htmlFor="" className="text-[#785873] text-[15px]">
                  Order Table *
                </label>
                {
                  (
                  <Table 
                    tableColumn={tableColumn} 
                    rowData={duplicateData}
                    rowTemplate={rowTemplate}
                    deleIcon = "icon"
                  />
                  )
                }
              </div>
              <div className="grid grid-cols-3 gap-3 justify-center">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Order Tax *
                  </label>
                  <AppInputField name="orderTax" options={orderTax}/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Discount
                  </label>
                  <AppInputField name="discount" type="number"/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Shipping Cost
                  </label>
                  <AppInputField name="shippingCost" type="number"/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="text-[#785873] text-sm">
                  Payment Status *
                  </label>
                  <AppInputField name="paymentStatus" options={paymentStatus}/>
                </div>
              </div> 
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="" className="text-[#785873] text-sm">
                Note
                </label>
                <div className="border-[2px] border-[rgb(228,230,252)] bg-[rgb(253,253,255)] rounded-sm">
                  <textarea name="note" id="note" rows="6"></textarea>
                </div>
              </div>

              <AppSubmitButton
              title={type == "Add" ? "Submit" : null}
              disabled={disabled}
              />
            </div>
            <div className="w-full h-[45px] border-[1px] text-[rgb(136,136,136)] text-sm border-[rgb(228,230,252)] rounded-sm flex justify-between ">
              <div className="flex p-1 w-[100px] justify-between border-r-[1px] border-[rgb(228,230,252)] items-center">
                    <div className="font-semibold ">items</div>
                    <div>0.00</div>
              </div>
              <div className="flex p-1 w-[100px] justify-between border-r-[1px] border-[rgb(228,230,252)] items-center">
                    <div className="font-semibold">Total</div>
                    <div>0.00</div>
              </div>
              <div className="flex p-1 w-[120px] justify-between border-r-[1px] border-[rgb(228,230,252)] items-center">
                    <div className="font-semibold">Order Tax</div>
                    <div>0.00</div>
              </div>
              <div className="flex p-1 w-[150px] justify-between border-r-[1px] border-[rgb(228,230,252)] items-center">
                    <div className="font-semibold">Order Discount</div>
                    <div>0.00</div>
              </div>
              <div className="flex p-1 w-[150px] justify-between border-r-[1px] border-[rgb(228,230,252)] items-center">
                    <div className="font-semibold">Shipping Cost</div>
                    <div>0.00</div>
              </div>
              <div className="flex p-1 w-[150px] justify-between border-r-[1px] border-[rgb(228,230,252)] items-center">
                    <div className="font-semibold">Grand Total</div>
                    <div>0.00</div>
              </div>

            </div>
            
          </div>
          
        </CustomFormik>
        
    )

    
}

export default DuplicateInner;