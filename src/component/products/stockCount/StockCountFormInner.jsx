import AppInputField from "../../form/AppInputField";
import AppSubmitButton from "../../form/AppSubmitButton";
import CustomFormik from "../../form/CustomFormik";


const StockCountFormInner = ({
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

        <p className="text-gray-500 mb-3">
          The field labels marked with * are required input fields.
        </p>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Warehouse *
            </label>
            <AppInputField name="warehouse" placeholder="Select Warehouse..."/>
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Category
            </label>
            <AppInputField name="category" placeholder="Select Category..."/>
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Brand
            </label>
            <AppInputField name="brand" placeholder="Select Brand..."/>
          </div>
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

export default StockCountFormInner;
