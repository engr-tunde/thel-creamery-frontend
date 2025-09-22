import { useState } from "react";
import { adjustmentValues } from "../../../utility/initialValues";
import { validateAdjustment } from "../../../utility/validations";
import axios from "axios";
import { CREATE_ADJUSTMENT, UPDATE_ADJUSTMENT } from "../../../constants/constants";
import { errorMessage, successMessage } from "../../../utility/helpers";
import AdjustmentFormInner from "./AdjustmentFormInner";

const AdjustmentForm = ({ type, data, setopen }) => {
  const initialValues = adjustmentValues(data);
  const validationSchema = validateAdjustment();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {

    console.log("values", values);
    const res =
      type === "create"
        ? await axios.post(CREATE_ADJUSTMENT, values)
        : type === "update"
        ? await axios.put(`${UPDATE_ADJUSTMENT}/${data.id}`, values)
        : null;
    if (res.status.toString().includes("20")) {
      successMessage("Successfully completed your request");
      setopen(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      errorMessage("Unable to complete your request");
    }
    setSubmitting(false);
    setdisabled(false);
  };

  return (
    <>
      {type == "update" ? (
        data && (
          <AdjustmentFormInner 
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            data={data}
          />
        )
      ) : (
        <AdjustmentFormInner
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

export default AdjustmentForm;
