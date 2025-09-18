import { useState } from "react";
import { addReturnSaleValues } from "../../../../utility/return/returnInitials";
import { validateAddReturnSale } from "../../../../utility/return/returnValidations";
import ReturnSaleFormInner from "./ReturnSaleFormInner";

const ReturnSaleForm = ({ type = "create", data, setopen }) => {
  const initialValues = addReturnSaleValues(data);
  const validationSchema = validateAddReturnSale();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setdisabled(true);

    try {
      console.log("Return Sale Submitted:", values);
    setopen(false); // close modal
    } catch (err) {
      console.error(err);
      // errorMessage("An error occurred");
    }

    setSubmitting(false);
    setdisabled(false);
  };

  return (
    <>
      {type === "update" ? (
        data && (
          <ReturnSaleFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            itemData={data}
          />
        )
      ) : (
        <ReturnSaleFormInner
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

export default ReturnSaleForm;