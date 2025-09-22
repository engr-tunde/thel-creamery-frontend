
import axios from "axios";
import { useState } from "react";
import { statementValues } from "../../../utility/initialValues";
import { validateStatement } from "../../../utility/validations";
import { CREATE_STATEMENT, UPDATE_STATEMENT } from "../../../constants/constants";
import AccountStatementFormInner from "./AccountStatementFormInner";

const AccountStatementForm = ({ type, data, setopen }) => {
  const initialValues = statementValues(data);
  const validationSchema = validateStatement();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("values", values);
    const res =
      type === "create"
        ? await axios.post(CREATE_STATEMENT, values)
        : type === "update"
        ? await axios.put(`${UPDATE_STATEMENT}/${data.id}`, values)
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
          <AccountStatementFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            data={data}
          />
        )
      ) : (
        <AccountStatementFormInner
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

export default AccountStatementForm;
