import CustomFormik from "../../../global/CustomFormik";
import AddInputField from "../AddInputField";
import AppSubmitButton from "../../AppSubmitButton";
import {
  currency,
  orderTax,
  paymentStatus,
  purchaseStatus,
  supplier,
  warehouse,
} from "../../../../data/purchases";
import { rowData } from "../../../../data/purchases";
import Table from "../../../global/Table";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductInner = ({
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
      title: "Product",
    },
    {
      title: "Quantity",
    },
    {
      title: "Net Unit Cost",
    },
    {
      title: "Profit Margin",
    },
    {
      title: "Product Price",
    },
    {
      title: "Discount",
    },
    {
      title: "Tax",
    },
    {
      title: "Tax	SubTotal",
    },
  ];

  const rowTemplate = (item, i) => {
    return (
      <tr key={i} className=" text-[rgb(94,88,133)]">
        <td className="text-[rgb(94,88,133)] p-3">{item.product}</td>
        <td className="text-[rgb(94,88,133)] p-3">{item.quantity}</td>
        <td className="text-[rgb(94,88,133)] p-3">{item.netUnitCost}</td>
        <td className="text-[rgb(94,88,133)] p-3">{item.profitMargin}</td>
        <td className="text-[rgb(94,88,133)] p-3">{item.productPrice}</td>
        <td className="p-3">{item.discount}</td>
        <td className="p-3">{item.tax}</td>
        <td className="p-3">{item.subTotal}</td>
        <td className="">
          <RiDeleteBin6Line />
        </td>
      </tr>
    );
  };
  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-3">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Purchase</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-3 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Date
              </label>
              <AddInputField name="date" type="date" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Reference No.
              </label>
              <AddInputField name="referenceNumber" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Warehouse *
              </label>
              <AddInputField name="warehouse" options={warehouse} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Supplier
              </label>
              <AddInputField name="supplier" options={supplier} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Purchase Status
              </label>
              <AddInputField name="purchaseStatus" options={purchaseStatus} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-gray-400 text-sm">
                Attach Document
              </label>
              <AddInputField name="attachDocument" type="file" />
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-1 w-[45%]">
                <label htmlFor="" className="text-[#785873] text-sm">
                  Currency *
                </label>
                <AddInputField name="currency" options={currency} />
              </div>
              <div className="flex flex-col gap-1 w-[45%]">
                <label htmlFor="" className="text-[#785873] text-sm">
                  Exchange Rate *
                </label>
                <div className="flex">
                  <AddInputField name="exchangeRate" type="text" />
                  <div className="h-[38px] border-[rgb(228,230,252)] border-[2px] border-l-0 p-2 text-center">
                    i
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-[#785873] text-sm">
              Select Product
            </label>
            <div className="flex h-[40px] border-[1px] gap-0 border-[rgb(229,229,229)] items-center">
              <div className="bg-[rgb(94,88,115)] w-[6%] h-full"></div>
              <AddInputField
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
              <Table
                tableColumn={tableColumn}
                rowData={rowData}
                rowTemplate={rowTemplate}
                deleIcon="icon"
              />
            }
          </div>
          <div className="grid grid-cols-3 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Order Tax *
              </label>
              <AddInputField name="orderTax" options={orderTax} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Discount
              </label>
              <AddInputField name="discount" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Shipping Cost
              </label>
              <AddInputField name="shippingCost" type="number" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Payment Status *
              </label>
              <AddInputField name="paymentStatus" options={paymentStatus} />
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
        <div className="w-full h-[45px] border-[1px] text-sm border-[rgb(228,230,252)] rounded-sm flex justify-between ">
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
  );
};

export default ProductInner;
