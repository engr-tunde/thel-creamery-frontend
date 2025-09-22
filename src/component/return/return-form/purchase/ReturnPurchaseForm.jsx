import { useState } from "react";
import { addReturnPurchaseValues } from "../../../../utility/return/returnInitials";
import { validateAddReturnPurchase } from "../../../../utility/return/returnValidations";
import ReturnPurchaseFormInner from "./ReturnPurchaseFormInner";

const ReturnPurchaseForm = ({ type = "create", data, setopen }) => {
  const initialValues = addReturnPurchaseValues(data);
  const validationSchema = validateAddReturnPurchase();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setdisabled(true);

    try {
      console.log("Return Submitted:", values);
      setopen(false); // close modal after submit
    } catch (err) {
      console.error(err);
    }

    setSubmitting(false);
    setdisabled(false);
  };

  return (
    <>
      {type === "update" ? (
        data && (
          <ReturnPurchaseFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            itemData={data}
          />
        )
      ) : (
        <ReturnPurchaseFormInner
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          disabled={disabled}
          type={type}
        />
      )}
    </>
  );
};

export default ReturnPurchaseForm;
