import { Field } from "formik";
import {
  adjustmentRowData,
  adjustmentTableColumn,
} from "../../../data/adjustmentData";
import { productTableColumn, proListRowData } from "../../../data/productData";
import AppInputField from "../../form/AppInputField";
import AppSubmitButton from "../../form/AppSubmitButton";
import CustomFormik from "../../global/CustomFormik";
import Table from "../../global/Table";
import AdjustmentRowTemplate from "./AdjustmentRowTemplate";

const AdjustmentFormInner = ({
  type,
  handleSubmit,
  initialValues,
  validationSchema,
  disabled,
  data,
}) => {
  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-5 p-5">
        <div className="">Count Stock</div>

        <p className="text-gray-500 mt-3">
          The field labels marked with * are required input fields.
        </p>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Warehouse *
            </label>
            <AppInputField name="warehouse" placeholder="Select Warehouse..." />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Attach Document
            </label>
            <Field
              name="attachedDocument"
              type="file"
              className="text-sm border-[1px] border-[#858c85] rounded-sm p-3"
            />
          </div>

          <div className="col-span-3">
            <label htmlFor="" className="text-gray-400 text-sm">
              Select Product *
            </label>
            <AppInputField
              name="selectProduct"
              placeholder="Please type product code and select..."
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="">Order *</label>
          <Table
            tableColumn={adjustmentTableColumn}
            rowData={adjustmentRowData}
            rowTemplate={AdjustmentRowTemplate}
            deleIcon={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Notes</label>
          <textarea
            name="productDetails"
            rows="4"
            className="border rounded-md p-2 w-full"
            placeholder="Enter product details"
          ></textarea>
        </div>

        <div className="mt-5 w-full flex">
          <AppSubmitButton
            title={type == "create" ? "Submit" : "Update Product"}
            disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default AdjustmentFormInner;
