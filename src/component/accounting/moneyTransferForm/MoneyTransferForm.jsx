
import axios from "axios";
import { useState } from "react";
import MoneyTransferFormInner from "./MoneyTransferFormInner";
import { CREATE_TRANSFER, UPDATE_TRANSFER } from "../../../constants/constants";
import { errorMessage, successMessage } from "../../../utility/helpers";
import { transferValues } from "../../../utility/initialValues";
import { validateTransfer } from "../../../utility/validations";

const MoneyTransferForm = ({ type, data, setopen }) => {
  const initialValues = transferValues(data);
  const validationSchema = validateTransfer();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("values", values);
    const res =
      type === "create"
        ? await axios.post(CREATE_TRANSFER, values)
        : type === "update"
        ? await axios.put(`${UPDATE_TRANSFER}/${data.id}`, values)
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
          <MoneyTransferFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            data={data}
          />
        )
      ) : (
        <MoneyTransferFormInner
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

export default MoneyTransferForm;
