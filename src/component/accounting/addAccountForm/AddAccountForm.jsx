import AddAccountFormInner from "./AddAccountFormInner";
import {
  CREATE_ACCOUNTING,
  UPDATE_ACCOUNTING,
} from "../../../constants/constants";
import axios from "axios";
import { useState } from "react";
import { accountingValues } from "../../../utility/initialValues";
import { validateAccounting } from "../../../utility/validations";
import { errorMessage, successMessage } from "../../../utility/helpers";

const AddAccountForm = ({ type, data, setopen }) => {
  const initialValues = accountingValues(data);
  const validationSchema = validateAccounting();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("values", values);
    const res =
      type === "create"
        ? await axios.post(CREATE_ACCOUNTING, values)
        : type === "update"
        ? await axios.put(`${UPDATE_ACCOUNTING}/${data.id}`, values)
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
          <AddAccountFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            data={data}
          />
        )
      ) : (
        <AddAccountFormInner
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

export default AddAccountForm;
