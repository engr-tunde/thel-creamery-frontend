import CustomFormik from "../../../global/CustomFormik";
import AppInputFieldTwo from "../../../form/AppInputFieldTwo";
import AppSubmitButton from "../../../form/AppSubmitButton";

const ReturnPurchaseFormInner = ({
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
      <div className="w-full flex flex-col gap-5 p-5">
        {/* Header */}
        <div className="text-lg font-semibold border-b border-gray-200 pb-2">
          {type === "create"
            ? "Add Purchase Return"
            : `Edit Purchase Return (${itemData?.purchaseReference})`}
        </div>

        {/* Info note */}
        <p className="italic text-gray-600 text-sm">
          The field labels marked with <span className="text-red-500">*</span>{" "}
          are required input fields.
        </p>

        <div className="flex flex-col gap-2 w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Purchase Reference <span className="text-red-500">*</span>
          </label>
          <AppInputFieldTwo
            name="purchaseReference"
            placeholder="Enter Purchase Reference"
            className="border border-gray-500"
          />
        </div>
        <div className="mt-3">
          <div className="inline-block bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 disabled:opacity-50">
            <AppSubmitButton
              title={type === "create" ? "Submit" : "Update"}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </CustomFormik>
  );
};

export default ReturnPurchaseFormInner;
