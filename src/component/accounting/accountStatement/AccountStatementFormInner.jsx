import AppInputField from "../../form/AppInputField";
import AppSubmitButton from "../../form/AppSubmitButton";
import CustomFormik from "../../form/CustomFormik";


const AccountStatementFormInner = ({
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
        <div className="">
          {type == "create"
            ? "Account Statement"
            : `Edit product (${data?.name})`}
        </div>

        <p className="text-gray-500 mb-3">
          The field labels marked with * are required input fields.
        </p>

        <div className="w-full grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Account *
            </label>
            <AppInputField name="account" />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Type *
            </label>
            <AppInputField name="type" />
          </div>

          <div>
            <label htmlFor="" className="text-gray-400 text-sm">
              Choose your date *
            </label>
            <AppInputField name="chooseDate" />
          </div>
        </div>

        <div className="mt-5 w-full flex">
          <AppSubmitButton
            title={type == "create" ? "Account statement" : "Update Product"}
            disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default AccountStatementFormInner;
