import CustomFormik from "../../../global/CustomFormik";
import AddInputField from "../AddInputField";
import AppSubmitButton from "../../AppSubmitButton";
import {
  orderTax,
  purchaseStatus,
  supplier,
  warehouse,
} from "../../../../data/purchases";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";

const ImportInner = ({
  options,
  type,
  handleSubmit,
  initialValues,
  validationSchema,
  disabled,
  itemData,
}) => {
  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div>
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Import Purchase</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center mb-4">
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
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center items-end">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">Upload CSV File *</label>
              <div>
                <AddInputField name="attachDocument" type="file" />
              </div>
            </div>
            <div className="bg-blue-900 text-white w-full h-[50px] flex gap-[3px] items-center justify-center">
              <FaDownload />
              <span>Download Sample File</span>
            </div>
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
            title={type == "Add" || "Import" ? "Submit" : null}
            disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default ImportInner;
