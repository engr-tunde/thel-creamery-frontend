
import CustomFormik from "../../form/CustomFormik";
import AppInputField from "../../form/AppInputField";
import AppSubmitButton from "../../form/AppSubmitButton";

const AddAccountFormInner = ({
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
            ? "Add Account"
            : `Edit Account (${data?.name})`}
        </div>

        <p className="text-gray-500 mb-3">
          The field labels marked with * are required input fields.
        </p>

        <div>
          <label htmlFor="" className="text-gray-400 text-sm">
            Account No *
          </label>
          <AppInputField name="accountNumber" />
        </div>

        <div>
          <label htmlFor="" className="text-gray-400 text-sm">
            Name *
          </label>
          <AppInputField name="name" />
        </div>
        <div>
          <label htmlFor="" className="text-gray-400 text-sm">
            Initial balance *
          </label>
          <AppInputField name="initialBalance" />
        </div>

        <div>
          <label htmlFor="" className="text-gray-400 text-sm">
            Note *
          </label>
          <textarea
            name="note"
            rows="4"
            className="border rounded-md p-2 w-full"
          ></textarea>
        </div>

        <div className="mt-5 w-full flex">
          <AppSubmitButton
            title={type == "create" ? "Add New Account" : "Update Account"}
            disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default AddAccountFormInner;
